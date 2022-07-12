function ItemCardapio(img, nome, ingredientes) {
    this.img = img
    this.nome = nome
    this.ingredientes = ingredientes
}

var listaItensCardapio = [
    new ItemCardapio("img/cardapio-frango.jpg", "Frango Com Cheddar", ["Frango", "queijo mussarela", "catupiry", "cheddar"]),
    new ItemCardapio("img/cardapio-calabresa.jpg", "Calabresa", ["Mussarela", "calabresa", "pimenta"]),
    new ItemCardapio("img/cardapio-pepperoni.jpg", "Pepperoni com Ovos", ["Mussarela", "pepperoni", "ovo", "cebola", "pimentão", "orégano"])
]

var cardapioSection = document.querySelector('.cardapio-items')

listaItensCardapio.forEach(function (element, index) {
    console.log(`${index}`)
    cardapioSection.innerHTML += `
    <article class="cardapio-item item${index}">
        <figure class="cardapio-img-box">
            <img src="${element.img}" alt="Pizza de ${element.nome}" class="cardapio-img">
        </figure>

        <h2 class="cardapio-titulo">${element.nome}</h2>
        <ul class="cardapio-ingredientes">`
    let ingredientesBox = document.querySelectorAll(".cardapio-ingredientes")
    element.ingredientes.forEach(function (ingrediente) {
        console.log(ingrediente)
        ingredientesBox[index].innerHTML += `<li class="cardapio-ingrediente">${ingrediente}</li>`
    })
    cardapioSection.innerHTML += `
        </ul>
        
    </article>
    `
})
