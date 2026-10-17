const countInputs = document.getElementById("countInputs");
const btnInputs = document.getElementById("btnInputs");
const inputs = document.getElementById("inputs");
const btncalculation = document.getElementById("btncalculation");
const result = document.getElementById("result");
const avgBtn = document.getElementById("avgBtn");
const avgResult = document.getElementById("avgResult");
const scores = [];
const finalResult = document.getElementById("finalResult")
const count = Number(countInputs.value);


function totalScores(scores) {
    let total = 0;
    for (let  i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    console.log(total)
    return total;
}

btnInputs.addEventListener("click", () => {
    const count = countInputs.value;
    if (countInputs.value.trim() === "" || count <= 0 || count > 20) {
        alert("Wrong entery");
        return;
    }
    inputs.innerHTML = ""
    for(let i = 0; i < count; i++) {
        inputs.innerHTML += `
        <label for="score${i}">Score ${i+1}</label>
        <input type="number" min= "0" max= "100" id="score${i}"><br><br>
        `
    }

    btncalculation.hidden = false;
})

btncalculation.addEventListener("click", () => {
    const count = countInputs.value;

    for(let i = 0; i < count; i++) {
        const inputsId = document.getElementById(`score${i}`)
        const score = Number(inputsId.value);
        if (score <= 0 || score > 100) {
            alert("Wrong number")
            return;
        }
        scores.push(score);
    }

    printScores(scores) 
    let totalCalculation = totalScores(scores);

    console.log(scores);


    result.innerHTML = `
    <p>The students Scores ${scores}</p>
    <h3>The total of Scores: ${totalCalculation}</h3>
    `
     avgBtn.hidden = false
})

function printScores(scores) {
    console.log("Student Scores")
    for(let i = 0; i < scores.length; i++) {
        console.log(scores[i])
    }
}

avgBtn.addEventListener("click", () => {
    let totalCalculation = totalScores(scores);
    const count = Number(countInputs.value);
    const average = totalCalculation / count;

    avgResult.innerHTML = `<p>The student average score of ${count} exams</p>
                        <h3> The average result is: ${average} <h3>
    `
    if (average > 100 || average < 0) {
        finalResult.innerHTML = `<h2>Invalid Average</h2>`;
    } else if (average >= 50) {
        finalResult.innerHTML = `<h2>Final Result = Pass</h2>`;
    } else {
        finalResult.innerHTML = `<h2>Final Result = Fail</h2>`;
    }
})