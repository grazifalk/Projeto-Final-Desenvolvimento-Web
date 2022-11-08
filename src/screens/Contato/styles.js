function salvarForm(){
    if(email.value == "" || name.value == ""||message.value =="") {
        alert("Preencha todos os Campos");
        return
    }
    else 
    if(typeof(Storage)!== "undefined") {

        if (localStorage.cont) {
            localStorage.cont = Number(localStorage)+1;
        } else {
            localStorage.cont = 1;
        }

        cad = document.getElementById('name').value + ';' + document.getElementById('email').value + ';' + document.getElementById('message').value;
        localStorage.setItem("cad_"+localStorage.cont,cad);
        alert("MENSAGEM ENVIADA COM SUCESSO")
    }
    
    }