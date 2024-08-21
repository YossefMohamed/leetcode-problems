function decodeString(s: string): string {
    const stack: Array<string | number> = [];
    let currentNum = 0;
    let currentStr = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + Number(char);  
        } else if (char === '[') {
            
            stack.push(currentStr);
            stack.push(currentNum);
            
            currentStr = "";
            currentNum = 0;
        } else if (char === ']') {
            const num = stack.pop() as number; 
            const prevStr = stack.pop() as string; 
            
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char; 
        }
    }

    return currentStr;
}