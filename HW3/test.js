describe("Тесты к ДЗ №3", function() {

    it("Проверка суммы чисел от 50 до 100", function() {
        assert.strictEqual(sumNumbers(), 3675);
    });

    it("Проверка таблицы умножения на 7", function() {
        assert.strictEqual(createArr()[0], 7);
    });

    it("Проверка среднего арифметического числа", function() {
        assert.strictEqual(arithmeticMean(10), 5);
    });

   
});