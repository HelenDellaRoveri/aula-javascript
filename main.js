function clicou(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
   //console.log(document.getElementById ("agradecimento"))
   // alert("obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallab.org/en/#.YVD6AbhKi00");
    //window.location.href = "https://globallab.org/en/#.YVD6AbhKi00";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
    ;
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mause aqui";
    elemento.innerHTML = "Passe o mause aqui";
}

function load(){
    alert("página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1+n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual sua idade");
valoidadeIdade(idade)
console.log(validar);*/

/*var d = new Date();
alert(d.getDay() + " dias")
alert(d.getHours() + " horas")
alert(d.getMinutes() + " minutos")
alert(d.getMonth() + 1 + " meses");
*/

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*var count =  0;
while(count <= 10){
    console.log(count);
    alert(count);
    count++;
}*/

/*var idade = prompt("qual sua idade?")
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}*/

/*var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor)*/

//var lista = ["maça", "pera", "laranja"]
//lista.push("uva");
//lista.pop("");

//console.log(lista.length);
//console.log(lista);
//conosole.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Helen Yohanna";
//var idade1 = 16;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert("em 2031 Helen terá" + idade1 + idade2 + "anos");
//console.log(nome);
//console.log();
//console.log();
//alert(frase.replace("Japão" + "Brasil"))