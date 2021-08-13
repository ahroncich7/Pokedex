let urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
let urlTypes = "https://pokeapi.co/api/v2/type/"
let urlPokeball = "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"

crearTablaPokemons(urlPokemons);
crearTablaTipos();


function crearTablaPokemons(url) {
    fetch(url)
        .then(response => response.json())
        .then(function(pokemon) {
            let tbody = "";
            pokemon.results.forEach((element, i) => {
                tbody += `<tr class=poke><td>${element.name}</td></tr>`
            });
            document.getElementById("tabla-1").innerHTML = "";
            document.getElementById("tabla-1").innerHTML = tbody;
            hacerClickeablePokemon();
            resetearPokeball();
            hacerMouseOver();
        })

    .catch(error => console.error("Fallo", error))
};

function crearTablaTipos() {
    let tbody;
    Types.forEach((type, i) => {
                let nombre = type.name
                let pros = type.strengths
                let contras = type.weaknesses
                let inmune = type.immunes

                tbody = `<tr>
                    <th>
                        <p class=\"tipos ${nombre.toLowerCase()}\">${nombre}</p>
                    </th>
                    <td>
                    ${pros[0] ? `<p class=\"tipos ${pros[0].toLowerCase()}\">${pros[0]}</p>` : "-"}
                    ${pros[1] ? `<p class=\"tipos ${pros[1].toLowerCase()}\">${pros[1]}</p>` : ""}
                    </td>
                    <td>
                    ${contras[0] ? `<p class=\"tipos ${contras[0].toLowerCase()}\">${contras[0]}</p>` : ""}
                    ${contras[1] ? `<p class=\"tipos ${contras[1].toLowerCase()}\">${contras[1]}</p>` : ""}
                    </td>
                    <td>
                        ${inmune[0] ? `<p class=\"tipos ${inmune[0].toLowerCase()}\">${inmune[0]}</p>` : "-"}
                    </td>
                </tr>`
        document.getElementById("tabla-3").innerHTML += tbody;
        hacerClickeableTipo()
        // hacerLinkeableTipo()
    });

}


function llamarTipos(url) {
    fetch(url)
        .then(response => response.json())
        .then(function(pokemon) {
            let tbody = `<thead class=sticky-top style="background-color: white"><th>Name</th></thead>`;
            pokemon.pokemon.forEach((element, i) => {
                tbody += `<tr class=poke><td>${element.pokemon.name}</td></tr>`
            });
            document.getElementById("tabla-1").innerHTML = "";
            document.getElementById("tabla-1").innerHTML = tbody;
            hacerClickeablePokemon("#tabla-1 .poke");
            resetearPokeball();
            hacerMouseOver();
        })

    .catch(error => console.error("Fallo", error))
};

function hacerClickeablePokemon() {
    document.querySelectorAll("#tabla-1 .poke").forEach(item => (
        item.onclick = (e => (mostrarPokemon(e.target.parentNode)))))

};

function hacerClickeableTipo() {
    document.querySelectorAll(".tipos").forEach((tipo) => {
        tipo.onclick =
            (e => {
                llamarTipos(urlTypes + e.target.textContent.toLowerCase());
                document.querySelector("#ir-home").click()
            })
    })
}

function mostrarPokemon(e) {
    mostrarTabla()
    ocultarPokeball()
    let name = e.querySelectorAll("td")[0].textContent
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(responseJSON => {

            let name = document.querySelector("#name");
            name.textContent = responseJSON.name;

            let weight = document.querySelector("#weight");
            weight.textContent = responseJSON.weight + " pounds";

            let height = document.querySelector("#height");
            height.textContent = responseJSON.height + " inchs";

            let sprite = document.querySelector("#columna-pokemon img");
            sprite.src = responseJSON.sprites.front_default;

            let abilities = document.querySelector("#abilities");
            abilities.textContent = ""
            responseJSON.abilities.forEach((ab) => {
                abilities.textContent += ab.ability.name + ", "
            })
            let type1 = document.querySelector("#type1");
            type1.textContent = (responseJSON.types[0] ? responseJSON.types[0].type.name : "")
            type1.className = (responseJSON.types[0] ? responseJSON.types[0].type.name + " tipos" : "")
            let type2 = document.querySelector("#type2")
            type2.textContent = (responseJSON.types[1] ? responseJSON.types[1].type.name : "")
            type2.className = (responseJSON.types[1] ? responseJSON.types[1].type.name + " tipos" : "")
            hacerClickeableTipo();
        })
        .catch(error => console.error("Fallo", error))
}

function hacerMouseOver() {
    document.querySelectorAll("#tabla-1 td").forEach((tr) =>
        tr.onmouseover = function(e) {
            e.target.parentNode.style = "background-color: rgb(100%, 100%, 0%, 0.6)";
        })
    document.querySelectorAll("#tabla-1 td").forEach((tr) =>
        tr.onmouseleave = function(e) {
            e.target.parentNode.style = "background-color: ";
        })
}

function ocultarPokeball() {
    document.querySelector("#tabla-2").classList.remove("oculto")
    document.querySelector("#columna-pokemon").style.backgroundImage = "url('')";
}

function resetearPokeball() {
    document.querySelector("#tabla-2").classList.add("oculto")
    document.querySelector("#columna-pokemon img").src = ""
    document.querySelector("#columna-pokemon").style.backgroundImage = `url(${urlPokeball})`;

}

function mostrarTabla() {
    document.querySelector("#tabla-2").classList.remove("oculto");
}