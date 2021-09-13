let calculator = {
  read(a, b) {
    console.log(a, b);
    this.firtsNumber = a;
    this.secondNumber = b;
  },
  sum() {
    return this.firtsNumber + this.secondNumber;
  },
  mul() {
    return this.firtsNumber * this.secondNumber;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
