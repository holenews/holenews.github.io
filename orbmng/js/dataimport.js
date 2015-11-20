(function () {

    if (!window.orbmng) window.orbmng = {};

    /*********************************************************************************************************
    * シート内に表示するデータ
    **********************************************************************************************************/
    function SheetData() {

    }

    SheetData.prototype = {
        tab: false, // タブを選択中
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

    SheetData.importFromHiroba = function () {
        if (window.__FROM_ORIGIN__) return;
        if (!jewelShape || !storageJewels) {
            alert("広場からデータを読み込めませんでした。");
            return;
        }
        var orbNames = ["炎", "水", "風", "光", "闇"];
        var shapeList = {};
        // 形状マスタを取得する
        for (var key in jewelShape) {
            if (jewelShape.hasOwnProperty(key)) {
                var shape = jewelShape[key];
                var type = -1;
                if (shape.w == 1) {
                    if (shape.h == 3) {
                        type = 0; // 縦3
                    } else if (shape.h == 2) {
                        type = 3; // 縦2
                    }
                } else if (shape.h == 1) {
                    if (shape.w == 3) {
                        type = 1; // 横3
                    } else if (shape.w == 2) {
                        type = 2; // 横2
                    }
                } else {
                    var xc = 0, yc = 0;
                    for (var p = 0; p < shape.pos.length; p++) {
                        xc += shape.pos[p][0];
                        yc += shape.pos[p][1];
                    }
                    if (xc == 2) {
                        if (yc == 1) {
                            type = 5;
                        } else if (yc == 2) {
                            type = 7;
                        }
                    } else if (xc == 1) {
                        if (yc == 1) {
                            type = 6;
                        } else if (yc == 2) {
                            type = 4;
                        }
                    }
                }
                shapeList[key] = type;
            }
        }

        var sheetList = [];
        for (var i = 0; i < orbNames.length; i++) {
            // 宝珠リストを取得する
            var storedOrbList = storageJewels[orbNames[i]];
            var sheet = new SheetData();
            sheet.orbList = [];
            for (var o = 0; o < storedOrbList.length; o++) {
                var orb = storedOrbList[o];
                var type = shapeList[orb.shape];
                if (type >= 0) {
                    sheet.orbList.push({
                        number: o,
                        type : type,
                        name: orb.name,
                        disabled: orb.isSetJewel ? 1 : 0
                    });
                }
            }
            sheetList[i] = sheet;
        }

        var string = SheetData.encode(sheetList);
        location.href = "http://holenews.github.io/orbmng/?d=" + string;
    };

    window.orbmng.SheetData = SheetData;

    var TinyLz77 = {
        compress: function (s) {
            var a = 53300, b, c, d, e, f, g = -1, h, r = [];
            s = new Array(a--).join(' ') + s;
            while ((b = s.substr(a, 256))) {
                for (c = 2; c <= b.length; ++c) {
                    d = s.substring(a - 52275, a + c - 1).lastIndexOf(b.substring(0, c));
                    if (d === -1) {
                        break;
                    }
                    e = d;
                }
                if (c === 2 || c === 3 && f === g) {
                    f = g;
                    h = s.charCodeAt(a++);
                    r.push(h >> 8 & 255, h & 255);
                } else {
                    r.push((e >> 8 & 255) | 65280, e & 255, c - 3);
                    a += c - 1;
                }
            }
            return String.fromCharCode.apply(0, r);
        },
        decompress: function (s) {
            var a = 53300, b = 0, c, d, e, f, g, h, r = new Array(a--).join(' ');
            while (b < s.length) {
                c = s.charCodeAt(b++);
                if (c <= 255) {
                    r += String.fromCharCode((c << 8) | s.charCodeAt(b++));
                } else {
                    e = ((c & 255) << 8) | s.charCodeAt(b++);
                    f = e + s.charCodeAt(b++) + 2;
                    h = r.slice(-52275);
                    g = h.substring(e, f);
                    if (g) {
                        while (h.length < f) {
                            h += g;
                        }
                        r += h.substring(e, f);
                    }
                }
            }
            return r.slice(a);
        }
    };

    // UTF8 octets encode/decode
    var utf8 = {
        encode: function (s) {
            var ret;
            try {
                ret = encodeURI(s).replace(/%(..)/g, function (m0, m1) {
                    return String.fromCharCode("0x" + m1);
                });
            } catch (e) {
                ret = "";
            }
            return ret;
        },
        decode: function (s) {
            var ret;
            try {
                ret = decodeURIComponent(s.replace(/[%\x80-\xFF]/g, function (m0) {
                    return "%" + m0.charCodeAt(0).toString(16);
                }));
            } catch (e) {
                ret = "";
            }
            return ret;
        }
    };

    // Base64 from (based) http://feel.happy.nu/test/base64.html
    var base64 = {
        b: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (s) {
            var t = "", p = -6, a = 0, i = 0, v = 0, c; s = utf8.encode(s);
            while (i < s.length || p > -6) {
                if (p < 0) {
                    if (i < s.length) {
                        c = s.charCodeAt(i++);
                        v += 8;
                    } else {
                        c = 0;
                    }
                    a = ((a & 255) << 8) | (c & 255);
                    p += 8;
                }
                t += base64.b.charAt(v > 0 ? a >> p & 63 : 64);
                p -= 6;
                v -= 6;
            }
            return t;
        },
        decode: function (s) {
            var t = "", p = -8, a = 0, c, d, i = 0;
            for (; i < s.length; i++) {
                if ((c = base64.b.indexOf(s.charAt(i))) >= 0) {
                    a = (a << 6) | (c & 63);
                    if ((p += 6) >= 0) {
                        d = a >> p & 255;
                        if (c != 64) t += String.fromCharCode(d);
                        a &= 63;
                        p -= 8;
                    }
                }
            }
            return utf8.decode(t)
        }
    };

    SheetData.importFromHiroba();
})();

