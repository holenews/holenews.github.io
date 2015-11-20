(function () {

    if (!window.orbmng) window.orbmng = {};

    /*********************************************************************************************************
    * 宝珠データ
    * @param name 宝珠名
    * @param type 形状種別
    **********************************************************************************************************/
    function Orb(number, name, type) {
        this.number = number;
        this.name = name;
        this.type = type;
    }

    Orb.prototype = {
        number: 0,          // 番号
        name: "",           // 宝珠名
        disabled: 0,        // 対象外フラグ
        type: 0             // 形状種別
    };

    window.orbmng.Orb = Orb;

    /*********************************************************************************************************
    * 宝珠形状データ
    * @param orb 宝珠データ
    **********************************************************************************************************/
    function OrbCells(orb) {
        Orb.call(this, orb.number, orb.name, orb.type);
        this.orb = orb;
        this.disabled = orb.disabled;
        this.initCells();
    }

    OrbCells.prototype = {
        orb: null,
        placableList: [],   // 配置可能な位置リスト
        cells: [],          // 形状座標リスト
        initCells: function () {
            this.cells = [];
            if (this.type == 0) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
                this.cells.push({ x: 0, y: 2 });
            } else if (this.type == 1) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 2, y: 0 });
            } else if (this.type == 2) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
            } else if (this.type == 3) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
            } else if (this.type == 4) {
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
            } else if (this.type == 5) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 1, y: 0 });
                this.cells.push({ x: 1, y: 1 });
            } else if (this.type == 6) {
                this.cells.push({ x: 0, y: 0 });
                this.cells.push({ x: 0, y: 1 });
                this.cells.push({ x: 1, y: 1 });
            } else if (this.type == 7) {
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
    * @param type 色
    * @param x X座標
    * @param y Y座標
    * @param orb Orbオブジェクト
    **********************************************************************************************************/
    function DeployedOrb(type, x, y, orb) {
        createjs.Shape.call(this);
        OrbCells.call(this, orb);
        this.size = orbmng.BoardCell.CellSize;
        this.x = this.size * x;
        this.y = this.size * y;
        this.px = x;
        this.py = y;
        this.type = type;
        this.initOrb();
    }

    DeployedOrb.Colors = [];
    DeployedOrb.Colors[0] = { circle: "#dc143c", border: "#dc143c", highlight: "#FFFFFF" };
	DeployedOrb.Colors[1] = { circle: "#00008b", border: "#00008b", highlight: "#FFFFFF" };
	DeployedOrb.Colors[2] = { circle: "#006400", border: "#006400", highlight: "#FFFFFF" };
	DeployedOrb.Colors[3] = { circle: "#ff8c00", border: "#ff8c00", highlight: "#FFFFFF" };
	DeployedOrb.Colors[4] = { circle: "#4b0082", border: "#4b0082", highlight: "#FFFFFF" };
	
    DeployedOrb.prototype = {
        px: 0,
        py: 0,
        size: 0,
        type: null,
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
            var colors = DeployedOrb.Colors[this.type];
            var circleEdgeColor = this.active ? colors.highlight : colors.border;
            var pointList = [];
            for (var c = 0; c < this.cells.length; c++) {
                var cell = this.cells[c];
                var x = cell.x * this.size + this.size / 2;
                var y = cell.y * this.size + this.size / 2;
                pointList.push({ x: x, y: y });
            }

            var g = this.graphics.clear();
            
			// 宝珠玉間のラインを描画する
            g.beginStroke(colors.border).setStrokeStyle(10, 1, 1);
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
                var y = cell.y * this.size + r;44
                g.beginRadialGradientFill([colors.highlight, colors.circle], [0, 0.4], x - r / 4, y - r / 4, 1, x - r / 4, y - r / 4, this.size);
                g.beginStroke(circleEdgeColor).setStrokeStyle(this.active ? 4 : 2);
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