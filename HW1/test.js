describe("Тесты к Задаче №1", function() {

    it("Проверка произведения", function() {
        assert.strictEqual(multiplication (a, b), 110);
    });
});

describe("Тесты к Задаче №2", function() {

    it("Проверка расчета длины", function() {
        assert.strictEqual(calculatingTheLength (first, second), 7);
    });
});


describe("Тесты к Задаче №3", function() {

    it("Проверка суммы цифр введенного числа", function() {
        let figure = num.split('');
        let summaFigure = 0;
        figure.forEach(function(el){summaFigure = summaFigure + Number(el)})
        assert.strictEqual(sumFigure (num), summaFigure);
    });
});
  
