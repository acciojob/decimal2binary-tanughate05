function decimalToBinary(num) {
  // Write your code here
	  let binary = new Array(32);

  let i = 0;
  while (num > 0) {
    binary[i] = num % 2;
    num= Math.floor(num / 2);
    i++;
  }

  for (let j = i - 1; j >= 0; j--)
    document.write(binary[j]);

}

window.decimalToBinary = decimalToBinary;