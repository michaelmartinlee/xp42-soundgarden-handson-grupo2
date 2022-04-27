// Criar Evento
const btnSubmit = document.querySelector(".btn-primary");

btnSubmit.addEventListener("click", () => cadastrarEvento());


function fazPost(url, corpo) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': "application/json", },
        body: JSON.stringify(corpo),
    })
        .then(() => console.log(JSON.stringify(corpo)))
        .then(() => alert('Evento Cadastrado com Sucesso'))
        .then(() => window.location.href = "admin.html")
        .catch((error) => alert('Não foi possível realizar o cadastro, tente novamente'))

}




function cadastrarEvento() {
    event.preventDefault()
    const url = "https://xp41-soundgarden-api.herokuapp.com/events";
    let nome = document.querySelector("#nome").value;
    let atracoes = document.querySelector("#atracoes").value.split(", ");
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#data").value;
    let lotacao = document.querySelector("#lotacao").value;


    corpo =
    {
        "name": nome,
        "poster": "https://i.imgur.com/fQHuZuv.png",
        "attractions": atracoes,
        "description": descricao,
        "scheduled": data,
        "number_tickets": lotacao
    }
    fazPost(url, corpo);
}
