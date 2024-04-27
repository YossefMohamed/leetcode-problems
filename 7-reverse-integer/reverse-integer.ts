function reverse(x: number): number {
      const maxInt = Math.pow(2, 31) - 1;

      
    let newNumber: string = '';
    let numString = `${x}`;
    for (let i = numString.length - 1; i >= 0; i--) {
        newNumber += numString[i];
    }

     let reversedNumber=parseInt(newNumber, 10)
     if(Math.abs(reversedNumber) > maxInt  ) return 0
    if(x<0) reversedNumber*=-1
    return reversedNumber;
}