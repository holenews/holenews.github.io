(function () {

    var foodList = [];
    foodList.push({ value: 0, name: "なし" });
    foodList.push({ value: 1, name: "パワフルステーキ" });
    foodList.push({ value: 2, name: "スマッシュポテト" });
    foodList.push({ value: 3, name: "パワフルステーキ" });

    var foodLevelList = {};
    foodLevelList[1] = [
    	{ value: 2, name: "☆0" },
    	{ value: 3, name: "★1" },
    	{ value: 5, name: "★2" },
    	{ value: 7, name: "★3" }
    ];
    foodLevelList[2] = [
    	{ value: 5, name: "☆0" },
    	{ value: 7, name: "★1" },
    	{ value: 10, name: "★2" },
    	{ value: 15, name: "★3" }
    ];
    foodLevelList[3] = [
    	{ value: 5, name: "☆0" },
    	{ value: 7, name: "★1" },
    	{ value: 10, name: "★2" },
    	{ value: 15, name: "★3" }
    ];

    /**
    * 武器スキルのリストを作成する
    * @param values スキルポイントと攻撃力増分値のリスト
    */
    function createSkillList(values) {
        var list = [];
        list.push({ value: 0, name: 'なし' });
        var sum = 0;
        for (var key in values) {
            var point = values[key];
            sum += point;
            list.push({ value: sum, name: '' + key + ' SP (攻撃力+' + sum + ')' });
        }
        return list;
    }

    var skillList = {};
    skillList['片手剣'] = createSkillList({ '7': 5, '42': 10, '88': 15, '150': 10 });
    skillList['両手剣'] = createSkillList({ '7': 10, '42': 15, '88': 20, '110': 10, '150': 10 });
    skillList['オノ'] = createSkillList({ '3': 5, '13': 10, '35': 15, '88': 20, '110': 10, '150': 10 });
    skillList['ハンマー'] = createSkillList({ '13': 12, '58': 10, '88': 15, '110': 10 });
    skillList['格闘'] = createSkillList({ '3': 10, '25': 20, '77': 40, '150': 50 });
    skillList['両手杖'] = createSkillList({});
    skillList['スティック'] = createSkillList({});
    skillList['短剣'] = createSkillList({ '7': 5, '42': 10, '88': 15, '130': 5 });
    skillList['ムチ'] = createSkillList({ '7': 5, '22': 5, '58': 5, '110': 10, '150': 10 });
    skillList['ヤリ'] = createSkillList({ '3': 10, '58': 15, '88': 20, '150': 10 });
    skillList['棍'] = createSkillList({ '3': 10, '35': 15, '88': 20, '150': 10 });
    skillList['ツメ'] = createSkillList({ '7': 5, '42': 5, '88': 5, '150': 5 });
    skillList['扇'] = createSkillList({ '3': 5, '35': 10, '88': 15, '130': 10, '150': 10 });
    skillList['弓'] = createSkillList({ '3': 5, '35': 10, '88': 15, '110': 10, '150': 10 });
    skillList['ブーメラン'] = createSkillList({ '7': 5, '22': 5, '76': 5, '110': 5, '150': 10 });

    var skillTypeList = [];
    for (var key in skillList) {
        skillTypeList.push({ value: key, name: key });
    }

    var acsList = {};
    acsList['顔'] = [
		{ value: 0, name: '顔アクセ' }
	];

    acsList['首'] = [
		{ value: 0, name: '首アクセ' },
		{ value: 3, name: 'きんのロザリオ' },
		{ value: 5, name: 'ちからのペンダント' },
		{ value: 7, name: 'バトルチョーカー' },
		{ value: 10, name: '忠誠のチョーカー' }
	];

    acsList['指'] = [
		{ value: 0, name: '指アクセ' },
		{ value: 6, name: '幻界闘士のゆびわ' },
		{ value: 2, name: 'ちからのゆびわ' }
	];

    acsList['胸'] = [
		{ value: 0, name: '胸アクセ' },
		{ value: 5, name: 'セトのブローチ' },
		{ value: 7, name: 'セトのアンク' }
	];

    acsList['腰'] = [
		{ value: 0, name: '腰アクセ' },
		{ value: 0, name: '輝石のベルト' },
		{ value: 0, name: '戦神のベルト' },
	];

    acsList['札'] = [
		{ value: 0, name: '札アクセ' },
		{ value: 0, name: 'しんぴのカード' },
		{ value: 0, name: '不思議のカード' }
	];

    acsList['他'] = [
		{ value: 0, name: '他アクセ' },
		{ value: 5, name: 'パワーチャーム' }
	];

    acsList['証'] = [
		{ value: 0, name: '証アクセ' },
		{ value: 3, name: '魔人の勲章' }
	];

    var elementRank = [
        { value: '1.0', name: 'なし' },
        { value: '1.1', name: '弱点' },
        { value: '1.3', name: '大弱点' },
		{ value: '0.75', name: '耐性' },
        { value: '0.5', name: '強耐性' }
    ];

    var elementBreak = [
        { value: 0, name: '耐性ダウン無し' },
        { value: 50, name: '＊＊＊ステップ' },
        { value: 100, name: 'フォースブレイク' },
    ];

    var tensionList = [
        { value: 0, perc: 1.0, bonus: 00, name: 'なし' },
        { value: 1, perc: 1.5, bonus: 10, name: '1段階 (x1.5)' },
        { value: 2, perc: 2.0, bonus: 20, name: '2段階 (x2.0)' },
		{ value: 3, perc: 2.5, bonus: 30, name: '3段階 (x2.5)' },
        { value: 4, perc: 3.5, bonus: 40, name: '4段階 (x3.5)' }
    ];

    /*var specialList = {};
    specialList['未指定'] = [
    { name: '通常攻撃', p: 1 }
    ];
    specialList['戦士'] = [
    { name: 'ロストアタック', p: 1.1 },
    { name: 'たいあたり', p: 1.25 },
    { name: 'やいばくだき', p: 1.3 },
    { name: 'チャージタックル', p: 2 },
    { name: '真やいばくだき', r: [3.5, 3.7] }
    ];
    specialList['旅芸'] = [
    { name: 'キラージャグリング', p: 0.5, c: 6 },
    { name: 'ゴッドジャグリング', p: 0.5, c: 8 }
    ];
    specialList['バトルマスター'] = [
    { name: 'とうこん打ち', p: 1 },
    { name: 'もろば斬り', p: 3.2, o: function (d) { return Math.floor(d[0] * 0.35) + 'の反射ダメージ'; } },
    { name: '天下無双', p: 0.5, c: 6 }
    ];
    specialList['魔法戦士'] = [
    { name: 'フォースブレイク', p: 1.5 }
    ];
    specialList['まもの使い'] = [
    { name: 'ブレスクラッシュ', p: 1.2 },
    { name: 'スキルクラッシュ', p: 2 }
    ];
    specialList['踊り子'] = [
    { name: 'つるぎの舞', r: [1.15, 1.25] }
    ];
    specialList['片手剣'] = [
    { name: 'かえん斬り(*)', p : function (d) { return (d * 0.2) + 10; } },
    { name: 'ドラゴン斬り', p: 1, s: function (d) { return d * 0.5 + 10; } },
    { name: 'ミラクルソード', p: 1, o: function (d) { return 'HPを' + (Math.floor(d[0] * 0.25) + 20) + '回復'; } },
    { name: 'はやぶさ斬り', p: 1, c: 2 },
    { name: '超はやぶさ斬り', p: 0.75, c: 4 }
    ];
    specialList['両手剣'] = [
    { name: 'ドラゴンスラッシュ', p: 1, s: function (d) { return d * 0.5 + 10; } },
    { name: '渾身斬り', p: 2 },
    { name: '全身全霊斬り', r : [3.9, 4.1] }
    ];
    specialList['オノ'] = [
    { name: 'たいぼく斬', p: 1, s: function (d) { return d * 0.5 + 10; } },
    { name: '蒼天魔斬', p: 3 },
    { name: 'かぶと割り', p: 1.25 },
    { name: 'オノむそう', r: [2, 2.3] },
    { name: '鉄甲斬', p : 1.5 },
    { name: '真・オノむそう', p : 1.9, c : 2 }
    ];
    specialList['ヤリ'] = [
    { name: 'けもの突き', p: 1, s: function (d) { return d * 0.5 + 10; } },
    { name: '雷鳴突き(*)', p: function (d) { return (d * 1.2) + 10; } },
    { name: '狼牙突き', p: 2 },
    { name: 'さみだれ突き(*)', p: function (d) { return (d * 0.9) + 10; }, c : 4 }
    ];
    specialList['スティック'] = [
    { name: 'デビルンチャーム', p: 1, s: function (d) { return d * 1.5 + 10; } }
    ];
    specialList['棍'] = [
    { name: '黄泉送り', p: 1, s: function (d) { return d * 1.5 + 10; } },
    { name: 'なぎはらい', r: [1.3, 1.5] },
    { name: '氷結らんげき', p: function (d) { return (d * 0.5) + 10; }, c: 4 },
    { name: '奥義・棍閃殺', p: 3.15 }
    ];
    specialList['両手杖'] = [
    { name: '悪魔ばらい', p: 1, s: function (d) { return d * 1.5 + 10; } }
    ];
    specialList['短剣'] = [
    { name: 'キラーブーン', p: 1, s: function (d) { return d * 1.5 + 10; } },
    { name: 'スリープダガー', p: 1.1 },
    { name: 'ヒュプノスハント', p: 1.5, s: function (d) { return d * 2.55 + 10; } },
    { name: 'ヴァイパーファング', p: 1.1 },
    { name: 'タナトスハント', p: 1.5, s: function (d) { return d * 2.55 + 10; } },
    { name: 'カオスエッジ', p: 1.5 },
    { name: 'ナイトメアファング', p: 1.75 },
    ];
    specialList['ムチ'] = [
    { name: 'らせん打ち', p: 1.2 },
    { name: '愛のムチ', p: 1, s: function (d) { return d * 0.5 + 10; } },
    { name: 'スパークショット', p: 1.3 },
    { name: 'しばり打ち', p: 1.2 },
    { name: '地ばしり打ち(*)', p: function (d) { return (d * 1.5) + 5; } },
    { name: '双竜打ち', p: 2, c : 2 },
    { name: '疾風迅雷(*)', p: function (d) { return (d * 3.2) + 5; } },
    { name: '極竜打ち', p: 1.8, c : 3 }
    ];
    */

    var specialList = [
        { name: 'もろば切り', p: 3.2, custom: function (p) { return Math.floor(p[0] * 0.35) + 'の反射ダメージ'; } }
    ];

    for (var i = 0; i < specialList.length; i++) {
        specialList[i].value = i;
    }

    var guardList = [
        { value: '1.0', name: 'なし' },
        { value: '0.9', name: 'ルカニ1段階' },
        { value: '0.8', name: 'ルカニ2段階' },
		{ value: '1.2', name: 'スカラ1段階' },
        { value: '1.4', name: 'スカラ2段階' }
    ];

    var bicionList = [
        { value: '1.0', name: 'なし' },
        { value: '0.9', name: 'ヘナトス1段階' },
        { value: '0.8', name: 'ヘナトス2段階' },
		{ value: '1.2', name: 'バイシオン' },
        { value: '1.4', name: 'バイキルト' }
    ];

    /**
    * 値を数値として取りだすjQuery拡張メソッド
    * @param defaultValue
    */
    $.fn.number = function (defaultValue) {
        var number = parseFloat(this.val(), 10);
        if (defaultValue === undefined) {
            defaultValue = 0;
        }
        if (isNaN(number)) {
            return defaultValue;
        }
        return number;
    };

    $(function () {
        // 料理のコンボボックスを作成する
        createSelectList($('#param_food_type'), foodList);
        $('#param_food_type').change(function () {
            // 料理ランクのコンボボックスを作成する
            var value = $(this).val();
            createSelectList($('#param_food_level'), foodLevelList[value], '\s (攻撃力+\d)');
        }).change();
        $('#param_food_type').change(function () {
            // 武器スキルのコンボボックスを作成する
            var value = $(this).val();
            if (value == '0') {
                $('#param_food_level').attr('disabled', 'disabled');
            } else {
                $('#param_food_level').removeAttr('disabled');
            }
        }).change();
        // 武器種のコンボボックスを作成する
        createSelectList($('#param_skill_type'), skillTypeList);
        $('#param_skill_type').change(function () {
            // 武器スキルのコンボボックスを作成する
            var value = $(this).val();
            createSelectList($('#param_skill_level'), skillList[value]);
        }).change();
        // アクセサリのコンボボックスを作成する
        $('.param_acs').each(function () {
            var name = $(this).attr('name');
            createSelectList($(this), acsList[name], '\s (+\d)');
        });
        // 属性耐性のコンボボックスを作成する
        createSelectList($('#param_elem_guard'), elementRank, '\s (x\d)');
        createSelectList($('#param_elem_break'), elementBreak, '\s (+\d%)');
        // テンションのコンボボックスを作成する
        createSelectList($('#param_tension'), tensionList);
        // 攻撃力増減のコンボボックスを作成する
        createSelectList($('#param_bicion'), bicionList, '\s (x\d)');
        // 守備力増減のコンボボックスを作成する
        createSelectList($('#param_suku'), guardList, '\s (x\d)');

        // 計算イベントを設定する
        $('.param_input').bind('keyup mouseup change click', function () {
            calcAttackPoint();
            calcNormalDamage();
            calcSpecialDamage();
        });
        calcAttackPoint();
        calcNormalDamage();
        calcSpecialDamage();
        $('input.param_input').focus(function () {
            $(this).select();
        });
        $('[data-toggle="tooltip"]').tooltip({ html: true });
    });

    /**
    * コンボボックスリストを作成する
    * @param $select selectコンボボックス
    * @param source データソース
    */
    function createSelectList($select, source, format) {
        $select.empty();
        if (source) {
            $.each(source, function () {
                var text = this['name'];
                var value = this['value'];
                if (format) {
                    text = format.replace('\d', value).replace('\s', text);
                }
                $select.append('<option value="' + value + '">' + text + '</option>');
            });
        }
    }

    /**
    * 攻撃力を計算する
    */
    function calcAttackPoint() {
        // 力
        var power = $('#param_power').number();
        // スキル
        var skill = $('#param_skill_level').number();
        // 食べ物
        var food = $('#param_food_level').number();
        // 武器の基礎攻撃力
        var weaponBase = $('#param_weapon').number();
        // 武器の錬金効果
        var weaponOpt = $('#param_renkin').number();
        // アクセの基礎攻撃力
        var acsBase = 0;
        $('select.param_acs').each(function () {
            acsBase += $(this).number();
        });
        // アクセの合成効果
        var acsOpt = 0;
        $('input.param_acs').each(function () {
            acsOpt += $(this).number();
        });
        // 攻撃力アップ
        var bision = $('#param_bicion').number();
        // 戦鬼の乱れ舞
        var senki = $('input[name=param_senki]:checked').number();
        // バイシの影響を受ける攻撃力
        var attackBase = Math.ceil((power + weaponBase + acsBase) * bision);
        // 攻撃力合計
        var attackAll = attackBase + skill + food + weaponOpt + acsOpt + senki;
        $('#attack_all').val(attackAll);
    }

    /**
    * 通常攻撃ダメージを算出する
    */
    function calcNormalDamage() {
        // 攻撃力
        var attackAll = $('#attack_all').number();
        // 守備力
        var guard = $('#param_guard').number();
        // スクルト
        var suku = $('#param_suku').number();
        guard *= suku;

        var minDamage = 0;
        var avgDamage = 0;
        var maxDamage = 0;
        if ((attackAll / guard) < (4.0 / 7.0)) {
            // 守備力に対して攻撃者の攻撃力が57%(4/7)以下だと、ダメージは「0～攻撃力÷16」のどれかになる
            maxDamage = attackAll / 16.0;
            avgDamage = (minDamage + maxDamage) / 2.0;
        } else {
            // 平均ダメージ＝攻撃力÷2－守備力÷4
            avgDamage = (attackAll / 2.0 - guard / 4.0);
            if (avgDamage <= 0) {
                // 平均ダメージが0以下の場合は、ダメージは0か1
                minDamage = 0;
                maxDamage = 1;
                avgDamage = 0;
            } else {
                var range = (avgDamage / 16.0) + 1;
                minDamage = avgDamage - range;
                maxDamage = avgDamage + range;
            }
        }
        minDamage = Math.floor(minDamage);
        maxDamage = Math.floor(maxDamage);
        avgDamage = Math.floor(avgDamage);
        $('#damage_min').val(minDamage);
        $('#damage_max').val(maxDamage);
        $('#damage_avg').val(avgDamage);
    }

    /**
    * 特技ダメージを算出する
    */
    function calcSpecialDamage() {
        // 通常ダメージを取得する
        var minDamage = $('#damage_min').number();
        var maxDamage = $('#damage_max').number();
        var avgDamage = $('#damage_avg').number();
        // 極意宝珠の倍率を取得する
        var orbPerc = $('#param_elem_gokui').number() / 100.0;
        // 系統特攻の倍率を取得する
        var typePerc = $('#param_type').number() / 100.0;
        // 属性ボーナスの倍率を取得する
        var elemPerc = $('#param_type').number() / 100.0;
        // 属性耐性の倍率を取得する
        var elemGuard = $('#param_elem_guard').number();
        // フォースブレイクの倍率を取得する
        var elemBreak = $('#param_elem_break').number() / 100.0;
        elemGuard += elemBreak;
        elemGuard = elemGuard > 2 ? 2 : elemGuard; // 倍率2.0を超えていれば補正する
        // テンションの倍率を取得する
        var tensionData = tensionList[$('#param_tension').number()];

        // ダメージ幅を求める
        var damageList = [];
        for (var d = minDamage; d <= maxDamage; d++) {
            damageList.push({ normal: d });
        }

        // 使用特技を取得する
        var special = specialList[0];
        // 特技基礎ダメージを求める
        for (var d = 0; d < damageList.length; d++) {
            var bdamage = damageList[d].normal;
            var specialDamageList = [];
            var sdamage = 0;
            if (special.r != undefined) {
                // 基礎倍率に範囲がある場合
                for (var r = 0; r < special.r.length; r++) {
                    sdamage = bdamage * special.r[r];
                    specialDamageList.push(Math.floor(sdamage));
                }
            } else {
                if (typeof special.p === 'function') {
                    // 計算式で基礎倍率を求める場合
                    sdamage = special.p(bdamage);
                } else {
                    // 基礎倍率が固定の場合
                    sdamage = bdamage * special.p;
                }
                specialDamageList.push(Math.floor(sdamage));
            }
            damageList[d].specialList = specialDamageList;
        }
        var damageRangeList = [];
        for (var d = 0; d < damageList.length; d++) {
            var specialDamageList = damageList[d].specialList;
            for (var s = 0; s < specialDamageList.length; s++) {
                // 特技基礎ダメージ
                var specialBase = specialDamageList[s];
                var specialResult = specialBase;
                if (elemGuard > 0) {
                    specialResult = specialBase;
                    // 属性耐性の補正結果を加算する
                    specialResult += Math.floor(specialBase * (elemGuard - 1.0));
                    if (specialResult > 0) {
                        // 極意宝珠の補正結果を加算する
                        specialResult += Math.floor(specialBase * orbPerc);
                        if (special.s) {
                            // 特攻ボーナスがあれば加算する
                            specialResult += Math.floor(special.s(specialBase));
                        }
                        // 系統特攻の補正結果を加算する
                        specialResult += Math.floor(specialBase * typePerc);
                        // 属性特攻の補正結果を加算する
                        specialResult += Math.floor(specialBase * elemPerc);
                    }
                    if (tensionData.bonus > 0) {
                        // テンションを加算する
                        specialResult = Math.floor(specialResult * tensionData.perc + tensionData.bonus);
                    }
                }
                specialResult = specialResult > 1999 ? 1999 : specialResult;
                damageRangeList.push(specialResult);
            }
        }
        // HPを取得する
        var hp = $('#param_hp').number();
        var deadCount = 0;
        var maxSpDamage = -1;
        var minSpDamage = Number.MAX_VALUE;
        var maxSpRefl = -1;
        var minSpRefl = Number.MAX_VALUE;
        for (var d = 0; d < damageRangeList.length; d++) {
            var damage = damageRangeList[d];
            var refl = Math.floor(damage * 0.35);
            if (refl > maxSpRefl) {
                maxSpRefl = refl;
            }
            if (refl < minSpRefl) {
                minSpRefl = refl;
            }
            if (damage > maxSpDamage) {
                maxSpDamage = damage;
            }
            if (damage < minSpDamage) {
                minSpDamage = damage;
            }
            if (refl > hp) {
                deadCount++;
            }
        }
        $('#damage_range').html('もろば切りのダメージ幅<br/>' + minSpDamage + '～' + maxSpDamage + ' (反射 ' + minSpRefl + '～' + maxSpRefl + ')');
        var deadPerc = Math.floor(deadCount / damageRangeList.length * 100);
        $('#calc_damage_result .progress-bar').attr('aria-valuenow', deadPerc).css('width', deadPerc + '%');
        $('#dead_percent span').text(deadPerc + '%');
    }


})();