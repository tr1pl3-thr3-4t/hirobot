let backgroundMusic = document.getElementById("backgroundMusic");

document.addEventListener("click", function() {
    backgroundMusic.play();
    backgroundMusic.volume = 0.05;
}, { once: true });


/*Nav Bar*/
let loreTitle = document.getElementById("loreTitle");
let loreList = document.getElementById("loreList");
/*none is hide, block is show*/
loreList.style.display = "none";
loreTitle.addEventListener("click", function() {

    if (loreList.style.display === "none") {
        loreList.style.display = "block";
        loreTitle.style.textDecoration = "none";
    } else {
        loreList.style.display = "none";
        loreTitle.style.textDecoration = "underline";
    }

});

let chroniclesOfTheEternalMagesTitle = document.getElementById("chroniclesOfTheEternalMagesTitle");
let chroniclesOfTheEternalMagesList = document.getElementById("chroniclesOfTheEternalMagesList");
chroniclesOfTheEternalMagesList.style.display = "none";
chroniclesOfTheEternalMagesTitle.addEventListener("click", function() {
    if (chroniclesOfTheEternalMagesList.style.display === "none") {
        chroniclesOfTheEternalMagesList.style.display = "block";
        chroniclesOfTheEternalMagesTitle.style.textDecoration = "none";
    } else {
        chroniclesOfTheEternalMagesList.style.display = "none";
        chroniclesOfTheEternalMagesTitle.style.textDecoration = "underline";
    }
});

let magicTypesTitle = document.getElementById("magicTypesTitle");
let magicTypesList = document.getElementById("magicTypesList");
magicTypesList.style.display = "none";
magicTypesTitle.addEventListener("click", function() {
    if (magicTypesList.style.display === "none") {
        magicTypesList.style.display = "block";
        magicTypesTitle.style.textDecoration = "none";
    } else {
        magicTypesList.style.display = "none";
        magicTypesTitle.style.textDecoration = "underline";
    }
});

let weaponsTitle = document.getElementById("weaponsTitle");
let weaponsList = document.getElementById("weaponsList");
weaponsList.style.display = "none";
weaponsTitle.addEventListener("click", function() {
    if (weaponsList.style.display === "none") {
        weaponsList.style.display = "block";
        weaponsTitle.style.textDecoration = "none";
    } else {
        weaponsList.style.display = "none";
        weaponsTitle.style.textDecoration = "underline";
    }
});

let SpellsTitle = document.getElementById("SpellsTitle");
let SpellsList = document.getElementById("SpellsList");
SpellsList.style.display = "none";
SpellsTitle.addEventListener("click", function() {
    if (SpellsList.style.display === "none") {
        SpellsList.style.display = "block";
        SpellsTitle.style.textDecoration = "none";
    } else {
        SpellsList.style.display = "none";
        SpellsTitle.style.textDecoration = "underline";
    }
});

let statusEffectsTitle = document.getElementById("statusEffectsTitle");
let statusEffectsList = document.getElementById("statusEffectsList");
statusEffectsList.style.display = "none";
statusEffectsTitle.addEventListener("click", function() {
    if (statusEffectsList.style.display === "none") {
        statusEffectsList.style.display = "block";
        statusEffectsTitle.style.textDecoration = "none";
    } else {
        statusEffectsList.style.display = "none";
        statusEffectsTitle.style.textDecoration = "underline";
    }
});



//Main text
let loreText = document.getElementById("loreText");
let chroniclesOfTheEternalMagesText = document.getElementById("chroniclesOfTheEternalMagesText");
let magicTypesText = document.getElementById("magicTypesText");
let weaponsText = document.getElementById("weaponsText");
let spellsText = document.getElementById("weaponsText");
let statusEffectsText = document.getElementById("weaponsText");
loreText.style.display = "none";
chroniclesOfTheEternalMagesText.style.display = "none";
magicTypesText.style.display = "none";
weaponsText.style.display = "none";
spellsText.style.display = "none";
statusEffectsText.style.display = "none";

function showText(toShow) {
    toShow.style.display = "block";
}
function hideAllText() {
    theTitleText.style.display = "none";
    theGreatCycleText.style.display = "none";

    bearerOfTheFirstFlameText.style.display = "none";
    sageOfTheBladeText.style.display = "none";
    theEntwinedChildrenText.style.display = "none";
    sentinelOfTheSecondDawnText.style.display = "none";
    vesselOfTheUnspokenText.style.display = "none";
    prisonerOfAuthorityText.style.display = "none";
    scribeOfTheUnwrittenText.style.display = "none";

    theFiveForcesText.style.display = "none";
    dawnAndDuskText.style.display = "none";
    forbiddenMagicText.style.display = "none";
    absoluteMagicText.style.display = "none";
    copyMagicText.style.display = "none";

    theTerminalText.style.display = "none";
    
    uniqueSpellsText.style.display = "none";
    emberheartText.style.display = "none";
    confluenceText.style.display = "none";
    entanglementText.style.display = "none";
    resurrectionText.style.display = "none";
    restrainText.style.display = "none";
    genesisText.style.display = "none";

    inseparabletext.style.display = "none";
}



//Category: Lore
let theTitleTitle = document.getElementById("theTitleTitle");
let theTitleText = document.getElementById("theTitleText");
theTitleText.style.display = "none";
theTitleTitle.addEventListener("click", function() {
    loreText.style.display = "block";
    hideAllText();
    showText(theTitleText);
    theTitleTitle.style.textDecoration = "none"
    theTitleTitle.style.color = "#aaa293";
});

let theGreatCycleTitle = document.getElementById("theGreatCycleTitle");
let theGreatCycleText = document.getElementById("theGreatCycleText");
theGreatCycleText.style.display = "none";
theGreatCycleTitle.addEventListener("click", function() {
    loreText.style.display = "block";
    hideAllText();
    showText(theGreatCycleText);
    theGreatCycleTitle.style.textDecoration = "none";
    theGreatCycleTitle.style.color = "#aaa293";
});



//Category: Chronicles of the Eternal Mages
let bearerOfTheFirstFlameTitle = document.getElementById("bearerOfTheFirstFlameTitle");
let bearerOfTheFirstFlameText = document.getElementById("bearerOfTheFirstFlameText");
bearerOfTheFirstFlameText.style.display = "none";
bearerOfTheFirstFlameTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(bearerOfTheFirstFlameText);
    bearerOfTheFirstFlameTitle.style.textDecoration = "none";
    bearerOfTheFirstFlameTitle.style.color = "#aaa293";
});

let sageOfTheBladeTitle = document.getElementById("sageOfTheBladeTitle");
let sageOfTheBladeText = document.getElementById("sageOfTheBladeText");
sageOfTheBladeText.style.display = "none";
sageOfTheBladeTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(sageOfTheBladeText);
    sageOfTheBladeTitle.style.textDecoration = "none";
    sageOfTheBladeTitle.style.color = "#aaa293";
});

let theEntwinedChildrenTitle = document.getElementById("theEntwinedChildrenTitle");
let theEntwinedChildrenText = document.getElementById("theEntwinedChildrenText");
theEntwinedChildrenText.style.display = "none";
theEntwinedChildrenTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(theEntwinedChildrenText);
    theEntwinedChildrenTitle.style.textDecoration = "none";
    theEntwinedChildrenTitle.style.color = "#aaa293";

});

let sentinelOfTheSecondDawnTitle = document.getElementById("sentinelOfTheSecondDawnTitle");
let sentinelOfTheSecondDawnText = document.getElementById("sentinelOfTheSecondDawnText");
sentinelOfTheSecondDawnText.style.display = "none";
sentinelOfTheSecondDawnTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(sentinelOfTheSecondDawnText);
    sentinelOfTheSecondDawnTitle.style.textDecoration = "none";
    sentinelOfTheSecondDawnTitle.style.color = "#aaa293";

});

let vesselOfTheUnspokenTitle = document.getElementById("vesselOfTheUnspokenTitle");
let vesselOfTheUnspokenText = document.getElementById("vesselOfTheUnspokenText");
vesselOfTheUnspokenText.style.display = "none";
vesselOfTheUnspokenTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(vesselOfTheUnspokenText);
    vesselOfTheUnspokenTitle.style.textDecoration = "none";
    vesselOfTheUnspokenTitle.style.color = "#aaa293";
});

let prisonerOfAuthorityTitle = document.getElementById("prisonerOfAuthorityTitle");
let prisonerOfAuthorityText = document.getElementById("prisonerOfAuthorityText");
prisonerOfAuthorityText.style.display = "none";
prisonerOfAuthorityTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(prisonerOfAuthorityText);
    prisonerOfAuthorityTitle.style.textDecoration = "none";
    prisonerOfAuthorityTitle.style.color = "#aaa293";
});

let scribeOfTheUnwrittenTitle = document.getElementById("scribeOfTheUnwrittenTitle");
let scribeOfTheUnwrittenText = document.getElementById("scribeOfTheUnwrittenText");
scribeOfTheUnwrittenText.style.display = "none";
scribeOfTheUnwrittenTitle.addEventListener("click", function() {
    chroniclesOfTheEternalMagesText.style.display = "block";
    hideAllText();
    showText(scribeOfTheUnwrittenText);
    scribeOfTheUnwrittenTitle.style.textDecoration = "none";
    scribeOfTheUnwrittenTitle.style.color = "#aaa293";
});

//Category: Magic Types
let theFiveForcesTitle = document.getElementById("theFiveForcesTitle");
let theFiveForcesText = document.getElementById("theFiveForcesText");
theFiveForcesText.style.display = "none";
theFiveForcesTitle.addEventListener("click", function() {
    magicTypesText.style.display = "block";
    hideAllText();
    showText(theFiveForcesText);
    theFiveForcesTitle.style.textDecoration = "none";
    theFiveForcesTitle.style.color = "#aaa293";
});

let dawnAndDuskTitle = document.getElementById("dawnAndDuskTitle");
let dawnAndDuskText = document.getElementById("dawnAndDuskText");
dawnAndDuskText.style.display = "none";
dawnAndDuskTitle.addEventListener("click", function() {
    magicTypesText.style.display = "block";
    hideAllText();
    showText(dawnAndDuskText);
    dawnAndDuskTitle.style.textDecoration = "none";
    dawnAndDuskTitle.style.color = "#aaa293";
});

let forbiddenMagicTitle = document.getElementById("forbiddenMagicTitle");
let forbiddenMagicText = document.getElementById("forbiddenMagicText");
forbiddenMagicText.style.display = "none";
forbiddenMagicTitle.addEventListener("click", function() {
    magicTypesText.style.display = "block";
    hideAllText();
    showText(forbiddenMagicText);
    forbiddenMagicTitle.style.textDecoration = "none";
    forbiddenMagicTitle.style.color = "#aaa293";
});

let absoluteMagicTitle = document.getElementById("absoluteMagicTitle");
let absoluteMagicText = document.getElementById("absoluteMagicText");
absoluteMagicText.style.display = "none";
absoluteMagicTitle.addEventListener("click", function() {
    magicTypesText.style.display = "block";
    hideAllText();
    showText(absoluteMagicText);
    absoluteMagicTitle.style.textDecoration = "none";
    absoluteMagicTitle.style.color = "#aaa293";
});

let copyMagicTitle = document.getElementById("copyMagicTitle");
let copyMagicText = document.getElementById("copyMagicText");
copyMagicText.style.display = "none";
copyMagicTitle.addEventListener("click", function() {
    magicTypesText.style.display = "block";
    hideAllText();
    showText(copyMagicText);
    copyMagicTitle.style.textDecoration = "none";
    copyMagicTitle.style.color = "#aaa293";
});

//Category: Weapons
let theTerminalTitle = document.getElementById("theTerminalTitle");
let theTerminalText = document.getElementById("theTerminalText");
theTerminalText.style.display = "none";
theTerminalTitle.addEventListener("click", function() {
    weaponsText.style.display = "block";
    hideAllText();
    showText(theTerminalText);
    theTerminalTitle.style.textDecoration = "none";
    theTerminalTitle.style.color = "#aaa293";
});

//Category: Spells
let uniqueSpellsTitle = document.getElementById("uniqueSpellsTitle");
let uniqueSpellsText = document.getElementById("uniqueSpellsText");
uniqueSpellsText.style.display = "none";
uniqueSpellsTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(uniqueSpellsText);
    uniqueSpellsTitle.style.textDecoration = "none";
    uniqueSpellsTitle.style.color = "#aaa293";
});

let emberheartTitle = document.getElementById("emberheartTitle");
let emberheartText = document.getElementById("emberheartText");
emberheartText.style.display = "none";
emberheartTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(emberheartText);
    emberheartTitle.style.textDecoration = "none";
    emberheartTitle.style.color = "#aaa293";
});

let confluenceTitle = document.getElementById("confluenceTitle");
let confluenceText = document.getElementById("confluenceText");
confluenceText.style.display = "none";
confluenceTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(confluenceText);
    confluenceTitle.style.textDecoration = "none";
    confluenceTitle.style.color = "#aaa293";
});

let entanglementTitle = document.getElementById("entanglementTitle");
let entanglementText = document.getElementById("entanglementText");
entanglementText.style.display = "none";
entanglementTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(entanglementText);
    entanglementTitle.style.textDecoration = "none";
    entanglementTitle.style.color = "#aaa293";
});

let resurrectionTitle = document.getElementById("resurrectionTitle");
let resurrectionText = document.getElementById("resurrectionText");
resurrectionText.style.display = "none";
resurrectionTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(resurrectionText);
    resurrectionTitle.style.textDecoration = "none";
    resurrectionTitle.style.color = "#aaa293";
});

let restrainTitle = document.getElementById("restrainTitle");
let restrainText = document.getElementById("restrainText");
restrainText.style.display = "none";
restrainTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(restrainText);
    restrainTitle.style.textDecoration = "none";
    restrainTitle.style.color = "#aaa293";
});

let genesisTitle = document.getElementById("genesisTitle");
let genesisText = document.getElementById("genesisText");
genesisText.style.display = "none";
genesisTitle.addEventListener("click", function() {
    spellsText.style.display = "block";
    hideAllText();
    showText(genesisText);
    genesisTitle.style.textDecoration = "none";
    genesisTitle.style.color = "#aaa293";
});

//Category: Status Effects
let inseparableTitle = document.getElementById("inseparableTitle");
let inseparabletext = document.getElementById("inseparabletext");
inseparabletext.style.display = "none";
inseparableTitle.addEventListener("click", function() {
    statusEffectsText.style.display = "block";
    hideAllText();
    showText(inseparabletext);
    inseparableTitle.style.textDecoration = "none";
    inseparableTitle.style.color = "#aaa293";
});
