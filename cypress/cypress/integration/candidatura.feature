#language: pt
Funcionalidade: Candidatura
    Eu, como usuário, quero testar as funcionalidades de Candidatura
    
    Cenario: Cadastrar candidato
        Quando acesso o modulo "candidato"
        E clico em criar novo candidato
        E preencho o nome do candidato e salvo
        Então devo visualizar mensagem de candidato cadastrado com sucesso

    Cenario: Cadastrar vaga
        Quando acesso o modulo "vagas"
        E clico em criar novo vaga
        E preencho o nome do vaga e salvo
        Então devo visualizar mensagem de vaga cadastrado com sucesso

    Cenario: Canditar Candidatado
        Quando acesso o modulo "inicio"
        E seleciono candidato
        E seleciono vaga e me candidato
        Então devo visualizar mensagem de candidatado cadastrado com sucesso

    Cenario: visualizar candidatura
        Quando acesso o modulo "candidaturas"
        Então devo visualizar o card da candidatura

    Cenario: Deletar Candidatado candidatado
        Quando acesso o modulo "inicio"
        E deleto candidato cadandidatado
        E confirmo deletar candidatura
        Então devo visualizar mensagem de deletado com sucesso

    Cenario: Excluir candidato
        Quando acesso o modulo "candidato"
        E clico em deletar candidato
        E confirmo deletar usuario
        Então devo visualizar mensagem de candidato deletado com sucesso
        E não devo visualizar o registro na lista

    Cenario: Excluir vaga
        Quando acesso o modulo "vagas"
        E clico em deletar vaga
        E confirmo deletar vaga
        Então devo visualizar mensagem de vaga deletado com sucesso
        E não devo visualizar o registro na lista
        
    Cenario: não devo visualizar candidatura
        Quando acesso o modulo "candidaturas"
        Então não devo visualizar o card da candidatura