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

let chapterLengths = [16, 13, 10];
let currentLevel = 1;
let highestUnlockedLevel = 1;





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









    175: () => [
        3, ne3, 3, ne2, ne2, 5, ne3, 5, ne2, ne2, 8, ne3].join("\n"),
    14125: () => [
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
    8: "5",
    9: "4",
    10: "3",
    11: "9",
    12: "8",
    13: "5",
    14: "7",
    15: "8",
    16: "9",


};



/* SUBMIT ANSWER BUTTON */
sendButton.addEventListener("click", function() {
    let shortenedInput = signalInput.value.trim().toLowerCase().replace(/\s+/g, "");
    let currentLevelAnswer = answer[currentLevel];

    /*do nothing if input is blank */
    if (shortenedInput === "") {

    } 
    
    /*if correct*/
    else if (currentLevelAnswer.replace(/\s+/g, "").toLowerCase() === shortenedInput) {
        if (currentLevel === highestUnlockedLevel) {
            highestUnlockedLevel++;
        }
        currentLevel += 1;
        updateQuestion();
        updateLevelSelector();
        milestoneCheck();
        respondSignal.textContent = ">>>neW siGnAl";
        signalInput.value = "";

    } 
    
    /*if incorrect */
    else {
        respondSignal.textContent  = "no Response\nlAst inputted siGnAl: " + signalInput.value;
    }
});





function updateQuestion() {
    let i = question[currentLevel];
    if (typeof i === "function") {
        i = i();
    }
    questionSignal.textContent = i;
    currentLevelText.textContent = "siGnAl " + currentLevel;

}
updateQuestion();


function milestoneCheck() {
    /* A G H M R V W X Z */
    document.querySelector(".tempVar2").style.display = "block";
    if (currentLevel === 2){
        document.querySelector(".tempVar1").style.display = "block";
        document.querySelector(".tempVar2").style.display = "none";
    } else if (currentLevel === 9){
        document.querySelector(".navbar").style.display = "block";
        document.getElementById("currentLevelText").style.display = "block";
        document.querySelector(".tempVar2").style.display = "none";
    } else if (currentLevel === 13){
        hintSignal.textContent = `tHe siGnAl -2 HAs been ReplAced WitH @-2_undef`;
    } else if (currentLevel === 15){
        hintSignal.textContent = `dictionary unlocked
        try defining @-2_undef
        then recompile it`;
        
        document.querySelector(".dictionaryHeader").style.display = "flex";
        document.querySelectorAll(".dictionarySection").forEach(function(element) {
            element.style.display = "grid";
        }); 
    }  else if (currentLevel === 17){
        chapterName1.textContent = "logic:";
        document.querySelector(".chapterName2").style.display = "block";
        
    }   else if (currentLevel === 30){
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
}




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
        updateQuestion();
        updateLevelSelector();
        milestoneCheck();
        respondSignal.textContent = ">>>neW siGnAl";
        signalInput.value = "";
        });
