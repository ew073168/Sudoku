let puzzleArray = {
    boxes : [],
    rows : [],
    columns : []
};

for (let i = 0; i < 9; i++) {
    puzzleArray["columns"].push([]);
    puzzleArray["rows"].push([]);
    puzzleArray["boxes"].push([]);
}

function randomizer() {
    return (Math.floor(Math.random()*9)+1);
}

function fillPuzzle(box, row, column) {
    let tries = 0;
    for (let i = 0; i < 9; i++) {
        let newNumber = randomizer();
        let allowNumber = true;     
        let removes = 0;

        for (let j = 0; j < puzzleArray["boxes"][box].length; j++) {
            if (puzzleArray["boxes"][box][j] === newNumber) {
                allowNumber = false;
            }
        }

        if (i < 3) {
            for (let j = 0; j < puzzleArray["rows"][row].length; j++) {
                if (puzzleArray["rows"][row][j] === newNumber) {
                    allowNumber = false;
                }
            }
        } else if (i < 6) {
            for (let j = 0; j < puzzleArray["rows"][row+1].length; j++) {
                if (puzzleArray["rows"][row+1][j] === newNumber) {
                    allowNumber = false;
                }
            }
        } else {
            for (let j = 0; j < puzzleArray["rows"][row+2].length; j++) {
                if (puzzleArray["rows"][row+2][j] === newNumber) {
                    allowNumber = false;
                }
            }
        }

        if (i === 0 || i === 3 || i === 6) {
            for (let j = 0; j < puzzleArray["columns"][column].length; j++) {
                if (puzzleArray["columns"][column][j] === newNumber) {
                    allowNumber = false;
                }
            }
        } else if (i === 1 || i === 4 || i === 7) {
            for (let j = 0; j < puzzleArray["columns"][column+1].length; j++) {
                if (puzzleArray["columns"][column+1][j] === newNumber) {
                    allowNumber = false;
                }
            }
        } else {
            for (let j = 0; j < puzzleArray["columns"][column+2].length; j++) {
                if (puzzleArray["columns"][column+2][j] === newNumber) {
                    allowNumber = false;
                }
            }
        }
        
        if (allowNumber === true) {
            puzzleArray["boxes"][box].push(newNumber);
            if (i < 3) {
                puzzleArray["rows"][row].push(newNumber);
            } else if (i < 6) {
                puzzleArray["rows"][row+1].push(newNumber);
            } else {
                puzzleArray["rows"][row+2].push(newNumber);
            }
            if (i === 0 || i === 3 || i === 6) {
                puzzleArray["columns"][column].push(newNumber);
            } else if (i === 1 || i === 4 || i === 7) {
                puzzleArray["columns"][column+1].push(newNumber);
            } else {
                puzzleArray["columns"][column+2].push(newNumber);
            }
            tries = 0;
            console.log("number"+newNumber);
        } else if (tries > 18) {
            i = 0;
            for (let j = 0; j > puzzleArray["boxes"][box]; j++) {
                puzzleArray["boxes"][box].pop();
                removes++;
                if (removes < 4) {
                    puzzleArray["rows"][row].pop();
                } else if (removes < 7) {
                    puzzleArray["rows"][row+1].pop();
                } else {
                    puzzleArray["rows"][row+2].pop();
                }

                if (i === 1|| i === 4 || i === 7) {
                    puzzleArray["boxes"][box].pop();
                } else if (i === 2|| i === 5 || i === 8) {
                    puzzleArray["boxes"][box+1].pop();
                } else {
                    puzzleArray["boxes"][box+2].pop();
                }
                tries = 0;
            }
        } else {
            i--;
            tries++;
            console.log(tries);
        }
    }
}

fillPuzzle(0,0,0);
fillPuzzle(4,3,3);
fillPuzzle(8,6,6);
fillPuzzle(1,0,3);
fillPuzzle(2,0,6);
fillPuzzle(3,3,0);
fillPuzzle(5,3,6);
fillPuzzle(6,6,0);
fillPuzzle(7,6,3);

console.log(puzzleArray);