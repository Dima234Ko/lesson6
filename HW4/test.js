describe("Тесты к Задаче №1", function() {
    it("Проверка что user - это объект", function() {
        assert.isObject(user, 'n should be an object');
    });
});

describe("Тесты к Задаче №2", function() {
    it("Проверка что admin - это объект", function() {
        assert.isObject(admin, 'n should be an object');
    });
});


describe("Тесты к Задаче №3", function() {
    it("Проверка что переменная role имеет значение admin", function() {
        assert.strictEqual(role, 'admin');
    });
});
  