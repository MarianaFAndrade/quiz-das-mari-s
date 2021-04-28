var nome = prompt ("Eai, bele? Qual sua graca?");

var querParticipar = prompt ("Olá, você quer participar quiz das Maris?");
    if (querParticipar === "sim")
        alert("Ótimo, vamos fazer o quiz")        
    else
        alert("Ok, te vejo na próxima!")
var pergunta1 = prompt ("Escolha 1, 2 ou 3 para sua resposta. Qual a capital da Autrália? 1- Melbourne 2- Sydney 3-Canberraz")
var pergunta2 = prompt ("Qual dos animais abaixo só existe na Austrália? 1- Koala 2- Tubarão Branco 3- Cobra Marrom")
var pergunta3 = prompt ("Quantos estados existem na Austrália? 1- Quinze 2- Sete 3- Vinte")

    if (pergunta1 === "3") {
       document.write ("Pergunta 1: Resposta Correta") 
    }

    if (pergunta2 === "1") {
        document.write ("Pergunta 2: Resposta Correta") 
     }

     if (pergunta3 === "2") {
        document.write ("Pergunta 3: Resposta Correta") 
     }