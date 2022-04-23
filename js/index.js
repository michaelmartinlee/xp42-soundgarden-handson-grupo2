//identificar o clque no botão
// console.log("link");

// const index = {}
// const btnReservarIngresso1 = document.getElementsByClassName("btn btn-primary")[0]
// const btnReservarIngresso2 = document.getElementsByClassName("btn btn-primary")[1]
// const btnReservarIngresso3 = document.getElementsByClassName("btn btn-primary")[2]



// btnReservarIngresso.addEventListener("click", (event) => {
//     console.log("clicou btn");
// })

//trazer últimos shows

// fetch("https://xp41-soundgarden-api.herokuapp.com/events", listaDeEventosOpcoes)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


var listaDeEventosGet = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://xp41-soundgarden-api.herokuapp.com/events", listaDeEventosGet)
    .then(response => response.text())
    .then((data) => JSON.parse(data))
    .then(listaDeEventos => {
        for (let index = 0; index < listaDeEventos.length; index++) {
            const evento = listaDeEventos[index];
            const eventosResumo = {
                nome: evento.name,
                data: evento.scheduled,
                atracao: evento.attractions,
                data: evento.scheduled
            }
            console.log(eventosResumo);
        }
    })
    .catch(error => console.log('error', error));




//     fetch("index.html")
//     .then((result) => result.text())
//     .then((data) => new DOMParser().parseFromString(data, "text/html"))
//     .then((htmlHome) => {
//         const style = document.createElement("link");
//         style.setAttribute("rel", "stylesheet");
//         style.setAttribute("href", "css/index.css");

//         document.querySelector("head").appendChild(style);

//         const main = document.querySelector("main");
//         const tituloDepoimentos = htmlHome.querySelector(".depoimento");
//         const depoimentos = htmlHome.getElementById("falam_sobre");

//         main.appendChild(tituloDepoimentos);
//         main.appendChild(depoimentos);

//         const tituloDepoimento = document.querySelector(".depoimento h3");
//         tituloDepoimento.innerHTML = "O que falam sobre nós";
//     });
// };