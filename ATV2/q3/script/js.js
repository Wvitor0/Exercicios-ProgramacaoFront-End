function validarForm(){
    var name = document.getElementById('name').value;
    var idade = document.getElementById('idade').value;
    var salario = document.getElementById('salario').value;
    var sexo = document.getElementById('sexo').value;
    var civil = document.getElementById('civil').value;
    
    if(name.length == 0 || idade == 0 || salario < 0 || sexo.length == 0 || civil.length == 0){
        alert("ERRO: Preencha o formulario!");
    }
    
    else if(name.length <= 3){
    alert("ERRO: Digite um nome com mais de 3 caracteres!");
    }

    else if(idade < 0 || idade > 150){
        alert("ERRO: Digite uma idade entre 0 e 150!");
    }

    else if(salario < 0){
        alert("ERRO: Digite um salário acima de 0!");
    }

    else if(sexo != 'f' && sexo != 'm'){
        alert("ERRO: Digite um sexo f ou m!");
    }

    else if(civil != 's' && civil != 'c' && civil != 'v' && civil != 'd'){
        alert("ERRO: Digite um estado civil s, c, v ou d!");
    } 
    else{
        alert("Sucesso!")
    }
}