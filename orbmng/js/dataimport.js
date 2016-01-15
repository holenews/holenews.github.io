(function () {

    if (!window.orbmng) window.orbmng = {};

    var OrbMaster = [];
    var OrbGroup = [];
    
    OrbMaster[0] = [];
    OrbGroup[0] = [];
    OrbGroup[0][01] = "ステータスアップ";
    OrbMaster[0].push({ id: 0101, grp: 01, name: "不屈の闘志", desc: "さいだいＨＰが　[２]アップします。" });
    OrbMaster[0].push({ id: 0102, grp: 01, name: "深淵なる叡智", desc: "さいだいＭＰが　[５]アップします。" });
    OrbMaster[0].push({ id: 0103, grp: 01, name: "武神の豪腕", desc: "ちからが　[１]アップします。" });
    OrbMaster[0].push({ id: 0104, grp: 01, name: "鋼鉄の肉体", desc: "みのまもりが　[５]アップします。" });
    OrbMaster[0].push({ id: 0105, grp: 01, name: "韋駄天の足", desc: "すばやさが　[５]アップします。" });
    OrbMaster[0].push({ id: 0106, grp: 01, name: "神業の手", desc: "きようさが　[５]アップします。" });
    OrbMaster[0].push({ id: 0107, grp: 01, name: "戦場のヴィーナス", desc: "みりょくが　[３]アップします。" });
    OrbMaster[0].push({ id: 0108, grp: 01, name: "ふんばり魂", desc: "おもさが　[２]アップします。" });
    OrbMaster[0].push({ id: 0109, grp: 01, name: "大賢者の御手", desc: "こうげき魔力が　[３]アップします。" });
    OrbMaster[0].push({ id: 0110, grp: 01, name: "いつくしむ心", desc: "かいふく魔力が　[３]アップします。" });
    OrbMaster[0].push({ id: 0201, grp: 01, name: "会心練磨", desc: "会心・暴走率が　[０.２]％アップします。" });
    OrbMaster[0].push({ id: 0202, grp: 01, name: "先見の眼", desc: "みかわし率が　[０.２]％アップします。" });
    
    OrbGroup[0][03] = "状態異常ガード";
    OrbMaster[0].push({ id: 0301, grp: 03, name: "鉄壁の眠りガード", desc: "眠りガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0302, grp: 03, name: "鉄壁の混乱ガード", desc: "混乱ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0303, grp: 03, name: "鉄壁の魅了ガード", desc: "魅了ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0304, grp: 03, name: "鉄壁のマヒガード", desc: "マヒガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0305, grp: 03, name: "鉄壁の毒ガード", desc: "毒ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0306, grp: 03, name: "鉄壁の幻惑ガード", desc: "幻惑ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0307, grp: 03, name: "鉄壁の封印ガード", desc: "封印ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0308, grp: 03, name: "鉄壁の転びガード", desc: "転びガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0309, grp: 03, name: "鉄壁のしばりガード", desc: "しばりガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0310, grp: 03, name: "鉄壁のおびえガード", desc: "おびえガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0311, grp: 03, name: "鉄壁の即死ガード", desc: "即死ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0312, grp: 03, name: "鉄壁の呪いガード", desc: "呪いガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0313, grp: 03, name: "鉄壁のみとれガード", desc: "みとれガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0314, grp: 03, name: "鉄壁の踊りガード", desc: "踊らされガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0315, grp: 03, name: "鉄壁のＭＰ吸収ガード", desc: "ＭＰ吸収ガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0316, grp: 03, name: "鉄壁のはどうガード", desc: "はどうガード率が　[２]％アップします。" });
    OrbMaster[0].push({ id: 0317, grp: 03, name: "鉄壁の笑いガード", desc: "笑いガード率が　[２]％アップします。" });
    
    OrbGroup[0][04] = "属性ガード";
    OrbMaster[0].push({ id: 0401, grp: 04, name: "鉄壁の炎耐性", desc: "炎ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0402, grp: 04, name: "鉄壁の氷耐性", desc: "氷ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0403, grp: 04, name: "鉄壁の風耐性", desc: "風ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0404, grp: 04, name: "鉄壁の土耐性", desc: "土ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0405, grp: 04, name: "鉄壁の光耐性", desc: "光ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0406, grp: 04, name: "鉄壁の闇耐性", desc: "闇ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0407, grp: 04, name: "鉄壁の雷耐性", desc: "雷ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0501, grp: 04, name: "鉄壁の攻撃呪文耐性", desc: "攻撃呪文ダメージを　[１]％軽減します。" });
    OrbMaster[0].push({ id: 0502, grp: 04, name: "鉄壁のブレス耐性", desc: "ブレスダメージを　[１]％軽減します。" });

    OrbMaster[1] = [];
    OrbGroup[1] = [];
    
    OrbGroup[1][01] = "始まりの…";
    OrbMaster[1].push({ id: 0101, grp: 01, name: "始まりのラリホー", desc: "開戦時に[２]％の確率で　敵１体に　ラリホーをかけます。" });
    OrbMaster[1].push({ id: 0102, grp: 01, name: "始まりのヘナトス", desc: "開戦時に[２]％の確率で　敵１体に　ヘナトスをかけます。" });
    OrbMaster[1].push({ id: 0103, grp: 01, name: "始まりのルカニ", desc: "開戦時に[２]％の確率で　敵１体に　ルカニをかけます。" });
    OrbMaster[1].push({ id: 0104, grp: 01, name: "始まりのボミエ", desc: "開戦時に[２]％の確率で　敵１体に　ボミエをかけます。" });
    OrbMaster[1].push({ id: 0105, grp: 01, name: "始まりのバイシオン", desc: "開戦時に[２]％の確率で　自分に　バイシオンがかかります。" });
    OrbMaster[1].push({ id: 0106, grp: 01, name: "始まりの重さダウン", desc: "開戦時に[２]％の確率で　自分に　重さダウンがかかります。" });
    OrbMaster[1].push({ id: 0107, grp: 01, name: "始まりのぶきみなひかり", desc: "開戦時に[２]％の確率で　敵１体に　ぶきみなひかりをかけます。" });
    OrbMaster[1].push({ id: 0108, grp: 01, name: "始まりの聖女の守り", desc: "開戦時に[２]％の確率で　自分に　聖女の守りがかかります。" });
    OrbMaster[1].push({ id: 0109, grp: 01, name: "始まりのキラキラポーン", desc: "開戦時に[２]％の確率で　自分に　キラキラポーンがかかります。" });
    OrbMaster[1].push({ id: 0110, grp: 01, name: "始まりのチャージタイム短縮", desc: "開戦時に[２]％の確率で　チャージ時間が　１０秒減ります。" });
    OrbMaster[1].push({ id: 0111, grp: 01, name: "始まりの移動速度アップ", desc: "開戦時に[１]％の確率で　移動速度がアップします。" });

    OrbGroup[1][03] = "不滅の…";
    OrbMaster[1].push({ id: 0301, grp: 03, name: "不滅の回復呪文強化", desc: "死亡時に[３]％の確率で　呪文の回復量アップ効果が残ります。" });
    OrbMaster[1].push({ id: 0302, grp: 03, name: "不滅の攻撃呪文強化", desc: "死亡時に[３]％の確率で　呪文の威力アップ効果が残ります。" });
    OrbMaster[1].push({ id: 0303, grp: 03, name: "不滅のテンション", desc: "死亡時に[３]％の確率で　テンション効果が残ります。" });
    OrbMaster[1].push({ id: 0304, grp: 03, name: "不滅の攻撃力アップ", desc: "死亡時に[３]％の確率で　攻撃力アップ効果が残ります。" });
    
    OrbGroup[1][05] = "弱体・状態異常呪文";
    OrbMaster[1].push({ id: 0501, grp: 05, name: "ヘナトスの技巧", desc: "ヘナトスの成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0502, grp: 05, name: "ルカニ系呪文の技巧", desc: "ルカニ系呪文の成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0503, grp: 05, name: "ボミエ系呪文の技巧", desc: "ボミエ系呪文の成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0504, grp: 05, name: "ディバインスペルの技巧", desc: "ディバインスペルの成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0505, grp: 05, name: "ラリホー系呪文の技巧", desc: "ラリホー系呪文の成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0506, grp: 05, name: "メダパニ系呪文の技巧", desc: "メダパニ系呪文の成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0507, grp: 05, name: "マヌーサの技巧", desc: "マヌーサの成功率が　[５]％アップします。" });
    OrbMaster[1].push({ id: 0508, grp: 05, name: "マホトーンの技巧", desc: "マホトーンの成功率が　[５]％アップします。" });
    
    OrbGroup[1][06] = "蘇生・回復呪文";
    OrbMaster[1].push({ id: 0601, grp: 06, name: "ホイミの奇跡", desc: "ホイミの回復量が　[２]％アップします。" });
    OrbMaster[1].push({ id: 0602, grp: 06, name: "ベホイミの奇跡", desc: "ベホイミの回復量が　[２]％アップします。" });
    OrbMaster[1].push({ id: 0603, grp: 06, name: "ベホイムの奇跡", desc: "ベホイムの回復量が　[２]％アップします。" });
    OrbMaster[1].push({ id: 0604, grp: 06, name: "ベホマラーの奇跡", desc: "ベホマラーの回復量が　[２]％アップします。" });
    OrbMaster[1].push({ id: 0701, grp: 06, name: "ザオの戦域", desc: "ザオの射程距離が　[０.５]ｍアップします。" });
    OrbMaster[1].push({ id: 0702, grp: 06, name: "ザオラルの戦域", desc: "ザオラルの射程距離が　[０.２]ｍアップします。" });
    OrbMaster[1].push({ id: 0703, grp: 06, name: "ザオリクの戦域", desc: "ザオリクの射程距離が　[０.２]ｍアップします。" });

	OrbGroup[1][99] = "その他";
    OrbMaster[1].push({ id: 0402, grp: 99, name: "復活のＨＰ回復量アップ", desc: "蘇生時のＨＰ回復量が　[１]％アップします。" });
    OrbMaster[1].push({ id: 0403, grp: 99, name: "忍耐のＭＰ回復", desc: "ダメージ時に[３]％の確率で　受けたダメージの[１]％　ＭＰを回復します。" });
    OrbMaster[1].push({ id: 0201, grp: 99, name: "ヘナトスの盾", desc: "盾・武器ガード時に[２]％の確率で　相手に　ヘナトスをかけます。" });
    OrbMaster[1].push({ id: 0202, grp: 99, name: "ルカニの盾", desc: "盾・武器ガード時に[２]％の確率で　相手に　ルカニをかけます。" });
    OrbMaster[1].push({ id: 0401, grp: 99, name: "逆境のみかわしアップ", desc: "瀕死時に[３]％の確率で　みかわし率が３０％増えます。" });
    
    OrbMaster[2] = [];
    OrbGroup[2] = [];
    OrbGroup[2][01] = "果てなき…";
    OrbMaster[2].push({ id: 0101, grp: 01, name: "果てなき攻撃力アップ", desc: "攻撃力アップの効果時間が　[２]秒アップします。" });
    OrbMaster[2].push({ id: 0102, grp: 01, name: "果てなき守備力アップ", desc: "守備力アップの効果時間が　[２]秒アップします。" });
    OrbMaster[2].push({ id: 0103, grp: 01, name: "果てなき攻撃呪文威力アップ", desc: "攻撃呪文威力アップの効果時間が　[２]秒アップします。" });
    OrbMaster[2].push({ id: 0104, grp: 01, name: "果てなき回復呪文威力アップ", desc: "回復呪文威力アップの効果時間が　[２]秒アップします。" });
    OrbMaster[2].push({ id: 0105, grp: 01, name: "果てなき聖女の守り", desc: "聖女のまもりの効果時間が　[２]秒アップします。" });
    
    OrbGroup[2][02] = "禁断の…";
    OrbMaster[2].push({ id: 0201, grp: 02, name: "禁断のＭＰアップ", desc: "最大ＨＰが　[２]ダウンし、最大ＭＰが　[２]アップします。" });
    OrbMaster[2].push({ id: 0202, grp: 02, name: "禁断のちからアップ", desc: "みのまもりが　[５]ダウンし、ちからが　[１]アップします。" });
    OrbMaster[2].push({ id: 0203, grp: 02, name: "禁断のおもさアップ", desc: "移動速度が　[２]％ダウンし、おもさが　[１]アップします。" });
    OrbMaster[2].push({ id: 0204, grp: 02, name: "禁断のこうげき魔力アップ", desc: "ＨＰが　[３]ダウンし、こうげき魔力が　[１]アップします。" });
    OrbMaster[2].push({ id: 0205, grp: 02, name: "禁断のかいふく魔力アップ", desc: "ＭＰが　[２]ダウンし、かいふく魔力が　[２]アップします。" });
    
    OrbGroup[2][03] = "復讐の…";
    OrbMaster[2].push({ id: 0301, grp: 03, name: "復讐のバイシオン", desc: "味方死亡時に[３]％の確率で　自分に　バイシオンがかかります。" });
    OrbMaster[2].push({ id: 0302, grp: 03, name: "復讐のスカラ", desc: "味方死亡時に[３]％の確率で　自分に　スカラがかかります。" });
    OrbMaster[2].push({ id: 0303, grp: 03, name: "復讐のテンションアップ", desc: "味方死亡時に[３]％の確率で　自分の　テンションがあがります。" });
    OrbMaster[2].push({ id: 0304, grp: 03, name: "復讐の早詠みの杖", desc: "味方死亡時に[３]％の確率で　自分に　早詠みがかかります。" });
    OrbMaster[2].push({ id: 0305, grp: 03, name: "復讐の聖なる祈り", desc: "味方死亡時に[３]％の確率で　自分に　聖なる祈りがかかります。" });
    OrbMaster[2].push({ id: 0306, grp: 03, name: "復讐の聖女の守り", desc: "味方死亡時に[３]％の確率で　自分に　聖女の守りがかかります。" });
    
    OrbGroup[2][02] = "鉄壁の…";
    OrbMaster[2].push({ id: 0501, grp: 05, name: "鉄壁の会心完全ガード", desc: "会心完全ガード率が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0502, grp: 05, name: "鉄壁のふっとびガード", desc: "ふっとびガード率が　[１]％アップします。" });

    OrbGroup[2][06] = "攻撃呪文全般";
    OrbMaster[2].push({ id: 0601, grp: 06, name: "メラゾーマの瞬き", desc: "メラゾーマの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0602, grp: 06, name: "メラガイアーの瞬き", desc: "メラガイアーの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0603, grp: 06, name: "マヒャドの瞬き", desc: "マヒャドの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0604, grp: 06, name: "マヒャデドスの瞬き", desc: "マヒャデドスの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0605, grp: 06, name: "イオナズンの瞬き", desc: "イオナズンの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0606, grp: 06, name: "イオグランデの瞬き", desc: "イオグランデの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0607, grp: 06, name: "バギクロスの瞬き", desc: "バギクロスの詠唱速度が　[４]％アップします。" });
    OrbMaster[2].push({ id: 0608, grp: 06, name: "バギムーチョの瞬き", desc: "バギムーチョの詠唱速度が　[４]％アップします。" });
    OrbMaster[2].push({ id: 0609, grp: 06, name: "ドルモーアの瞬き", desc: "ドルモーアの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0610, grp: 06, name: "ドルマドンの瞬き", desc: "ドルマドンの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0611, grp: 06, name: "マホトラの瞬き", desc: "マホトラの詠唱速度が　[４]％アップします。" });
    
    OrbGroup[2][07] = "弱体・状態異常呪文";
    OrbMaster[2].push({ id: 0701, grp: 07, name: "ヘナトスの瞬き", desc: "ヘナトスの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0702, grp: 07, name: "ルカニ系呪文の瞬き", desc: "ルカニ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0703, grp: 07, name: "ボミエ系呪文の瞬き", desc: "ボミエ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0704, grp: 07, name: "ディバインスペルの瞬き", desc: "ディバインスペルの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0705, grp: 07, name: "ラリホー系呪文の瞬き", desc: "ラリホー系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0706, grp: 07, name: "メダパニ系呪文の瞬き", desc: "メダパニ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0707, grp: 07, name: "マヌーサの瞬き", desc: "マヌーサの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0708, grp: 07, name: "マホトーンの瞬き", desc: "マホトーンの詠唱速度が　[３]％アップします。" });
    
    OrbGroup[2][08] = "強化呪文";
    OrbMaster[2].push({ id: 0801, grp: 08, name: "バイキルト系呪文の瞬き", desc: "バイキルト系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0802, grp: 08, name: "スカラ系呪文の瞬き", desc: "スカラ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0803, grp: 08, name: "ピオラ系呪文の瞬き", desc: "ピオラ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0804, grp: 08, name: "ズッシードの瞬き", desc: "ズッシードの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0805, grp: 08, name: "マホカンタ系呪文の瞬き", desc: "マホカンタ系呪文の詠唱速度が　[４]％アップします。" });
    OrbMaster[2].push({ id: 0806, grp: 08, name: "マホキテの瞬き", desc: "マホキテの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0807, grp: 08, name: "フバーハ系呪文の瞬き", desc: "フバーハ系呪文の詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0808, grp: 08, name: "マジックバリアの瞬き", desc: "マジックバリアの詠唱速度が　[３]％アップします。" });
    
    OrbGroup[2][09] = "蘇生・回復呪文";
    OrbMaster[2].push({ id: 0901, grp: 09, name: "ベホイミの瞬き", desc: "ベホイミの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0902, grp: 09, name: "ベホイムの瞬き", desc: "ベホイムの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0903, grp: 09, name: "ベホマラーの瞬き", desc: "ベホマラーの詠唱速度が　[２]％アップします。" });
    OrbMaster[2].push({ id: 0904, grp: 09, name: "ザオの瞬き", desc: "ザオの詠唱速度が　[５]％アップします。" });
    OrbMaster[2].push({ id: 0905, grp: 09, name: "ザオラルの瞬き", desc: "ザオラルの詠唱速度が　[３]％アップします。" });
    OrbMaster[2].push({ id: 0906, grp: 09, name: "ザオリクの瞬き", desc: "ザオリクの詠唱速度が　[３]％アップします。" });
    
    OrbGroup[2][00] = "その他";
    OrbMaster[2].push({ id: 0401, grp: 00, name: "共鳴のテンションアップ", desc: "[１]％の確率で　テンションリンクします。" });
    OrbMaster[2].push({ id: 0402, grp: 00, name: "気まぐれな追撃", desc: "[１]％の確率で　２回行動します。" });
    OrbMaster[2].push({ id: 0403, grp: 00, name: "打たれ名人", desc: "受けるダメージを　[２]減らします。" });
    OrbMaster[2].push({ id: 0404, grp: 00, name: "勝ちどきＭＰ回復", desc: "敵を倒すと　ＭＰを[１]回復します。" });
    OrbMaster[2].push({ id: 0405, grp: 00, name: "奇跡の会心攻撃", desc: "会心、暴走時のダメージが　[５]アップします。" });
    
    OrbMaster[3] = [];
    OrbGroup[3] = [];
    OrbGroup[3][01] = "攻撃呪文";
    OrbMaster[3].push({ id: 0101, grp: 01, name: "メラ系とギラ系呪文の極意", desc: "メラ系とギラ系呪文の威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0102, grp: 01, name: "イオ系呪文の極意", desc: "イオ系呪文の威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0103, grp: 01, name: "ヒャド系呪文の極意", desc: "ヒャド系呪文の威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0104, grp: 01, name: "バギ系呪文の極意", desc: "バギ系呪文の威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0105, grp: 01, name: "ドルマ系呪文の極意", desc: "ドルマ系呪文ダメージの威力が　[１]％アップします。" });
    
    OrbGroup[3][02] = "戦士";
    OrbMaster[3].push({ id: 0201, grp: 02, name: "かばうの極意", desc: "かばう中のダメージを　[１]減らします。" });
    OrbMaster[3].push({ id: 0202, grp: 02, name: "ロストアタックの極意", desc: "ロストアタックの威力が　[８]％アップします。" });
    OrbMaster[3].push({ id: 0203, grp: 02, name: "たいあたりの極意", desc: "たいあたりの威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0204, grp: 02, name: "やいばくだきの極意", desc: "やいばくだきの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0205, grp: 02, name: "チャージタックルの極意", desc: "チャージタックルの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0206, grp: 02, name: "真・やいばくだきの極意", desc: "真・やいばくだきの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0207, grp: 02, name: "真・やいばくだきの技巧", desc: "真・やいばくだきの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0208, grp: 02, name: "会心必中の極意", desc: "会心必中の威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0209, grp: 02, name: "会心必中の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][03] = "僧侶";
    OrbMaster[3].push({ id: 0301, grp: 03, name: "おはらいの瞬き", desc: "おはらいの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0302, grp: 03, name: "果てなきマホトラのころも", desc: "マホトラのころもの効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 0303, grp: 03, name: "天使の守りの瞬き", desc: "天使の守りの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0304, grp: 03, name: "ホーリーライトの極意", desc: "ホーリーライトの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0305, grp: 03, name: "聖者の詩の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][04] = "魔法使い";
    OrbMaster[3].push({ id: 0401, grp: 04, name: "ぶきみなひかりの瞬き", desc: "ぶきみなひかりの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0402, grp: 04, name: "ぶきみなひかりの技巧", desc: "ぶきみなひかりの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0403, grp: 04, name: "魔力かくせいの瞬き", desc: "魔力かくせいの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0404, grp: 04, name: "ミラクルゾーンの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][05] = "武闘家";
    OrbMaster[3].push({ id: 0501, grp: 05, name: "ためるの極意", desc: "ためる時に　[１]％の確率で　追加でテンションアップします。" });
    OrbMaster[3].push({ id: 0502, grp: 05, name: "心頭滅却の瞬き", desc: "心頭滅却の発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0503, grp: 05, name: "おたけびの技巧", desc: "おたけびの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0504, grp: 05, name: "めいそうの奇跡", desc: "めいそうのＨＰ回復量が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0505, grp: 05, name: "ためる弐の極意", desc: "ためる弐に　[１]％の確率で　追加でテンションアップします。" });
    OrbMaster[3].push({ id: 0506, grp: 05, name: "無念無想の奇跡", desc: "無念無想のＭＰ回復量が　[２]％アップします。" });
    OrbMaster[3].push({ id: 0507, grp: 05, name: "ためる参の極意", desc: "ためる参に　[１]％の確率で　追加でテンションアップします。" });
    OrbMaster[3].push({ id: 0508, grp: 05, name: "一喝の極意", desc: "一喝時に　[３]％の確率で　追加でテンションアップします。" });
    OrbMaster[3].push({ id: 0509, grp: 05, name: "一喝の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][06] = "盗賊";
    OrbMaster[3].push({ id: 0601, grp: 06, name: "サプライズラッシュの極意", desc: "サプライズラッシュが威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0602, grp: 06, name: "サプライズラッシュの技巧", desc: "サプライズラッシュの成功率が　[１]％アップします。" });
    OrbMaster[3].push({ id: 0603, grp: 06, name: "お宝ハンターの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    OrbMaster[3].push({ id: 0604, grp: 06, name: "お宝ハンターの極意", desc: "お宝ハンターのダメージが　[５０]アップします。" });
    
    OrbGroup[3][07] = "旅芸人";
    OrbMaster[3].push({ id: 0701, grp: 07, name: "ボケの技巧", desc: "ボケの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0702, grp: 07, name: "果てなきタップダンス", desc: "タップダンスの効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 0703, grp: 07, name: "キラージャグリングの極意", desc: "キラージャグリングの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0704, grp: 07, name: "ハッスルダンスの奇跡", desc: "ハッスルダンスのＨＰ回復量が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0705, grp: 07, name: "ハッスルダンスの戦域", desc: "ハッスルダンスの範囲が　[０.３]ｍアップします。" });
    OrbMaster[3].push({ id: 0706, grp: 07, name: "ゴッドジャグリングの極意", desc: "ゴッドジャグリングの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0707, grp: 07, name: "たたかいのビートの戦域", desc: "たたかいのビートの範囲が　[０.３]ｍアップします。" });
    OrbMaster[3].push({ id: 0708, grp: 07, name: "アクロバットスターの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][08] = "バトルマスター";
    OrbMaster[3].push({ id: 0801, grp: 08, name: "とうこん討ちの極意", desc: "とうこん討ちの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0802, grp: 08, name: "もろば斬りの極意", desc: "もろば斬りの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0803, grp: 08, name: "無心こうげきの極意", desc: "無心こうげきの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0804, grp: 08, name: "天下無双の極意", desc: "天下無双の威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 0805, grp: 08, name: "果てなきテンションバーン", desc: "テンションバーンの効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 0806, grp: 08, name: "果てなきミラクルブースト", desc: "ミラクルブーストの効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 0807, grp: 08, name: "テンションブーストの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][09] = "パラディン";
    OrbMaster[3].push({ id: 0901, grp: 09, name: "やいばのぼうぎょの極意", desc: "やいばのぼうぎょ中のダメージを　[１]％減らします。" });
    OrbMaster[3].push({ id: 0902, grp: 09, name: "におうだちの極意", desc: "におうだち中のダメージを　[１]減らします。" });
    OrbMaster[3].push({ id: 0903, grp: 09, name: "果てなきヘヴィチャージ", desc: "ヘヴィチャージの効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 0904, grp: 09, name: "大ぼうぎょの極意", desc: "大ぼうぎょ中のダメージを　[２]％減らします。" });
    OrbMaster[3].push({ id: 0905, grp: 09, name: "グランドネビュラの極意", desc: "グランドネビュラの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 0906, grp: 09, name: "果てなきパラディンガード", desc: "パラディンガードの効果時間が　[１]秒アップします。" });
    OrbMaster[3].push({ id: 0907, grp: 09, name: "パラディンガードの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][10] = "魔法戦士";
    OrbMaster[3].push({ id: 1001, grp: 10, name: "ファイアフォースの護り", desc: "ファイアフォース中の炎耐性が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1002, grp: 10, name: "アイスフォースの護り", desc: "アイスフォース中の氷耐性が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1003, grp: 10, name: "ストームフォースの護り", desc: "ストームフォース中の風雷耐性が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1004, grp: 10, name: "ダークフォースの護り", desc: "ダークフォース中の闇土耐性が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1005, grp: 10, name: "ライトフォースの護り", desc: "ライトフォース中の光耐性が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1006, grp: 10, name: "フォースブレイクの極意", desc: "フォースブレイクの威力が　[６]％アップします。" });
    OrbMaster[3].push({ id: 1007, grp: 10, name: "フォースブレイクの技巧", desc: "フォースブレイクの成功率が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1008, grp: 10, name: "マダンテの極意", desc: "マダンテの威力が　[１]％アップします。" });
    OrbMaster[3].push({ id: 1009, grp: 10, name: "マジックルーレットの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    OrbMaster[3].push({ id: 1010, grp: 10, name: "マジックルーレットの戦域", desc: "マジックルーレットの効果範囲が　[０.３]ｍアップします。" });
    
    OrbGroup[3][11] = "レンジャー";
    OrbMaster[3].push({ id: 1101, grp: 11, name: "てなづけるの技巧", desc: "てなづけるの成功率が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1102, grp: 11, name: "メタルトラップの技巧", desc: "メタルトラップの成功率が　[６]％アップします。" });
    OrbMaster[3].push({ id: 1103, grp: 11, name: "オオカミアタックの極意", desc: "オオカミアタックの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 1104, grp: 11, name: "あんこくのきりの技巧", desc: "あんこくのきりの成功率が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1105, grp: 11, name: "フェンリルアタックの極意", desc: "フェンリルアタックの威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 1106, grp: 11, name: "妖精たちのポルカの閃き", desc: "妖精たちのポルカの必殺チャージが　[０.５]％アップします。" });
    
    OrbGroup[3][12] = "賢者";
    OrbMaster[3].push({ id: 1201, grp: 12, name: "いやしの雨の瞬き", desc: "いやしの雨の発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1202, grp: 12, name: "魔導の書の技巧", desc: "魔導の書の成功率が　[８]％アップします。" });
    OrbMaster[3].push({ id: 1203, grp: 12, name: "果てなき神の息吹", desc: "神の息吹の効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 1204, grp: 12, name: "神の息吹の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][13] = "スーパースター";
    OrbMaster[3].push({ id: 1301, grp: 13, name: "サインぜめの極意", desc: "サインぜめの威力が　[５０]％アップします。" });
    OrbMaster[3].push({ id: 1302, grp: 13, name: "スキャンダルの技巧", desc: "スキャンダルの成功率が　[２]％アップします。" });
    OrbMaster[3].push({ id: 1303, grp: 13, name: "メイクアップの瞬き", desc: "メイクアップの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1304, grp: 13, name: "果てなきモンスターゾーン", desc: "モンスターゾーンのシビれさせる効果時間が　[１]秒アップします。" });
    OrbMaster[3].push({ id: 1401, grp: 14, name: "モンスターゾーンの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][14] = "まもの使い";
    OrbMaster[3].push({ id: 1402, grp: 14, name: "ブレスクラッシュの極意", desc: "ブレスクラッシュの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1403, grp: 14, name: "ブレスクラッシュの技巧", desc: "ブレスクラッシュの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1404, grp: 14, name: "スキルクラッシュの極意", desc: "スキルクラッシュの威力が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1405, grp: 14, name: "スキルクラッシュの技巧", desc: "スキルクラッシュの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1406, grp: 14, name: "果てなきウォークライ", desc: "ウォークライの効果時間が　[１]秒アップします。" });
    OrbMaster[3].push({ id: 1407, grp: 14, name: "果てなきビーストモード", desc: "ビーストモードの効果時間が　[１]秒アップします。" });
    OrbMaster[3].push({ id: 1408, grp: 14, name: "ビーストモードの閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][15] = "道具使い";
    OrbMaster[3].push({ id: 1501, grp: 15, name: "果てなきどうぐ倍化術", desc: "どうぐ倍化術の効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 1502, grp: 15, name: "磁界シールドの瞬き", desc: "磁界シールドの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1503, grp: 15, name: "果てなきどうぐ範囲化術", desc: "どうぐ範囲化術の効果時間が　[３]秒アップします。" });
    OrbMaster[3].push({ id: 1504, grp: 15, name: "メディカルデバイスの瞬き", desc: "メディカルデバイスの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1505, grp: 15, name: "プラズマリムーバーの瞬き", desc: "プラズマリムーバーの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1506, grp: 15, name: "プラズマリムーバーの戦域", desc: "プラズマリムーバーの効果範囲が　[０.５]ｍアップします。" });
    OrbMaster[3].push({ id: 1507, grp: 15, name: "強化ガジェット零式の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });
    
    OrbGroup[3][16] = "踊り子";
    OrbMaster[3].push({ id: 1601, grp: 16, name: "もうどくブルースの瞬き", desc: "もうどくブルースの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1602, grp: 16, name: "会心まいしんラップの瞬き", desc: "会心まいしんラップの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1603, grp: 16, name: "祈りのゴスペルの瞬き", desc: "祈りのゴスペルの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1604, grp: 16, name: "覚醒のアリアの瞬き", desc: "覚醒のアリアの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1605, grp: 16, name: "よみがえり節の瞬き", desc: "よみがり節の発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1606, grp: 16, name: "魔力のバラードの瞬き", desc: "魔力のバラードの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1607, grp: 16, name: "回復のララバイの瞬き", desc: "回復のララバイの発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1608, grp: 16, name: "ふういんのダンスの技巧", desc: "ふういんのダンスの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1609, grp: 16, name: "こんらんのダンスの技巧", desc: "こんらんのダンスの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1610, grp: 16, name: "ねむりのダンスの技巧", desc: "ねむりのダンスの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1611, grp: 16, name: "ドラゴンステップの技巧", desc: "ドラゴンステップの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1612, grp: 16, name: "ビーナスステップの技巧", desc: "ビーナスステップの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1613, grp: 16, name: "ロイヤルステップの技巧", desc: "ロイヤルステップの成功率が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1614, grp: 16, name: "つるぎの舞の極意", desc: "つるぎの舞の威力が　[３]％アップします。" });
    OrbMaster[3].push({ id: 1615, grp: 16, name: "戦鬼の乱れ舞の瞬き", desc: "戦鬼の乱れ舞の発動速度が　[５]％アップします。" });
    OrbMaster[3].push({ id: 1616, grp: 16, name: "荒神の舞の閃き", desc: "必殺チャージ率が　[０.５]％アップします。" });

    OrbMaster[4] = [];
    OrbGroup[4] = [];
    OrbGroup[4][01] = "格闘";
    OrbMaster[4].push({ id: 0101, grp: 01, name: "石つぶての極意", desc: "石つぶての威力が　[１００]％アップします。" });
    OrbMaster[4].push({ id: 0102, grp: 01, name: "かまいたちの極意", desc: "かまいたちの威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 0103, grp: 01, name: "せいけん突きの極意", desc: "せいけん突きの威力が[５]％、会心率が[１]％アップします。" });
    OrbMaster[4].push({ id: 0104, grp: 01, name: "ムーンサルトの極意", desc: "ムーンサルトの威力が　[３０]％アップします。" });
    OrbMaster[4].push({ id: 0105, grp: 01, name: "ばくれつけんの極意", desc: "ばくれつけんの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 0106, grp: 01, name: "岩石おとしの極意", desc: "岩石おとしの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0107, grp: 01, name: "せいけん爆撃の極意", desc: "せいけん爆撃の威力が[３]％、会心率が[１]％アップします。" });
    
    OrbGroup[4][02] = "片手剣";
    OrbMaster[4].push({ id: 0201, grp: 02, name: "かえん斬りの極意", desc: "かえん斬りの威力が　[１５]％アップします。" });
    OrbMaster[4].push({ id: 0202, grp: 02, name: "ドラゴン斬りの極意", desc: "ドラゴン斬りの威力が　[２５]％アップします。" });
    OrbMaster[4].push({ id: 0203, grp: 02, name: "ミラクルソードの極意", desc: "ミラクルソードの威力が[５]％、回復量が[５]％アップします。" });
    OrbMaster[4].push({ id: 0204, grp: 02, name: "はやぶさ斬りの極意", desc: "はやぶさ斬りの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 0205, grp: 02, name: "ギガスラッシュの極意", desc: "ギガスラッシュの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0206, grp: 02, name: "超はやぶさ斬りの極意", desc: "超はやぶさ斬りの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 0207, grp: 02, name: "ギガブレイクの極意", desc: "ギガブレイクの威力が　[５]％アップします。" });
    
    OrbGroup[4][03] = "両手剣";
    OrbMaster[4].push({ id: 0301, grp: 03, name: "果てなきブレードガード", desc: "ブレードガードの効果時間が　[３]秒アップします。" });
    OrbMaster[4].push({ id: 0302, grp: 03, name: "ドラゴンスラッシュの極意", desc: "ドラゴンスラッシュの威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 0303, grp: 03, name: "ぶんまわしの極意", desc: "ぶんまわしの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 0304, grp: 03, name: "フリーズブレードの極意", desc: "フリーズブレードの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 0305, grp: 03, name: "渾身斬りの極意", desc: "渾身斬りの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0306, grp: 03, name: "ビッグバンの極意", desc: "ビッグバンの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0307, grp: 03, name: "全身全霊斬りの極意", desc: "渾身斬りの威力が　[３]％アップします。" });
    
    OrbGroup[4][04] = "短剣";
    OrbMaster[4].push({ id: 0401, grp: 04, name: "キラーブーンの極意", desc: "キラーブーンの威力が　[２５]％アップします。" });
    OrbMaster[4].push({ id: 0402, grp: 04, name: "スリープダガーの極意", desc: "スリープダガーの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 0403, grp: 04, name: "スリープダガーの技巧", desc: "スリープダガーの成功率が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0404, grp: 04, name: "ヒュプノスハントの極意", desc: "ヒュプノスハントの眠り混乱中の威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0405, grp: 04, name: "ヴァイパーファングの極意", desc: "ヴァイパーファングの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0406, grp: 04, name: "ヴァイパーファングの技巧", desc: "ヴァイパーファングの成功率が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0407, grp: 04, name: "タナトスハントの極意", desc: "タナトスハントの毒マヒ中の威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0408, grp: 04, name: "カオスエッジの極意", desc: "カオスエッジの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 0409, grp: 04, name: "ナイトメアファングの極意", desc: "ナイトメアファングの威力が　[５]％アップします。" });
    
    OrbGroup[4][05] = "スティック";
    OrbMaster[4].push({ id: 0501, grp: 05, name: "果てなきマジステッキ", desc: "マジステッキの効果時間が　[３]秒アップします。" });
    OrbMaster[4].push({ id: 0502, grp: 05, name: "デビルンチャームの極意", desc: "デビルンチャームの威力が[２０]％、魅了成功率が[２]％アップします。" });
    OrbMaster[4].push({ id: 0503, grp: 05, name: "パニパニハニーの技巧", desc: "パニパニハニーの混乱の成功率が　[１０]％アップします。" });
    
    OrbGroup[4][06] = "両手杖";
    OrbMaster[4].push({ id: 0601, grp: 06, name: "悪魔ばらいの極意", desc: "悪魔ばらいの威力が[２０]％、マヒ成功率が[２]％アップします。" });
    OrbMaster[4].push({ id: 0602, grp: 06, name: "果てなき早詠みの杖", desc: "早詠みの杖の効果時間が　[２]秒アップします。" });
    OrbMaster[4].push({ id: 0603, grp: 06, name: "しゅくふくの杖の奇跡", desc: "しゅくふくの杖の回復量が　[１０]％アップします。" });
    
    OrbGroup[4][07] = "槍";
    OrbMaster[4].push({ id: 0701, grp: 07, name: "けもの突きの極意", desc: "けもの突きの威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 0702, grp: 07, name: "雷鳴突きの極意", desc: "雷鳴突きの威力が　[１５]％アップします。" });
    OrbMaster[4].push({ id: 0703, grp: 07, name: "一閃突きの極意", desc: "一閃突きの会心率が　[２]％アップします。" });
    OrbMaster[4].push({ id: 0704, grp: 07, name: "狼牙突きの極意", desc: "狼牙突きの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0705, grp: 07, name: "さみだれ突きの極意", desc: "さみだれ突きの威力が　[４]％アップします。" });
    OrbMaster[4].push({ id: 0706, grp: 07, name: "ジゴスパークの極意", desc: "ジゴスパークの威力が　[５]％アップします。" });
    
    OrbGroup[4][08] = "オノ";
    OrbMaster[4].push({ id: 0801, grp: 08, name: "たいぼく斬の極意", desc: "たいぼく斬の威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 0802, grp: 08, name: "かぶと割りの極意", desc: "かぶと割りのダメージが　[５]％アップします。" });
    OrbMaster[4].push({ id: 0803, grp: 08, name: "まじん斬りの極意", desc: "まじん斬りの会心率が　[２]％アップします。" });
    OrbMaster[4].push({ id: 0804, grp: 08, name: "蒼天魔斬の極意", desc: "蒼天魔斬のダメージが　[３]％アップします。" });
    OrbMaster[4].push({ id: 0805, grp: 08, name: "オノむそうの極意", desc: "オノむそうの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0806, grp: 08, name: "鉄甲斬の極意", desc: "鉄甲斬の威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 0807, grp: 08, name: "真・オノむそうの極意", desc: "真・オノむそうの威力が　[３]％アップします。" });
    
    OrbGroup[4][09] = "ハンマー";
    OrbMaster[4].push({ id: 0901, grp: 09, name: "ウェイトブレイクの極意", desc: "ウェイトブレイクの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0902, grp: 09, name: "ウェイトブレイクの技巧", desc: "ウェイトブレイクの成功率が　[１０]％アップします。" });
    OrbMaster[4].push({ id: 0903, grp: 09, name: "ドラムクラッシュの極意", desc: "ドラムクラッシュの威力が　[２５]％アップします。" });
    OrbMaster[4].push({ id: 0904, grp: 09, name: "シールドブレイクの極意", desc: "シールドブレイクの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 0905, grp: 09, name: "シールドブレイクの技巧", desc: "シールドブレイクの成功率が　[１０]％アップします。" });
    OrbMaster[4].push({ id: 0906, grp: 09, name: "キャンセルショットの技巧", desc: "キャンセルショットの成功率が　[２]％アップします。" });
    OrbMaster[4].push({ id: 0907, grp: 09, name: "ランドインパクトの極意", desc: "ランドインパクトの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 0908, grp: 09, name: "スタンショットの技巧", desc: "スタンショットの成功率が　[１]％アップします。" });
    OrbMaster[4].push({ id: 0909, grp: 09, name: "プレートインパクトの極意", desc: "プレートインパクトの威力が　[３]％アップします。" });
    
    OrbGroup[4][10] = "棍";
    OrbMaster[4].push({ id: 1001, grp: 10, name: "足ばらいの技巧", desc: "足ばらいの転びの成功率が　[５]％アップします。" });
    OrbMaster[4].push({ id: 1002, grp: 10, name: "黄泉送りの極意", desc: "黄泉送りの威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 1003, grp: 10, name: "なぎはらいの極意", desc: "なぎはらいの威力が　[２]％アップします。" });
    OrbMaster[4].push({ id: 1004, grp: 10, name: "氷結らんげきの極意", desc: "氷結らんげきの威力が　[４]％アップします。" });
    OrbMaster[4].push({ id: 1005, grp: 10, name: "奥義・棍閃殺の極意", desc: "奥義・棍閃殺の威力が　[３]％アップします。" });
    
    OrbGroup[4][11] = "ツメ";
    OrbMaster[4].push({ id: 1101, grp: 11, name: "ウィングブロウの極意", desc: "ウィングブロウの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 1102, grp: 11, name: "裂鋼拳の極意", desc: "裂鋼拳の威力が　[２０]％アップします。" });
    OrbMaster[4].push({ id: 1103, grp: 11, name: "必中拳の極意", desc: "必中拳の威力が[５]％、会心率が[１]％アップします。" });
    OrbMaster[4].push({ id: 1104, grp: 11, name: "タイガークローの極意", desc: "タイガークローの威力が　[２]％アップします。" });
    OrbMaster[4].push({ id: 1105, grp: 11, name: "ゴールドフィンガーの極意", desc: "ゴールドフィンガーの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1106, grp: 11, name: "サイクロンアッパーの極意", desc: "サイクロンアッパーの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 1107, grp: 11, name: "ライガークラッシュの極意", desc: "ライガークラッシュの威力が　[１]％アップします。" });
    
    OrbGroup[4][12] = "扇";
    OrbMaster[4].push({ id: 1201, grp: 12, name: "花ふぶきの技巧", desc: "花ふぶきの幻惑の成功率が　[８]％アップします。" });
    OrbMaster[4].push({ id: 1202, grp: 12, name: "波紋演舞の極意", desc: "波紋演舞のダメージが　[２５]％アップします。" });
    OrbMaster[4].push({ id: 1203, grp: 12, name: "おうぎのまいの極意", desc: "おうぎのまいの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 1204, grp: 12, name: "アゲハ乱舞の極意", desc: "アゲハ乱舞の威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1205, grp: 12, name: "ピンクタイフーンの極意", desc: "ピンクタイフーンの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 1206, grp: 12, name: "百花繚乱の極意", desc: "百花繚乱のダメージが　[３]％アップします。" });
    
    OrbGroup[4][13] = "ムチ";
    OrbMaster[4].push({ id: 1301, grp: 13, name: "らせん打ちの極意", desc: "らせん打ちの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 1302, grp: 13, name: "らせん打ちの技巧", desc: "らせん打ちの成功率が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1303, grp: 13, name: "愛のムチの極意", desc: "愛のムチのダメージが　[３５]％アップします。" });
    OrbMaster[4].push({ id: 1304, grp: 13, name: "スパークショットの極意", desc: "スパークショットの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 1305, grp: 13, name: "スパークショットの技巧", desc: "スパークショットの成功率が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1306, grp: 13, name: "しばり打ちの極意", desc: "しばり打ちの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 1307, grp: 13, name: "しばり打ちの技巧", desc: "しばり打ちの成功率が　[２]％アップします。" });
    OrbMaster[4].push({ id: 1308, grp: 13, name: "地ばしり打ちの極意", desc: "地ばしり打ちの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1309, grp: 13, name: "双竜打ちの極意", desc: "双竜打ちの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1310, grp: 13, name: "疾風迅雷の極意", desc: "疾風迅雷の威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1311, grp: 13, name: "極竜打ちの極意", desc: "極竜打ちの威力が　[３]％アップします。" });
    
    OrbGroup[4][14] = "ブーメラン";
    OrbMaster[4].push({ id: 1401, grp: 14, name: "スライムブロウの極意", desc: "スライムブロウの威力が　[２５]％アップします。" });
    OrbMaster[4].push({ id: 1402, grp: 14, name: "パワフルスローの極意", desc: "パワフルスローの威力が　[６]％アップします。" });
    OrbMaster[4].push({ id: 1403, grp: 14, name: "シャインスコールの極意", desc: "シャインスコールの威力が　[４０]％アップします。" });
    OrbMaster[4].push({ id: 1404, grp: 14, name: "バーニングバードの極意", desc: "バーニングバードの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1405, grp: 14, name: "デュアルカッターの極意", desc: "デュアルカッターの威力が　[３]％アップします。" });
    OrbMaster[4].push({ id: 1406, grp: 14, name: "フローズンバードの極意", desc: "フローズンバードの威力が　[２]％アップします。" });
    OrbMaster[4].push({ id: 1407, grp: 14, name: "デュアルブレイカーの極意", desc: "デュアルブレイカーの威力が　[３]％アップします。" });
    
    OrbGroup[4][15] = "弓";
    OrbMaster[4].push({ id: 1501, grp: 15, name: "マジックアローの極意", desc: "マジックアローの威力が　[８]％アップします。" });
    OrbMaster[4].push({ id: 1502, grp: 15, name: "マジックアローの技巧", desc: "マジックアローの成功率が　[１０]％アップします。" });
    OrbMaster[4].push({ id: 1503, grp: 15, name: "バードシュートの極意", desc: "バードシュートの威力が　[３５]％アップします。" });
    OrbMaster[4].push({ id: 1504, grp: 15, name: "サンダーボルトの極意", desc: "サンダーボルトの威力が　[１５]％アップします。" });
    OrbMaster[4].push({ id: 1505, grp: 15, name: "さみだれうちの極意", desc: "さみだれうちの威力が　[５]％アップします。" });
    OrbMaster[4].push({ id: 1506, grp: 15, name: "天使の矢の極意", desc: "天使の矢のダメージが[８]％、ＭＰ回復量が[２]％アップします。" });
    OrbMaster[4].push({ id: 1507, grp: 15, name: "シャイニングボウの極意", desc: "シャイニングボウのダメージが　[２]％アップします。" });
    OrbMaster[4].push({ id: 1508, grp: 15, name: "弓聖の守り星の戦域", desc: "弓聖の守り星の効果範囲が　[０.３]ｍアップします。" });
    OrbMaster[4].push({ id: 1509, grp: 15, name: "ダークネスショットの極意", desc: "ダークネスショットの威力が　[３]％アップします。" });

    
    for(var ot = 0; ot < OrbMaster.length; ot++){
    	for(var on = 0; on < OrbMaster[ot].length; on++){
    		OrbMaster[ot][on].ord = on;
    	}
    }

    window.orbmng.OrbMaster = OrbMaster;
	window.orbmng.OrbGroup = OrbGroup;
	
    /*********************************************************************************************************
    * シート内に表示するデータ
    **********************************************************************************************************/
    function SheetData() {

    }

    SheetData.prototype = {
        tp: 0,      // 石板タイプ
        ol: [],     // 宝珠リスト
        bd: []      // 石板データ
    };

    /**
    * エンコード
    * @param sheetData シート内に表示するデータ
    * @return エンコード文字列
    */
    SheetData.encode = function (sheetData, notEncode) {
        var boardStr = "";
        for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
                boardStr += sheetData.bd[r][c];
            }
        }
        var orbStr = "";
        for (var o = 0; o < sheetData.ol.length; o++) {
            var orb = sheetData.ol[o];
            if (orbStr != "") orbStr += ",";
            orbStr += orb.i + ":" + orb.n + ":" + orb.t + orb.p;
        }
        var string = sheetData.tp + "|" + boardStr + "|" + orbStr;
        if (!notEncode) {
            string = encodeURIComponent(base64.encode(string));
        }
        return string;
    };
    /**
    * デコード
    * @param compressedString エンコード文字列
    * @return シート内に表示するデータ
    */
    SheetData.decode = function (compressedString, notEncode) {
        var string = compressedString;
        if (!notEncode) {
            string = base64.decode(decodeURIComponent(compressedString));
        }
        var stringArr = string.split("|");

        var sheetData = {
            tp: 0,      // 石板タイプ
            ol: [],     // 宝珠リスト
            bd: []      // 石板データ
        };
        sheetData.tp = parseInt(stringArr[0], 10);

        var boardStr = stringArr[1];
        for (var r = 0; r < 6; r++) {
            var row = [];
            for (var c = 0; c < 6; c++) {
                var num = parseInt(boardStr.charAt(r * 6 + c), 10);
                row.push(num);
            }
            sheetData.bd.push(row);
        }

        var orbStr = stringArr[2];
        var orbStrArr = orbStr.split(",");
        for (var o = 0; o < orbStrArr.length; o++) {
            var orbItemArr = orbStrArr[o].split(":");
            var id = parseInt(orbItemArr[0], 10);
            var name = parseInt(orbItemArr[1], 10);
            var type = parseInt(orbItemArr[2].charAt(0), 10);
            var primary = parseInt(orbItemArr[2].charAt(1), 10);
            var orb = { i: id, n: name, t: type, p: primary };
            sheetData.ol.push(orb);
        }
        return sheetData;
    };

    SheetData.importFromHiroba = function () {
        if (window.__FROM_ORIGIN__) return;
        if (!jewelShape || !storageJewels || !lithographJewel) {
            alert("広場からデータを読み込めませんでした。");
            return;
        }

        var selectedOrbName = $("#orb-tab .orb-tab-active").attr("data-name");

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
                            type = 4;
                        } else if (yc == 2) {
                            type = 6;
                        }
                    }
                }
                shapeList[key] = type;
            }
        }

        var sheet = null;
        for (var i = 0; i < orbNames.length; i++) {
            if (selectedOrbName != orbNames[i]) continue;
            // 宝珠リストを取得する
            var storedOrbList = storageJewels[orbNames[i]];
            sheet = new SheetData();
            sheet.tp = i;
            sheet.ol = [];
            var orbNameList = OrbMaster[i];
            for (var o = 0; o < storedOrbList.length; o++) {
                var orb = storedOrbList[o];
                var type = shapeList[orb.shape];
                if (type >= 0) {
                    // 宝珠名リストから名称が一致する要素のIDを取得する
                    var nameId = -1;
                    for (var n = 0; n < orbNameList.length; n++) {
                        if (orbNameList[n].name == orb.name) {
                            nameId = orbNameList[n].id;
                            break;
                        }
                    }
                    sheet.ol.push({
                        i: o,
                        t: type,
                        n: nameId,
                        p: orb.isSetJewel ? 2 : 0
                    });
                }
            }

            for (var o = 0; o < sheet.ol.length; o++) {
                var orb = sheet.ol[o];
                if (orb.p == 0) continue;
                for (var r = 0; r < sheet.ol.length; r++) {
                    var orb2 = sheet.ol[r];
                    if (orb.n == orb2.n && orb.p > orb2.p) {
                        orb2.p = orb.p;
                    }
                }
            }
            sheet.bd = [];
            var cellData = lithographJewel[orbNames[i]];
            for (var r = 0; r < 6; r++) {
                var row = [];
                for (var c = 0; c < 6; c++) {
                    if (cellData[r][c].state == 3 || cellData[r][c].state == 2) {
                        row[c] = 1;
                    } else {
                        row[c] = 0;
                    }
                }
                sheet.bd.push(row);
            }
        }

        var string = SheetData.encode(sheet);
        location.href = "http://holenews.github.io/orbmng/?d=" + string;
    };

    SheetData.loadFromCookie = function () {
        var sheetDataList = [];
        var keyList = SheetData.getCookieKeyList();
        try {
            for (var i = 0; i < keyList.length; i++) {
                var string = $.cookie(keyList[i]);
                var name = "";
                var sheetData = null;
                if (string) {
                    var stringArr = string.split("@");
                    sheetData = SheetData.decode(stringArr[1], true);
                    name = stringArr[0];
                    sheetDataList.push({ key: keyList[i], name: name, data: sheetData, str:stringArr[1] });
                }
                
            }
        } catch (e) {

        }
        return sheetDataList;
    };

    SheetData.getCookieKeyList = function () {
        var keyList = [];
        for (var i = 0; i < 16; i++) {
            keyList.push("odt" + i);
        }
        keyList.push("tmpdt");
        return keyList;
    };

    SheetData.saveToCookie = function (key, name, sheetData, isTemp) {
    	var sheetStr = SheetData.encode(sheetData, true);
    	var expireParam = { expires: 365 };
    	if(isTemp == true){
    		expireParam = null;
    	}
        $.cookie(key, name + "@" + sheetStr, expireParam);
        return sheetStr;
    };

    SheetData.removeFromCookie = function (key) {
        $.removeCookie(key);
    };

    window.orbmng.SheetData = SheetData;

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

