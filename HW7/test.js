describe("Тесты к ДЗ №7", function () {
  it("Проверка что clearInput - это функция", function () {
    assert.isFunction(clearInput, "n should be a function");
  });

  it("Проверка что расчет строк работает верно", function () {
    assert.strictEqual(getN(4), 5);
  });
});

