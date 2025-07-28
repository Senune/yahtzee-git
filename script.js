const countCells = document.getElementsByClassName("count");
const btnElement = document.getElementById("myBtn");
btnElement.addEventListener('click', rollDice);

function ofAKind(counts, amount) {
    for (let key in counts)
        if (counts[key] >= amount) {
            return true;
        }

    return false;
}

function straight(counts, amount) {
    let continuous = 0;
    for (let key in counts) {
        if (counts[key] > 0) {
            continuous++;
            if (continuous >= amount) {
                return true;
            }
        } else {
            continuous = 0;
        }
    }
    return false;
}

function fullHouse(counts) {
    let hasThree = false;
    let hasTwo = false;
    for (let i = 1; i <= 6; i++) {
        if (counts[i] === 3) hasThree = true;
        if (counts[i] === 2) hasTwo = true;
    }
    return hasThree && hasTwo;
}

function rollDice() {
    let randomNumbers = [];
    let counts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }

    for (let i = 0; i < 5; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        counts[roll]++;
        randomNumbers.push(roll);
    }

    for (let i = 1; i <= 6; i++) {
        countCells[i - 1].innerText = counts[i] * i;
    }

    countCells[6].innerText = ofAKind(counts, 3) ? "Ysadasdasdasdes" : "No";
    countCells[7].innerText = ofAKind(counts, 4) ? "Yes" : "No";
    countCells[8].innerText = straight(counts, 4) ? "Yes" : "No";
    countCells[9].innerText = straight(counts, 5) ? "Yes" : "No";
    countCells[10].innerText = fullHouse(counts) ? "Yes" : "No";
    countCells[11].innerText = ofAKind(counts, 5) ? "Yahtzee!" : "No";

}
