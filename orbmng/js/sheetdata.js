(function () {

    /*********************************************************************************************************
    * 石板データ
    * @param cells 石板マトリクス
    **********************************************************************************************************/
    function Board(cells) {
        this.cells = cells;
    }

    Board.None = 0;
    Board.Hole = 1;
    Board.Placed = 2;

    Board.prototype = {
        cells: [],          // 石板マトリクス
        deployList: [],    // 配置座標リスト
        /**
        * 複製を作成する
        * @return 複製された石板
        */
        clone: function () {
            var board = new Board();
            board.cells = [];
            for (var r = 0; r < 6; r++) {
                var row = [];
                for (var c = 0; c < 6; c++) {
                    row[c] = this.cells[r][c];
                }
                board.cells.push(row);
            }
            return board;
        },
        /**
        * 指定した位置に配置できるかどうかチェックする
        * @param orb 宝珠データ
        * @param x X座標
        * @param y Y座標
        * @retrun 配置可能ならtrue
        */
        isPlacable: function (orb, x, y) {
            var placeList = [];
            for (var h = 0; h < orb.height; h++) {
                var row = this.cells[y + h];
                if (!row) return false;
                for (var w = 0; w < orb.width; w++) {
                    if (orb.cells[h, w] == 0) continue;
                    var status = parseInt(row[x + w], 10);
                    if (status == Board.Hole) {
                        placeList.push({ x: x + w, y: y + h });
                    } else {
                        return false;
                    }
                }
            }
            if (placeList.length == orb.count) {
                return true;
            }
            return false;
        },

        /**
        * 指定した位置に宝珠を配置する
        * @param orb 宝珠データ
        * @param x X座標
        * @param y Y座標
        * @return 配置した座標リスト
        */
        deploy: function (orb, x, y) {
            var pointList = [];
            for (var h = 0; h < orb.height; h++) {
                var row = this.cells[y + h];
                for (var w = 0; w < orb.width; w++) {
                    if (orb.cells[h, w] == 0) continue;
                    var status = parseInt(row[x + w], 10);
                    if (status == Board.Hole) {
                        this.cells[y + h][x + w] = Board.Placed;
                        pointList.push({ x: x + w, y: y + h });
                    } else {
                        throw new Error("X:" + (x + w) + " Y:" + (y + h) + " には配置できません。");
                    }
                }
            }
            this.deployList.push(pointList);
            return pointList;
        },
        /**
        * 配置可能な位置リストを検索する
        * @param orb 宝珠データ
        * @return 配置可能な位置リスト
        */
        searchPlacableList: function (orb) {
            var placableList = [];
            for (var y = 0; y < this.cells.length; y++) {
                var row = this.cells[y];
                for (var x = 0; x < row.length; x++) {
                    if (this.isPlacable(orb, x, y)) {
                        placableList.push({ x: x, y: y });
                    }
                }
            }
            return placableList;
        }
    };

    /*********************************************************************************************************
    * 宝珠データ
    * @param name 宝珠名
    * @param type 形状種別
    **********************************************************************************************************/
    function Orb(name, type) {
        this.name = name;
        this.type = type;
        this.initCells();
    }

    Orb.prototype = {
        name: "",           // 宝珠名
        disabled: 0,        // 対象外フラグ
        type: 0,            // 形状種別
        width: 0,           // 横幅
        height: 0,          // 縦幅
        count: 0,           // 玉数
        placableList: [],   // 配置可能な位置リスト
        cells: null,        // 形状マトリクス
        initCells: function () {
            this.cells = [];
            this.width = 2;
            this.height = 2;
            this.count = 3;
            if (this.type == 0) {
                this.cells.push([1]);
                this.cells.push([1]);
                this.cells.push([1]);
                this.width = 1;
                this.height = 3;
            } else if (this.type == 1) {
                this.cells.push([1, 1, 1]);
                this.width = 3;
                this.height = 1;
            } else if (this.type == 2) {
                this.cells.push([1, 1]);
                this.height = 1;
                this.count = 2;
            } else if (this.type == 3) {
                this.cells.push([1]);
                this.cells.push([1]);
                this.width = 1;
                this.count = 2;
            } else if (this.type == 4) {
                this.cells.push([1, 1]);
                this.cells.push([1, 0]);
            } else if (this.type == 5) {
                this.cells.push([1, 1]);
                this.cells.push([0, 1]);
            } else if (this.type == 6) {
                this.cells.push([1, 0]);
                this.cells.push([1, 1]);
            } else if (this.type == 7) {
                this.cells.push([0, 1]);
                this.cells.push([1, 1]);
            }
        }
    };

    window.Orb = Orb;

    /*********************************************************************************************************
    * シート内に表示するデータ
    **********************************************************************************************************/
    function SheetData() {

    }
    SheetData.prototype = {
        orbList: [],    // 宝珠リスト
        board: []       // 石板データ
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

    window.SheetData = SheetData;

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

    OrbPanel.CellSize = 52;

    OrbPanel.prototype = {
        index: null,   // インデックス
        tabId: null,   // タブID
        _stage: null,
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
                _this.startOrbPlacing();
            });
        },

        /**
        * 石板グリッドを初期化する
        */
        initOrbPanel: function () {
            var $target = $(this.tabId + " .orb_panel");
            $target.attr("id", "canvas_" + this.index);
            this._stage = new createjs.Stage("canvas_" + this.index);
            var maxSize = OrbPanel.CellSize * 6;
            // 罫線を描画する
            var line = new createjs.Shape();
            var g = line.graphics.setStrokeDash([3, 3]).s("#666").setStrokeStyle(0.5);
            for (var r = 1; r < 6; r++) {
                g.moveTo(0, r * OrbPanel.CellSize).lineTo(maxSize, r * OrbPanel.CellSize);
            }
            for (var c = 1; c < 6; c++) {
                g.moveTo(c * OrbPanel.CellSize, 0).lineTo(c * OrbPanel.CellSize, maxSize);
            }
            g.setStrokeDash(null).setStrokeStyle(1.5);
            g.moveTo(1, 1).lineTo(1, maxSize).lineTo(maxSize, maxSize).lineTo(maxSize, 1).lineTo(1, 1);
            g.moveTo(0, maxSize / 2).lineTo(maxSize, maxSize / 2);
            g.moveTo(maxSize / 2, 0).lineTo(maxSize / 2, maxSize);
            g.endStroke();
            this._stage.addChild(line);

            for (var r = 1; r < 6; r++) {
                for (var c = 1; c < 6; c++) {
                    var cell = new createjs.Shape();
                    g.moveTo(c * OrbPanel.CellSize, 0).lineTo(c * OrbPanel.CellSize, maxSize);
                }
            }

            this._stage.update();
        },

        /**
        * 宝珠リストに行を追加する
        * @param orb Orbオブジェクト
        */
        addOrbRow: function (orb) {
            var count = $.data($(this.tabId + " .orb_list").get(0), "count");
            if (!count) count = 0;
            count += 1;

            if (!orb) orb = new Orb("宝珠" + count, 4);

            var selectFormTag =
                "<div class='orb_select'>" +
                "   <img src='img/orb4.png' name='4' /><img src='img/orb5.png' name='5' /><img src='img/orb6.png' name='6' /><img src='img/orb7.png' name='7' />" +
                "   <img src='img/orb0.png' name='0'/><img src='img/orb1.png' name='1' /><img src='img/orb2.png' name='2' /><img src='img/orb3.png' name='3' />" +
                "</div>";

            var $row = $(
                "<tr" + ((orb.disabled == 1) ? " class='disabled'" : "") + ">" +
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
            $(this.tabId + " .orb_list").remove();
            $.data($(this.tabId + " .orb_list").get(0), "count", 0);
            // 宝珠リストを追加する
            for (var i = 0; i < sheetData.orbList.length; i++) {
                addOrbRow(sheetData.orbList[i]);
            }
            // 石板データを反映させる
            for (var y = 0; y < sheetData.board.cells.length; y++) {
                var row = sheetData.board.cells[y];
                for (var x = 0; x < row.length; x++) {
                    var $icon = $(this.tabId + " .x_" + x + ".y_" + y).children(".orb_icon");
                    if (row[x] == Board.Hole) {
                        $icon.addClass("hole");
                    } else {
                        $icon.removeClass("hole");
                    }
                }
            }
        },

        /**
        * シート内データを取得する
        * @return シート内データ
        */
        getSheetData: function () {
            var data = new SheetData();
            //            data.holeCount = $(this.tabId + " .orb_result").find(".orb_icon.hole").length;
            //            data.orbCount = 0;
            //            $.each($(this.tabId + " orb_list .img_orb_form"), function () {
            //                var type = $(this).attr("name");
            //                if (type == "2" || type == "3") {
            //                    // 縦横２玉宝珠の場合
            //                    data.orbCount += 2;
            //                } else {
            //                    data.orbCount += 3;
            //                }
            //            });

            data.board = this.getBoardData();
            data.orbList = this.getOrbListData();
            return data;
        },

        /**
        * 宝珠リストデータを取得する
        * @return 宝珠リスト
        */
        getOrbListData: function () {
            var orbList = [];
            $.each($(this.tabId + " orb_list tbody tr"), function (i, row) {
                var name = $(row).find(".orb_name").val();
                var type = parseInt($(row).find(".img_orb_form").attr("name"), 10);
                var orb = new Orb(name, type);
                orb.disabled = $(row).hasClass("disabled") ? 1 : 0;
                orbList.push(orb);
            });
            return orbList;
        },

        /**
        * 石板データを取得する
        * @return 石板データ
        */
        getBoardData: function () {
            var cells = [];
            for (var r = 0; r < 6; r++) {
                var row = [];
                for (var c = 0; c < 6; c++) {
                    var hole = $(this.tabId + " .x_" + c + ".y_" + r).children(".orb_icon").hasClass("hole") ? Board.Hole : Board.None;
                    row[c] = hole;
                }
                cells.push(row);
            }
            return new Board(cells);
        },

        onStartOrbPlacing: null,

        startOrbPlacing: function () {
            var data = this.getPageData();
            if (this.onStartOrbPlacing) {
                this.onStartOrbPlacing();
            }

            var orbGrpList = [];
            for (var i = 0; i < data.orbList.length; i++) {
                var orb = data.orbList[i];
                if (orb.disabled == 1) continue;

                // 未配置状態で配置可能な位置のリストを作成する
                orb.placableList = data.board.searchPlacableList(orb);

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
                var pointList = null;
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
                            pointList = newBoard.deploy(orb, place.x, place.y);
                            // 次の宝珠をチェックする
                            if (search(newBoard, deployList, index + 1) == false) {
                                continue;
                            } else {
                                return true;
                            }
                        }
                    }
                }
                if (pointList != null) {
                    deployList[index] = pointList;
                }
                if (deployList.length > deployListAll.length) {
                    deployListAll = deployList;
                }
                return false;
            };
            search(board, [], data.board);
        }
    };

    window.OrbPanel = OrbPanel;
})();