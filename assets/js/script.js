//  https://jsonplaceholder.typicode.com/posts


async function readPost () {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';
            // Aqui ele vai puxar via api os posts
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json ();
    // Aqui ele vai limpar a area de posts 
    if (json.length >0)  {
        postArea.innerHTML = '';
        // Aqui ele vai criar um loop para trazer o Titulo e corpo da mensagem.
        for (let i in json) {
            let postHtml  = `<div><h1>${json[i].title}</h1>  ${json[i].body}<hr/></div>`;
            postArea.innerHTML += postHtml;
        }
        // Caso não tenha posto ele irá exibir isto.
    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}

        // Aqui irá fazer a insersão do POST

async function addNewPost (title, body)  {
    await fetch (
        'https://jsonplaceholder.typicode.com/posts',
        {method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title,
            body,
            userId: 2
          })

        }
    );
    document.querySelector('#titleField').value = '';
    document. querySelector('#bodyField').value= '';

    readPost();
}


                        // Evento de click no Botão 
document.querySelector('#insertButton').addEventListener('click',() =>{
    let title = document.querySelector('#titleField').value;
    let body = document. querySelector('#bodyField').value;


        // Obrigando a Prencher todos os campos
    if (title && body )  {
        addNewPost(title,body)
    } else {
        alert('Preencha todos os campos.');
    }
} );

readPost();