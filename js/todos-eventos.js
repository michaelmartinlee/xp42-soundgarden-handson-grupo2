formatarData()

const criarEstruturaTodosEventos = (
    nomeEvento,
    dataEvento,
    atracaoEvento,
    descricaoEvento,
    indexBotao
) => {
    const divEventos = document.querySelector("body > main > section:nth-child(1) > div.container.d-flex.justify-content-center.align-items-center.flex-wrap")
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
    botaoEvento.setAttribute("class", "btn btn-primary")
    botaoEvento.setAttribute("id", `botao-reservar${indexBotao}`)
    botaoEvento.innerHTML = `reservar ingresso`
    eventoArticle.appendChild(botaoEvento)
}

fetch("https://xp41-soundgarden-api.herokuapp.com/events")
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

        //For para resumir os eventos e retornar apenas os 3 primeros da lista de eventos Futuros.
        //E criá-los na Home com a função Criar Estrutura Evento 
        // for (let index = 0; index < listaDeEventos.length; index++) {
        for (let index = 0; index < 50; index++) {
            const evento = eventosFuturos[index];
            criarEstruturaTodosEventos(
                nomeEvento = evento.name,
                dataEvento = evento.scheduled,
                atracaoEvento = evento.attractions,
                descricaoEvento = evento.description,
                indexBotao = index
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

        modalReservarIngresso()
    })
    .catch(error => console.log('error', error));