// criar novo evento na home
const divEventos = document.querySelector("body > main > section:nth-child(2) > div.container.d-flex.justify-content-center.align-items-center")
const eventoArticle = document.createElement("article")
eventoArticle.setAttribute("class", "evento card p-5 m-3")
divEventos.appendChild(eventoArticle)

const nomeEventoH2 = document.createElement("h2")
nomeEventoH2.innerHTML = `nome do evento - 05/03/2022`
eventoArticle.appendChild(nomeEventoH2)

const atracaoEventoH4 = document.createElement("h4")
atracaoEventoH4.innerHTML = `Arctic Monkeys, The Kooks, Hiatus Kaiyote`
eventoArticle.appendChild(atracaoEventoH4)

const dataEventoH2 = document.createElement("p")
dataEventoH2.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique, dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus nobis in inventore tenetur asperiores.`
eventoArticle.appendChild(dataEventoH2)

const botaoEvento = document.createElement("a")
botaoEvento.setAttribute("href", "#", )
botaoEvento.setAttribute("class", "btn btn-primary", )
botaoEvento.innerHTML = `reservar ingresso`
eventoArticle.appendChild(botaoEvento)