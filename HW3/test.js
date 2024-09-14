describe("Тесты к Задаче №1", function () {
  it("Проверка суммы чисел от 50 до 100", function () {
    assert.strictEqual(sumNumbers(), 3675);
  });
});

describe("Тесты к Задаче №2", function () {
  it("Проверка таблицы умножения на 7", function () {
    assert.strictEqual(
      createArr(7),
      "7 * 1 = 7\n7 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56\n7 * 9 = 63\n",
    );
  });
});

describe("Тесты к Задаче №3", function () {
  it("Проверка среднего арифметического числа", function () {
    assert.strictEqual(arithmeticMean(10), 5);
  });
});
