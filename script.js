
/*
<br> line break
&nbsp; space




ALIAS:<br>
<span class="orange-text">ALIAS</span>
text<br>
text<br><br><br>

<span class="orange-text">DOB</span>
00/00/0000<br><br><br>
*/
const profileData = `
<span class="orange-text">ALIAS</span><br>
[ REDACTED ]<br>
Hirobot<br>
[ REDACTED ]<br><br><br>

<span class="orange-text">[ REDACTED ]</span><br>
[ REDACTED ]<br><br><br>

<span class="orange-text">[ REDACTED ]</span><br>
[ REDACTED ]<br>
[ REDACTED ]<br>
[ REDACTED ]<br><br><br>

`;
document.querySelector(".profileData").innerHTML = profileData;


// Switch between the dossier sections.
const navButtons = document.querySelectorAll(".nav-button");
const views = {
    profile: document.getElementById("profileView"),
    records: document.getElementById("recordsView"),
    projects: document.getElementById("projectsView")
};

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedView = button.dataset.view;

        Object.entries(views).forEach(([viewName, viewElement]) => {
            if (viewName === selectedView) {
                viewElement.classList.remove("hidden");

                // Restart animation
                viewElement.classList.remove("fade-in");
                void viewElement.offsetWidth;
                viewElement.classList.add("fade-in");

            } else {
                viewElement.classList.add("hidden");
                viewElement.classList.remove("fade-in");
            }
        });

        navButtons.forEach((navButton) => {
            navButton.classList.toggle("active", navButton === button);
        });
    });
});





async function updateSystemInfo() {
    const systemInfo = document.getElementById("systemInfo");

    let publicIP = "///";
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        publicIP = data.ip;
    } catch (error) {
        publicIP = "///";
    }

    systemInfo.innerHTML = `
        ${publicIP}<br>
        ${Intl.DateTimeFormat().resolvedOptions().timeZone}
    `;
}

updateSystemInfo();

// CURRENT TIME (automatically updates)
function updateTime() {
    const now = new Date();

    document.getElementById("currentTime").textContent =
        `CURRENT TIME: ${now.toLocaleDateString("en-US")} | ${now.toLocaleTimeString("en-US", { hour12: false })}`;
}

updateTime();
setInterval(updateTime, 1000);


// LAST UPDATED (manually controlled)
const lastUpdated = "11/15/2026 18:09";

document.getElementById("lastUpdated").textContent = `LAST UPDATED: ${lastUpdated}`;



