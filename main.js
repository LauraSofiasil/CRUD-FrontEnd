'use strict'

async function getContatos(){
    
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'

    //Pede para o fetch fazer uma requisição na url
    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    return data
}

async function postContatos(contato){

    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)  //Corpo da mensagem
    }

    const response = await fetch(url, options)

    return response.ok
}

async function putContato(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`


    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)  //Corpo da mensagem
    }

    const response = await fetch(url, options)

    return response.ok
}

async function deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    return response.ok
}

const contato = {
    "nome": "Ana Oliveira Santos",
    "celular": "11 9 1111-1111",
    "foto": "../img/senai.png",
    "email": "senai@gmail.com",
    "endereco": "Rua Margarida, 105",
    "cidade": "Jandira"
}