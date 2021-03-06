(function () {

    if (!window.orbmng) window.orbmng = {};

    /*********************************************************************************************************
    * 宝珠データ
    * @param name 宝珠名
    * @param type 形状種別
    **********************************************************************************************************/
    function Orb(number, name, type) {
        this.i = number;
        this.n = name;
        this.t = type;
    }

    Orb.prototype = {
        i: 0,          // 番号
        n: -1,         // 宝珠名
        p: 2,          // 優先度フラグ
        t: 0           // 形状種別
    };
    
    Orb.sort = function(orbList, type, sortMode){
    	var newOrbList = [];
    	var orbNameOrdList = {};
    	var orbGrpOrdList = {};
        for (var i = 0; i < orbList.length; i++) {
            if (sortMode == "name" && orbList[i].n < 0) continue;
            newOrbList.push(orbList[i]);
            if(isNaN(orbNameOrdList[orbList.id]) == false){
            	// ID<->順序変換表に登録されていれば何もしない
            	continue;
            }
            // 宝珠マスタからIDが一致する要素を取得する
            for(var n = 0; n < orbmng.OrbMaster[type].length; n++){
            	if(orbmng.OrbMaster[type][n].id == orbList[i].n){
            		// ID<->順序変換表に登録する
            		orbNameOrdList[orbList[i].n] = orbmng.OrbMaster[type][n].ord;
            		orbGrpOrdList[orbList[i].n] = orbmng.OrbMaster[type][n].grp;
            		break;
            	}
            }
        }
        
        var compareName = function(a, b){
        	var ao = orbNameOrdList[a.n];
        	var bo = orbNameOrdList[b.n];
        	if (ao == bo) return 0;
            if (ao < bo) return -1;
            if (ao > bo) return 1;
        };
        var comparePrimary = function(a, b){
        	if (a.p == b.p) return 0;
            if (a.p < b.p) return 1;
            if (a.p > b.p) return -1;
        };
        var cellSize = [3, 3, 2, 2, 3, 3, 3, 3];
        newOrbList = newOrbList.sort(function (a, b) {
        	var ret = 0;
            if (sortMode == "name") {
            	ret = compareName(a, b);
                if (ret == 0){
                	ret = comparePrimary(a, b);
                }
            } else if (sortMode == "primary") {
                ret = comparePrimary(a, b);
                if (ret == 0){
                	ret = compareName(a, b);
                }
            }
            if(ret == 0){
            	if(cellSize[a.t] > cellSize[b.t]) ret = 1;
            	if(cellSize[a.t] < cellSize[b.t]) ret = -1;
            }
            return ret;
        });
        if (sortMode == "name") {
            for (var i = 0; i < orbList.length; i++) {
                if (orbList[i].n > 0) continue;
                newOrbList.push(orbList[i]);
            }
        }
        return newOrbList;
    };

    window.orbmng.Orb = Orb;

    /*********************************************************************************************************
    * 宝珠形状データ
    * @param orb 宝珠データ
    **********************************************************************************************************/
    function OrbCells(orb) {
        Orb.call(this, orb.i, orb.n, orb.t);
        this.orb = orb;
        this.p = orb.p;
        this.initCells();
    }

    OrbCells.prototype = {
        orb: null,
        placableList: [],   // 配置可能な位置リスト
        cells: [],          // 形状座標リスト
        initCells: function () {
            this.cells = [];
            if (this.t == 0) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
                this.cells.push({ x: 0, y: 2 });
            } else if (this.t == 1) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 2, y: 0 });
            } else if (this.t == 2) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
            } else if (this.t == 3) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
            } else if (this.t == 4) {
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
            } else if (this.t == 5) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 1, y: 1 });
            } else if (this.t == 6) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
                this.cells.push({ x: 1, y: 1 });
            } else if (this.t == 7) {
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 1, y: 1 });
                this.cells.push({ x: 0, y: 1 });
            }
        }
    };

    OrbCells.prototype = $.extend(OrbCells.prototype, Orb.prototype);
    window.orbmng.OrbCells = OrbCells;

    /*********************************************************************************************************
    * 配置された宝珠クラス
    * @param color 色
    * @param x X座標
    * @param y Y座標
    * @param orb Orbオブジェクト
    **********************************************************************************************************/
    function DeployedOrb(color, x, y, orb) {
        createjs.Shape.call(this);
        OrbCells.call(this, orb);
        this.size = orbmng.BoardCell.CellSize;
        this.x = this.size * x;
        this.y = this.size * y;
        this.px = x;
        this.py = y;
        this.color = color;
        this.initOrb();
    }

    DeployedOrb.Colors = ["#E60012", "#F39800", "#fcc800", "#009944", "#2ca9e1", "#3e62ad", "#b44c97", "#ff69b4"];

    DeployedOrb.prototype = {
        px: 0,
        py: 0,
        size: 0,
        color: null,
        active: false,
        // 選択時のイベント
        onSelectChanged: null,
        /**
        * 初期化する
        */
        initOrb: function () {
            this.drawOrb(false);
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
                var self = event.target;
                // 宝珠を全て非選択状態にする
                for (var i = 0; i < self.parent.children.length; i++) {
                    self.parent.children[i].active = false;
                    self.parent.children[i].drawOrb(false);
                }
                // 自身の宝珠を選択状態にする
                self.active = true;
                self.drawOrb(false);
                self.getStage().update();
                if (self.onSelectChanged) {
                    self.onSelectChanged(self.orb);
                }
            });

        },
        /**
        * 描画する
        * @param update Stageを更新するかどうか
        */
        drawOrb: function (update) {
            var color = DeployedOrb.Colors[this.t];
            var circleEdgeColor = this.active ? "rgba(255,255,255,0.8)" : color;
            var pointList = [];
            for (var c = 0; c < this.cells.length; c++) {
                var cell = this.cells[c];
                var x = cell.x * this.size + this.size / 2;
                var y = cell.y * this.size + this.size / 2;
                pointList.push({ x: x, y: y });
            }

            var g = this.graphics.clear();

            // 宝珠玉間のラインを描画する
            g.beginStroke(circleEdgeColor).setStrokeStyle(10, 1, 1);
            g.moveTo(pointList[0].x, pointList[0].y);
            for (var p = 1; p < pointList.length; p++) {
                g.lineTo(pointList[p].x, pointList[p].y);
            }
            g.endStroke();

            // 宝珠玉を描画する
            for (var c = 0; c < this.cells.length; c++) {
                var cell = this.cells[c];
                var r = this.size / 2;
                var x = cell.x * this.size + r;
                var y = cell.y * this.size + r; 44
                g.beginLinearGradientFill(["#FFF", color, "#000"], [0, 0.5, 0.9], x - r, y - r, x + r, y + r);
                g.beginStroke(circleEdgeColor).setStrokeStyle(this.active ? 4 : 3);
                g.drawCircle(x, y, this.size / 2 - 4);
                g.endStroke();
            }
            g.endFill();
            if (update) this.getStage().update();
        }
    };

    DeployedOrb.prototype = $.extend(DeployedOrb.prototype, createjs.Shape.prototype);
    DeployedOrb.prototype = $.extend(DeployedOrb.prototype, OrbCells.prototype);

    window.orbmng.DeployedOrb = DeployedOrb;

    
})();