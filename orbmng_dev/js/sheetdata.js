(function () {

    if (!window.orbmng) window.orbmng = {};
    var _mobile = ('ontouchstart' in document) ? true : false;
    var _tap = (_mobile) ? "タップ" : "クリック";

    /*********************************************************************************************************
    * 宝珠シート管理クラス
    **********************************************************************************************************/
    function OrbPanel() {
        this.tabId = "#orb_panel";
        this.initSheetEvent();
        this.initOrbPanel();
        this.addOrbRow(null);
        $(this.tabId + " .message_window_in").html("まずは　石板を" + _tap + "して　穴をあけましょう。");
    }

    OrbPanel.prototype = {
        index: null,   // インデックス
        tabId: null,   // タブID
        stage: null,
        deployList: null,
        boardCells: null,
        orbNameList: [],
        currentKey: null,
        /**
        * 宝珠シートを初期化する
        */
        initSheetEvent: function () {
            var _this = this;
            // 宝珠追加ボタンがクリックされたとき
            $(this.tabId + " .orb_list_add").on('tap', function () {
                _this.addOrbRow(null);
                $(_this.tabId + " .message_window_in").html(
                    "宝珠の形ボタンを" + _tap + "すると　形を変えることができます。<br/>宝珠の　用意が出来たら　配置ボタンを" + _tap + "します。");
            });
            // 宝珠配置ボタンがクリックされたとき
            $(this.tabId + " .orb_list_deploy").on('tap', function () {
                _this.startOrbDeploying();
            });
            // 宝珠リセットボタンがクリックされたとき
            $(this.tabId + " .orb_list_reset").on('tap', function () {
                _this.clearDepoloyedOrb();
            });
            // 全リセットボタンがクリックされたとき
            $(this.tabId + " .panel_reset").on('tap', function () {
                if (confirm("石板の穴がすべてリセットされます。よろしいですか？")) {
                    _this.clearOrbPanel();
                    _this.clearDepoloyedOrb();
                }
            });
            // 宝珠タイプドロップダウンが変更されたとき
            $(this.tabId + " .orb_elem_type_item").on('tap', function () {
                // 宝珠タイプの選択値を取得する
                var val = $(this).attr("value");
                var text = $(this).text();
                var $target = $(this).parents(".orb_elem_type").find("button");
                $target.children(".orb_elem_type_name").text(text);
                $target.attr("value", val);

                _this.orbNameList = orbmng.OrbMaster[parseInt(val, 10)];
                // 宝珠名リストを作成する
                _this.setOrbNameList($(".orb_cell_name select"));
                return;
            });
            $(this.tabId + " .orb_elem_type_item:first").trigger('tap');

            // 並べ替えボタンがクリックされたとき
            $(this.tabId + " .sort_type").on('tap', function () {
                var sortType = $(this).attr("value");
                _this.sortOrbRowList(sortType);
            });

            // 全削除ボタンがクリックされたとき
            $(this.tabId + " .orb_clear_all").on('tap', function () {
                if (confirm("宝珠のリストを全てクリアします。よろしいですか？")) {
                    // 宝珠リストをリセット
                    $(_this.tabId + " .orb_list").empty();
                    _this.addOrbRow(null);
                    $(tabId + " .message_window_in").html("宝珠のリストを　クリアしました。");
                }
            });

            $("#modal_orb_save").modal({ backdrop: 'static', show: false });
            $("#modal_orb_load").modal({ backdrop: 'static', show: false });
            // セーブ・ロードボタンがクリックされたとき
            $(".btn_open_save").on('tap', function () {
                _this.loadSavedSheetList();
                $("#modal_orb_save").modal('show');
            });
            $(".btn_open_load").on('tap', function () {
                _this.loadSavedSheetList();
                $("#modal_orb_load").modal('show');
            });

            var tabId = this.tabId;
            // 宝珠リスト内のボタンがクリックされたとき
            $(this.tabId + " .orb_list").on('tap', function (event) {
                var $target = $(event.target);
                // 宝珠形状吹き出しの要素がクリックされたとき
                if ($target.is(".orb_form") && $target.parent().hasClass("orb_select")) {
                    var $img = $target.parents(".orb_row").find("a.orb_form");
                    for (var i = 0; i < 8; i++) {
                        $img.removeClass("type" + i);
                    }
                    $img.addClass("type" + $target.attr("name"));
                    $img.attr("name", $target.attr("name"));
                    $img.popover('hide');
                    return;
                }
                // 宝珠形状ボタンがクリックされたとき
                if ($target.is(".orb_cell_img .orb_form")) {

                    $target.popover("toggle");
                    return false;
                }
                // 削除ボタンがクリックされたとき
                if ($target.is(".orb_cell_delete button") || $target.parents(".orb_cell_delete button").length > 0) {
                    $target.parents(".orb_row").fadeOut(function () {
                        $(this).remove();
                    });
                    return;
                }
            });
            // 宝珠リスト内のコンボボックスが変更されたとき
            $(this.tabId + " .orb_list").on('change', function (event) {
                var $target = $(event.target);
                // 宝珠名が変更されたとき
                if ($target.is(".orb_cell_name select")) {
                    $(tabId + " .message_window_in").html("同じ名前の宝珠を　複数用意すると<br/>その中から　一番よい形を探してくれます。");
                    return;
                }
                // 優先度が変更されたとき
                if ($target.is(".orb_cell_level select")) {
                    var type = $target.val();
                    $target.removeClass("alert alert-success alert-warning alert-danger alert-inverse");
                    var text = "優先度の高い宝珠から　配置していきます。<br/>";
                    if (type == "0") {
                        text += "無視にすると　宝珠を配置する候補から　外れます。";
                        $target.addClass("alert alert-inverse");
                    } else if (type == "1") {
                        $target.addClass("alert alert-warning");
                    } else if (type == "2") {
                        $target.addClass("alert alert-success");
                    } else if (type == "3") {
                        $target.addClass("alert alert-danger");
                    }
                    $(tabId + " .message_window_in").html(text);
                    return;
                }
            });

            $(".orb_dialog .btn").on('tap', function () {
                // ダイアログ内のボタンがクリックされた時、メッセージを非表示にする
                $(".dialog_message").hide();
            });
            $(this.tabId + " .btn_save_new").on('tap', function () {
                // 新規登録時
                _this.saveSheetData(true);
            });
            $(this.tabId + " .btn_save_over").on('tap', function () {
                // 上書き保存時
                _this.saveSheetData(false);
            });
            $(this.tabId + " .btn_load_delete").on('tap', function () {
                // 設定削除
                _this.removeSelectedSheetData(false);
            });
            $(this.tabId + " .btn_load_open").on('tap', function () {
                // 設定ロード
                _this.loadSelectedSheetData(false);
            });

            var $divOrbResult = $(_this.tabId + " .div_orb_result");
            var $divOrbControl = $(_this.tabId + " .div_orb_control");
            var $divOrbList = $(_this.tabId + " .orb_list");
            var $intro = $("#introduction");
            var $container = $(".container");

            // メニューのtop座標を取得する
            var offsetControl = $divOrbControl.offset().top;
            var offsetPanel = $divOrbResult.offset().top;
            var floatMenu = function () {
                // スクロール位置がメニューのtop座標を超えたら固定にする
                if ($(window).scrollTop() > offsetControl) {
                    $divOrbControl.addClass('fixed');
                } else {
                    $divOrbControl.removeClass('fixed');
                }
                if ($(window).scrollTop() > offsetPanel) {
                    $divOrbResult.addClass('fixed');
                } else {
                    $divOrbResult.removeClass('fixed');
                }
            };
            $(window).scroll(floatMenu);
            $('body').bind('touchmove', floatMenu);
        },


        /**
        * 石板グリッドを初期化する
        */
        initOrbPanel: function () {
            var $target = $(this.tabId + " .orb_panel");
            $target.attr("id", "canvas_" + this.index);
            var stage = new createjs.Stage("canvas_" + this.index);
            stage.enableMouseOver(10);
            this.stage = stage;
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
            g.setStrokeDash(null).setStrokeStyle(1);
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
                        $(tabId + " .message_window_in").html("穴をあけたら　配置したい宝珠を　追加します。");
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
            $(this.tabId + " .message_window_in").html("石板を" + _tap + "して　穴をあけましょう。");
        },

        /**
        * 宝珠リストをソートする
        * @param sortMode ソートモード
        */
        sortOrbRowList: function (sortMode) {
            var newOrbList = orbmng.Orb.sort(this.getOrbListData(), sortMode);
            var modeStr = sortMode == "name" ? "名前" : "優先度";

            // 宝珠リストをリセット
            $(this.tabId + " .orb_list").empty();
            // 宝珠リストを追加する
            for (var i = 0; i < newOrbList.length; i++) {
                this.addOrbRow(newOrbList[i]);
            }
            $(this.tabId + " .message_window_in").html("宝珠リストを" + modeStr + "の順で並べ替えました。");
        },

        /**
        * 宝珠リストに行を追加する
        * @param orb Orbオブジェクト
        */
        addOrbRow: function (orb) {
            var number = 1;
            while ($(this.tabId + " .orb_list .orb_row[number=" + number + "]").length > 0) {
                number++;
            }

            if (!orb) orb = new orbmng.Orb(number, "", 0);

            var selectFormTag =
                "<div class='orb_select'>" +
                "   <p class='orb_form type0' name='0' /><p class='orb_form type1' name='1' /><p class='orb_form type2' name='2' /><p class='orb_form type3' name='3' />" +
                "   <p class='orb_form type4' name='4' /><p class='orb_form type5' name='5' /><p class='orb_form type6' name='6' /><p class='orb_form type7' name='7' />" +
                "</div>";
            var escapeHTML = function (val) {
                return $('<div />').text(val).html();
            };
            var $row = $(
                "<div class='orb_row form-inline' number='" + escapeHTML(orb.i) + "'>" +
                "    <span class='dep_status glyphicon glyphicon-ok-circle'></span>" +
                "    <span class='dep_status glyphicon glyphicon-remove'></span>" +
                "    <div class='orb_list_cell orb_cell_name'><select class='form-control'><option value='-1'>宝珠を選択してください</option></select></div>" +
                "    <div class='orb_list_cell orb_cell_img'>" +
                "       <a role='button' tabindex='0' class='btn btn-default orb_form' name='" + escapeHTML(orb.t) + "'>　</a>" +
                "    </div>" +
                "    <div class='orb_list_cell form-group orb_cell_level'>" +
                "       <select class='form-control'>" +
                "           <option value='3'>優先度:高</option>" +
                "           <option value='2'>優先度:並</option>" +
                "           <option value='1' selected='selected'>優先度:低</option>" +
                "           <option value='0'>無視</option>" +
                "       </select>" +
                "   </div>" +
                "   <div class='orb_list_cell orb_cell_delete'><button class='btn btn-default' title='削除'><span class='glyphicon glyphicon-trash'></span></button></div>" +
                "</div>");
            var tabId = this.tabId;
            $(this.tabId + " .orb_list").append($row);

            // 宝珠形状ボタンクリック
            var $img = $row.find(".orb_cell_img .orb_form").popover({
                trigger: 'manual',
                html: true,
                placement: 'top',
                content: selectFormTag
            });
            $img.addClass("type" + orb.t);
            $img.attr("name", orb.t);
            // 優先度を設定する
            $row.find(".orb_cell_level select").val(orb.p).change();
            // 宝珠名リストを作成する
            this.setOrbNameList($row.find(".orb_cell_name select"));
            // 宝珠名称を設定する
            if (orb.n > 0) {
                $row.find(".orb_cell_name select").val(orb.n).change();
            }
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
        * 宝珠設定一覧をロードする
        */
        loadSavedSheetList: function () {
            var sheetDataList = orbmng.SheetData.loadFromCookie();
            $(".saved_data_message").removeClass("alert alert-danger").text("ロードしたい設定を" + _tap + "して選択して下さい。");
            if (sheetDataList.length == 0) {
                $(".saved_data_message").text("保存された宝珠データはありません。").addClass("alert alert-danger");
            }
            var $table = $("#modal_orb_load .saved_data_list").empty();
            var typeList = ["炎", "水", "風", "光", "闇"];

            for (var i = 0; i < sheetDataList.length; i++) {
                var sheetData = sheetDataList[i];
                var type = "";
                if (sheetData.data) {
                    type = typeList[parseInt(sheetData.data.tp, 10)];
                }
                var $row = $(
                    "<li class='saved_data_item type" + sheetData.data.tp + "'>" +
                    "   <span class='orb_type'>" + type + "</span>" +
                    "   <span class='save_name'></span>" +
                    "</li>"
                );
                $row.on('tap', function () {
                    $("#modal_orb_load .saved_data_item").removeClass("selected");
                    $(this).addClass("selected");
                });
                $row.attr("key", sheetData.key);
                $row.find(".save_name").text(sheetData.name);
                $row.find(".save_select input").val(sheetData.key);
                $table.append($row);
            }
            $table.find(".saved_data_item:first").addClass("selected");
            $table.append("<p class='clearfix'></p>");
        },

        /**
        * 宝珠設定を保存する
        */
        saveSheetData: function (isNew) {
            var sheetDataList = orbmng.SheetData.loadFromCookie();
            var $titleForm = $("#modal_orb_save .form-group");
            var $message = $("#modal_orb_save .dialog_message");

            $titleForm.removeClass("has-error");
            if (isNew && sheetDataList.length >= 16) {
                $message.html("これ以上設定を保存することが出来ません！<br />ロード画面から不要な設定を削除してください。").show();
                return;
            }
            var title = $titleForm.find(".save_title").val();
            if (!title || title.trim() == "") {
                $message.html("タイトルを入力してください。").show();
                $titleForm.addClass("has-error");
                return;
            }
            if (title.length > 15) {
                $message.html("タイトルは15文字以内でお願いします。").show();
                $titleForm.addClass("has-error");
                return;
            }
            var maxKey = null;
            if (isNew == true) {
                // 新規保存の場合は未使用のキーを検索する
                for (var i = 0; i < 16; i++) {
                    var findKey = false;
                    var key = "odt" + i;
                    for (var s = 0; s < sheetDataList.length; s++) {
                        if (sheetDataList[s].key == key) {
                            findKey = true;
                            break;
                        }
                    }
                    if (findKey == false) {
                        maxKey = key;
                        break;
                    }
                }
            } else {
                // 上書き保存の場合は現在読み込んでいるキーを設定する
                maxKey = this.currentKey.key;
                if (!confirm("宝珠の設定を上書き保存してしまってよろしいですか？")) {
                    return;
                }
            }
            if (maxKey == null) return;

            var sheetData = this.getSheetData();
            // Cookieに保存する
            orbmng.SheetData.saveToCookie(maxKey, title, sheetData);
            setTimeout(function () {
                $("#modal_orb_save").modal('hide');
            }, 50);

            $(this.tabId + " .message_window_in").html("宝珠の設定を　保存しました。<br/>ロード画面から　また読み込むことができます。");
        },

        /**
        * ロード画面で選択された宝珠設定をロードする
        */
        loadSelectedSheetData: function () {
            var sheetDataList = orbmng.SheetData.loadFromCookie(true);
            var key = $("#modal_orb_load .saved_data_item.selected").attr("key");
            var sheetData = null;
            // キーが一致する設定を取得する
            for (var i = 0; i < sheetDataList.length; i++) {
                if (key == sheetDataList[i].key) {
                    sheetData = sheetDataList[i];
                    break;
                }
            }
            // 現在のキーを保存
            this.currentKey = { key: sheetData.key, name: sheetData.name };
            $("#modal_orb_save .btn_save_over").show();
            $("#modal_orb_save .save_title").val(sheetData.name);
            // データを表示する
            this.loadSheetData(sheetData.data);
            setTimeout(function () {
                $("#modal_orb_load").modal('hide');
            }, 50);
        },

        /**
        * 宝珠設定を削除する
        */
        removeSelectedSheetData: function () {
            var $table = $("#modal_orb_load .saved_data_list");
            var $selected = $("#modal_orb_load .saved_data_item.selected");
            if ($selected.size() != 1) return;
            var name = $selected.find(".save_name").text();
            if (!confirm("「" + name + "」を削除してよろしいですか？")) {
                return;
            }
            var key = $selected.attr("key");
            $selected.fadeOut(function () {
                $table.find(".saved_data_item:first").addClass("selected");
                if ($table.find(".saved_data_item").size() == 0) {
                    $(".saved_data_message").text("保存された宝珠データはありません。").addClass("alert alert-danger");
                }
            });
            orbmng.SheetData.removeFromCookie(key);
        },

        /**
        * データを読み込む
        * @param sheetData SheetDataオブジェクト
        */
        loadSheetData: function (sheetData) {
            // 宝珠リストをリセット
            $(this.tabId + " .orb_list").empty();

            $(this.tabId + " .orb_elem_type_item[value='" + sheetData.tp + "']").trigger("tap");

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
            // 宝珠を自動配置する
            this.startOrbDeploying();
            this.stage.update();
            $(this.tabId + " .message_window_in").html("データを読み込みました。<br/>宝珠を" + _tap + "すると　名前が分かりますよ。");
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
        * 宝珠番号に一致する宝珠データを取得する
        * @param number 宝珠番号
        * @param orbList 宝珠リスト
        */
        getOrbDataByNumber: function (number, orbList) {
            if (!orbList) orbList = this.getOrbListData();
            var orb = null;
            for (var o = 0; o < orbList.length; o++) {
                // リストから番号が一致する宝珠データを取得する
                if (orbList[o].i == number) {
                    orb = orbList[o];
                    break;
                }
            }
            return orb;
        },

        /**
        * 配置された宝珠を描画する
        * @param deployPosList 宝珠番号と位置のリスト
        */
        drawDeployedOrb: function (deployPosList) {
            this.clearDepoloyedOrb();
            if (!deployPosList) return;
            var _this = this;
            var orbList = this.getOrbListData();
            for (var d = 0; d < deployPosList.length; d++) {
                var deploy = deployPosList[d];
                if (!deploy) continue;
                // リストから番号が一致する宝珠データを取得する
                var orb = this.getOrbDataByNumber(deploy.i, orbList);
                if (orb == null) continue;

                var deployedOrb = new orbmng.DeployedOrb(orb.t, deploy.x, deploy.y, orb);
                this.deployContainer.addChild(deployedOrb);
                var tabId = this.tabId;
                var orbNameList = this.orbNameList;
                deployedOrb.onSelectChanged = function (orb) {
                    // リストから番号が一致する宝珠データを取得する
                    var orb = _this.getOrbDataByNumber(orb.i);
                    var name = "名前が選択されていない宝珠";
                    if (orb != null && orb.n > 0) {
                        for (var i = 0; i < orbNameList.length; i++) {
                            if (orbNameList[i].id == orb.n) {
                                name = "「" + orbNameList[i].name + "」";
                                break;
                            }
                        }
                    }
                    $(tabId + " .message_window_in").html("" + name + "です。");
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
            data.tp = parseInt($(this.tabId + " .orb_elem_type .dropdown-toggle").attr("value"), 10);
            return data;
        },

        /**
        * 宝珠リストデータを取得する
        * @return 宝珠リスト
        */
        getOrbListData: function () {
            var orbList = [];
            $.each($(this.tabId + " .orb_list .orb_row"), function (i, row) {
                var number = parseInt($(row).attr("number"), 10);
                var name = parseInt($(row).find(".orb_cell_name select").val(), 10);
                var type = parseInt($(row).find(".orb_cell_img a").attr("name"), 10);
                var orb = new orbmng.Orb(number, name, type);
                orb.p = parseInt($(row).find(".orb_cell_level select").val(), 10);
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
        * 宝珠を配置する
        */
        startOrbDeploying: function () {
            // 配置された宝珠をクリアする
            this.clearDepoloyedOrb();
            // 配置できた・できなかった宝珠へのクラスを削除する
            $(this.tabId + " .orb_list .dep_status").hide();
            $(this.tabId + " .orb_list .orb_row").removeAttr("px").removeAttr("py");
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
                "石板を" + _tap + "して　穴を増やしましょう。");
                return;
            }

            // 形状ごとのテンプレートを作成する
            var typeTemplate = [];
            for (var t = 0; t < 8; t++) {
                var template = new orbmng.OrbCells({ t: t });
                typeTemplate[t] = {
                    // 形状座標リスト
                    cells: template.cells,
                    // 配置可能な位置リスト
                    placableList: baseBoard.searchPlacableList(template.cells)
                };
            }

            // 名前→優先度順にソートする
            var orbList = orbmng.Orb.sort(data.ol, "name");

            var orbGrpList = [];
            var orbCountList = [];
            var n = -1;
            for (var i = 0; i < orbList.length; i++) {
                var orb = orbList[i];
                // 同じ名称でグループ化する
                if (i == 0 || orb.n < 0 || orb.n != orbList[i - 1].n) {
                    n++;
                    orbGrpList[n] = [];
                    orbCountList[n] = 3;
                }
                orbGrpList[n].push(orb);
                // グループごとの最低玉数を記録する
                if (orb.t == 2 || orb.t == 3) {
                    orbCountList[n] = 2;
                }
            }
            var orbCount = 0;
            for (var c = 0; c < orbCountList.length; c++) {
                orbCount += orbCountList[c];
            }
            if (orbCount == 0) {
                $(this.tabId + " .message_window_in").html(
                "配置する宝珠が　ないみたいです。<br/>" +
                "「宝珠の追加」ボタンを　押してみてください。");
                return;
            }
            // 仮の石板を作成し、配置可能な位置に手当たり次第に配置していく
            var copyBoard = baseBoard.clone();
            for (var i = 0; i < orbList.length; i++) {
                var orb = orbList[i];
                var cells = typeTemplate[orb.t].cells;
                for (var p = 0; p < typeTemplate[orb.t].placableList.length; p++) {
                    var place = typeTemplate[orb.t].placableList[p];
                    copyBoard.deploy(cells, place.x, place.y);
                }
            }
            // それでも配置できなかったときの穴の状態を取得する
            var targetHoleState = copyBoard.getCurrentHoleState();

            // 優先度の順に宝珠グループを取得する
            var orbGrpPrimaryList = [];
            for (var p = 3; p > 0; p--) {
                for (var g = 0; g < orbGrpList.length; g++) {
                    if (orbGrpList[g][0].p == p) {
                        orbGrpPrimaryList.push(orbGrpList[g]);
                    }
                }
            }

            var deployListAll = [];
            var maxDeployedCount = 0;
            var maxDeployedPoint = 0;
            var minSepalatePoint = Number.MAX_VALUE;
            var search = function (board, deployList, group) {
                if (group >= orbGrpPrimaryList.length) {
                    // 最後のグループまで走査し終わったら終了
                    var nowDeployedCount = 0;
                    var nowDeployedPoint = 0;
                    $.each(deployList, function (i, d) {
                        if (d) {
                            nowDeployedCount++;
                            nowDeployedPoint += d.p;
                        }
                    });
                    if (nowDeployedCount >= maxDeployedCount && nowDeployedPoint >= maxDeployedPoint) {
                        var holeState = board.getCurrentHoleState();
                        if (holeState.sepPoint < minSepalatePoint) {
                            deployListAll = [].concat(deployList);
                            maxDeployedCount = nowDeployedCount;
                            maxDeployedPoint = nowDeployedPoint;
                            minSepalatePoint = holeState.sepPoint;
                            return targetHoleState.sepPoint == holeState.sepPoint && targetHoleState.holeCount == holeState.holeCount;
                        }
                    }
                    return false;
                }
                // 宝珠グループを取得する
                var orbListInGroup = orbGrpPrimaryList[group];

                var deployed = null;
                var complete = false;
                for (var gi = 0; gi < orbListInGroup.length; gi++) {
                    // グループ内の宝珠データを取得する
                    var orb = orbListInGroup[gi];
                    var cells = typeTemplate[orb.t].cells;
                    var prevPlace = null;
                    for (var d = deployList.length - 1; d >= 0; d--) {
                        if (deployList[d] && deployList[d].t == orb.t) {
                            prevPlace = deployList[d];
                            break;
                        }
                    }
                    // 配置可能位置のリストでループする
                    for (var p = 0; p < typeTemplate[orb.t].placableList.length; p++) {
                        var place = typeTemplate[orb.t].placableList[p];
                        if (prevPlace != null && (prevPlace.y > place.y || (prevPlace.x >= place.x && prevPlace.y == place.y))) {
                            continue;
                        }
                        // 配置可能かチェックする
                        if (board.isPlacable(cells, place.x, place.y) == true) {
                            var newBoard = board.clone();
                            // 可能であれば配置する
                            deployed = newBoard.deploy(cells, place.x, place.y);
                            deployed.t = orb.t;
                            deployed.p = orb.p;
                            deployed.i = orb.i;
                            deployList.length = group + 1;
                            deployList[group] = deployed;
                            // 次の宝珠をチェックする
                            complete = search(newBoard, deployList, group + 1);
                            if (complete == true) {
                                break;
                            }
                        }
                    }
                    if (complete == true) {
                        break;
                    }
                }
                // 配置に失敗しても、次の宝珠がある場合はそれを調査する
                if (deployed == null) {
                    var newBoard = board.clone();
                    search(newBoard, deployList, group + 1);
                    return false;
                }
                return complete;
            };

            var complete = search(baseBoard, [], 0);

            var deployedCount = 0;
            for (var d = 0; d < deployListAll.length; d++) {
                if (deployListAll[d]) {
                    $(this.tabId + " .orb_list .orb_row[number=" + deployListAll[d].i + "] .glyphicon-ok-circle").show();
                    $(this.tabId + " .orb_list .orb_row[number=" + deployListAll[d].i + "]").attr("px", deployListAll[d].x).attr("py", deployListAll[d].y);
                    deployedCount++;
                }
            }

            if (orbGrpPrimaryList.length > deployedCount) {
                // 配置に失敗した宝珠がある場合は、アイコンを表示する
                for (var g = 0; g < orbGrpPrimaryList.length; g++) {
                    if (!deployListAll[g]) {
                        for (var o = 0; o < orbGrpPrimaryList[g].length; o++) {
                            $(this.tabId + " .orb_list .orb_row[number=" + orbGrpPrimaryList[g][o].i + "] .glyphicon-remove").show();
                        }
                    }
                }

                var message = "";
                if (deployListAll.length == 0) {
                    message = "宝珠がひとつも　ハマりませんでした…。";
                } else {
                    message = "宝珠を全て　ハメることが　出来ませんでした…。<br/>";
                    if (orbCount > holeCount) {
                        message += "宝珠の玉数が　石板の穴より　多いみたいです。<br/>(宝珠の玉：" + orbCount + "個　石板の穴：" + holeCount + "個)";
                    } else {
                        message += "<span class='dep_status glyphicon glyphicon-remove'></span>印のついている宝珠を諦めるか　優先度を変えてみましょう。<br/>";
                    }
                }
                $(this.tabId + " .message_window_in").html(message);
            } else {
                // 全て配置できたら成功メッセージを表示する
                $(this.tabId + " .message_window_in").html("宝珠がすべて　ハマりました！<br/>宝珠を" + _tap + "すると　名前が分かりますよ。");
            }
            // 配置された宝珠を描画する
            this.drawDeployedOrb(deployListAll);
        }
    };

    window.orbmng.OrbPanel = OrbPanel;
})();