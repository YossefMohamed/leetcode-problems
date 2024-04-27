function reverse(x: number): number {
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = Math.pow(-2, 31);
    
    let reversed = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        if (reversed > maxInt / 10 || (reversed === maxInt / 10 && digit > 7)) {
            return 0; // Overflow, return 0 as required
        }
        if (reversed < minInt / 10 || (reversed === minInt / 10 && digit < -8)) {
            return 0; // Overflow, return 0 as required
        }
        reversed = reversed * 10 + digit;
    }
    
    return reversed;
}