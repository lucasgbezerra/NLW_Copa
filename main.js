function createGame(team1, hour, team2) {
    return `
        <li>
            <img src="./assets/flags/${team1}.svg" width=50 alt="Bandeira do ${team1}">
            <strong>${hour}</strong>
            <img src="./assets/flags/${team2}.svg"  width=50 alt="Bandeira de ${team2}">
        </li>
    `
}

let delay = -0.3;
function createCard(day, weekDay, game) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${day} <span>${weekDay}</span></h2>
            <ul>
                ${game}
            </ul>
        </div>

    `
}

// Inserção de HTML pelo javascript
document.querySelector("#cards").innerHTML =
    createCard(
        "20/11", "domingo",
        createGame("qatar", "13:00", "ecuador")
    ) +
    createCard(
        "21/11", "domingo",
        createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("united states", "16:00", "wales")

    ) +
    createCard(
        "20/11", "domingo",
        createGame("qatar", "13:00", "ecuador")
    );
