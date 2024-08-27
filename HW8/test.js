describe("Тесты к ДЗ №8", function() {

    it("Проверка, что прошло 0 минут с начала дня", function() {
        assert.strictEqual(calculationMin(new Date(2024, 7, 27)), 0);
    });

    it("Проверка, что 27.07.24 - это вторник", function() {
        assert.strictEqual(DayWeekend(new Date(2024, 7, 27)), 'tue');
    });

    it("Проверка, что 2-й пользователь старше", function() {
        assert.strictEqual(comparisonData(new Date(2020, 7, 27), new Date(2014, 7, 27)), "1st user younger");
    });
});