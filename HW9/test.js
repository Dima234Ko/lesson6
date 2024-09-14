describe("Тесты к Задаче №1", function() {
  it("Проверка, что треугольник прямоугольный", function () {
    assert.strictEqual(checkTriangle(3, 4, 5), true);
  });
});

describe("Тесты к Задаче №2", function() {
  it("Проверка расчета длины окружности", function () {
    assert.strictEqual(Circumference(10), 62.83185307179586);
  });
});


describe("Тесты к Задаче №3", function() {
  it("Проверка расчета площади окружности", function () {
    assert.strictEqual(areaCircle(10), 314.1592653589793);
  });
});
 