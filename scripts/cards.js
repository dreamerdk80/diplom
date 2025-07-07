const langDescription = document.querySelector(".lang-description")
const cards = document.querySelector(".cards")
const langBtn = document.querySelectorAll(".lang-btn")
let result

window.addEventListener("load", async () => {
    result = await fetch("json/cards.json")
        .then(res => res.json())

    generateCards()

    
})

function generateDescriptionHTML(card) {
    return `
        <div class="description">
            <figure class="title">
                <img src="${card.icon}" alt="">

                <figcaption>
                    <h1>${card.title}</h1>
                </figcaption>
            </figure>

            <p>${card.text}</p>
        </div>
    `
}

function generateCardHTML(card) {
    return `
        <figure class="card">
            <img src="${card.image}" alt="">

            <figcaption>
                <p class="card-author">${card.author}</p>

                <h2 class="card-name">${card.title}</h2>
            </figcaption>
        </figure>
    `
}

function generateCards() {
    for (let i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener("click", () => {
            const language = langBtn[i].id
            const card = result[language]
            cards.innerHTML = ""

            langDescription.innerHTML = generateDescriptionHTML(card[0])

            for (let j = 1; j < card.length; j++) {
                cards.innerHTML += generateCardHTML(card[j])
            }
        })
    }
}