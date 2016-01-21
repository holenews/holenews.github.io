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

    for (var key in foodLevelList) {
        var list = foodLevelList[key];
        for (var i = 0; i < list.length; i++) {
            list[i].name += ' (攻撃力+' + list[i].value + ')';
        }
    }

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

    for (var key in acsList) {
        var list = acsList[key];
        for (var i = 1; i < list.length; i++) {
            list[i].name += ' (+' + list[i].value + ')';
        }
    }

    var elementRank = [
        { value: '1.0', name: 'なし' },
        { value: '1.1', name: '弱点' },
        { value: '1.3', name: '大弱点' },
		{ value: '0.75', name: '耐性' },
        { value: '0.5', name: '強耐性' }
    ];

    for (var i = 0; i < elementRank.length; i++) {
        elementRank[i].name += ' (x' + elementRank[i].value + ')';
    }

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
            createSelectList($('#param_food_level'), foodLevelList[value]);
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
        createSelectList($('#param_elem'), elementRank);
        $('#calc_attack .param_input').bind('keyup mouseup change click', function () {
            calcAttackPoint();
        });
        calcAttackPoint();

        $('[data-toggle="tooltip"]').tooltip({ html: true });
    });

    /**
    * コンボボックスリストを作成する
    * @param $select selectコンボボックス
    * @param source データソース
    */
    function createSelectList($select, source) {
        $select.empty();
        if (source) {
            $.each(source, function () {
                var text = this['name'];
                var value = this['value'];
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
        var bision = $('input[name=param_bicion]:checked').number();
        // 戦鬼の乱れ舞
        var senki = $('input[name=param_senki]:checked').number();
        // バイシの影響を受ける攻撃力
        var attackBase = Math.ceil((power + weaponBase + acsBase) * bision);
        // 攻撃力合計
        var attackAll = attackBase + skill + food + weaponOpt + acsOpt + senki;
        $('#attack_all').val(attackAll);
    }

})();