function numSplits(s: string): number {
    const leftDistinct = new Map<string, number>();
    const rightDistinct = new Map<string, number>();

    for (const char of s) {
        rightDistinct.set(char, (rightDistinct.get(char) || 0) + 1);
    }

    let goodSplits = 0;

    for (const char of s) {
        leftDistinct.set(char, (leftDistinct.get(char) || 0) + 1);

        if (rightDistinct.has(char)) {
            const count = rightDistinct.get(char)!;
            if (count === 1) {
                rightDistinct.delete(char);
            } else {
                rightDistinct.set(char, count - 1);
            }
        }

        if (leftDistinct.size === rightDistinct.size) {
            goodSplits++;
        }
    }

    return goodSplits;
}
