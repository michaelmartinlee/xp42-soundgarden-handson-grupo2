async function getEvents() { // Faz requisição na Api, para preencher o painel com os eventos

    try {
        const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events')

        const data = await response.json();

        createElementsFromEvents(data); // Função que cria os elementos e botões a partir da requisição

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
        const thead = document.querySelector('#thead-modal')
        thead.setAttribute('style', 'display:none')
        document.querySelector('#tbody-modal').innerHTML = "Não há reservas para esse evento"
        return;
    } else {
        const bookingListLength = bookingList.length
        createListToModal(bookingList, bookingListLength);
    }

}


async function createElementsFromEvents(data) { //Função que cria os todos os eventos na pagina
    const tableSelector = document.querySelector('.table'); // selcionando a tabela
    const tableBodySelector = tableSelector.childNodes[3];
    data.forEach((event, index) => { // percorrendo todos os eventos
        const trElement = document.createElement('tr');

        const thElement = document.createElement('th');
        thElement.setAttribute('scope', 'row');
        thElement.innerText = index + 1;

        const firstTdElement = document.createElement('td');
        firstTdElement.innerText = new Date(event.scheduled).toLocaleString("pt-br")

        const secondTdElement = document.createElement('td');
        secondTdElement.innerText = event.name;

        const thirdTdElement = document.createElement('td');
        thirdTdElement.innerText = event.attractions.join(', ');
        console.log(window.screen.width)
        if (window.screen.width <= 480) { // para responsividade
            thirdTdElement.setAttribute('style', 'display:none')
        }

        const fourthTdElement = document.createElement('td');

        const firstAnchor = document.createElement('a'); // Botão listar evento, que abre um modal dinâmico
        firstAnchor.innerText = "ver reservas";
        firstAnchor.classList.add('btn');
        firstAnchor.classList.add('btn-dark');
        firstAnchor.setAttribute('data', event._id);
        firstAnchor.addEventListener('click', () => {

            openAndCloseModal(); // Função que permite abrir e fechar o modal
            getEventsToModal(event._id); // Função que faz requisição para Api para receber info
        })


        const secondAnchor = document.createElement('a'); // Botão editar evento
        secondAnchor.innerText = "editar";
        secondAnchor.classList.add('btn');
        secondAnchor.classList.add('btn-secondary');
        secondAnchor.href = 'editar-evento.html?id=' + event._id;

        const thirdAnchor = document.createElement('a'); // Botão excluir evento
        thirdAnchor.innerText = "excluir";
        thirdAnchor.classList.add('btn');
        thirdAnchor.classList.add('btn-danger');
        thirdAnchor.href = 'excluir-evento.html?id=' + event._id;

        fourthTdElement.append(firstAnchor, secondAnchor, thirdAnchor);


        trElement.append(thElement, firstTdElement, secondTdElement, thirdTdElement, fourthTdElement);
        tableBodySelector.appendChild(trElement);

    })
}

async function openAndCloseModal() { // Função que abre e fecha o modal
    const modal = document.querySelector(".myModal");
    modal.setAttribute('style', 'display:block')

    const span = document.getElementsByClassName("close")[0]; // Clicar no botão x para fechar
    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = (event) => { // Clicar fora do modal, fecha ele
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

async function createListToModal(data, dataLength) { //Função que cria o modal dinâmicamente
    const thead = document.querySelector('#thead-modal')
    thead.setAttribute('style', 'display:deafult')
    document.querySelector('#tbody-modal').innerHTML = null

    for (let index = 0; index < dataLength; index++) {
        const dataObject = data[index]
        const trElement = document.createElement('tr');

        const thElement = document.createElement('th');
        thElement.setAttribute('scope', 'row')

        const nameTdElement = document.createElement('td');
        nameTdElement.innerText = dataObject.owner_name;

        const emailTdElement = document.createElement('td');
        emailTdElement.innerText = dataObject.owner_email;

        const ticketsTdElement = document.createElement('td');
        ticketsTdElement.innerText = dataObject.number_tickets;

        const tableBodyModalSelector = document.querySelector('#tbody-modal')
        tableBodyModalSelector.appendChild(trElement);
        trElement.append(thElement, nameTdElement, emailTdElement, ticketsTdElement);

    }
}