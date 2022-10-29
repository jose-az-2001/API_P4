for(var i = 0; i < 6; i++){
    const request = new XMLHttpRequest();
    console.log("Bien1")
    var IdPokRandom = Math.floor(Math.random()*890)
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+IdPokRandom+'/', true)
    request.onload = function(){
        if (request.status >= 200 && request.status < 400){
            const data = JSON.parse(this.response);
                const tarjeta = document.createElement('div');
                const container = document.getElementById('content');
                tarjeta.setAttribute('class', 'card')
                const HeadPok = document.createElement('div')
                HeadPok.setAttribute('class', 'HeadTarjeta')
                const InfoPokemon = document.createElement('div')
                InfoPokemon.setAttribute('class', 'BodyTarjeta')
                const NamePokemon = document.createElement('H4')
                NamePokemon.setAttribute('class', 'TituloTarjeta')
                NamePokemon.textContent = data.species.name;
                const sprite = document.createElement('img')
                sprite.setAttribute('class', 'Text')
                sprite.setAttribute('src', data.sprites.front_default)
                container.appendChild(tarjeta)
                tarjeta.appendChild(HeadPok)
                tarjeta.appendChild(InfoPokemon)
                HeadPok.appendChild(NamePokemon)
                InfoPokemon.appendChild(sprite)


        }else{
            console.log("Error de Conexion con la API")
            alert("Error de conexion con API")
        }
    }
    request.send()
}

function Change(){
    for(var i = 0; i < 6; i++){
        const request = new XMLHttpRequest();
        console.log("Bien1")
        var IdPokRandom = Math.floor(Math.random()*890)
        request.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+IdPokRandom+'/', true)
        request.onload = function(){
            if (request.status >= 200 && request.status < 400){
                const data = JSON.parse(this.response);
                    const tarjeta = document.createElement('div');
                    const container = document.getElementById('content');
                    tarjeta.setAttribute('class', 'card')
                    const HeadPok = document.createElement('div')
                    HeadPok.setAttribute('class', 'HeadTarjeta')
                    const InfoPokemon = document.createElement('div')
                    InfoPokemon.setAttribute('class', 'BodyTarjeta')
                    const NamePokemon = document.createElement('H4')
                    NamePokemon.setAttribute('class', 'TituloTarjeta')
                    NamePokemon.textContent = data.species.name;
                    const sprite = document.createElement('img')
                    sprite.setAttribute('class', 'Text')
                    sprite.setAttribute('src', data.sprites.front_default)
                    container.appendChild(tarjeta)
                    tarjeta.appendChild(HeadPok)
                    tarjeta.appendChild(InfoPokemon)
                    HeadPok.appendChild(NamePokemon)
                    InfoPokemon.appendChild(sprite)
    
    
            }else{
                console.log("Error de Conexion con la API")
                alert("Error de conexion con API")
            }
        }
        request.send()
    }
}