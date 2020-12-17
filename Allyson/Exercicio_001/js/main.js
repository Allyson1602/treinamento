let lista_usuarios = document.getElementById("lista_usuarios");

var dados = [
    {
        "id": 1,
        "nome": "José Da Silva",
        "telefone": "61 9 8243-9483"
    },
    {
        "id": 2,
        "nome": "Antonio Carlos Viecili",
        "telefone": "61 9 8676-3889"
    },
    {
        "id": 3,
        "nome": "Maria Suzana Nobrega",
        "telefone": "61 9 9834-4895"
    }
];

function mostraDados() {
    for(let i=0; i<dados.length; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('lista_content');
    
        let td_id = document.createElement('td');
        td_id.innerHTML = dados[i]['id'];
    
        let td_nome = document.createElement('td');
        td_nome.innerHTML = dados[i]['nome'];
    
        let td_telefone = document.createElement('td');
        td_telefone.innerHTML = dados[i]['telefone'];
    
        let td_acoes = document.createElement('td');
        td_acoes.innerHTML = "<a href='#' onClick='alteraDado("+dados[i]['id']+")'><i class='far fa-edit'></i></a><a href='#' onClick='deletaDado("+dados[i]['id']+")'><i class='fas fa-times'></i></a>";
    
        tr.appendChild(td_id);
        tr.appendChild(td_nome);
        tr.appendChild(td_telefone);
        tr.appendChild(td_acoes);
        lista_usuarios.appendChild(tr);
    }
}

mostraDados();


function buscaDado() {
    let campo_busca = document.getElementById('campo_busca').value;
    
    for(let i=0; i<dados.length; i++) {
        if(campo_busca == dados[i]['id'] || campo_busca == dados[i]['nome'] || campo_busca == dados[i]['telefone']) {
            lista_usuarios.innerHTML = "<tr class='lista_header'><th>Id</th><th>Nome</th><th>Telefone</th><th>Ações</th></tr>";
            
            let tr = document.createElement('tr');
            tr.classList.add('lista_content');
        
            let td_id = document.createElement('td');
            td_id.innerHTML = dados[i]['id'];
        
            let td_nome = document.createElement('td');
            td_nome.innerHTML = dados[i]['nome'];
        
            let td_telefone = document.createElement('td');
            td_telefone.innerHTML = dados[i]['telefone'];
        
            let td_acoes = document.createElement('td');
            td_acoes.innerHTML = "<a href='#' onClick='alteraDado("+dados[i]['id']+")'><i class='far fa-edit'></i></a><a href='#' onClick='deletaDado("+dados[i]['id']+")'><i class='fas fa-times'></i></a>";
        
            tr.appendChild(td_id);
            tr.appendChild(td_nome);
            tr.appendChild(td_telefone);
            tr.appendChild(td_acoes);
            lista_usuarios.appendChild(tr);
        }else if(campo_busca == '') {
            lista_usuarios.innerHTML = "<tr class='lista_header'><th>Id</th><th>Nome</th><th>Telefone</th><th>Ações</th></tr>";
            mostraDados();
        }
    }
}

function alteraDado(id) {
    let alteracao_id = document.getElementById('alteracao_id');
    let alteracao_nome = document.getElementById('alteracao_nome');
    let alteracao_telefone = document.getElementById('alteracao_telefone');

    for(let i=0; i<dados.length; i++) {
        if(id == dados[i]['id']) {
            alteracao_id.value = dados[i]['id'];
            alteracao_nome.value = dados[i]['nome'];
            alteracao_telefone.value = dados[i]['telefone'];
        }
    }
}

function deletaDado(id) { // erro
    for(let i=0; i<dados.length; i++) {
        if(id == dados[i]['id']) {
            delete dados[i];
            
            lista_usuarios.innerHTML = "<tr class='lista_header'><th>Id</th><th>Nome</th><th>Telefone</th><th>Ações</th></tr>";
            mostraDados();
        }
    }
}

function salvaUsuario() {
    let alteracao_id = document.getElementById('alteracao_id').value;
    let alteracao_nome = document.getElementById('alteracao_nome').value;
    let alteracao_telefone = document.getElementById('alteracao_telefone').value;
    
    for(let i=0; i<dados.length; i++) {
        if(alteracao_id == dados[i]['id']) {
            // console.log();

            dados[i]['id'] = alteracao_id;
            dados[i]['nome'] = alteracao_nome;
            dados[i]['telefone'] = alteracao_telefone;
            
            lista_usuarios.innerHTML = "<tr class='lista_header'><th>Id</th><th>Nome</th><th>Telefone</th><th>Ações</th></tr>";
            mostraDados();
        }
    }
}

function limpaCampos() {
    document.getElementById('alteracao_id').value = '';
    document.getElementById('alteracao_nome').value = '';
    document.getElementById('alteracao_telefone').value ='';
}