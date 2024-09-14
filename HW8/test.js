describe("Тесты к Задаче №1", function() {
  it("Проверка, сколько прошло минут с начала дня", function () {
    let date = Date.now();
    const expectedMinutes = date.getHours() * 60 + date.getMinutes();
    assert.strictEqual(calculationMin(), expectedMinutes);
  });
});

describe("Тесты к Задаче №2", function() {
  it("Проверка, что 27.07.24 - это вторник", function () {
    assert.strictEqual(DayWeekend(new Date(2024, 7, 27)), "tue");
  });
});


describe("Тесты к Задаче №3", function() {
  it("Проверка, что 2-й пользователь старше", function () {
    assert.strictEqual(
      comparisonData(new Date(2020, 7, 27), new Date(2014, 7, 27)),
      "1st user younger",
    );
  });
});
 