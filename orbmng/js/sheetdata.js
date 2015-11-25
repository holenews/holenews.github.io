(function () {

    if (!window.orbmng) window.orbmng = {};
    var _mobile = ('ontouchstart' in document) ? true : false;

    /*********************************************************************************************************
    * 宝珠シート管理クラス
    **********************************************************************************************************/
    function OrbPanel() {
        this.tabId = "#orb_panel";
        this.initFromTemplate();
        this.initOrbPanel();
        this.addOrbRow(null);
    }

    OrbPanel.prototype = {
        index: null,   // インデックス
        tabId: null,   // タブID
        stage: null,
        deployList: null,
        boardCells: null,
        orbNameList: [],
        /**
        * 宝珠シートを初期化する
        */
        initFromTemplate: function () {
            var _this = this;
            // 宝珠追加ボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list_add").on('tap', function () {
                _this.addOrbRow(null);
            });
            // 宝珠配置ボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list_deploy").on('tap', function () {
                _this.startOrbDeploying();
            });
            // 宝珠リセットボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list_reset").on('tap', function () {
                _this.clearDepoloyedOrb();
            });
            // 全リセットボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .panel_reset").on('tap', function () {
                if (confirm("石板の穴もすべてリセットされます。本当にリセットしますか？")) {
                    _this.clearOrbPanel();
                    _this.clearDepoloyedOrb();
                }
            });
            // 宝珠リスト内のボタンがクリックされたときのイベントを設定する
            $(this.tabId + " .orb_list").on('tap', function (event) {
                var $target = $(event.target);
                if ($target.is(".orb_form") && $target.parent().hasClass("orb_select")) {
                    var $img = $target.parents(".orb_row").find("button.orb_form");
                    for (var i = 0; i < 8; i++) {
                        $img.removeClass("type" + i);
                    }
                    $img.addClass("type" + $target.attr("name"));
                    $img.popover('hide');
                }
            });
            $(this.tabId + " .orb_elem_type").on('change', function (event) {
                // 宝珠タイプの選択値を取得する
                var orbElemType = $(this).val();
                _this.orbNameList = orbmng.OrbMaster[parseInt(orbElemType, 10)];
                // 宝珠名リストを作成する
                _this.setOrbNameList($(".orb_cell_name select"));
            }).change();
            // 石板がクリックされたときのイベントを設定する
            $(this.tabId + " .orb_panel").on('tap', function (event) {
                // テキストボックスからフォーカスを外す
                $(_this.tabId + " input").blur();
            });
            $(this.tabId + " .message_window_in").html("まずは　石板を" + ((_mobile) ? "タップ" : "クリック") + "して　穴をあけましょう。");
        },

        /**
        * 石板グリッドを初期化する
        */
        initOrbPanel: function () {
            var $target = $(this.tabId + " .orb_panel");
            $target.attr("id", "canvas_" + this.index);
            var stage = new createjs.Stage("canvas_" + this.index);
            this.stage = stage;
            this.stage.enableMouseOver(50);

            var cellSize = orbmng.BoardCell.CellSize;
            var maxSize = orbmng.BoardCell.CellSize * 6 - 1;
            // 罫線を描画する
            var line = new createjs.Shape();
            var g = line.graphics.setStrokeDash([3, 3]).beginStroke("#666").setStrokeStyle(1);
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
            this.stage.addChild(line);
            var tabId = this.tabId;
            // 石板の穴オブジェクトを作成する
            this.boardCells = new createjs.Container();
            for (var r = 0; r < 6; r++) {
                for (var c = 0; c < 6; c++) {
                    var cell = new orbmng.BoardCell(c, r);
                    cell.onCellClick = function () {
                        $(tabId + " .message_window_in").html("穴をあけたら　配置したい宝珠を　追加します。<br/>形状を" + ((_mobile) ? "タップ" : "クリック") + "すると　形を変えられます。");
                    };
                    this.boardCells.addChild(cell);
                }
            }
            this.stage.addChild(this.boardCells);
            this.stage.update();
        },

        /**
        * 石板グリッドをクリアする
        */
        clearOrbPanel: function () {
            for (var c = 0; c < this.boardCells.children.length; c++) {
                this.boardCells.children[c].status = orbmng.Board.None;
                this.boardCells.children[c].drawCell(false);
            }
            this.stage.update();
            $(this.tabId + " .message_window_in").html("石板を" + ((_mobile) ? "タップ" : "クリック") + "して　穴をあけましょう。");
        },

        /**
        * 宝珠リストに行を追加する
        * @param orb Orbオブジェクト
        */
        addOrbRow: function (orb) {
            var number = 1;
            while ($(this.tabId + " .orb_list tbody tr[number=" + number + "]").length > 0 ||
                    $(this.tabId + " .orb_list tbody input[value=宝珠" + number + "]").length > 0) {
                number++;
            }

            if (!orb) orb = new orbmng.Orb(number, "宝珠" + number, 4);

            var selectFormTag =
                "<div class='orb_select'>" +
                "   <p class='orb_form type0' name='0' /><p class='orb_form type1' name='1' /><p class='orb_form type2' name='2' /><p class='orb_form type3' name='3' />" +
                "   <p class='orb_form type4' name='4' /><p class='orb_form type5' name='5' /><p class='orb_form type6' name='6' /><p class='orb_form type7' name='7' />" +
                "</div>";
            var escapeHTML = function (val) {
                return $('<div />').text(val).html();
            };
            var $row = $(
                "<div class='orb_row' number='" + orb.i + "'>" +
                "    <div class='orb_list_cell orb_cell_name'><select class='form-control'><option>宝珠を選択してください</option></select></div>" +
                "    <div class='orb_list_cell orb_cell_img'>" +
                "       <button class='btn btn-default orb_form'>　</button>" +
                "    </div>" +
                "    <div class='orb_list_cell orb_cell_level btn-group'>" +
                "       <button type='button' class='btn btn-default btn_level'>優先</button>" +
                "       <button type='button' class='btn dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" +
                "           <span class='caret'></span>" +
                "       </button>" +
                "       <ul class='dropdown-menu'>" +
                "           <li name='2'><a href='#'>優先</a></li>" +
                "           <li name='1'><a href='#'>なるべく</a></li>" +
                "           <li name='0'><a href='#'>無視</a></li> " +
                "       </ul>" +
                "   </div>" +
                "   <div class='orb_list_cell orb_cell_delete'><button class='btn btn-default'><span class='glyphicon glyphicon-remove-sign'></span></button></div>" +
                "</div>");
            var tabId = this.tabId;
            $(this.tabId + " .orb_list").append($row);
            // 宝珠形状ボタンクリック
            $row.find(".orb_cell_img .orb_form")
            .on('tap', function () { $(this).popover("toggle"); })
            .popover({
                trigger: 'manual',
                html: true,
                placement: 'top',
                content: selectFormTag
            });
            // 宝珠名リストを作成する
            this.setOrbNameList($row.find(".orb_cell_name select"));

            // 宝珠名入力
            $row.find(".orb_cell_name select").on('change', function () {
                $(tabId + " .message_window_in").html("違う形の宝珠に　同じ名前をつけると　<br/>その中から　一番よくハマる形を探してくれます。<br/>形の候補が複数あるときに　試してみてください。");
            });
            $row.find(".dropdown-menu li").on('tap', function () {
                var text = $(this).text();
                var type = $(this).attr("name");
                $(this).parents(".btn-group").children(".btn_level").text(text);
                if (type == "0") {
                    $(tabId + " .message_window_in").html("無視にすると　宝珠を配置するときに<br/>候補から外れます。");
                }
                return false;
            });
            $row.find(".dropdown-menu li[name=" + orb.p + "]").trigger("tap");

            // 削除ボタンクリック
            $row.find(".orb_cell_delete button").on('tap', function () {
                $(this).parents(".orb_row").fadeOut(function () {
                    $(this).remove();
                });
            });

            $(this.tabId + " .message_window_in").html(
                "配置したい宝珠の組み合わせを　決めましょう。");
        },

        /**
        * 宝珠名リストを作成する
        * @param $target 対象のコンボボックス
        */
        setOrbNameList: function ($target) {
            // 宝珠名リストを作成する
            var $orbNameSelect = $target.empty();
            $orbNameSelect.append("<option value='-1'>宝珠名を選択してください</option>");
            for (var i = 0; i < this.orbNameList.length; i++) {
                $orbNameSelect.append("<option value='" + this.orbNameList[i].id + "'>" + this.orbNameList[i].name + "</option>");
            }
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
            if (sheetData.ol) {
                for (var i = 0; i < sheetData.ol.length; i++) {
                    this.addOrbRow(sheetData.ol[i]);
                }
            }
            // 石板データを描画する
            if (sheetData.bd) {
                for (var r = 0; r < 6; r++) {
                    var row = sheetData.bd[r];
                    for (var c = 0; c < 6; c++) {
                        this.boardCells.children[r * 6 + c].status = sheetData.bd[r][c];
                        this.boardCells.children[r * 6 + c].drawCell(false);
                    }
                }
            }
            if (sheetData.dl) {
                // 配置された宝珠を描画する
                this.drawDeployedOrb(sheetData.ol, sheetData.dl);
            } else {
                // 宝珠を自動配置する
                this.startOrbDeploying();
            }

            this.stage.update();
        },

        /**
        * 配置された宝珠をクリアする
        */
        clearDepoloyedOrb: function () {
            if (this.deployContainer) {
                this.stage.removeChild(this.deployContainer);
            }
            this.deployContainer = new createjs.Container();
            this.stage.addChild(this.deployContainer);
            this.stage.update();
        },

        /**
        * 配置された宝珠を描画する
        * @param orbList 宝珠リスト
        * @param deployPosList 宝珠番号と位置のリスト
        */
        drawDeployedOrb: function (orbList, deployPosList) {
            this.clearDepoloyedOrb();
            if (!deployPosList) return;

            for (var d = 0; d < deployPosList.length; d++) {
                var deploy = deployPosList[d];
                if (!deploy) continue;
                var orb = null;
                for (var o = 0; o < orbList.length; o++) {
                    // リストから番号が一致する宝珠データを取得する
                    if (orbList[o].i == deploy.i) {
                        orb = orbList[o];
                        break;
                    }
                }
                if (orb == null) continue;

                var deployedOrb = new orbmng.DeployedOrb(this.index, deploy.x, deploy.y, orb);
                this.deployContainer.addChild(deployedOrb);
                var tabId = this.tabId;
                deployedOrb.onSelectChanged = function (orb) {
                    $(tabId + " .message_window_in").html("「" + orb.n + "」です。");
                };
            }
            this.stage.update();
        },

        /**
        * シート内データを取得する
        * @return シート内データ
        */
        getSheetData: function () {
            var data = new orbmng.SheetData();
            data.bd = this.getBoardCell();
            data.ol = this.getOrbListData();
            data.dl = [];
            if (this.deployContainer) {
                for (var d = 0; d < this.deployContainer.children.length; d++) {
                    var deploy = this.deployContainer.children[d];
                    data.dl.push({ i: deploy.i, x: deploy.px, y: deploy.py });
                }
            }
            data.tab = $(this.tabId).is(":visible");
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
                orb.d = $(row).find(".btn_disable").hasClass("btn-inverse") ? 1 : 0;
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
                    row[c] = this.boardCells.children[r * 6 + c].status;
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
            // 配置された宝珠をクリアする
            this.clearDepoloyedOrb();
            // 配置できなかった宝珠へのクラスを削除する
            $(this.tabId + " .orb_list tbody tr").removeClass("not_deployed");
            // メッセージを非表示にする
            $(this.tabId + " .alert_deployed").hide();
            // シート内データを取得する
            var data = this.getSheetData();
            var baseBoard = new orbmng.Board(data.bd);

            var holeCount = 0;
            for (var r = 0; r < 6; r++) {
                for (var c = 0; c < 6; c++) {
                    if (baseBoard.cells[r][c] == orbmng.Board.Hole) {
                        holeCount++;
                    }
                }
            }

            if (holeCount == 0) {
                $(this.tabId + " .message_window_in").html(
                "石板は　穴をあけなきゃ　意味がないぜ。<br/>" +
                "石板を" + ((_mobile) ? "タップ" : "クリック") + "して　穴を増やしましょう。");
                return;
            }

            var orbGrpList = [];
            var orbCount = 0;
            for (var i = 0; i < data.ol.length; i++) {
                var orb = new orbmng.OrbCells(data.ol[i]);
                if (orb.p == 0) continue; // 無視する宝珠はリストに加えない

                // 未配置状態で配置可能な位置のリストを作成する
                orb.placableList = baseBoard.searchPlacableList(orb);
                orbCount += orb.cells.length;
                // 同じ名称でグループ化する
                var find = false;
                for (var m = 0; m < orbGrpList.length; m++) {
                    if (orbGrpList[m][0].n == orb.n) {
                        orbGrpList[m].push(orb);
                        find = true;
                        break;
                    }
                }
                if (find == false) {
                    orbGrpList.push([orb]);
                }
            }

            if (orbGrpList.length == 0) {
                $(this.tabId + " .message_window_in").html(
                "配置したい宝珠が　ないみたいですよ。<br/>" +
                "「宝珠の追加」ボタンを　押してみてください。");
                return;
            }

            var deployListAll = [];
            var maxDeployedCount = 0;
            var search = function (board, deployList, index) {
                if (index >= orbGrpList.length) {
                    // 最後まで検索出来ていれば成功とする
                    return true;
                }
                var orbGrp = orbGrpList[index];
                var deployed = null;
                var complete = false;
                // グループ内でループする
                for (var g = 0; g < orbGrp.length; g++) {
                    var orb = orbGrp[g];
                    // 配置可能位置のリストでループする
                    for (var p = 0; p < orb.placableList.length; p++) {
                        var place = orb.placableList[p];
                        // 配置可能かチェックする
                        if (board.isPlacable(orb, place.x, place.y) == true) {
                            var newBoard = board.clone();
                            // 可能であれば配置する
                            deployed = newBoard.deploy(orb, place.x, place.y);
                            deployList.length = index + 1;
                            deployList[index] = deployed;
                            var nowDeployedCount = 0;
                            $.each(deployList, function (i, d) { if (d) nowDeployedCount++; });
                            if (nowDeployedCount > maxDeployedCount) {
                                deployListAll = [].concat(deployList);
                                maxDeployedCount = nowDeployedCount;
                            }
                            // 次の宝珠をチェックする
                            if (search(newBoard, deployList, index + 1) == false) {
                                continue;
                            } else {
                                complete = true;
                                break;
                            }
                        }
                    }
                    if (complete == true) {
                        break;
                    }
                }
                // 配置に失敗しても、次の宝珠がある場合はそれを調査する
                if (complete == false && deployed == null && (index + 1) < orbGrpList.length) {
                    search(board.clone(), deployList, index + 1);
                    return false;
                }
                return complete;
            };
            var result = search(baseBoard, [], 0);
            if (result == false) {
                // 配置に失敗した宝珠がある場合は、テキストボックスを赤くするクラスを設定する
                for (var g = 0; g < orbGrpList.length; g++) {
                    if (!deployListAll[g]) {
                        for (var o = 0; o < orbGrpList[g].length; o++) {
                            $(this.tabId + " .orb_list tbody tr[number=" + orbGrpList[g][o].i + "]")
                            .addClass("not_deployed");
                        }
                    }
                }

                var message = "";
                if (deployListAll.length == 0) {
                    message = "宝珠がひとつも　ハマりませんでした・・・。";
                } else {
                    message = "どう頑張ってもハマらない宝珠がありました・・・.。<br/>";
                    if (orbCount > holeCount) {
                        message += "宝珠の数が　石板の穴より　多いみたいです。<br/>いくつか無視すると　うまくハマる　かもしれません。";
                    } else {

                    }
                }
                $(this.tabId + " .message_window_in").html(message);
            } else {
                // 全て配置できたら成功メッセージを表示する
                $(this.tabId + " .message_window_in").html(
                "宝珠がすべて　ハマりました！");
            }
            // 配置された宝珠を描画する
            this.drawDeployedOrb(data.ol, deployListAll);

            if (this.onAfterOrbDeploying) {
                this.onAfterOrbDeploying();
            }
        }
    };

    window.orbmng.OrbPanel = OrbPanel;
})();