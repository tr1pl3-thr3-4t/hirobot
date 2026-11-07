let currentLevelText = document.getElementById("currentLevelText");
document.querySelector(".respondSignalDiv").style.display = "none";
let questionSignal = document.getElementById("questionSignal");
let hintSignal = document.getElementById("hintSignal");
let respondSignal = document.getElementById("respondSignal");

let chapterName1 = document.querySelector(".chapterName1");
let chapterName2 = document.querySelector(".chapterName2");
let chapterName3 = document.querySelector(".chapterName3");
document.querySelector(".chapterName2").style.display = "none";
document.querySelector(".chapterName3").style.display = "none";

let chapterLengths = [16, 50, 10000];
let currentLevel = 1;
let highestUnlockedLevel = 1;

let signalInput = document.getElementById("signalInput");


let preventPaste = true;
signalInput.addEventListener("paste", function(event) {
    if (preventPaste) {
        event.preventDefault();
    }
});


/*COSMETICS*/
//lower is faster
let typingSpeed = 100;
//inputs
signalInput.addEventListener("focus", () => {
    signalInput.placeholder = "";
});
signalInput.addEventListener("blur", () => {
    signalInput.placeholder = "> awaiting response";
});
let dictionaryPlaceholder = document.querySelectorAll(".dictionaryInput");
dictionaryPlaceholder.forEach(input => {
    input.addEventListener("focus", () => {
        input.placeholder = "";
    });
    input.addEventListener("blur", () => {
        input.placeholder = "> undefined";
    });
});


/*Remember to update 
HTML new dictionary section: div is correct, input class is correct

hide dictionary section
milestoneCheck()
var dictionaryInputs
recompile()
*/
let ne1 = "@-1_undef";
let ne1Input = document.getElementById("ne1Input");
let ne2 = "1420405750";
let ne2Input = document.getElementById("ne2Input");
let ne3 = "@-3_undef";
let ne3Input = document.getElementById("ne3Input");
let ne4 = "@-4_undef";
let ne4Input = document.getElementById("ne4Input");
let ne5 = "@-5_undef";
let ne5Input = document.getElementById("ne5Input");
let ne6 = "@-6_undef";
let ne6Input = document.getElementById("ne6Input");


let intro0 = 1420405752;
let intro1 = 1420405753;
let intro2 = 1420405754;
let intro3 = 1420405755;
let intro4 = 1420405756;
let intro5 = 1420405757;
let intro6 = 1420405758;
let intro7 = 1420405759;
let intro8 = 1420405760;
let intro9 = 1420405761;




let question = {
    1: () => [intro0].join("\n"),
    2: () => [intro0].join("\n"),
    3: () => [intro0].join("\n"),
    4: () => [intro1].join("\n"),
    5: () => [intro2].join("\n"),
    6: () => [intro3].join("\n"),
    7: () => [intro4].join("\n"),
    8: () => [intro0, intro1, intro2, intro3, intro4].join("\n"),
    9: () => [intro0, intro1, intro2, intro3, intro4, intro5].join("\n"),
    10: () => [intro0, ne2, intro1, ne2, intro2, ne2, intro3, ne2].join("\n"),
    11: () => [intro0, ne2, intro1, ne2, intro2, ne2, intro3, ne2, intro4, ne2, intro5, ne2].join("\n"),
    12: () => [intro3, ne2, intro4, ne2, intro5, ne2, intro6, ne2].join("\n"),
    13: () => [intro1, ne2, ne2, ne2, intro2, ne2, ne2, ne2, intro3, ne2, ne2, ne2].join("\n"),
    14: () => [intro0, ne2, ne2, ne2, intro1, ne2, ne2, ne2, intro2, ne2, ne2, ne2, intro3, ne2, ne2, ne2, intro4, ne2, ne2, ne2].join("\n"),
    15: () => [
    intro1, ne2, intro2, ne2, intro3, ne2, ne2, ne2,
    intro1, ne2, intro2, ne2, intro3, ne2, ne2, ne2,
    intro1, ne2, intro2, ne2].join("\n"),
    16:  () => [intro2, ne2, intro3, ne2, ne2, ne2, intro4, ne2, intro5, ne2, ne2, ne2, intro6, ne2, intro7, ne2, ne2, ne2, intro8, ne2].join("\n"),

    /* = */
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

    /* + */
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

    /* - */
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

    /* * or MULTIPLICATION */
    38: () => [
        2, ne6, 3, ne3, 6, ne2, ne2, ne2,
        5, ne6, 4, ne3, 20, ne2, ne2, ne2,
        9, ne6, 2, ne3, 18, ne2, ne2, ne2,
        5, ne6, 5, ne3].join("\n"),
    
                
    


    175: () => [
        3, ne3, 3, ne2, ne2, 5, ne3, 5, ne2, ne2, 8, ne3].join("\n"),
    14125: () => [
        2, ne3, 2, ne2, ne2, 5, ne4, 1, ne3, 6, ne2, ne2, 3, ne4, 4, ne3, 7, ne2, ne2, 2, ne4, 2, ne3].join("\n"),
    
}

/* MASTER ANSWER KEY
-1 NEGATIVE
-2 SPACE 
-3 =
-4 +
-5 -
-6 *
*/
let answer = {
    1: () => [intro0],
    2: () => [intro0],
    3: () => [intro0],
    4: () => [intro1],
    5: () => [intro2],
    6: () => [intro3],
    7: () => [intro4],
    8: () => [intro5],
    9: () => [intro6],


    10: () => [intro4],
    11: () => [intro6],
    12: () => [intro7],
    13: () => [intro4],
    14: () => [intro5],
    15: () => [intro3],
    16: () => [intro9],

    /* -4 ADDITION */
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

    /* -5 SUBTRACTION */
    30: "1",
    31: "2",
    32: "7",
    33: "2",

    /* -1 NEGATIVE */
    34: () => ["test", ne1 + "8"],
    35: "14",
    36: () => ["test", ne1 + "7"],
    37: () => ["test", ne1 + "6"],
    38: () => ["test", "25"],



    123: "placeholder",
    12312: "placeholder",
    3013123: "placeholder",


};



/* SUBMIT ANSWER BUTTON */
let sendButton = document.getElementById("sendButton");
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
        respondSignal.innerHTML =
            'no Response /// lAst inputted siGnAl: <span style="color: #96B891;">' +
            signalInput.value +
            '</span>';
    }
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* PROGESSION CHECK/MILESTONE */
document.getElementById("ne1Section").style.display = "none";
document.getElementById("ne2Section").style.display = "none";
document.getElementById("ne3Section").style.display = "none";
document.getElementById("ne4Section").style.display = "none";
document.getElementById("ne5Section").style.display = "none";
document.getElementById("ne6Section").style.display = "none";
function milestoneCheck() {
    /* A G H M R V W X Z */
    document.querySelector(".hintSignalDiv").style.display = "block";
    if (currentLevel === 2){
        document.querySelector(".respondSignalDiv").style.display = "block";
        document.querySelector(".navbar").style.display = "block";
        document.getElementById("currentLevelText").style.display = "block";
        hintSignal.textContent = `1420405752 hz is the unperturbed atomic 
        hydrogen ground state hyperfine transition frequency`;

        playButton.click();
        audioContext.resume();

        audio.play().catch(error => {
        console.error("Audio playback failed:", error);
    });
    }   
    else if (currentLevel === 3){
        hintSignal.textContent = `1420405752 hz seems important`;
    }
    else if (currentLevel === 4){
        hintSignal.textContent = `oh the signal increased by 1hz`;
        typingSpeed = 75;
    }
    else if (currentLevel === 5){
        hintSignal.textContent = `its 2hz above 1420405752`;
    }
    else if (currentLevel === 6){
        hintSignal.textContent = `now its 3hz above`;
    }
    else if (currentLevel === 8){
        hintSignal.textContent = `multiple signal at once
        seems like they are counting
        why dont we try and send the next frequency after that`;
        typingSpeed = 30;
    }
    else if (currentLevel === 10) {
        hintSignal.innerHTML = `neW siGnAl: <u>${ne2}</u>

        woah, ${ne2} is 2hz <u>below</u> 1420405752
        i think they are still counting`;
        typingSpeed = 12;
    }
    else if (currentLevel === 13) {
        hintSignal.innerHTML = `seems like <u>${ne2} is just a separator</u>`;
        typingSpeed = 8;

    }
    else if (currentLevel === 15){
        hintSignal.innerHTML = `dictionary unlocked

        lets make this easier to read
        try defining <u>${ne2}</u> with the word "space"
        then hit recompile
        
        copy and paste is also available`;

        document.getElementById("refSection").style.display = "grid";
        document.getElementById("ne2Section").style.display = "grid";
        document.querySelector(".dictionaryHeader").style.display = "flex";
        preventPaste = false;
    }
    else if (currentLevel === 17){
        chapterName1.textContent = "intro:";
        document.querySelector(".chapterName2").style.display = "block";
        hintSignal.innerHTML = `neW siGnAl: <u>@-3_undef</u>
        just like a normal signal but <u>3 below</u> the reference signal
        
        i also let <u>1420405752</u>, our reference signal, be '0'
        with all signals <u>above</u> it be positive integers
        `;

        let i = document.getElementById("ne2Text");
        let j = document.getElementById("refFreqText2");

        i.textContent = `@-2_undef`;
        j.textContent = `the reference signal or '0'`;
        
        intro0 = 0;
        intro1 = 1;
        intro2 = 2;
        intro3 = 3;
        intro4 = 4;
        intro5 = 5;
        intro6 = 6;
        intro7 = 7;
        intro8 = 8;
        intro9 = 9;

        document.getElementById("ne3Section").style.display = "grid";
        recompile();
    }
    else if (currentLevel === 21){
        hintSignal.innerHTML = `neW siGnAl: <u>@-4_undef</u>`;
        document.getElementById("ne4Section").style.display = "grid";
    }
    else if (currentLevel === 30){
        hintSignal.innerHTML = `neW siGnAl: <u>@-5_undef</u>`;
        document.getElementById("ne5Section").style.display = "grid";
        
    }
    else if (currentLevel === 34){
        hintSignal.innerHTML = `neW siGnAl: <u>@-1_undef</u>
        
        finally, negative numbers
        seems like we need to respond with <u>2 signals</u>
        try responding with '<u>${ne1}</u> 8'
        
        `;
        document.getElementById("ne1Section").style.display = "grid";
    }
    else if (currentLevel === 38){
        hintSignal.innerHTML = `neW siGnAl: <u>@-6_undef</u>`;
        document.getElementById("ne6Section").style.display = "grid";
        
    }
    else if (currentLevel === 241){
        chapterName2.textContent = "arithmetic:";
        document.querySelector(".chapterName3").style.display = "block";
        
    }
    
    
    
    
    else {
        hintSignal.textContent = "";
        document.querySelector(".hintSignalDiv").style.display = "none";
    }
}





/* DICTIONARY */
let dictionaryInputs = [ne1Input, ne2Input, ne3Input, ne4Input, ne5Input, ne6Input];
//prevents spaces in dictionary
dictionaryInputs.forEach(input =>
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\s/g, "");
    })
);
//constantly check for duplicate
dictionaryInputs.forEach(input =>
    input.addEventListener("input", recompile)
);
function recompile() {
    dictionaryInputs.forEach((input, index) => {
        input.classList.toggle("invalid",
            input.value.trim() !== "" &&
            dictionaryInputs.some((other, i) =>
                i !== index &&
                input.value.trim().toLowerCase() === other.value.trim().toLowerCase()
            )
        );
    });

    recompileButton.disabled = dictionaryInputs.some((input, index) =>
        input.value.trim() !== "" &&
        dictionaryInputs.some((other, i) =>
            i !== index &&
            input.value.trim().toLowerCase() === other.value.trim().toLowerCase()
        )
    );

    if (recompileButton.disabled) return;

    [ne1, ne2, ne3, ne4, ne5, ne6] = dictionaryInputs.map((input, index) =>
    input.value.trim() ||
    (index === 1 && highestUnlockedLevel < 17
        ? "1420405750"
        : `@-${index + 1}_undef`)
    );
}



/* RECOMPILE BUTTON */
let recompileButton = document.getElementById("recompileButton");
recompileButton.addEventListener("click", function() {
    recompile();
    updateQuestion();
    milestoneCheck();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    console.log(
        "ne1:", ne1,
        "ne2:", ne2,
        "ne3:", ne3,
        "ne4:", ne4,
        "ne5:", ne5,
        "ne6:", ne6
    );
});




/* REWRITE QUESTION */
let typingTimer;
function updateQuestion() {
    let i = question[currentLevel];
    if (typeof i === "function") {
        i = i();
    }
    questionSignal.textContent = "";
    currentLevelText.textContent = "tRAnsMission " + currentLevel;

    // Stop if question is missing or blank
    if (typeof i !== "string" || i.trim() === "") {
        return;
    }

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

/* UPDATE LEVEL SELECTOR */
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
    //increase level selector space
        if (currentLevel > 99) {
            document.querySelector("aside").classList.add("expanded");
            document.querySelectorAll(".chapter").forEach(chapter => {
                chapter.classList.add("expanded");
            });
        } else {
            document.querySelector("aside").classList.remove("expanded");
            document.querySelectorAll(".chapter").forEach(chapter => {
                chapter.classList.remove("expanded");
            });
        }
}
updateLevelSelector();




/* MUSIC PLAYER */
//playlist
const playlist = [
    // NEON HUSKY
    {
        title: "cleAn commit higHwAy",
        artist: "neon husky",
        src: "music/neon-husky/clean-commit-highway.mp3"
    },
    {
        title: "detAcHed HeAd pursuit",
        artist: "neon husky",
        src: "music/neon-husky/detached-head-pursuit.mp3"
    },
    {
        title: "first pusH",
        artist: "neon husky",
        src: "music/neon-husky/first-push.mp3"
    },
    {
        title: "initiAl commit",
        artist: "neon husky",
        src: "music/neon-husky/initial-commit.mp3"
    },
    {
        title: "merGinG to MAin brAncH",
        artist: "neon husky",
        src: "music/neon-husky/merging-to-main-branch.mp3"
    },
    {
        title: "niGHtly build sprint",
        artist: "neon husky",
        src: "music/neon-husky/nightly-build-sprint.mp3"
    },
    {
        title: "pusH to oriGin",
        artist: "neon husky",
        src: "music/neon-husky/push-to-origin.mp3"
    },
    {
        title: "sMootH rebAse",
        artist: "neon husky",
        src: "music/neon-husky/smooth-rebase.mp3"
    },
    {
        title: "stAGinG AreA sunset",
        artist: "neon husky",
        src: "music/neon-husky/staging-area-sunset.mp3"
    },
    {
        title: "upstreAM drift",
        artist: "neon husky",
        src: "music/neon-husky/upstream-drift.mp3"
    },

    // DOS-88
    {
        title: "billy's sAcrifice",
        artist: "dos-88",
        src: "music/dos88/billys-sacrifice.mp3"
    },
    {
        title: "city stoMper",
        artist: "dos-88",
        src: "music/dos88/city-stomper.mp3"
    },
    {
        title: "crAsH lAndinG",
        artist: "dos-88",
        src: "music/dos88/crash-landing.mp3"
    },
    {
        title: "fAr AwAy",
        artist: "dos-88",
        src: "music/dos88/far-away.mp3"
    },
    {
        title: "pArAbolA",
        artist: "dos-88",
        src: "music/dos88/parabola.mp3"
    },
    {
        title: "rAce to MArs",
        artist: "dos-88",
        src: "music/dos88/race-to-mars.mp3"
    },
    {
        title: "sMootH sAilinG",
        artist: "dos-88",
        src: "music/dos88/smooth-sailing.mp3"
    },

    // NEWC42
    {
        title: "fAr beyond",
        artist: "newc42",
        src: "music/newc42/far-beyond.mp3"
    },
    {
        title: "no GrAvity",
        artist: "newc42",
        src: "music/newc42/no-gravity.mp3"
    },
    {
        title: "out of tHe orbit",
        artist: "newc42",
        src: "music/newc42/out-of-the-orbit.mp3"
    },
    {
        title: "stArs",
        artist: "newc42",
        src: "music/newc42/stars.mp3"
    }
];
function shufflePlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
}

const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const trackName = document.getElementById("trackName");
const trackArtist = document.getElementById("trackArtist");
const volumeSlider = document.getElementById("volumeSlider");
let currentTrack = 0;

//load a track
function loadTrack(index) {
    currentTrack = index;
    const track = playlist[currentTrack];
    audio.src = track.src;
    trackName.textContent = track.title;
    
    const artistLinks = {
        "neon husky": "https://neonhusky.dev",
        "dos-88": "https://dos88.itch.io/dos-88-music-library",
        "newc42": "https://newc-42.itch.io/spacewave"
    };

    trackArtist.innerHTML = `///<a href="${artistLinks[playlist[index].artist]}" target="_blank" rel="noopener noreferrer">${playlist[index].artist}</a>`;
}

//playback ctrl
playButton.addEventListener("click", function() {
    if (!audio.src) {
        loadTrack(0);
    }
    if (audio.paused) {
        audio.play();
        playButton.textContent = "pAuse";
    } else {
        audio.pause();
        playButton.textContent = "plAy";
    }
});
function nextTrack() {
    currentTrack++;
    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = "pAuse";
}
function previousTrack() {
    currentTrack--;
    if (currentTrack < 0) {
        currentTrack = playlist.length - 1;
    }
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = "pAuse";
}
nextButton.addEventListener("click", nextTrack);
previousButton.addEventListener("click", previousTrack);
audio.addEventListener("ended", nextTrack);

//volume
audio.volume = 0.03;
volumeSlider.addEventListener("input", () => {
    const sliderValue = volumeSlider.value;
        if (sliderValue == 0.2) {
        audio.volume = 0;
    } else {
        audio.volume = Math.pow(sliderValue, 3);
    }
});
shufflePlaylist();

//audio vis
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

canvas.width = 120;
canvas.height = 35;

//audio analyzer
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const audioSource = audioContext.createMediaElementSource(audio);
audioSource.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

//draw visualizer
function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = 3;
    const gap = 2;
    const barCount = 20;

    for (let i = 0; i < barCount; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        ctx.fillStyle = "#96B891";
        ctx.fillRect(
            i * (barWidth + gap),
            canvas.height - barHeight,
            barWidth,
            barHeight
        );
    }
}
drawVisualizer();







/* PLAYTEST */

let skipTestButton = document.getElementById("skipTestButton");
skipTestButton.addEventListener("click", function() {
    if (currentLevel === highestUnlockedLevel) {
            highestUnlockedLevel++;
            respondSignal.textContent = ">>>incoMing tRAnsMission";
        }
        currentLevel += 1;
        updateQuestion();
        updateLevelSelector();
        milestoneCheck();
        signalInput.value = "";

        
    


    recompile();
    updateQuestion();
});

setTimeout(() => {
    for (let i = 0; i < 0; i++) {
        skipTestButton.click();
    }
}, 2000);
/*
ne2Input.value = "space";
ne3Input.value = "=";
ne4Input.value = "+";
ne5Input.value = "-"; 
ne1Input.value = "negative"; 
ne6Input.value = "*"; 
*/