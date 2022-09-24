#language: pt
Funcionalidade: Candidatados
    Eu, como usuário, quero testar as funcionalidades de candidatados
    
    Cenario: Cadastrar candidato
        Quando acesso o modulo "candidato"
        E clico em criar novo candidato
        E preencho o nome do candidato e salvo
        Então devo visualizar mensagem de candidato cadastrado com sucesso

    Cenario: Cadastrar candidato vazio
        Quando acesso o modulo "candidato"
        E clico em criar novo candidato
        E não preencho o nome do candidato e salvo
        Então devo visualizar mensagem para preencher o campo corretamente

    Cenario: Editar candidato
        Quando acesso o modulo "candidato"
        E clico em editar candidato
        E altero o nome do candidato e salvo
        Então devo visualizar mensagem de candidato cadastrado com sucesso

    Cenario: Excluir candidato
        Quando acesso o modulo "candidato"
        E clico em deletar candidato alterado
        E confirmo deletar usuario
        Então devo visualizar mensagem de candidato deletado com sucesso
        E não devo visualizar o registro na lista