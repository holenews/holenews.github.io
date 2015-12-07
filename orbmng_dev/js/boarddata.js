(function () {

    if (!window.orbmng) window.orbmng = {};

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
        /**
        * 複製を作成する
        * @return 複製された石板
        */
        clone: function () {
            var board = new orbmng.Board();
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
        * @return 配置可能ならtrue
        */
        isPlacable: function (orb, x, y) {
            var placeList = [];
            for (var c = 0; c < orb.cells.length; c++) {
                var cell = orb.cells[c];
                var row = this.cells[y + cell.y];
                if (!row) return false;

                var status = parseInt(row[x + cell.x], 10);
                if (status == Board.Hole) {
                    placeList.push({ x: x + cell.x, y: y + cell.y });
                } else {
                    return false;
                }
            }
            if (placeList.length == orb.cells.length) {
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
            for (var c = 0; c < orb.cells.length; c++) {
                var cell = orb.cells[c];
                var status = parseInt(this.cells[y + cell.y][x + cell.x], 10);
                if (status == Board.Hole) {
                    this.cells[y + cell.y][x + cell.x] = Board.Placed;
                } else {
                    throw new Error("X:" + (x + cell.x) + " Y:" + (y + cell.y) + " には配置できません。");
                }
            }
            var deployed = { i: orb.i, p : orb.p, x: x, y: y };
            return deployed;
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
        },
        
        /**
         * 分離度を取得する
         * @return 分離度
         */
        getSeparationPoint : function(){
        	var sepPoint = 0;
        	var sepCount = 1;
        	var max = this.cells.length - 1;
        	// 穴セルの上下左右に穴以外のセルがあれば、分離度を+1する
        	for (var y = 0; y <= max; y++) {
                for (var x = 0; x <= max; x++) {
                    if(this.cells[y][x] == Board.Hole){
                    	var curSepPoint = 0;
                    	if(y == 0 || this.cells[y - 1][x] != Board.Hole){
                    		curSepPoint++;
                    	}
                    	if(y == max || this.cells[y + 1][x] != Board.Hole){
                    		curSepPoint++;
                    	}
                    	if(x == 0 || this.cells[y][x - 1] != Board.Hole){
                    		curSepPoint++;
                    	}
                    	if(x == max || this.cells[y][x + 1] != Board.Hole){
                    		curSepPoint++;
                    	}
                    	if(curSepPoint == 4){
                    		sepCount++;
                    	}
                    	sepPoint += sepCount;
                    }
                }
            }
        	return sepPoint * sepCount;
        }
    };

    window.orbmng.Board = Board;

    /*********************************************************************************************************
    * 石板Shapeクラス
    * @param x X座標
    * @param y Y座標
    **********************************************************************************************************/
    function BoardCell(x, y) {
        createjs.Shape.call(this);
        this.x = BoardCell.CellSize * x;
        this.y = BoardCell.CellSize * y;
        this.px = x;
        this.py = y;
        this.status = Board.None;
        this.initCell();
    }

    BoardCell.CellSize = 45;

    BoardCell.prototype = {
        status: Board.None,
        // セルクリック時のイベント
        onCellClick: null,
        /**
        * 初期化する
        */
        initCell: function () {
            this.drawCell(false);
            // マウスオーバー時
            this.addEventListener('mouseover', function (event) {
                document.body.style.cursor = "pointer";
            });
            // マウスアウト時
            this.addEventListener('mouseout', function (event) {
                document.body.style.cursor = "default";
            });
            // クリック時
            this.addEventListener('click', function (event) {
                var cell = event.target;
                if (cell.status == Board.None) {
                    cell.status = Board.Hole;
                } else if (cell.status == Board.Hole) {
                    cell.status = Board.None;
                }
                cell.drawCell(true);
                if (cell.onCellClick) {
                    cell.onCellClick();
                }
            });
        },
        /**
        * 描画する
        * @param update Stageを更新するかどうか
        */
        drawCell: function (update) {
            var g = this.graphics.clear();
            var color = "rgba(0,0,0,0.2)";
            if (this.status == Board.Hole) {
                color = "rgba(0,0,0,0.7)";
            }
            g.beginFill(color).beginStroke("#AAA").setStrokeStyle(1.5);
            g.drawCircle(BoardCell.CellSize / 2, BoardCell.CellSize / 2, BoardCell.CellSize / 2 - 4);
            if (update) this.getStage().update();
        }
    };

    BoardCell.prototype = $.extend(BoardCell.prototype, createjs.Shape.prototype);
    window.orbmng.BoardCell = BoardCell;
})();