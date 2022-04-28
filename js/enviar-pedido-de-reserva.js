// const botaoConfirmar = document.querySelector("#myModal > div > div > div.modal-footer > button.btn.btn-primary")

// const corpoPost = {
//     owner_name: "Felix",
//     owner_email: "email@email.com",
//     number_tickets: 1,
//     event_id: "626998e245cb0602abe869d9"
// }


// botaoConfirmar.addEventListener("click", (event) => {
//         event.preventDefault();

//         fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(corpoPost),
//             })
//             .then(() => {
//                 alert("Reserva feita com sucesso");
//             })
//             .catch((error) => console.log(error.message));



//     })