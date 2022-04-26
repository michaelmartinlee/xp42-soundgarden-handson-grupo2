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
    indexBotao
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

        //modal
        var modal = document.getElementById("myModal");

        var botaoReservar0 = document.getElementById("botao-reservar0");
        botaoReservar0.addEventListener("click", (event) => {
            event.preventDefault
            modal.style.display = "block";
            console.log("clicou");
        })
        var botaoReservar1 = document.getElementById("botao-reservar1");
        botaoReservar1.addEventListener("click", (event) => {
            event.preventDefault
            modal.style.display = "block";
            console.log("clicou");
        })
        var botaoReservar2 = document.getElementById("botao-reservar2");
        botaoReservar2.addEventListener("click", (event) => {
            event.preventDefault
            modal.style.display = "block";
            console.log("clicou");
        })

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
    .catch(error => console.log('error', error));