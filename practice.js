
let LoreTitle = document.getElementById("LoreTitle");
let LoreList = document.getElementById("LoreList");
LoreTitle.style.textDecoration = "underline";
LoreList.style.display = "none";


LoreTitle.addEventListener("click", function() {

    if (LoreList.style.display === "none") {
        LoreList.style.display = "block";
        LoreTitle.style.textDecoration = "none";
    } else {
        LoreList.style.display = "none";
        LoreTitle.style.textDecoration = "underline";
    }

});


let chroniclesOfTheEternalMagesTitle = document.getElementById("chroniclesOfTheEternalMagesTitle");
let chroniclesOfTheEternalMagesList = document.getElementById("chroniclesOfTheEternalMagesList");
chroniclesOfTheEternalMagesTitle.style.textDecoration = "underline";
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
magicTypesTitle.style.textDecoration = "underline";
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
weaponsTitle.style.textDecoration = "underline";
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
SpellsTitle.style.textDecoration = "underline";
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
statusEffectsTitle.style.textDecoration = "underline";
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