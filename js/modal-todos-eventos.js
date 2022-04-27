fetch("https://xp41-soundgarden-api.herokuapp.com/events")
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

        const modalTodosOsEventos = document.getElementById("myModal");
        try {
            for (let index = 0; index < eventosFuturos.length; index++) {
                document.getElementById(`botao-reservar${index}`).addEventListener("click", (event) => {
                    event.preventDefault
                    modalTodosOsEventos.style.display = "block";
                })

            }
        } catch (error) {}

        const spanTodosOsEventos = document.getElementsByClassName("close")[0];

        spanTodosOsEventos.onclick = function() {
            modalTodosOsEventos.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
    .catch(error => console.log('error', error));