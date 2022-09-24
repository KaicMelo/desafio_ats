#language: pt
Funcionalidade: Lista de Candidatados
    Eu, como usuário, quero testar as funcionalidades da Lista de Candidatados
    
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

    Cenario: Canditar Candidatado de forma identica
        Quando acesso o modulo "inicio"
        E seleciono candidato
        E seleciono vaga e me candidato
        Então devo visualizar mensagem de candidatado já cadastrado

    Cenario: Deletar Candidatado cadastrado
        Quando acesso o modulo "inicio"
        E deleto candidato cadandidatado
        E confirmo deletar candidatura
        Então devo visualizar mensagem de deletado com sucesso

    