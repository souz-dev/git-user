document.querySelector('button').onclick= () =>{

 let usuario = document.querySelector('#username');
fetch(`https://api.github.com/users/${usuario.value}`)
        .then(dados => dados.json())
        .then(tratados => resposta(tratados));

 
}



let resposta = (dados) => {
    console.log(dados)
    document.querySelector('#avatar_url').src = dados.avatar_url,
    document.querySelector('#bio').innerHTML = dados.bio,
    document.getElementById('created_at').innerHTML = dados.created_at
    document.getElementById('updated_at').innerHTML = dados.updated_at
    document.getElementById('login').innerHTML = dados.login
    
}