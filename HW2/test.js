describe("Тесты к Задаче №1", function () {
  it("Проверка произведения", function () {
    assert.strictEqual(Math.max(a, b), 12);
  });
});

describe("Тесты к Задаче №2", function () {
  it("Проверка выбора месяца", function () {
    assert.strictEqual(selectionMonth(1), "January");
    assert.strictEqual(selectionMonth(13), "Enter the month number");
  });
});

describe("Тесты к Задаче №3", function () {
  it("Проверка поместится ли круг в квадрат", function () {
    assert.strictEqual(willFit(1, 3), "True");
  });
});
