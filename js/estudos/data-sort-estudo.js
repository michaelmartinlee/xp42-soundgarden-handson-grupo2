const listaDeDatas2 = [{
        id: 1,
        data: "1989-01-01T22:00:00.000Z"
    },
    {
        id: 2,
        data: "2022-07-30T22:00:00.000Z"
    },
    {
        id: 3,
        data: "2025-12-25T22:00:00.000Z"
    },
    {
        id: 4,
        data: "2012-08-21T22:00:00.000Z"
    },
    {
        id: 5,
        data: "2015-11-17T22:00:00.000Z"
    },
    {
        id: 6,
        data: "2030-05-17T22:00:00.000Z"
    },

]

listaDeDatas2.sort((a, b) => {
    return new Date(a.data) - new Date(b.data);
});

console.log(listaDeDatas2);

const datasFuturas = listaDeDatas2.filter((data) => {
    const agora = new Date();
    return new Date(data.data) > agora
})

console.log(datasFuturas);








// //Exemplo para ordenar uma lista de datas da mais antiga para a mais nova
// const listaDeDatas = [
//     "2022-07-30T22:00:00.000Z",
//     "2025-12-25T22:00:00.000Z",
//     "2012-08-21T22:00:00.000Z",
//     "2015-11-17T22:00:00.000Z",
//     "2030-05-17T22:00:00.000Z"
// ]
// listaDeDatas.sort(function(a, b) {
//     return new Date(a) - new Date(b);
// });
// console.log(listaDeDatas);


// // //Exemplo para ordenar uma lista de datas da mais nova para a mais antiga
// const listaDeDatas3 = [
//     "2022-07-30T22:00:00.000Z",
//     "2025-12-25T22:00:00.000Z",
//     "2012-08-21T22:00:00.000Z",
//     "2015-11-17T22:00:00.000Z",
//     "2030-05-17T22:00:00.000Z"
// ]
// listaDeDatas3.sort(function(a, b) {
//     return new Date(b) - new Date(a);
// });
// console.log(listaDeDatas3);


// const data1 = new Date(listaDeDatas[0])
// console.log(data1.getTime());

// const date11 = new Date("2023-08-15T22:00:00.000Z")
// const date22 = "2023-08-14T22:00:00.000Z"

// console.log(date11 > date22);

// console.log(date11.getTime());


// const date2 = new Date("2023-08-14T22:00:00.000Z");