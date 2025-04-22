'use strict'

import { getContatos, contatosPorNome } from "./contatos.js"

function criarCard(contato){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')

    card.innerHTML = `
            <img src="${contato.foto}" alt="avatar">
            <h2>${contato.nome}</h2>
            <p>${contato.celular}</p>
    `

    container.appendChild(card)
}

async function exibirContatos(){
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}

async function exibirPesquisa(evento){
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
        container.replaceChildren()
        const contatos = await contatosPorNome(evento.target.value)
        contatos.forEach(criarCard)
    }
}

exibirContatos()

document.getElementById('nome-contato').addEventListener('keydown', exibirPesquisa)