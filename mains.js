function createGame(team1, hour, team2){
    return `
        <li>
            <img src="./assets/flags/${team1}.svg" width=50 alt="Bandeira do ${team1}">
            <strong>${hour}</strong>
            <img src="./assets/flags/${team2}.svg"  width=50 alt="Bandeira de ${team2}">
        </li>
    `
}

function createCard(day, weekDay, game){
    return `
        <div class="card">
            <h2>${day} <span>${weekDay}</span></h2>
            <ul>
                ${game}
            </ul>
        </div>

    `
}

// Inserção de HTML pelo javascript
document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo NLW">
        <h1 class="title" >Calendário</h1>
    </header>
    <main id="cards">
        ${createCard(
            "20/11", "domingo", 
            createGame("qatar", "13:00", "ecuador")
        )}
        ${createCard(
            "21/11", "domingo", 
            createGame("england", "10:00", "iran") +
            createGame("senegal", "13:00", "netherlands") +
            createGame("united states", "16:00", "wales")

        )}
    </main>
`