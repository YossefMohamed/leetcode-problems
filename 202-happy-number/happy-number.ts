function calResult(n: number): number {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isHappy(n: number): boolean {
    const results: number[] = [];
    while (true) {
        n = calResult(n);
        if (results.includes(n)) {
            return false;
        }
        if (n === 1) {
            return true;
        }
        results.push(n);
    }
}
