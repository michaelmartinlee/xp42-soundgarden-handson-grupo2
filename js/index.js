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

`<h2>nome do evento - 05/03/2022</h2>
<h4>Arctic Monkeys, The Kooks, Hiatus Kaiyote</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique, dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus nobis in inventore tenetur asperiores.</p>
<a href="#" class="btn btn-primary">reservar ingresso</a>`

const criarEstruturaEvento = (
    nomeEvento,
    dataEvento,
    atracaoEvento,
    descricaoEvento,
    hrefbotao = "#"
    // nomeEvento = "nome do evento",
    // dataEvento = "evento scheduled",
    // atracaoEvento = "evento attractions",
    // descricaoEvento = "evento description",
    // hrefbotao = "#"
) => {
    const divEventos = document.querySelector("body > main > section:nth-child(2) > div.container.d-flex.justify-content-center.align-items-center")
    const eventoArticle = document.createElement("article")
    eventoArticle.setAttribute("class", "evento card p-5 m-3")
    divEventos.appendChild(eventoArticle)

    const nomeEventoH2 = document.createElement("h2")
    nomeEventoH2.innerHTML = `${nomeEvento} - ${dataEvento}`
    eventoArticle.appendChild(nomeEventoH2)

    const atracaoEventoH4 = document.createElement("h4")
    atracaoEventoH4.innerHTML = `${atracaoEvento}`
    eventoArticle.appendChild(atracaoEventoH4)

    const descricaoEventoH2 = document.createElement("p")
    descricaoEventoH2.innerHTML = `${descricaoEvento}`
    eventoArticle.appendChild(descricaoEventoH2)

    const botaoEvento = document.createElement("a")
    botaoEvento.setAttribute("href", hrefbotao)
    botaoEvento.setAttribute("class", "btn btn-primary", )
    botaoEvento.innerHTML = `reservar ingresso`
    eventoArticle.appendChild(botaoEvento)

    document.replaceChildren
}






var listaDeEventosGet = {
    method: 'GET',
    redirect: 'follow'
};


fetch("https://xp41-soundgarden-api.herokuapp.com/events", listaDeEventosGet)
    .then(response => response.text())
    .then((data) => JSON.parse(data))
    .then(listaDeEventos => {

        // for (let index = 0; index < listaDeEventos.length; index++) {
        //     const evento = listaDeEventos[index];

        for (let index = 0; index < 3; index++) {
            const evento = listaDeEventos[index];

            criarEstruturaEvento(
                nomeEvento = evento.name,
                dataEvento = evento.scheduled,
                atracaoEvento = evento.attractions,
                descricaoEvento = evento.description,
                hrefbotao = "#"
            )
            const eventosResumo = {
                    // nome: evento.name,
                    data: evento.scheduled
                        // atracao: evento.attractions,
                        // data: evento.scheduled,
                        // descricao: evento.description

                }
                // console.log(eventosResumo);
        }
    })
    // .catch(error => console.log('error', error));




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