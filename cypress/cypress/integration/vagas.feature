#language: pt
Funcionalidade: Vagas
    Eu, como usuário, quero testar as funcionalidades das vagas
    
    Cenario: Cadastrar vaga
        Quando acesso o modulo "vagas"
        E clico em criar novo vaga
        E preencho o nome do vaga e salvo
        Então devo visualizar mensagem de vaga cadastrado com sucesso

    Cenario: Cadastrar vaga vazio
        Quando acesso o modulo "vagas"
        E clico em criar novo vaga
        E não preencho o nome do vaga e salvo
        Então devo visualizar mensagem para preencher o campo corretamente

    Cenario: Editar vaga
        Quando acesso o modulo "vagas"
        E clico em editar vaga
        E altero o nome do vaga e salvo
        Então devo visualizar mensagem de vaga cadastrado com sucesso

    Cenario: Excluir vaga
        Quando acesso o modulo "vagas"
        E clico em deletar vaga alterada
        E confirmo deletar vaga
        Então devo visualizar mensagem de vaga deletado com sucesso
        E não devo visualizar o registro na lista