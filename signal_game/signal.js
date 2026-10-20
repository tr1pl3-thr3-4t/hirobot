let currentLevelText = document.getElementById("currentLevelText");
let questionSignal = document.getElementById("questionSignal");
let hintSignal = document.getElementById("hintSignal");
/*Tell whether the user is correct*/
let respondSignal = document.getElementById("respondSignal");

let chapterName1 = document.querySelector(".chapterName1");
let chapterName2 = document.querySelector(".chapterName2");
let chapterName3 = document.querySelector(".chapterName3");
document.querySelector(".chapterName2").style.display = "none";
document.querySelector(".chapterName3").style.display = "none";

let chapterLengths = [16, 50, 10];
let currentLevel = 1;
let highestUnlockedLevel = 1;


/*User inputted answer*/
let signalInput = document.getElementById("signalInput");
let sendButton = document.getElementById("sendButton");


/*COSMETICS*/
let typingSpeed = 30;


/*Remember to update 
function definating()
dictionary section in html



*/
let ne2 = "@-2_undef";
let ne2Input = document.getElementById("ne2Input");
let ne3 = "@-3_undef";
let ne3Input = document.getElementById("ne3Input");
let ne4 = "@-4_undef";
let ne4Input = document.getElementById("ne4Input");
let ne5 = "@-5_undef";
let ne5Input = document.getElementById("ne5Input");
let ne1 = "@-1_undef";
let ne1Input = document.getElementById("ne1Input");


let question = {
    1: "0",
    2: "1",
    3: "2",
    4: "3",
    5: [0, -2, 1, -2, 2, -2, 3, -2].join("\n"),
    6: [3, -2, 4, -2, 5, -2].join("\n"),
    7: [5, -2, 6, -2, 7, -2, 8, -2].join("\n"),
    8: [0, -2, 1, -2, 2, -2, 3, -2, 4, -2].join("\n"),
    9:  () => [1, -2, -2, -2, 2, -2, -2, -2, 3, -2, -2, -2].join("\n"),
    10:  () => [1, -2, 2, -2, 3, -2, -2, -2, 1, -2, 2, -2, 3, -2, -2, -2, 1, -2, 2, -2].join("\n"),
    11:  () => [1, -2, 3, -2, 5, -2, 7, -2, -2, -2, 2, -2, 4, -2, 6, -2, 8, -2, -2, -2, 3, -2, 5, -2, 7, -2].join("\n"),
    12:  () => [1, -2, 2, -2, -2, -2, 3, -2, 4, -2, -2, -2, 5, -2, 6, -2, -2, -2, 7, -2,].join("\n"),
    13: () => [1, ne2, 2, ne2, 3, ne2, 4, ne2].join("\n"),
    14:  () => [3, ne2, ne2, ne2, 4, ne2, ne2, ne2, 5, ne2, ne2, ne2, 6, ne2, ne2, ne2].join("\n"),
    15: () => [
        1, ne2, 2, ne2, 3, ne2, 4, ne2, 5, ne2, ne2, ne2,
        1, ne2, 3, ne2, 5, ne2, 7, ne2, 9, ne2, ne2, ne2,
        0, ne2, 2, ne2, 4, ne2, 6, ne2].join("\n"),
    16:  () => [2, ne2, 3, ne2, ne2, ne2, 4, ne2, 5, ne2, ne2, ne2, 6, ne2, 7, ne2, ne2, ne2, 8, ne2,].join("\n"),

    /*=*/
    17: () => [
        1, ne3, 1, ne2, ne2, ne2,
        2, ne3, 2, ne2, ne2, ne2,
        3, ne3, 3, ne2, ne2, ne2,
        4, ne3].join("\n"),
    18: () => [
        6, ne3, 6, ne2, ne2, ne2,
        5, ne3,].join("\n"),
    19: () => [
        812, ne3, 812, ne2, ne2, ne2,
        2915, ne3, 2915, ne2, ne2, ne2,
        471, ne3, 471, ne2, ne2, ne2,
        1656, ne3].join("\n"),
    20: () => [
        0, ne3].join("\n"),

    /*+*/
    21: () => [
        5, ne4, 2, ne3, 7, ne2, ne2, ne2,
        1, ne4, 7, ne3, 8, ne2, ne2, ne2,
        1, ne4, 3, ne3, 4, ne2, ne2, ne2,
        2, ne4, 3, ne3].join("\n"),
    22: () => [
        1, ne4, 1, ne3, 2, ne2, ne2, ne2,
        2, ne4, 2, ne3, 4, ne2, ne2, ne2,
        3, ne4, 3, ne3, 6, ne2, ne2, ne2,
        6, ne4, 6, ne3].join("\n"),
    23: () => [
        12, ne3, 5, ne4, 7, ne2, ne2, ne2,
        5, ne3, 3, ne4, 2, ne2, ne2, ne2,
        9, ne3, 4, ne4, 5, ne2, ne2, ne2,
        6, ne3, 2, ne4].join("\n"),
    24: () => [
        5, ne3, 5, ne4, 0, ne2, ne2, ne2,
        5, ne3, 4, ne4, 1, ne2, ne2, ne2,
        5, ne3, 3, ne4, 2, ne2, ne2, ne2,
        5, ne3, 2, ne4, 3, ne2, ne2, ne2,
        5, ne3, 0, ne4].join("\n"),
    25: () => [
        1, ne4, 17, ne3, 18, ne2, ne2, ne2,
        53, ne3, 42, ne4, 11, ne2, ne2, ne2,
        52, ne3, 3, ne4].join("\n"),
    26: () => [
        2, ne4, 4, ne4, 5, ne3, 11, ne2, ne2, ne2,
        4, ne3, 1, ne4, 1, ne4, 1, ne4, 1, ne2, ne2, ne2,
        4, ne4, 2, ne4, 5, ne3].join("\n"),
    27: () => [
        12, ne4, 3, ne3,].join("\n"),
    28: () => [
        0, ne3, 0, ne4,].join("\n"),
    29: () => [
        7, ne4, 1, ne3, 4, ne4, 4, ne2, ne2, ne2,
        5, ne4, 2, ne3, 3, ne4, 4, ne2, ne2, ne2,
        4, ne4, 4, ne3, 2, ne4].join("\n"),

    /*-*/
    30: () => [
        6, ne5, 2, ne3, 4, ne2, ne2, ne2,
        7, ne5, 5, ne3, 2, ne2, ne2, ne2,
        3, ne5, 3, ne3, 0, ne2, ne2, ne2,
        5, ne5, 4, ne3].join("\n"),
    31: () => [
        4, ne3, 5, ne5, 1, ne2, ne2, ne2,
        9, ne5, 5, ne3, 4, ne2, ne2, ne2,
        2, ne3, 2, ne5, 0, ne2, ne2, ne2,
        5, ne3, 7, ne5].join("\n"),
    32: () => [
        7, ne5, 5, ne3, 4, ne5, 2, ne2, ne2, ne2,
        3, ne5, 2, ne3, 12, ne5, 11, ne2, ne2, ne2,
        2, ne5, 2, ne3, 7, ne5,].join("\n"),
    33: () => [
        5, ne4, 3, ne3, 10, ne5].join("\n"),

    /*NEGATIVE*/
    34: () => [
        5, ne5, 6, ne3, ne1, 1, ne2, ne2, ne2,
        3, ne5, 7, ne3, ne1, 4, ne2, ne2, ne2,
        1, ne5, 9, ne3].join("\n"),
    35: () => [
        7, ne4, ne1, 20, ne3, ne1, 13, ne2, ne2, ne2,
        ne1, 9, ne5, 12, ne3, ne1, 21,ne2, ne2, ne2,
        2, ne5, ne1, 12, ne3].join("\n"),

    36: () => [
        0, ne5, 7, ne3].join("\n"),
    37: () => [
        3, ne2, 2, ne2, 1, ne2, 0, ne2, ne1, 1, ne2, ne1, 2, ne2, ne1, 3, ne2, ne1, 4, ne2, ne1, 5, ne2].join("\n"),
                
    


    175: () => [
        3, ne3, 3, ne2, ne2, 5, ne3, 5, ne2, ne2, 8, ne3].join("\n"),
    14125: () => [
        2, ne3, 2, ne2, ne2, 5, ne4, 1, ne3, 6, ne2, ne2, 3, ne4, 4, ne3, 7, ne2, ne2, 2, ne4, 2, ne3].join("\n"),
    
}

/* 
-1 NEGATIVE
-2 SPACE 
-3 =
-4 ADDITION
-5 SUBTRACTION
*/
let answer = {
    1: "0",
    2: "1",
    3: "2",
    4: "3",
    5: "4",
    6: "6",
    7: "9",
    8: "5",
    9: "4",
    10: "3",
    11: "9",
    12: "8",
    13: "5",
    14: "7",
    15: "8",
    16: "9",

    17: "4",
    18: "5",
    19: "1656",
    20: "0",

    21: "5",
    22: "12",
    23: "4",
    24: "5",
    25: "49",
    26: "11",
    27: "15",
    28: "0",
    29: "6",

    30: "1",
    31: "2",
    32: "7",
    33: "2",

    34: () => ["test", ne1 + "8"],
    35: "14",
    36: () => ["test", ne1 + "7"],
    37: () => ["test", ne1 + "6"],



    123: "placeholder",
    12312: "placeholder",
    3013123: "placeholder",


};



/* SUBMIT ANSWER BUTTON */
sendButton.addEventListener("click", function() {
    let shortenedInput = signalInput.value.trim().toLowerCase().replace(/\s+/g, "");
    let currentLevelAnswer = answer[currentLevel];
    if (typeof currentLevelAnswer === "function") {
        currentLevelAnswer = currentLevelAnswer();
    }

    // allow either one answer or multiple accepted answers
    let acceptedAnswers = Array.isArray(currentLevelAnswer)
        ? currentLevelAnswer
        : [currentLevelAnswer];

    /*do nothing if input is blank */
    if (shortenedInput === "") {
        return;
    } 
    
    /*if correct*/
    /* A G H M R V W X Z */
    else if (acceptedAnswers.some(function(possibleAnswer) {
        return String(possibleAnswer).trim().toLowerCase().replace(/\s+/g, "") === shortenedInput;
    })) {
        if (currentLevel === highestUnlockedLevel) {
            highestUnlockedLevel++;
            respondSignal.textContent = ">>>incoMing tRAnsMission";
        }

        currentLevel += 1;
        updateQuestion();
        updateLevelSelector();
        milestoneCheck();

        
        signalInput.value = "";
    }
    
    /*if incorrect */
    else {
        respondSignal.textContent  = "no Response\nlAst inputted siGnAl: " + signalInput.value;
    }
});






function milestoneCheck() {
    /* A G H M R V W X Z */
    document.querySelector(".tempVar2").style.display = "block";
    if (currentLevel === 2){
        document.querySelector(".tempVar1").style.display = "block";
        document.querySelector(".tempVar2").style.display = "none";
    }   
    else if (currentLevel === 5){
        hintSignal.textContent = `neW siGnAl: -2`;
    }
    else if (currentLevel === 9){
        document.querySelector(".navbar").style.display = "block";
        document.getElementById("currentLevelText").style.display = "block";
        document.querySelector(".tempVar2").style.display = "none";
    }
    else if (currentLevel === 13){
        hintSignal.textContent = `tHe siGnAl -2 HAs been ReplAced WitH @-2_undef`;
    }
    else if (currentLevel === 15){
        hintSignal.textContent = `dictionary unlocked
        try defining @-2_undef
        then recompile it`;
        
        document.querySelector(".dictionaryHeader").style.display = "flex";
        document.querySelectorAll(".dictionarySection").forEach(function(element) {
            element.style.display = "grid";
        }); 
    }
    else if (currentLevel === 17){
        chapterName1.textContent = "logic:";
        document.querySelector(".chapterName2").style.display = "block";
        hintSignal.textContent = `neW siGnAl: @-3_undef`;
        
    }
    else if (currentLevel === 21){
        hintSignal.textContent = `neW siGnAl: @-4_undef`;
        
    }
    else if (currentLevel === 30){
        hintSignal.textContent = `neW siGnAl: @-5_undef`;
        
    }
    else if (currentLevel === 34){
        hintSignal.textContent = `neW siGnAl: @-1_undef`;
        
    }
    else if (currentLevel === 241){
        chapterName2.textContent = "arithmetic:";
        document.querySelector(".chapterName3").style.display = "block";
        
    }
    
    
    
    
    else {
        hintSignal.textContent = "";
        document.querySelector(".tempVar2").style.display = "none";
    }
}



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

    let i5 = ne5Input.value;
    if (i5 == "") {
        ne5 = "@-5_undef";
    } else {
        ne5 = i5;
    }

    let i1 = ne1Input.value;
    if (i1 == "") {
        ne1 = "@-1_undef";
    } else {
        ne1 = i1;
    }
}

let typingTimer;
function updateQuestion() {
    let i = question[currentLevel];
    if (typeof i === "function") {
        i = i();
    }
    questionSignal.textContent = "";
    currentLevelText.textContent = "tRAnsMission " + currentLevel;

    clearInterval(typingTimer);
    let charIndex = 0;
    typingTimer = setInterval(function() {
        if (charIndex < i.length) {
            questionSignal.textContent += i.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingTimer);
        }
    }, typingSpeed);
}
updateQuestion();


function updateLevelSelector() {
    let totalLevels = 0;
    for (let chapter = 0; chapter < chapterLengths.length; chapter++) {
        let selector = document.getElementById(
            "levelSelector" + (chapter + 1)
        );

        selector.innerHTML = "";

        let startLevel = totalLevels + 1;
        totalLevels += chapterLengths[chapter];
        let endLevel = totalLevels;

        for (let i = startLevel; i <= Math.min(endLevel, highestUnlockedLevel); i++) {
            let level = document.createElement("span");

            level.textContent = i;
            level.classList.add("levelNumber");

            if (i === currentLevel) {
                level.classList.add("current");
            } else {
                level.classList.add("completed");
            }

            level.addEventListener("click", function() {
                currentLevel = i;
                updateLevelSelector();
                updateQuestion();
            });
            selector.appendChild(level);
        }
    }
}
updateLevelSelector();




/* PLAYTEST */
let skipTestButton = document.getElementById("skipTestButton");
skipTestButton.addEventListener("click", function() {
    if (currentLevel === highestUnlockedLevel) {
        highestUnlockedLevel++;
    }
    currentLevel += 1;
    updateLevelSelector();
    milestoneCheck();
    respondSignal.textContent = ">>>incoMing tRAnsMission";
    signalInput.value = "";

    ne2Input.value = " ";
    ne3Input.value = "=";
    ne4Input.value = "+";
    ne5Input.value = "-";
    definating();
    updateQuestion();
        });


/*COSMETIC*/

