(function () {

    if (!window.orbmng) window.orbmng = {};

    var OrbMaster = {};
    OrbMaster[0] = [];
    OrbMaster[0].push({ id: 0101, name: "不屈の闘志" });
    OrbMaster[0].push({ id: 0102, name: "深淵なる叡智" });
    OrbMaster[0].push({ id: 0103, name: "武神の豪腕" });
    OrbMaster[0].push({ id: 0104, name: "鋼鉄の肉体" });
    OrbMaster[0].push({ id: 0105, name: "韋駄天の足" });
    OrbMaster[0].push({ id: 0106, name: "神業の手" });
    OrbMaster[0].push({ id: 0107, name: "戦場のヴィーナス" });
    OrbMaster[0].push({ id: 0108, name: "ふんばり魂" });
    OrbMaster[0].push({ id: 0109, name: "大賢者の御手" });
    OrbMaster[0].push({ id: 0110, name: "いつくしむ心" });
    OrbMaster[0].push({ id: 0201, name: "会心練磨" });
    OrbMaster[0].push({ id: 0202, name: "先見の眼" });
    OrbMaster[0].push({ id: 0301, name: "鉄壁の眠りガード" });
    OrbMaster[0].push({ id: 0302, name: "鉄壁の混乱ガード" });
    OrbMaster[0].push({ id: 0303, name: "鉄壁の魅了ガード" });
    OrbMaster[0].push({ id: 0304, name: "鉄壁のマヒガード" });
    OrbMaster[0].push({ id: 0305, name: "鉄壁の毒ガード" });
    OrbMaster[0].push({ id: 0306, name: "鉄壁の幻惑ガード" });
    OrbMaster[0].push({ id: 0307, name: "鉄壁の封印ガード" });
    OrbMaster[0].push({ id: 0308, name: "鉄壁の転びガード" });
    OrbMaster[0].push({ id: 0309, name: "鉄壁のしばりガード" });
    OrbMaster[0].push({ id: 0310, name: "鉄壁のおびえガード" });
    OrbMaster[0].push({ id: 0311, name: "鉄壁の即死ガード" });
    OrbMaster[0].push({ id: 0312, name: "鉄壁の呪いガード" });
    OrbMaster[0].push({ id: 0313, name: "鉄壁のみとれガード" });
    OrbMaster[0].push({ id: 0314, name: "鉄壁の踊りガード" });
    OrbMaster[0].push({ id: 0315, name: "鉄壁のMP吸収ガード" });
    OrbMaster[0].push({ id: 0316, name: "鉄壁のはどうガード" });
    OrbMaster[0].push({ id: 0317, name: "鉄壁の笑いガード" });
    OrbMaster[0].push({ id: 0401, name: "鉄壁の炎耐性" });
    OrbMaster[0].push({ id: 0402, name: "鉄壁の氷耐性" });
    OrbMaster[0].push({ id: 0403, name: "鉄壁の風耐性" });
    OrbMaster[0].push({ id: 0404, name: "鉄壁の土耐性" });
    OrbMaster[0].push({ id: 0405, name: "鉄壁の光耐性" });
    OrbMaster[0].push({ id: 0406, name: "鉄壁の闇耐性" });
    OrbMaster[0].push({ id: 0407, name: "鉄壁の雷耐性" });
    OrbMaster[0].push({ id: 0501, name: "鉄壁の攻撃呪文耐性" });
    OrbMaster[0].push({ id: 0502, name: "鉄壁のブレス耐性" });

    OrbMaster[1] = [];
    OrbMaster[1].push({ id: 0101, name: "始まりのラリホー" });
    OrbMaster[1].push({ id: 0102, name: "始まりのヘナトス" });
    OrbMaster[1].push({ id: 0103, name: "始まりのルカニ" });
    OrbMaster[1].push({ id: 0104, name: "始まりのボミエ" });
    OrbMaster[1].push({ id: 0105, name: "始まりのバイシオン" });
    OrbMaster[1].push({ id: 0106, name: "始まりの重さダウン" });
    OrbMaster[1].push({ id: 0107, name: "始まりのぶきみなひかり" });
    OrbMaster[1].push({ id: 0108, name: "始まりの聖女の守り" });
    OrbMaster[1].push({ id: 0109, name: "始まりのキラキラポーン" });
    OrbMaster[1].push({ id: 0110, name: "始まりのチャージタイム短縮" });
    OrbMaster[1].push({ id: 0111, name: "始まりの移動速度アップ" });
    OrbMaster[1].push({ id: 0201, name: "ヘナトスの盾" });
    OrbMaster[1].push({ id: 0202, name: "ルカニの盾" });
    OrbMaster[1].push({ id: 0301, name: "不滅の回復呪文強化" });
    OrbMaster[1].push({ id: 0302, name: "不滅の攻撃呪文強化" });
    OrbMaster[1].push({ id: 0303, name: "不滅のテンション" });
    OrbMaster[1].push({ id: 0304, name: "不滅の攻撃力アップ" });
    OrbMaster[1].push({ id: 0401, name: "逆境のみかわしアップ" });
    OrbMaster[1].push({ id: 0402, name: "復活のＨＰ回復量アップ" });
    OrbMaster[1].push({ id: 0403, name: "忍耐のＭＰ回復" });
    OrbMaster[1].push({ id: 0501, name: "ヘナトスの技巧" });
    OrbMaster[1].push({ id: 0502, name: "ルカニ系呪文の技巧" });
    OrbMaster[1].push({ id: 0503, name: "ボミエ系呪文の技巧" });
    OrbMaster[1].push({ id: 0504, name: "ディバインスペルの技巧" });
    OrbMaster[1].push({ id: 0505, name: "ラリホー系呪文の技巧" });
    OrbMaster[1].push({ id: 0506, name: "メダパニ系呪文の技巧" });
    OrbMaster[1].push({ id: 0507, name: "マヌーサの技巧" });
    OrbMaster[1].push({ id: 0508, name: "マホトーンの技巧" });
    OrbMaster[1].push({ id: 0601, name: "ホイミの奇跡" });
    OrbMaster[1].push({ id: 0602, name: "ベホイミの奇跡" });
    OrbMaster[1].push({ id: 0603, name: "ベホイムの奇跡" });
    OrbMaster[1].push({ id: 0604, name: "ベホマラーの奇跡" });
    OrbMaster[1].push({ id: 0701, name: "ザオの戦域" });
    OrbMaster[1].push({ id: 0702, name: "ザオラルの戦域" });
    OrbMaster[1].push({ id: 0703, name: "ザオリクの戦域" });

    OrbMaster[2] = [];
    OrbMaster[2].push({ id: 0101, name: "果てなき攻撃力アップ" });
    OrbMaster[2].push({ id: 0102, name: "果てなき守備力アップ" });
    OrbMaster[2].push({ id: 0103, name: "果てなき攻撃呪文威力アップ" });
    OrbMaster[2].push({ id: 0104, name: "果てなき回復呪文威力アップ" });
    OrbMaster[2].push({ id: 0105, name: "果てなき聖女の守り" });
    OrbMaster[2].push({ id: 0201, name: "禁断のＭＰアップ" });
    OrbMaster[2].push({ id: 0202, name: "禁断のちからアップ" });
    OrbMaster[2].push({ id: 0203, name: "禁断のおもさアップ" });
    OrbMaster[2].push({ id: 0204, name: "禁断のこうげき魔力アップ" });
    OrbMaster[2].push({ id: 0205, name: "禁断のかいふく魔力アップ" });
    OrbMaster[2].push({ id: 0301, name: "復讐のバイシオン" });
    OrbMaster[2].push({ id: 0302, name: "復讐のスカラ" });
    OrbMaster[2].push({ id: 0303, name: "復讐のテンションアップ" });
    OrbMaster[2].push({ id: 0304, name: "復讐の早詠みの杖" });
    OrbMaster[2].push({ id: 0305, name: "復讐の聖なる祈り" });
    OrbMaster[2].push({ id: 0306, name: "復讐の聖女の守り" });
    OrbMaster[2].push({ id: 0401, name: "共鳴のテンションアップ" });
    OrbMaster[2].push({ id: 0402, name: "気まぐれな追撃" });
    OrbMaster[2].push({ id: 0403, name: "打たれ名人" });
    OrbMaster[2].push({ id: 0404, name: "勝ちどきＭＰ回復" });
    OrbMaster[2].push({ id: 0405, name: "奇跡の会心攻撃" });
    OrbMaster[2].push({ id: 0501, name: "鉄壁の会心完全ガード" });
    OrbMaster[2].push({ id: 0502, name: "鉄壁のふっとびガード" });
    OrbMaster[2].push({ id: 0601, name: "メラゾーマの瞬き" });
    OrbMaster[2].push({ id: 0602, name: "メラガイアーの瞬き" });
    OrbMaster[2].push({ id: 0603, name: "マヒャドの瞬き" });
    OrbMaster[2].push({ id: 0604, name: "マヒャデドスの瞬き" });
    OrbMaster[2].push({ id: 0605, name: "イオナズンの瞬き" });
    OrbMaster[2].push({ id: 0606, name: "イオグランデの瞬き" });
    OrbMaster[2].push({ id: 0607, name: "バギクロスの瞬き" });
    OrbMaster[2].push({ id: 0608, name: "バギムーチョの瞬き" });
    OrbMaster[2].push({ id: 0609, name: "ドルモーアの瞬き" });
    OrbMaster[2].push({ id: 0610, name: "ドルマドンの瞬き" });
    OrbMaster[2].push({ id: 0611, name: "マホトラの瞬き" });
    OrbMaster[2].push({ id: 0701, name: "ヘナトスの瞬き" });
    OrbMaster[2].push({ id: 0702, name: "ルカニ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0703, name: "ボミエ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0704, name: "ディバインスペルの瞬き" });
    OrbMaster[2].push({ id: 0705, name: "ラリホー系呪文の瞬き" });
    OrbMaster[2].push({ id: 0706, name: "メダパニ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0707, name: "マヌーサの瞬き" });
    OrbMaster[2].push({ id: 0708, name: "マホトーンの瞬き" });
    OrbMaster[2].push({ id: 0801, name: "バイキルト系呪文の瞬き" });
    OrbMaster[2].push({ id: 0802, name: "スカラ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0803, name: "ピオラ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0804, name: "ズッシードの瞬き" });
    OrbMaster[2].push({ id: 0805, name: "マホカンタ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0806, name: "マホキテの瞬き" });
    OrbMaster[2].push({ id: 0807, name: "フバーハ系呪文の瞬き" });
    OrbMaster[2].push({ id: 0808, name: "マジックバリアの瞬き" });
    OrbMaster[2].push({ id: 0901, name: "ベホイミの瞬き" });
    OrbMaster[2].push({ id: 0902, name: "ベホイムの瞬き" });
    OrbMaster[2].push({ id: 0903, name: "ベホマラーの瞬き" });
    OrbMaster[2].push({ id: 0904, name: "ザオの瞬き" });
    OrbMaster[2].push({ id: 0905, name: "ザオラルの瞬き" });
    OrbMaster[2].push({ id: 0906, name: "ザオリクの瞬き" });

    OrbMaster[3] = [];
    OrbMaster[3].push({ id: 0101, name: "メラ系とギラ系呪文の極意" });
    OrbMaster[3].push({ id: 0102, name: "イオ系呪文の極意" });
    OrbMaster[3].push({ id: 0103, name: "ヒャド系呪文の極意" });
    OrbMaster[3].push({ id: 0104, name: "バギ系呪文の極意" });
    OrbMaster[3].push({ id: 0105, name: "ドルマ系呪文の極意" });
    OrbMaster[3].push({ id: 0201, name: "かばうの極意" });
    OrbMaster[3].push({ id: 0202, name: "ロストアタックの極意" });
    OrbMaster[3].push({ id: 0203, name: "たいあたりの極意" });
    OrbMaster[3].push({ id: 0204, name: "やいばくだきの極意" });
    OrbMaster[3].push({ id: 0205, name: "チャージタックルの極意" });
    OrbMaster[3].push({ id: 0206, name: "真・やいばくだきの極意" });
    OrbMaster[3].push({ id: 0207, name: "真・やいばくだきの技巧" });
    OrbMaster[3].push({ id: 0208, name: "会心必中の極意" });
    OrbMaster[3].push({ id: 0209, name: "会心必中の閃き" });
    OrbMaster[3].push({ id: 0301, name: "おはらいの瞬き" });
    OrbMaster[3].push({ id: 0302, name: "果てなきマホトラのころも" });
    OrbMaster[3].push({ id: 0303, name: "天使の守りの瞬き" });
    OrbMaster[3].push({ id: 0304, name: "ホーリーライトの極意" });
    OrbMaster[3].push({ id: 0305, name: "聖者の詩の閃き" });
    OrbMaster[3].push({ id: 0401, name: "ぶきみなひかりの瞬き" });
    OrbMaster[3].push({ id: 0402, name: "ぶきみなひかりの技巧" });
    OrbMaster[3].push({ id: 0403, name: "魔力かくせいの瞬き" });
    OrbMaster[3].push({ id: 0404, name: "ミラクルゾーンの閃き" });
    OrbMaster[3].push({ id: 0501, name: "ためるの極意" });
    OrbMaster[3].push({ id: 0502, name: "心頭滅却の瞬き" });
    OrbMaster[3].push({ id: 0503, name: "おたけびの技巧" });
    OrbMaster[3].push({ id: 0504, name: "めいそうの奇跡" });
    OrbMaster[3].push({ id: 0505, name: "ためる弐の極意" });
    OrbMaster[3].push({ id: 0506, name: "無念無想の極意" });
    OrbMaster[3].push({ id: 0507, name: "ためる参の極意" });
    OrbMaster[3].push({ id: 0508, name: "一喝の極意" });
    OrbMaster[3].push({ id: 0509, name: "一喝の閃き" });
    OrbMaster[3].push({ id: 0601, name: "サプライズラッシュの極意" });
    OrbMaster[3].push({ id: 0602, name: "サプライズラッシュの技巧" });
    OrbMaster[3].push({ id: 0603, name: "お宝ハンターの閃き" });
    OrbMaster[3].push({ id: 0604, name: "お宝ハンターの極意" });
    OrbMaster[3].push({ id: 0701, name: "ボケの技巧" });
    OrbMaster[3].push({ id: 0702, name: "果てなきタップダンス" });
    OrbMaster[3].push({ id: 0703, name: "キラージャグリングの極意" });
    OrbMaster[3].push({ id: 0704, name: "ハッスルダンスの奇跡" });
    OrbMaster[3].push({ id: 0705, name: "ハッスルダンスの戦域" });
    OrbMaster[3].push({ id: 0706, name: "ゴッドジャグリングの極意" });
    OrbMaster[3].push({ id: 0707, name: "たたかいのビートの戦域" });
    OrbMaster[3].push({ id: 0708, name: "アクロバットスターの閃き" });
    OrbMaster[3].push({ id: 0801, name: "とうこん討ちの極意" });
    OrbMaster[3].push({ id: 0802, name: "もろば斬りの極意" });
    OrbMaster[3].push({ id: 0803, name: "無心こうげきの極意" });
    OrbMaster[3].push({ id: 0804, name: "天下無双の極意" });
    OrbMaster[3].push({ id: 0805, name: "果てなきテンションバーン" });
    OrbMaster[3].push({ id: 0806, name: "果てなきミラクルブースト" });
    OrbMaster[3].push({ id: 0807, name: "テンションブーストの閃き" });
    OrbMaster[3].push({ id: 0901, name: "やいばのぼうぎょの極意" });
    OrbMaster[3].push({ id: 0902, name: "におうだちの極意" });
    OrbMaster[3].push({ id: 0903, name: "果てなきヘヴィチャージ" });
    OrbMaster[3].push({ id: 0904, name: "大ぼうぎょの極意" });
    OrbMaster[3].push({ id: 0905, name: "グランドネビュラの極意" });
    OrbMaster[3].push({ id: 0906, name: "果てなきパラディンガード" });
    OrbMaster[3].push({ id: 0907, name: "パラディンガードの閃き" });
    OrbMaster[3].push({ id: 1001, name: "ファイアフォースの護り" });
    OrbMaster[3].push({ id: 1002, name: "アイスフォースの護り" });
    OrbMaster[3].push({ id: 1003, name: "ストームフォースの護り" });
    OrbMaster[3].push({ id: 1004, name: "ダークフォースの護り" });
    OrbMaster[3].push({ id: 1005, name: "ライトフォースの護り" });
    OrbMaster[3].push({ id: 1006, name: "フォースブレイクの極意" });
    OrbMaster[3].push({ id: 1007, name: "フォースブレイクの技巧" });
    OrbMaster[3].push({ id: 1008, name: "マダンテの極意" });
    OrbMaster[3].push({ id: 1009, name: "マジックルーレットの閃き" });
    OrbMaster[3].push({ id: 1010, name: "マジックルーレットの戦域" });
    OrbMaster[3].push({ id: 1101, name: "てなづけるの技巧" });
    OrbMaster[3].push({ id: 1102, name: "メタルトラップの技巧" });
    OrbMaster[3].push({ id: 1103, name: "オオカミアタックの極意" });
    OrbMaster[3].push({ id: 1104, name: "あんこくのきりの技巧" });
    OrbMaster[3].push({ id: 1105, name: "フェンリルアタックの極意" });
    OrbMaster[3].push({ id: 1106, name: "妖精たちのポルカの閃き" });
    OrbMaster[3].push({ id: 1201, name: "いやしの雨の輝き" });
    OrbMaster[3].push({ id: 1202, name: "魔導の書の技巧" });
    OrbMaster[3].push({ id: 1203, name: "果てなき神の息吹" });
    OrbMaster[3].push({ id: 1204, name: "神の息吹の閃き" });
    OrbMaster[3].push({ id: 1301, name: "サインぜめの極意" });
    OrbMaster[3].push({ id: 1302, name: "スキャンダルの技巧" });
    OrbMaster[3].push({ id: 1303, name: "メイクアップの瞬き" });
    OrbMaster[3].push({ id: 1304, name: "果てなきモンスターゾーン" });
    OrbMaster[3].push({ id: 1401, name: "モンスターゾーンの閃き" });
    OrbMaster[3].push({ id: 1402, name: "ブレスクラッシュの極意" });
    OrbMaster[3].push({ id: 1403, name: "ブレスクラッシュの技巧" });
    OrbMaster[3].push({ id: 1404, name: "スキルクラッシュの極意" });
    OrbMaster[3].push({ id: 1405, name: "スキルクラッシュの技巧" });
    OrbMaster[3].push({ id: 1406, name: "果てなきウォークライ" });
    OrbMaster[3].push({ id: 1407, name: "果てなきビーストモード" });
    OrbMaster[3].push({ id: 1408, name: "ビーストモードの閃き" });
    OrbMaster[3].push({ id: 1501, name: "果てなきどうぐ倍化術" });
    OrbMaster[3].push({ id: 1502, name: "磁界シールドの瞬き" });
    OrbMaster[3].push({ id: 1503, name: "果てなきどうぐ範囲化術" });
    OrbMaster[3].push({ id: 1504, name: "メディカルデバイスの瞬き" });
    OrbMaster[3].push({ id: 1505, name: "プラズマリムーバーの瞬き" });
    OrbMaster[3].push({ id: 1506, name: "プラズマリムーバーの戦域" });
    OrbMaster[3].push({ id: 1507, name: "強化ガジェット零式の閃き" });
    OrbMaster[3].push({ id: 1601, name: "もうどくのブルースの瞬き" });
    OrbMaster[3].push({ id: 1602, name: "会心まいしんラップの瞬き" });
    OrbMaster[3].push({ id: 1603, name: "祈りのゴスペルの瞬き" });
    OrbMaster[3].push({ id: 1604, name: "覚醒のアリアの瞬き" });
    OrbMaster[3].push({ id: 1605, name: "よみがえり節の瞬き" });
    OrbMaster[3].push({ id: 1606, name: "魔力のバラードの瞬き" });
    OrbMaster[3].push({ id: 1607, name: "回復のララバイの瞬き" });
    OrbMaster[3].push({ id: 1608, name: "ふういんのダンスの技巧" });
    OrbMaster[3].push({ id: 1609, name: "こんらんのダンスの技巧" });
    OrbMaster[3].push({ id: 1610, name: "ねむりのダンスの技巧" });
    OrbMaster[3].push({ id: 1611, name: "ドラゴンステップの技巧" });
    OrbMaster[3].push({ id: 1612, name: "ビーナスステップの技巧" });
    OrbMaster[3].push({ id: 1613, name: "ロイヤルステップの技巧" });
    OrbMaster[3].push({ id: 1614, name: "つるぎの舞の極意" });
    OrbMaster[3].push({ id: 1615, name: "戦鬼の乱れ舞の瞬き" });
    OrbMaster[3].push({ id: 1616, name: "荒神の舞の閃き" });
    OrbMaster[3].push({ id: 1617, name: "ビーナスステップの技巧" });
    OrbMaster[3].push({ id: 1618, name: "ロイヤルステップの技巧" });
    OrbMaster[3].push({ id: 1619, name: "つるぎの舞の極意" });
    OrbMaster[3].push({ id: 1620, name: "戦鬼の乱れ舞の瞬き" });
    OrbMaster[3].push({ id: 1621, name: "荒神の舞の閃き" });

    OrbMaster[4] = [];
    OrbMaster[4].push({ id: 0101, name: "石つぶての極意" });
    OrbMaster[4].push({ id: 0102, name: "かまいたちの極意" });
    OrbMaster[4].push({ id: 0103, name: "せいけん突きの極意" });
    OrbMaster[4].push({ id: 0104, name: "ムーンサルトの極意" });
    OrbMaster[4].push({ id: 0105, name: "ばくれつけんの極意" });
    OrbMaster[4].push({ id: 0106, name: "岩石おとしの極意" });
    OrbMaster[4].push({ id: 0107, name: "せいけん爆撃の極意" });
    OrbMaster[4].push({ id: 0201, name: "かえん斬りの極意" });
    OrbMaster[4].push({ id: 0202, name: "ドラゴン斬りの極意" });
    OrbMaster[4].push({ id: 0203, name: "ミラクルソードの極意" });
    OrbMaster[4].push({ id: 0204, name: "はやぶさ斬りの極意" });
    OrbMaster[4].push({ id: 0205, name: "ギガスラッシュの極意" });
    OrbMaster[4].push({ id: 0206, name: "超はやぶさ斬りの極意" });
    OrbMaster[4].push({ id: 0207, name: "ギガブレイクの極意" });
    OrbMaster[4].push({ id: 0301, name: "果てなきブレードガード" });
    OrbMaster[4].push({ id: 0302, name: "ドラゴンスラッシュの極意" });
    OrbMaster[4].push({ id: 0303, name: "ぶんまわしの極意" });
    OrbMaster[4].push({ id: 0304, name: "フリーズブレードの極意" });
    OrbMaster[4].push({ id: 0305, name: "渾身斬りの極意" });
    OrbMaster[4].push({ id: 0306, name: "ビッグバンの極意" });
    OrbMaster[4].push({ id: 0307, name: "全身全霊斬りの極意" });
    OrbMaster[4].push({ id: 0401, name: "キラーブーンの極意" });
    OrbMaster[4].push({ id: 0402, name: "スリープダガーの極意" });
    OrbMaster[4].push({ id: 0403, name: "スリープダガーの技巧" });
    OrbMaster[4].push({ id: 0404, name: "ヒュプノスハントの極意" });
    OrbMaster[4].push({ id: 0405, name: "ヴァイパーファングの極意" });
    OrbMaster[4].push({ id: 0406, name: "ヴァイパーファングの技巧" });
    OrbMaster[4].push({ id: 0407, name: "タナトスハントの極意" });
    OrbMaster[4].push({ id: 0408, name: "カオスエッジの極意" });
    OrbMaster[4].push({ id: 0409, name: "ナイトメアファングの極意" });
    OrbMaster[4].push({ id: 0501, name: "果てなきマジステッキ" });
    OrbMaster[4].push({ id: 0502, name: "デビルンチャームの極意" });
    OrbMaster[4].push({ id: 0503, name: "パニパニハニーの技巧" });
    OrbMaster[4].push({ id: 0601, name: "悪魔ばらいの極意" });
    OrbMaster[4].push({ id: 0602, name: "果てなき早詠みの杖" });
    OrbMaster[4].push({ id: 0603, name: "しゅくふくの杖の奇跡" });
    OrbMaster[4].push({ id: 0701, name: "けもの突きの極意" });
    OrbMaster[4].push({ id: 0702, name: "雷鳴突きの極意" });
    OrbMaster[4].push({ id: 0703, name: "一閃突きの極意" });
    OrbMaster[4].push({ id: 0704, name: "狼牙突きの極意" });
    OrbMaster[4].push({ id: 0705, name: "さみだれ突きの極意" });
    OrbMaster[4].push({ id: 0706, name: "ジゴスパークの極意" });
    OrbMaster[4].push({ id: 0801, name: "たいぼく斬の極意" });
    OrbMaster[4].push({ id: 0802, name: "かぶと割りの極意" });
    OrbMaster[4].push({ id: 0803, name: "まじん斬りの極意" });
    OrbMaster[4].push({ id: 0804, name: "蒼天魔斬の極意" });
    OrbMaster[4].push({ id: 0805, name: "オノむそうの極意" });
    OrbMaster[4].push({ id: 0806, name: "鉄甲斬の極意" });
    OrbMaster[4].push({ id: 0807, name: "真・オノむそうの極意" });
    OrbMaster[4].push({ id: 0901, name: "ウェイトブレイクの極意" });
    OrbMaster[4].push({ id: 0902, name: "ウェイトブレイクの技巧" });
    OrbMaster[4].push({ id: 0903, name: "ドラムクラッシュの極意" });
    OrbMaster[4].push({ id: 0904, name: "シールドブレイクの極意" });
    OrbMaster[4].push({ id: 0905, name: "シールドブレイクの技巧" });
    OrbMaster[4].push({ id: 0906, name: "キャンセルショットの技巧" });
    OrbMaster[4].push({ id: 0907, name: "ランドインパクトの極意" });
    OrbMaster[4].push({ id: 0908, name: "スタンショットの技巧" });
    OrbMaster[4].push({ id: 0909, name: "プレートインパクトの極意" });
    OrbMaster[4].push({ id: 1001, name: "足ばらいの技巧" });
    OrbMaster[4].push({ id: 1002, name: "黄泉送りの極意" });
    OrbMaster[4].push({ id: 1003, name: "なぎはらいの極意" });
    OrbMaster[4].push({ id: 1004, name: "氷結らんげきの極意" });
    OrbMaster[4].push({ id: 1005, name: "奥義・棍閃殺の極意" });
    OrbMaster[4].push({ id: 1101, name: "ウィングブロウの極意" });
    OrbMaster[4].push({ id: 1102, name: "裂鋼拳の極意" });
    OrbMaster[4].push({ id: 1103, name: "必中拳の極意" });
    OrbMaster[4].push({ id: 1104, name: "タイガークローの極意" });
    OrbMaster[4].push({ id: 1105, name: "ゴールドフィンガーの極意" });
    OrbMaster[4].push({ id: 1106, name: "サイクロンアッパーの極意" });
    OrbMaster[4].push({ id: 1107, name: "ライガークラッシュの極意" });
    OrbMaster[4].push({ id: 1201, name: "花ふぶきの技巧" });
    OrbMaster[4].push({ id: 1202, name: "波紋演舞の極意" });
    OrbMaster[4].push({ id: 1203, name: "おうぎのまいの極意" });
    OrbMaster[4].push({ id: 1204, name: "アゲハ乱舞の極意" });
    OrbMaster[4].push({ id: 1205, name: "ピンクタイフーンの極意" });
    OrbMaster[4].push({ id: 1206, name: "百花繚乱の極意" });
    OrbMaster[4].push({ id: 1301, name: "らせん打ちの極意" });
    OrbMaster[4].push({ id: 1302, name: "らせん打ちの技巧" });
    OrbMaster[4].push({ id: 1303, name: "愛のムチの極意" });
    OrbMaster[4].push({ id: 1304, name: "スパークショットの極意" });
    OrbMaster[4].push({ id: 1305, name: "スパークショットの技巧" });
    OrbMaster[4].push({ id: 1306, name: "しばり打ちの極意" });
    OrbMaster[4].push({ id: 1307, name: "しばり打ちの技巧" });
    OrbMaster[4].push({ id: 1308, name: "地ばしり打ちの極意" });
    OrbMaster[4].push({ id: 1309, name: "双竜打ちの極意" });
    OrbMaster[4].push({ id: 1310, name: "疾風迅雷の極意" });
    OrbMaster[4].push({ id: 1311, name: "極竜打ちの極意" });
    OrbMaster[4].push({ id: 1401, name: "スライムブロウの極意" });
    OrbMaster[4].push({ id: 1402, name: "パワフルスローの極意" });
    OrbMaster[4].push({ id: 1403, name: "シャインスコールの極意" });
    OrbMaster[4].push({ id: 1404, name: "バーニングバードの極意" });
    OrbMaster[4].push({ id: 1405, name: "デュアルカッターの極意" });
    OrbMaster[4].push({ id: 1406, name: "フローズンバードの極意" });
    OrbMaster[4].push({ id: 1407, name: "デュアルブレイカーの極意" });
    OrbMaster[4].push({ id: 1501, name: "マジックアローの極意" });
    OrbMaster[4].push({ id: 1502, name: "マジックアローの技巧" });
    OrbMaster[4].push({ id: 1503, name: "バードシュートの極意" });
    OrbMaster[4].push({ id: 1504, name: "サンダーボルトの極意" });
    OrbMaster[4].push({ id: 1505, name: "さみだれうちの極意" });
    OrbMaster[4].push({ id: 1506, name: "天使の矢の極意" });
    OrbMaster[4].push({ id: 1507, name: "シャイニングボウの極意" });
    OrbMaster[4].push({ id: 1508, name: "弓聖の守り星の戦域" });
    OrbMaster[4].push({ id: 1509, name: "ダークネスショットの極意" });

    window.orbmng.OrbMaster = OrbMaster;

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
        if (!notCompressed) {
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

        var sheetData = new SheetData();
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
                }
                sheetDataList.push({ key: keyList[i], name: name, data: sheetData });
            }
        } catch (e) {

        }
        return sheetDataList;
    };

    SheetData.getCookieKeyList = function () {
        var keyList = [];
        for (var i = 0; i < 15; i++) {
            keyList.push("odt" + i);
        }
        return keyList;
    };

    SheetData.saveToCookie = function (key, name, sheetData) {
        var keyList = SheetData.getCookieKeyList();
        var isNewKey = true;
        for (var i = 0; i < keyList.length; i++) {
            if (keyList[i] == key) {
                isNewKey = false;
                break;
            }
        }
        var sheetStr = name + "@" + SheetData.encode(sheetData, true);
        $.cookie(key, sheetStr, { expires: 365, secure: true });
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

