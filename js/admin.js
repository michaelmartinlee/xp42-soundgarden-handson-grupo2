async function getEvents() {

    try {
        const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')

        const data = await response.json();

        createElementsFromEvents(data);

        return data;

    } catch (error) {
        console.error(error)
    }
}
getEvents();

async function getEventsToModal(id) {
    //Faz uma requisicao GET com o fetch e recebe a lista de reservas em json
    const bookingList = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`)
        .then(data => data.json())
        .catch(error => console.log(error))

    //Verifica se existem reservas feitas para esse evento, caso não exista exibe uma mensagem
    if (bookingList.length < 1) {
        document.querySelector('#tbody-modal').innerHTML = "Não há reservas para esse evento"
        return;
    }

    createListToModal(bookingList);

}


async function createElementsFromEvents(data) {
    const tableSelector = document.querySelector('.table');
    const tableBodySelector = tableSelector.childNodes[3];
    data.forEach((event, index) => {
        const trElement = document.createElement('tr');

        const thElement = document.createElement('th');
        thElement.setAttribute('scope', 'row');
        thElement.innerText = index + 1;

        const firstTdElement = document.createElement('td');
        const date = event.scheduled.substring(0, 10);
        const time = event.scheduled.substring(11, 16);
        firstTdElement.innerText = date.replaceAll('-', '/') + " " + time;

        const secondTdElement = document.createElement('td');
        secondTdElement.innerText = event.name;

        const thirdTdElement = document.createElement('td');
        thirdTdElement.innerText = event.attractions.join(', ');

        const fourthTdElement = document.createElement('td');

        const firstAnchor = document.createElement('a');
        firstAnchor.innerText = "ver reservas";
        firstAnchor.classList.add('btn');
        firstAnchor.classList.add('btn-dark');
        firstAnchor.setAttribute('data', event._id);
        const btnModal = document.querySelectorAll(".btn-dark");
        openAndCloseModal(btnModal);
        getEventsToModal(event._id)




        const secondAnchor = document.createElement('a');
        secondAnchor.innerText = "editar";
        secondAnchor.classList.add('btn');
        secondAnchor.classList.add('btn-secondary');
        secondAnchor.href = 'editar-evento.html?id=' + event._id;

        const thirdAnchor = document.createElement('a');
        thirdAnchor.innerText = "excluir";
        thirdAnchor.classList.add('btn');
        thirdAnchor.classList.add('btn-danger');
        thirdAnchor.href = 'excluir-evento.html?id=' + event._id;

        fourthTdElement.append(firstAnchor, secondAnchor, thirdAnchor);


        trElement.append(thElement, firstTdElement, secondTdElement, thirdTdElement, fourthTdElement);
        tableBodySelector.appendChild(trElement);

    })
}

async function openAndCloseModal(event) {
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }

    const modal = document.querySelector(".myModal");

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    for (var x = 0; x < event.length; x++) {  // Para percorrer o array contendo todos os botoes
        event[x].addEventListener("click", () => {
            modal.setAttribute('style', 'display: block')  // para aparecer na tela
        })
    }

}

async function createListToModal(data) {

    data.forEach((event, index) => {
        const trElement = document.createElement('tr');

        const thElement = document.createElement('th');
        thElement.setAttribute('scope', 'row')
        thElement.innerText = index + 1;

        const nameTdElement = document.createElement('td');
        nameTdElement.innerText = event.owner_name;

        const emailTdElement = document.createElement('td');
        emailTdElement.innerText = event.owner_email;

        const ticketsTdElement = document.createElement('td');
        ticketsTdElement.innerText = event.number_tickets;

        const tableBodyModalSelector = document.querySelector('#tbody-modal')
        tableBodyModalSelector.appendChild(trElement);
        trElement.append(thElement, nameTdElement, emailTdElement, ticketsTdElement);

    })
}