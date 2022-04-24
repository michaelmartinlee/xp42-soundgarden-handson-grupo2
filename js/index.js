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

var get = {
    method: 'GET',
    redirect: 'follow'
};

//Função para formatar a saída de uma data ISO
const formatarData = (dataISO) => {
    const doisDigitos = (umDigito) => {
        return umDigito < 10 ? '0' + umDigito : umDigito;
    }
    dataISO = new Date(dataISO)
    const diaDoMes = dataISO.getDate();
    const mes = dataISO.getMonth(); // Muito cuidado, Janeiro é o mesmo que 0, não 1.
    const ano = dataISO.getFullYear();
    const dataFormatada = doisDigitos(diaDoMes) + "/" + doisDigitos(mes + 1) + "/" + ano;
    return dataFormatada
}

const criarEstruturaEvento = (
    nomeEvento,
    dataEvento,
    atracaoEvento,
    descricaoEvento,
    hrefBotao = "#"
) => {
    const divEventos = document.querySelector("body > main > section:nth-child(2) > div.container.d-flex.justify-content-center.align-items-center")
    const eventoArticle = document.createElement("article")
    eventoArticle.setAttribute("class", "evento card p-5 m-3")
    divEventos.appendChild(eventoArticle)

    const nomeEventoH2 = document.createElement("h2")
    nomeEventoH2.innerHTML = `${nomeEvento} - ${formatarData(dataEvento)}`
    eventoArticle.appendChild(nomeEventoH2)

    const atracaoEventoH4 = document.createElement("h4")
    atracaoEventoH4.innerHTML = `${atracaoEvento}`
    eventoArticle.appendChild(atracaoEventoH4)

    const descricaoEventoH2 = document.createElement("p")
    descricaoEventoH2.innerHTML = `${descricaoEvento}`
    eventoArticle.appendChild(descricaoEventoH2)

    const botaoEvento = document.createElement("a")
    botaoEvento.setAttribute("href", hrefBotao)
    botaoEvento.setAttribute("class", "btn btn-primary", )
    botaoEvento.innerHTML = `reservar ingresso`
    eventoArticle.appendChild(botaoEvento)
}


fetch("https://xp41-soundgarden-api.herokuapp.com/events", get)
    .then(response => response.text())
    .then((data) => JSON.parse(data))
    .then(listaDeEventos => {

        //Ordenando a lista de Eventos
        listaDeEventos.sort((a, b) => {
            return new Date(a.scheduled) - new Date(b.scheduled);
        });
        // console.log(listaDeEventos);


        //Filtrando a lista de Eventos para retornar apenas que ainda estão por vir
        const eventosFuturos = listaDeEventos.filter((data) => {
            const agora = new Date();
            return new Date(data.scheduled) > agora
        });
        // console.log(eventosFuturos);


        //For para resumir os eventos e retornar todos eles
        // for (let index = 0; index < listaDeEventos.length; index++) {
        //     const evento = listaDeEventos[index];


        //For para resumir os eventos e retornar apenas os 3 primeros da lista de eventos Futuros.
        //E criá-los na Home com a função Criar Estrutura Evento 
        for (let index = 0; index < 3; index++) {
            const evento = eventosFuturos[index];
            criarEstruturaEvento(
                nomeEvento = evento.name,
                dataEvento = evento.scheduled,
                atracaoEvento = evento.attractions,
                descricaoEvento = evento.description,
                hrefbotao = "#"
            )
            const eventosResumo = {
                nome: evento.name,
                data: evento.scheduled,
                atracao: evento.attractions,
                data: evento.scheduled,
                descricao: evento.description
            }
            console.log(eventosResumo);
        }
    })
    .catch(error => console.log('error', error));