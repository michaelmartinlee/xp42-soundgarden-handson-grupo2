formatarData()

const criarEstruturaTodosEventos = (
    nomeEvento,
    dataEvento,
    atracaoEvento,
    descricaoEvento,
    indexBotao,
    idEvento
) => {
    const divEventos = document.querySelector("body > main > section:nth-child(1) > div.container.d-flex.justify-content-center.align-items-center.flex-wrap")
    divEventos.setAttribute("id", "lista-eventos")
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
    botaoEvento.setAttribute("idevento", `${idEvento}`)
    botaoEvento.innerHTML = `reservar ingresso`
    eventoArticle.appendChild(botaoEvento)
}

const listarEventosFazerReservaTodas = async() => {

    await fetch("https://xp41-soundgarden-api.herokuapp.com/events")
        .then(response => response.text())
        .then((data) => JSON.parse(data))
        .then(listaDeEventos => {
            listaDeEventos.sort((a, b) => {
                return new Date(a.scheduled) - new Date(b.scheduled);
            });

            const eventosFuturos = listaDeEventos.filter((data) => {
                const agora = new Date();
                return new Date(data.scheduled) > agora
            });

            for (let index = 0; index < eventosFuturos.length; index++) {
                const evento = eventosFuturos[index];
                criarEstruturaTodosEventos(
                    nomeEvento = evento.name,
                    dataEvento = evento.scheduled,
                    atracaoEvento = evento.attractions,
                    descricaoEvento = evento.description,
                    indexBotao = index,
                    idEvento = evento._id
                )
            }
        })


    .catch(error => console.log('error', error));
}

const abrirEfecharModal = async() => {
    await listarEventosFazerReservaTodas()

    var modal = document.getElementById("myModal");

    const novaListaEventos = document.getElementsByClassName("evento")
    const qtdDeEventos = novaListaEventos.length

    for (let index = 0; index < novaListaEventos.length; index++) {
        var botaoReservar = document.querySelector(`#botao-reservar${index}`)
        botaoReservar.addEventListener("click", (event) => {
            event.preventDefault()
            modal.style.display = "block";
            const botaoAlvo = event.target
            const idevento = botaoAlvo.getAttribute("idevento")
            document.querySelector("#id").value = idevento;
        })
    }
    var botaoFechar = document.getElementById("modal-home-fechar");
    var botaoCancelar = document.getElementById("modal-home-cancelar");



    botaoFechar.onclick = function() {
        modal.style.display = "none";
        formReservarIngresso[0].value = ""
        formReservarIngresso[2].value = ""
        formReservarIngresso[3].value = ""
    }
    botaoCancelar.onclick = function() {
        modal.style.display = "none";
        formReservarIngresso[0].value = ""
        formReservarIngresso[2].value = ""
        formReservarIngresso[3].value = ""
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = ""
        }
    }

    const formReservarIngresso = document.querySelector("#reserva");

    const botaoConfirmar = document.querySelector("#myModal > div > div > div.modal-footer > button.btn.btn-primary")
    botaoConfirmar.addEventListener("click", (event) => {
        event.preventDefault();
        const corpoPost = {
            owner_name: formReservarIngresso[2].value,
            owner_email: formReservarIngresso[3].value,
            number_tickets: formReservarIngresso[1].value,
            event_id: formReservarIngresso[0].value
        }
        fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(corpoPost),
            })
            .then(() => {
                alert("Parabéns, sua reserva está concluída!");
            })
            .catch(error => console.log('error', error));
    })
}

abrirEfecharModal()

const enviarPedidoReserva = () => {

}