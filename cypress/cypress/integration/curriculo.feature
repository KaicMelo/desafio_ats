#language: pt
Funcionalidade: Currículo
    Eu, como usuário, quero testar as funcionalidades de Currículo
    
    Cenario: Cadastrar candidato para adicionar um currículo
        Quando acesso o modulo "candidato"
        E clico em criar novo candidato
        E preencho o nome do candidato e salvo
        Então devo visualizar mensagem de candidato cadastrado com sucesso
    
    Cenario: visualizar curriculo sem estar cadastrado
        Quando acesso o modulo "curriculo"
        E clico em visualizar curriculo
        Então devo visualizar mensagem que não tenho curriculo cadastrado

    Cenario: Deletar curriculo sem estar cadastrado
        Quando acesso o modulo "curriculo"
        E clico em deletar curriculo
        Então devo visualizar mensagem que não tenho curriculo cadastrado para deletar
    
    Cenario: Verificar na tabela que curriculo não esta cadastrado
        Quando acesso o modulo "curriculo"
        Então devo visualizar na tabela que não contem curriculo

    Cenario: Cadastrar curriculo para candidato
        Quando acesso o modulo "curriculo"
        E clico em criar novo curriculo
        E preencho o nome do curriculo e salvo
        Então devo visualizar mensagem de curriculo cadastrado com sucesso
    
    Cenario: Verificar na tabela que curriculo esta cadastrado
        Quando acesso o modulo "curriculo"
        Então devo visualizar na tabela que contem curriculo

    Cenario: Alterar curriculo para candidato
        Quando acesso o modulo "curriculo"
        E clico em visualizar curriculo
        E altero o curriculo e salvo
        Então devo visualizar mensagem de curriculo cadastrado com sucesso

    Cenario: Verificar na tabela que curriculo esta cadastrado
        Quando acesso o modulo "curriculo"
        Então devo visualizar na tabela que contem curriculo

    Cenario: Deletar curriculo para candidato
        Quando acesso o modulo "curriculo"
        E clico em deletar curriculo
        E confirmo deletar curriculo
        Então devo visualizar mensagem de curriculo deletado com sucesso
    
    Cenario: Excluir candidato
        Quando acesso o modulo "candidato"
        E clico em deletar candidato
        E confirmo deletar usuario
        Então devo visualizar mensagem de candidato deletado com sucesso
        E não devo visualizar o registro na lista