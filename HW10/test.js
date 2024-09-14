describe("Тесты к ДЗ №10", function() {

    it("Проверка e-mail", function() {
        assert.strictEqual(verificationData ('esipov@mail.ru'), 'valid email');
    });

    it("Проверка даты", function() {
        assert.strictEqual(verificationData ('12.10.1996'), 'valid data');
    });

    it("Проверка номера", function() {
        assert.strictEqual(verificationData ('+79108094455'), 'valid number');
    });
});