describe("Тесты к ДЗ №4", function() {

    it("Проверка что user - это объект", function() {
        assert.isObject(user, 'n should be an object');
    });

    it("Проверка что admin - это объект", function() {
        assert.isObject(admin, 'n should be an object');
    });

    it("Проверка что переменная role имеет значение admin", function() {
        assert.strictEqual(role, 'admin');
    });
});