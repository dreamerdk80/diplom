const cards = document.querySelector(".cards")

window.addEventListener("load", async () => {
    const result = await fetch("json/cards.json")
        .then(res => res.json())

    result.cards.forEach(card => {
        cards.innerHTML += `
            <figure class="card">
                <img src="${card.image}" alt="">

                <figcaption>
                    <p class="card-author">${card.author}</p>

                    <h2 class="card-name">${card.title}</h2>
                </figcaption>
            </figure>
        `
    })
})