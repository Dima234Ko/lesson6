describe("Тесты к Задаче №1", function() {
  it("Проверка e-mail", function () {
    assert.strictEqual(verificationData("esipov@mail.ru"), "valid email");
  });
});

describe("Тесты к Задаче №2", function() {
  it("Проверка даты", function () {
    assert.strictEqual(verificationData("12.10.1996"), "valid data");
  });
});


describe("Тесты к Задаче №3", function() {
  it("Проверка номера", function () {
    assert.strictEqual(verificationData("+79108094455"), "valid number");
  });
});
 