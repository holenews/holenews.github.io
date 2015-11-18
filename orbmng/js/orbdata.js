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
    * @param color 色
    * @param x X座標
    * @param y Y座標
    * @param orb Orbオブジェクト
    **********************************************************************************************************/
    function DeployedOrb(color, highlight, x, y, orb) {
        createjs.Shape.call(this);
        OrbCells.call(this, orb);
        this.size = orbmng.BoardCell.CellSize;
        this.x = this.size * x;
        this.y = this.size * y;
        this.px = x;
        this.py = y;
        this.color = color;
        this.highlight = highlight;
        this.initOrb();
    }

    DeployedOrb.Colors = [];
    DeployedOrb.Colors[0] = { circle : "#F99", border : "#C33", highlight : "#FCC" };

    DeployedOrb.prototype = {
        px: 0,
        py: 0,
        size: 0,
        color: null,
        highlight: null,
        // マウスオーバー時のイベント
        onMouseOver: null,
        // マウスアウト時のイベント
        onMouseOut: null,
        /**
        * 初期化する
        */
        initOrb: function () {
            this.drawOrb(false);
            // マウスオーバー時
            this.addEventListener('mouseover', function (event) {
                var self = event.target;
                self.drawOrb(true, true);
                if (self.onMouseOver) {
                    self.onMouseOver(self.orb);
                }
            });
            // マウスアウト時
            this.addEventListener('mouseout', function (event) {
                var self = event.target;
                self.drawOrb(false, true);
                if (self.onMouseOut) {
                    self.onMouseOut(self.orb);
                }
            });
        },
        /**
        * 描画する
        * @param active 選択中かどうか
        * @param update Stageを更新するかどうか
        */
        drawOrb: function (active, update) {
            var strokeColor = active ? this.highlight : this.color;
            var pointList = [];
            for (var c = 0; c < this.cells.length; c++) {
                var cell = this.cells[c];
                var x = cell.x * this.size + this.size / 2;
                var y = cell.y * this.size + this.size / 2;
                pointList.push({ x: x, y: y });
            }

            var g = this.graphics.clear();
            // 宝珠玉間のラインを描画する
            g.beginStroke(strokeColor).setStrokeStyle(8);
            g.moveTo(pointList[0].x, pointList[0].y);
            for (var p = 1; p < pointList.length; p++) {
                g.lineTo(pointList[p].x, pointList[p].y);
            }
            g.endStroke();
            // 宝珠玉を描画する
            g.beginFill(this.color);
            for (var c = 0; c < this.cells.length; c++) {
                var cell = this.cells[c];
                var x = cell.x * this.size + this.size / 2;
                var y = cell.y * this.size + this.size / 2;
                g.beginStroke(strokeColor).setStrokeStyle(2);
                pointList.push({ x: x, y: y });
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