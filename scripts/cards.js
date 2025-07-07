const langDescription = document.querySelector(".lang-description")
const cards = document.querySelector(".cards")
const php = document.querySelector("#php")
const javascript = document.querySelector("#javascript")
const langBtn = document.querySelectorAll(".lang-btn")
console.log(langBtn[0])

window.addEventListener("load", async () => {
    const result = await fetch("json/cards.json")
        .then(res => res.json())

    for (let i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener("click", () => {
            const language = langBtn[i].id
            const card = result[language]
            cards.innerHTML = ""

            langDescription.innerHTML = `
                <div class="description">
                    <figure class="title">
                        <img src="${card[0].icon}" alt="">

                        <figcaption>
                            <h1>${card[0].title}</h1>
                        </figcaption>
                    </figure>

                    <p>${card[0].text}</p>
                </div>
            `

            for (let j = 1; j < card.length; j++) {
                cards.innerHTML += `
                    <figure class="card">
                        <img src="${card[j].image}" alt="">

                        <figcaption>
                            <p class="card-author">${card[j].author}</p>

                            <h2 class="card-name">${card[j].title}</h2>
                        </figcaption>
                    </figure>
                `
            }
        })
    }
    
    
    
})