function factorial(n) {
  let result = 1;
  while (n > 0) {
    result = result * n;
    n = n - 1;
  }
  return result;
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);
