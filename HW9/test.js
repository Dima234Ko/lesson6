describe("Тесты к ДЗ №9", function() {

    it("Проверка, что треугольник прямоугольный", function() {
        assert.strictEqual(checkTriangle (3, 4, 5), 'Треугольник прямоугольный');
    });

    it("Проверка расчета длины окружности", function() {
        assert.strictEqual(Circumference(10), 62.83185307179586);
    });

    it("Проверка расчета площади окружности", function() {
        assert.strictEqual(areaCircle(10), 314.1592653589793);
    });
});