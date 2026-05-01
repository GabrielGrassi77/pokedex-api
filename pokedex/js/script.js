// const URL = "https://pokeapi.co/api/v2/pokemon/"

// // chama a API e pega todos os valores
// async function chamarApi(){
//     const response = await fetch(URL)

//     console.log(response)

//     const dadosPokemons = await response.json()

//     console.log(dadosPokemons)
// }

// chamarApi()

function loadPokemon(){
    let codigo = document.getElementById("codigoPokemon").value
    let url = `https://pokeapi.co/api/v2/pokemon/${codigo}`
    fetch(url)
        .then((response) => {
            return response.json()
        }) 
        .then((data) => {
            //o que vamos fazer com os dados em formato json
            console.clear()
            console.log(data)
            document.getElementById("nomePokemon").innerHTML = data['name']
            document.getElementById("idPokemon").innerHTML = data['id']
            let img = data['sprites']['front_default']
            document.getElementById("fotoPokemon").setAttribute("src", img)
            document.getElementById("erroResposta").innerHTML = ""
            // aqui na imagem ele seta o atributo src, por isso não usamos innerHTML
        })
        .catch((erro) => {
            document.getElementById("erroResposta").innerHTML = "Pokémon não encontrado"
            console.log("erro " + erro)
        })
}
document.getElementById("btn1").onclick = loadPokemon;