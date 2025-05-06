'use strict'

import { getContatos, contatosPorNome, postContatos } from "./contatos.js"

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

function novoContato(){
    document.querySelector('main').className = 'form-show'
}

function voltarHome(){
    document.querySelector('main').className = 'card-show'
}

async function salvarContato(){
    const contato = {
            "nome": document.getElementById('nome').value,
            "celular": document.getElementById('celular').value,
            "foto": document.getElementById('foto').value,
            "email": document.getElementById('email').value,
            "endereco": document.getElementById('endereco').value,
            "cidade": document.getElementById('cidade').value
        }

    if(postContatos(contato)){
        alert('Contato cadastrado com sucesso!!!')
        await exibirContatos()
        voltarHome()
    }
}

exibirContatos()

document.getElementById('nome-contato').addEventListener('keydown', exibirPesquisa)

document.getElementById('novo-contato').addEventListener('click', novoContato)

document.getElementById('cancelar').addEventListener('click', voltarHome)

document.getElementById('salvar').addEventListener('click', salvarContato)