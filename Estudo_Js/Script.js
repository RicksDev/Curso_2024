window.alert('Bem vindo!!');
        //Coloca ok ou cancelar
        window.confirm('Está gostando de Js?');

        //O "Prompt" seria um "Scanner", onde o usuario pode escrever.. Estou guardando em uma variavel e mostrando na tela.
      
        var nome = window.prompt('Qual é seu nome?');
        //Pra não ficar "null" na tela.
        nome.value = (" ");

        //mandei escrever na tela o nome que a pessoa digitou.
        document.write(nome);