(function () {

    var foodList = [];
    foodList.push({ value: 0, name: "なし" });
    foodList.push({ value: 2, name: "パワフルステーキ ☆なし" });
    foodList.push({ value: 3, name: "パワフルステーキ ★" });
    foodList.push({ value: 5, name: "パワフルステーキ ★★" });
    foodList.push({ value: 7, name: "パワフルステーキ ★★★" });
    foodList.push({ value: 5, name: "スマッシュポテト ☆なし" });
    foodList.push({ value: 7, name: "スマッシュポテト ★" });
    foodList.push({ value: 10, name: "スマッシュポテト ★★" });
    foodList.push({ value: 15, name: "スマッシュポテト ★★★" });
    foodList.push({ value: 5, name: "バトルステーキ ☆なし" });
    foodList.push({ value: 7, name: "バトルステーキ ★" });
    foodList.push({ value: 10, name: "バトルステーキ ★★" });
    foodList.push({ value: 15, name: "バトルステーキ ★★★" });





















    $(function () {
        // 料理のコンボボックスを作成する
        createSelectList($('#param_food'), foodList, 'value', 'name');
        $('[data-toggle="tooltip"]').tooltip({ html: true });
    });

    /**
    * コンボボックスリストを作成する
    * @param $select selectコンボボックス
    * @param source データソース
    * @param valueField 値のプロパティ名
    * @param textField 文字列のプロパティ名
    */
    function createSelectList($select, source, valueField, textField) {
        $select.empty();
        $.each(source, function () {
            var value = this[valueField];
            var text = this[textField];
            $select.append('<option value="' + value + '">' + text + '</option>');
        });
    }
})();