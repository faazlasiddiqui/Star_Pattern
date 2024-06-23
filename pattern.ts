function StarPattern(rows: number): void {
    for (let i: number = 1; i <= rows; i++) {
        let pattern: string = '';
        for (let j: number = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

let rows: number = 5;
StarPattern(rows);
