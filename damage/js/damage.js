(function () {

    var foodList = [];
    foodList.push({ value: 0, name: "なし" });
    foodList.push({ value: 1, name: "パワフルステーキ" });
    foodList.push({ value: 2, name: "スマッシュポテト" });
    foodList.push({ value: 3, name: "パワフルステーキ" });

    var foodLevelList = {};
    foodLevelList[1] = [
    	{ value: 2, name: "☆なし" },
    	{ value: 3, name: "★" },
    	{ value: 5, name: "★★" },
    	{ value: 7, name: "★★★" }
    ];
	foodLevelList[2] = [
    	{ value: 5, name: "☆なし" },
    	{ value: 7, name: "★" },
    	{ value: 10, name: "★★" },
    	{ value: 15, name: "★★★" }
    ];
	foodLevelList[3] = [
    	{ value: 5, name: "☆なし" },
    	{ value: 7, name: "★" },
    	{ value: 10, name: "★★" },
    	{ value: 15, name: "★★★" }
    ];
    
    for (var key in foodLevelList) {
		var list = foodLevelList[key];
		for(var i = 0; i < list.length; i++){
			list[i].name += ' (' + list[i].value + ')';
		}
	}
	
    /**
    * 武器スキルのリストを作成する
    * @param values スキルポイントと攻撃力増分値のリスト
    */
    function createSkillList(values){
		var list = [];
		list.push({ value : 0, name : 'なし' });
		var sum = 0;
		for (var key in values) {
			var point = values[key];
			sum += point;
		    list.push({ value : sum, name : '[' + key + '] 攻撃力+' + point });
		}
		return list;
	}
	
	var skillList = {};
	skillList['片手剣']     = createSkillList({ '7'  :  5, '42' : 10, '88' : 15,                        '150' : 10 });
	skillList['両手剣']     = createSkillList({ '7'  : 10, '42' : 15, '88' : 20,            '110' : 10, '150' : 10 });
	skillList['オノ']       = createSkillList({ '3'  :  5, '13' : 10, '35' : 15, '88' : 20, '110' : 10, '150' : 10 });
	skillList['ハンマー']   = createSkillList({ '13' : 12, '58' : 10, '88' : 15,            '110' : 10             });
	skillList['格闘']       = createSkillList({ '3'  : 10, '25' : 20, '77' : 40,                        '150' : 50 });
	skillList['両手杖']     = createSkillList({                                                                    });
	skillList['スティック'] = createSkillList({                                                                    });
	skillList['短剣']       = createSkillList({ '7'  :  5, '42' : 10, '88' : 15,            '130' :  5             });
	skillList['ムチ']       = createSkillList({ '7'  :  5, '22' :  5, '58' :  5,            '110' : 10, '150' : 10 });
	skillList['ヤリ']       = createSkillList({ '3'  : 10, '58' : 15, '88' : 20,                        '150' : 10 });
	skillList['棍']         = createSkillList({ '3'  : 10, '35' : 15, '88' : 20,                        '150' : 10 });
	skillList['ツメ']       = createSkillList({ '7'  :  5, '42' :  5, '88' :  5,                        '150' :  5 });
	skillList['扇']         = createSkillList({ '3'  :  5, '35' : 10, '88' : 15,            '130' : 10, '150' : 10 });
	skillList['弓']         = createSkillList({ '3'  :  5, '35' : 10, '88' : 15,            '110' : 10, '150' : 10 });
	skillList['ブーメラン'] = createSkillList({ '7'  :  5, '22' :  5, '76' :  5,            '110' :  5, '150' : 10 });
	
	var skillTypeList = [];
	for (var key in skillList) {
		skillTypeList.push({ value : key, name : key });
	}

	var acsList = {};
	acsList['首'] = [
		{ value : 0, name : 'なし' },
		{ value : 3, name : 'きんのロザリオ' },
		{ value : 5, name : 'ちからのペンダント' },
		{ value : 7, name : 'バトルチョーカー' },
		{ value : 10, name : '忠誠のチョーカー' }
	];
	
	acsList['指'] = [
		{ value : 0, name : 'なし' },
		{ value : 6, name : '幻界闘士のゆびわ' },
		{ value : 2, name : 'ちからのゆびわ' }
	];
	
	acsList['胸'] = [
		{ value : 0, name : 'なし' },
		{ value : 5, name : 'セトのブローチ' },
		{ value : 7, name : 'セトのアンク' }
	];
	
	acsList['腰'] = [
		{ value : 0, name : 'なし' },
		{ value : 0, name : '輝石のベルト' },
		{ value : 0, name : '戦神のベルト' },
	];

	acsList['札'] = [
		{ value : 0, name : 'なし' },
		{ value : 0, name : 'しんぴのカード' },
		{ value : 0, name : '不思議のカード' }
	];

	acsList['他'] = [
		{ value : 0, name : 'なし' },
		{ value : 5, name : 'パワーチャーム' }
	];
	
	for (var key in acsList) {
		var list = acsList[key];
		for(var i = 0; i < list.length; i++){
			if(list[i].name != 'なし'){
				list[i].name += ' (' + list[i].value + ')';
			}
		}
	}














    $(function () {
        // 料理のコンボボックスを作成する
        createSelectList($('#param_food_type'), foodList);
        $('#param_food_type').change(function(){
        	// 料理ランクのコンボボックスを作成する
        	var value = $(this).val();
        	createSelectList($('#param_food_level'), foodLevelList[value]);
        }).change();
        $('#param_food_type').change(function(){
        	// 武器スキルのコンボボックスを作成する
        	var value = $(this).val();
        	if(value == '0'){
        		$('#param_food_level').attr('disabled', 'disabled');
        	}else{
        		$('#param_food_level').removeAttr('disabled');
        	}
        }).change();
        // 武器種のコンボボックスを作成する
        createSelectList($('#param_skill_type'), skillTypeList);
        $('#param_skill_type').change(function(){
        	// 武器スキルのコンボボックスを作成する
        	var value = $(this).val();
        	createSelectList($('#param_skill_level'), skillList[value]);
        }).change();
        // アクセサリのコンボボックスを作成する
        createSelectList($('#param_food_acs_n'), acsList['首']);
        createSelectList($('#param_food_acs_f'), acsList['指']);
        createSelectList($('#param_food_acs_b'), acsList['胸']);
        createSelectList($('#param_food_acs_c'), acsList['札']);
        createSelectList($('#param_food_acs_o'), acsList['他']);
        
        $('[data-toggle="tooltip"]').tooltip({ html: true });
    });

    /**
    * コンボボックスリストを作成する
    * @param $select selectコンボボックス
    * @param source データソース
    */
    function createSelectList($select, source) {
        $select.empty();
        if(source){
	        $.each(source, function () {
	            var text = this['name'];
	            var value = this['value'];
	            $select.append('<option value="' + value + '">' + text + '</option>');
	        });
	    }
    }
    
})();