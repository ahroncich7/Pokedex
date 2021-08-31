const urlPokemons = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
const urlTypes = "https://pokeapi.co/api/v2/type/"
const urlPokeball = "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
const urlUnknown = "data:image/png;base64,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"

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
            resetearPokemon();
        })

    .catch(error => console.error("Fallo", error))
};

function crearTablaTipos() {
    let tbody =
        ` <thead class="bg-info">
            <br>
            <tr>
                <th>TYPE</th>
                <th>Strong Against</th>
                <th>Weak Against</th>
                <th>No Damage to</th>
            </tr>
        </thead>`;
    Types.forEach((type, i) => {
                let nombre = type.name
                let pros = type.strengths
                let contras = type.weaknesses
                let inmune = type.immunes

                tbody += `<tr>
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

    });
    document.getElementById("tabla-3").innerHTML = tbody;
    hacerClickeableTipo()

}


function llamarTipos(url) {
    fetch(url)
        .then(response => response.json())
        .then(function (pokemon) {
            let tbody = "";
            pokemon.pokemon.forEach((element, i) => {
                tbody += `<tr class=poke><td>${element.pokemon.name}</td></tr>`
            });
            document.getElementById("tabla-1").innerHTML = "";
            document.getElementById("tabla-1").innerHTML = tbody;
            hacerClickeablePokemon("#tabla-1 .poke");
            resetearPokemon();
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
    let name = e.querySelectorAll("td")[0].textContent
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(responseJSON => {

            let name = document.querySelector("#name");
            name.textContent = responseJSON.name.toUpperCase();

            let weight = document.querySelector("#weight");
            weight.textContent = responseJSON.weight + " pounds";

            let height = document.querySelector("#height");
            height.textContent = responseJSON.height + " inchs";

            let sprite = document.querySelector("#sprite");
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


function resetearPokemon() {
    document.querySelector(".scrolling").scrollTop = 0;
    document.querySelector("#sprite").src = urlUnknown
    document.querySelector("#name").textContent = "--"
    document.querySelector("#weight").textContent = "--"
    document.querySelector("#height").textContent = "--"
    document.querySelector("#abilities").textContent = "--"
    document.querySelector("#type1").textContent = "--"
    document.querySelector("#type1").className = ""
    document.querySelector("#type2").textContent = ""
    document.querySelector("#type2").className = ""

}

function mostrarTabla() {
    document.querySelector("#tabla-2").classList.remove("oculto");
}