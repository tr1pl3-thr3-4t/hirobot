let currentLevelText = document.getElementById("currentLevelText");
let questionSignal = document.getElementById("questionSignal");
let hintSignal = document.getElementById("hintSignal");
/*Tell whether the user is correct*/
let respondSignal = document.getElementById("respondSignal");



let score = 5;
let currentChapter = 1;
let currentLevel = 1;



/*User inputted answer*/
let signalInput = document.getElementById("signalInput");
let sendButton = document.getElementById("sendButton");




/* 
-1 NEGATIVE
-2 SPACE 
-3 =
-4 ADDITION
*/
let ne2 = "@-2_undef";
let ne2Input = document.getElementById("ne2Input");
let ne3 = "@-3_undef";
let ne3Input = document.getElementById("ne3Input");
let ne4 = "@-4_undef";
let ne4Input = document.getElementById("ne4Input");


let question = {
    1: "0",
    2: "1",
    3: "2",
    4: "3",
    5: [0, -2, 1, -2, 2, -2, 3, -2].join("\n"),
    6: [3, -2, 4, -2, 5, -2].join("\n"),
    7: [5, -2, 6, -2, 7, -2, 8, -2].join("\n"),
    8: [0, -2, 1, -2, 2, -2, 3, -2, 4].join("\n"),
    9: [3, -2, 4, -2, 5, -2, 6].join("\n"),
    10: () => [1, ne2, 2, ne2, 3, ne2, 4, ne2, ne2, 2, ne2, 3, ne2, 4, ne2, 5, ne2].join("\n"),
    11:  () => [1, ne2, 3, ne2, 5, ne2, 7, ne2, ne2, 2, ne2, 4, ne2, 6, ne2, 8, ne2, ne2, 3, ne2, 5, ne2, 7, ne2].join("\n"),
    12: () => [2, ne2, 3, ne2, 4, ne2, 5, ne2, ne2, 3, ne2, 4, ne2, 5, ne2,].join("\n"),
    13: () => [
        1, ne2, 2, ne2, 3, ne2, 4, ne2, 5, ne2, ne2,
        1, ne2, 3, ne2, 5, ne2, 7, ne2, 9, ne2, ne2,
        0, ne2, 2, ne2, 4, ne2, 6, ne2,].join("\n"),
    14: () => [
        3, ne3, 3, ne2, ne2, 5, ne3, 5, ne2, ne2, 8, ne3].join("\n"),
    15: () => [
        2, ne3, 2, ne2, ne2, 5, ne4, 1, ne3, 6, ne2, ne2, 3, ne4, 4, ne3, 7, ne2, ne2, 2, ne4, 2, ne3].join("\n"),
    
}


let answer = {
    1: "0",
    2: "1",
    3: "2",
    4: "3",
    5: "4",
    6: "6",
    7: "9",
    8: "-25",
    9: "-27",
    10: "6",
    11: "9",
    12: "6",
    13: "8",
    14: "8",
    15: "4",
};


sendButton.addEventListener("click", function() {
    let shortenedInput = signalInput.value.trim().toLowerCase().replace(/\s+/g, "");
    let currentLevelAnswer = answer[currentLevel];

    if (shortenedInput === "") {

    } else if (currentLevelAnswer.replace(/\s+/g, "").toLowerCase() === shortenedInput) {
        currentLevel += 1;
        respondSignal.textContent = ">>>neW incoMMinG siGnAl";
        milestoneCheck();
        signalInput.value = "";
    } else {
        respondSignal.textContent  = "no Response\nlAst inputted siGnAl: " + signalInput.value;
    }

    currentLevelText.textContent = "leVel " + currentChapter + " - " + currentLevel;
    updateQuestion();
});


function updateQuestion() {
    let i = question[currentLevel];
    if (typeof i === "function") {
        i = i();
    }
    questionSignal.textContent = i;
}
updateQuestion();

function milestoneCheck() {
    /* A G H M R V W X Z */
    if (currentLevel === 5){
        hintSignal.textContent = `ARe tHey countinG
        whats up with the -2 in between the numbers`;
    } else if (currentLevel === 8){
        hintSignal.textContent = `hmm they forgot the -2 at the end`;
    } else if (currentLevel === 9){
        hintSignal.textContent = `and again`;
    } else if (currentLevel === 10){
        hintSignal.textContent = `tHe siGnAl -2 HAs been ReplAced WitH @-2_undef`;
    } else if (currentLevel === 11){
        hintSignal.textContent = `try defining @-2_undef
        then recompile it`;
    } else if (currentLevel === 12){
        hintSignal.textContent = `test`;
    } else {
        hintSignal.textContent = "";
    }
}
milestoneCheck();



let recompileButton = document.getElementById("recompileButton");
recompileButton.addEventListener("click", function() {

    definating();
    updateQuestion();

});

function definating(){
    let i2 = ne2Input.value;
    if (i2 == "") {
        ne2 = "@-2_undef";
    } else {
        ne2 = i2;
    }

    let i3 = ne3Input.value;
    if (i3 == "") {
        ne3 = "@-3_undef";
    } else {
        ne3 = i3;
    }

    let i4 = ne4Input.value;
    if (i4 == "") {
        ne4 = "@-4_undef";
    } else {
        ne4 = i4;
    }
}


currentLevelText.textContent = "leVel " + currentChapter + " - " + currentLevel;