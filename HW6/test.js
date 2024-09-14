describe("Тесты к Задаче №1", function() {
  it("Проверка что разница между числами равна 1", function () {
    assert.strictEqual(diff(4, 5), 1);
  });
});

describe("Тесты к Задаче №2", function() {
  it("Проверка что строка состоит из 1-го слова", function () {
    assert.strictEqual(isWord("слово"), true);
  });
});


describe("Тесты к Задаче №3", function() {
  it("Проверка возведения числа в степень", function () {
    assert.strictEqual(pow(2, 2), 4);
  });
});
 