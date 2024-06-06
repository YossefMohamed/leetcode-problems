const getGreatestNumber = (array: number[]): number => {
    let greatest = 0;
    array.forEach(number => greatest = number > greatest ? number : greatest);
    return greatest;
}

function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        const greatest1 = getGreatestNumber(stones);
        const index1 = stones.indexOf(greatest1);
        stones.splice(index1, 1);

        const greatest2 = getGreatestNumber(stones);
        const index2 = stones.indexOf(greatest2);
        stones.splice(index2, 1);

        const smashResult = greatest1 - greatest2;
            stones.push(smashResult);
    }
    
    return  stones[0]
}