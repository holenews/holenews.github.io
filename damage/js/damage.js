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

    var elementRank = [
        { value: '1.0', name: 'なし' },
        { value: '1.1', name: '弱点' },
        { value: '1.3', name: '大弱点' },
		{ value: '0.75', name: '耐性' },
        { value: '0.5', name: '強耐性' }
    ];

    var tensionList = [
        { value: '1.0', name: 'なし' },
        { value: '1.5', name: '1段階' },
        { value: '2.0', name: '2段階' },
		{ value: '2.5', name: '3段階' },
        { value: '3.5', name: '4段階' }
    ];

    var specialList = [
        { name: '通常攻撃', p: 1, sp: 1, sb: 0 },
        { name: 'もろば切り', p: 3.2, sp: 1, sb: 0, custom: function (p) { return Math.floor(p[0] * 0.35) + 'の反射ダメージ'; } },
        { name: '天使の矢', p: 0.9, sp: 1, sb: 0, custom: function (p) { return 'MPを' + Math.floor(p[0] * 0.065) + '回復'; } },
        { name: 'ミラクルソード', p: 1, sp: 1, sb: 0, custom: function (p) { return 'HPを' + (Math.floor(p[0] * 0.25) + 20) + '回復'; } },
        { name: 'タイガークロー', p: [1.3, 1.2, 1.1], sp: 1, sb: 0 },
    ];

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
            createSelectList($(this), acsList[name]);
        });
        // 属性耐性のコンボボックスを作成する
        createSelectList($('#param_elem_guard'), elementRank, '\s (x\d)');
        // テンションのコンボボックスを作成する
        createSelectList($('#param_tension'), tensionList, '\s (x\d)');
        // 攻撃力増減のコンボボックスを作成する
        createSelectList($('#param_bicion'), bicionList, '\s (x\d)');
        // 守備力増減のコンボボックスを作成する
        createSelectList($('#param_suku'), guardList, '\s (x\d)');

        // 計算イベントを設定する
        $('.param_input').bind('keyup mouseup change click', function () {
            calcAttackPoint();
            calcNormalDamage();
        });
        calcAttackPoint();
        calcNormalDamage();

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

})();