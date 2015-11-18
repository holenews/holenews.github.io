(function () {

    if (!window.orbmng) window.orbmng = {};

    /*********************************************************************************************************
    * シート内に表示するデータ
    **********************************************************************************************************/
    function SheetData() {

    }
    SheetData.prototype = {
        orbList: [],    // 宝珠リスト
        board: [],      // 石板データ
        deployList: []  // 配置された宝珠リスト
    };

    /**
    * エンコード
    * @param sheetDataList シート内に表示するデータのリスト
    * @return エンコード文字列
    */
    SheetData.encode = function (sheetDataList) {
        var string = JSON.stringify(sheetDataList);
        var compressedString = base64.encode(TinyLz77.compress(string));
        return compressedString;
    };
    /**
    * デコード
    * @param compressedString エンコード文字列
    * @return シート内に表示するデータのリスト
    */
    SheetData.decode = function (compressedString) {
        string = TinyLz77.decompress(base64.decode(compressedString));
        var sheetDataList = JSON.parse(string);
        return sheetDataList;
    };

    window.orbmng.SheetData = SheetData;

    /*********************************************************************************************************
    * 宝珠シート管理クラス
    * @param index インデックス
    **********************************************************************************************************/
    function OrbPanel(index) {
        this.index = index;
        this.tabId = "#orbtab" + this.index;
        this.initFromTemplate();
        this.initOrbPanel();
        this.addOrbRow(null);
    }

    OrbPanel.prototype = {
        index: null,   // インデックス
        tabId: null,   // タブID
        stage: null,
        deployList: null,
        cells: null,
        /**
        * 宝珠シートを初期化する
        */
        initFromTemplate: function () {
            $(this.tabId).empty();
            // テンプレートから内容をコピーする
            $(this.tabId).html($("#orb_tab_template").html());
            var _this = this;
            // 宝珠追加ボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list_add").click(function () {
                _this.addOrbRow(null);
            });
            // 宝珠リスト内のボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list").click(function (event) {
                var $target = $(event.target);
                if ($target.hasClass("btn_disable") || $target.parent().hasClass("btn_disable")) {
                    $target.parents("tr").toggleClass("disabled");
                }
                if ($target.hasClass("btn_delete") || $target.parent().hasClass("btn_delete")) {
                    $target.parents("tr").fadeOut();
                }
                if ($target.is("img") && $target.parent().hasClass("orb_select")) {
                    var $img = $target.parents("td").children("img");
                    $img.attr("src", $target.attr("src"));
                    $img.attr("name", $target.attr("name"));
                    $(".popover").hide();
                }
            });
            // 宝珠配置ボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list_setting").click(function () {
                _this.startOrbDeploying();
            });
        },

        /**
        * 石板グリッドを初期化する
        */
        initOrbPanel: function () {
            var $target = $(this.tabId + " .orb_panel");
            $target.attr("id", "canvas_" + this.index);
            var stage = new createjs.Stage("canvas_" + this.index);
            this.stage = stage;
            stage.enableMouseOver(50);

            var cellSize = orbmng.BoardCell.CellSize;
            var maxSize = orbmng.BoardCell.CellSize * 6;
            // 罫線を描画する
            var line = new createjs.Shape();
            var g = line.graphics.setStrokeDash([3, 3]).s("#666").setStrokeStyle(0.5);
            for (var r = 1; r < 6; r++) {
                g.moveTo(0, r * cellSize).lineTo(maxSize, r * cellSize);
            }
            for (var c = 1; c < 6; c++) {
                g.moveTo(c * cellSize, 0).lineTo(c * cellSize, maxSize);
            }
            g.setStrokeDash(null).setStrokeStyle(1.5);
            g.moveTo(1, 1).lineTo(1, maxSize).lineTo(maxSize, maxSize).lineTo(maxSize, 1).lineTo(1, 1);
            g.moveTo(0, maxSize / 2).lineTo(maxSize, maxSize / 2);
            g.moveTo(maxSize / 2, 0).lineTo(maxSize / 2, maxSize);
            g.endStroke();
            stage.addChild(line);

            this.cells = [];
            for (var r = 0; r < 6; r++) {
                var row = [];
                for (var c = 0; c < 6; c++) {
                    var cell = new orbmng.BoardCell(c, r);
                    stage.addChild(cell);
                    row.push(cell);
                }
                this.cells.push(row);
            }
            stage.update();
        },

        /**
        * 宝珠リストに行を追加する
        * @param orb Orbオブジェクト
        */
        addOrbRow: function (orb) {
            var count = $.data($(this.tabId + " .orb_list").get(0), "count");
            if (!count) count = 0;
            count += 1;

            if (!orb) orb = new orbmng.Orb(count - 1, "宝珠" + count, 4);

            var selectFormTag =
                "<div class='orb_select'>" +
                "   <img src='img/orb4.png' name='4' /><img src='img/orb5.png' name='5' /><img src='img/orb6.png' name='6' /><img src='img/orb7.png' name='7' />" +
                "   <img src='img/orb0.png' name='0'/><img src='img/orb1.png' name='1' /><img src='img/orb2.png' name='2' /><img src='img/orb3.png' name='3' />" +
                "</div>";

            var $row = $(
                "<tr" + ((orb.disabled == 1) ? " class='disabled'" : "") + " number='" + orb.number + "'>" +
                "    <th><input type='text' value='" + orb.name + "' class='orb_name'/></th>" +
                "    <td><img class='img_orb_form' src='img/orb" + orb.type + ".png' name='" + orb.type + "'/> <button class='btn_orb'><i class='icon-th'></i></button></td>" +
                "    <td><button class='btn_disable'><i class='icon-ban-circle'></i></button></td>" +
                "    <td><button class='btn_delete'><i class='icon-remove'></i></button></td>" +
                "</tr>");
            var tabId = this.tabId;
            $(this.tabId + " .orb_list tbody").append($row).sortable();
            $row.find(".orb_name").focus(function () { $(this).select(); });
            $row.find(".btn_orb").click(function () { $(tabId + ".popover").hide(); }).popover({ trigger: 'click', html: true, placement: 'left', content: selectFormTag });
            $.data($(this.tabId + " .orb_list").get(0), "count", count);
        },

        /**
        * データを読み込む
        * @param sheetData SheetDataオブジェクト
        */
        loadSheetData: function (sheetData) {
            // 宝珠リストをリセット
            $(this.tabId + " .orb_list tbody").empty();
            $.data($(this.tabId + " .orb_list").get(0), "count", 0);
            // 宝珠リストを追加する
            for (var i = 0; i < sheetData.orbList.length; i++) {
                this.addOrbRow(sheetData.orbList[i]);
            }
            // 石板データを描画する
            for (var r = 0; r < 6; r++) {
                var row = sheetData.board[r];
                for (var c = 0; c < 6; c++) {
                    this.cells[r][c].status = sheetData.board[r][c];
                    this.cells[r][c].drawCell(false, false);
                }
            }
            // 配置された宝珠を描画する
            this.drawDeployedOrb(sheetData.orbList, sheetData.deployList);

            this.stage.update();
        },

        /**
        * 配置された宝珠を描画する
        * @param orbList 宝珠リスト
        * @param deployPosList 宝珠番号と位置のリスト
        */
        drawDeployedOrb: function (orbList, deployPosList) {
            if (this.deployList) {
                for (var d = 0; d < this.deployList.length; d++) {
                    this.stage.removeChild(this.deployList[d]);
                }
            }
            this.deployList = [];
            for (var d = 0; d < deployPosList.length; d++) {
                var deploy = deployPosList[d];
                var orb = null;
                for (var o = 0; o < orbList.length; o++) {
                    if (orbList[o].number == deploy.number) {
                        orb = orbList[o];
                        break;
                    }
                }
                if (orb == null) continue;

                var deployedOrb = new orbmng.DeployedOrb("#F99", "#FCC", deploy.x, deploy.y, orb);
                this.deployList.push(deployedOrb);
                this.stage.addChild(deployedOrb);
            }
            this.stage.update();
        },

        /**
        * シート内データを取得する
        * @return シート内データ
        */
        getSheetData: function () {
            var data = new orbmng.SheetData();
            data.board = this.getBoardCell();
            data.orbList = this.getOrbListData();
            data.deployList = [];
            if (this.deployList) {
                for (var d = 0; d < this.deployList.length; d++) {
                    var deploy = this.deployList[d];
                    data.deployList.push({ number: deploy.number, x: deploy.px, y: deploy.py });
                }
            }
            return data;
        },

        /**
        * 宝珠リストデータを取得する
        * @return 宝珠リスト
        */
        getOrbListData: function () {
            var orbList = [];
            $.each($(this.tabId + " .orb_list tbody tr"), function (i, row) {
                var number = parseInt($(row).attr("number"), 10);
                var name = $(row).find(".orb_name").val();
                var type = parseInt($(row).find(".img_orb_form").attr("name"), 10);
                var orb = new orbmng.Orb(number, name, type);
                orb.disabled = $(row).hasClass("disabled") ? 1 : 0;
                orbList.push(orb);
            });
            return orbList;
        },

        /**
        * 石板データを取得する
        * @return 石板データ
        */
        getBoardCell: function () {
            var cells = [];
            for (var r = 0; r < 6; r++) {
                var row = [];
                for (var c = 0; c < 6; c++) {
                    row[c] = this.cells[r][c].status;
                }
                cells.push(row);
            }
            return cells;
        },

        /**
        * 宝珠配置後のイベント
        */
        onAfterOrbDeploying: null,

        /**
        * 宝珠を配置する
        */
        startOrbDeploying: function () {
            this.deployList = [];

            var data = this.getSheetData();
            var baseBoard = new orbmng.Board(data.board);
            var orbGrpList = [];
            for (var i = 0; i < data.orbList.length; i++) {
                var orb = new orbmng.OrbCells(data.orbList[i]);
                if (orb.disabled == 1) continue;

                // 未配置状態で配置可能な位置のリストを作成する
                orb.placableList = baseBoard.searchPlacableList(orb);

                // 同じ名称でグループ化する
                var find = false;
                for (var m = 0; m < orbGrpList.length; m++) {
                    if (orbGrpList[m][0].name == orb.name) {
                        orbGrpList[m].push(orb);
                        find = true;
                        break;
                    }
                }
                if (find == false) {
                    orbGrpList.push([orb]);
                }
            }

            var deployListAll = [];

            var search = function (board, deployList, index) {
                if (index >= orbGrpList.length) {
                    // 最後まで検索出来ていれば成功とする
                    return true;
                }
                var orbGrp = orbGrpList[index];
                var deployed = null;
                var find = false;
                // グループ内でループする
                for (var g = 0; g < orbGrp.length; g++) {
                    var newBoard = board.clone();
                    var orb = orbGrp[g];
                    // 配置可能位置のリストでループする
                    for (var p = 0; p < orb.placableList.length; p++) {
                        var place = orb.placableList[p];
                        // 配置可能かチェックする
                        if (newBoard.isPlacable(orb, place.x, place.y) == true) {
                            // 可能であれば配置する
                            deployed = newBoard.deploy(orb, place.x, place.y);
                            // 次の宝珠をチェックする
                            if (search(newBoard, deployList, index + 1) == false) {
                                continue;
                            } else {
                                find = true;
                            }
                        }
                    }
                }
                if (deployed != null) {
                    deployList[index] = deployed;
                }
                if (deployList.length > deployListAll.length) {
                    deployListAll = deployList;
                }
                return find;
            };
            search(baseBoard, [], 0);
            this.drawDeployedOrb(data.orbList, deployListAll);

            if (this.onAfterOrbDeploying) {
                this.onAfterOrbDeploying();
            }
        }
    };

    window.orbmng.OrbPanel = OrbPanel;
})();