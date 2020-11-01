document.getElementById("sendButton").addEventListener("click", validateform)

function validateform(){
    if
        (document.getElementById("username").value != "" &&
        document.getElementById("user-email").value != "" &&
        document.getElementById("phonenumber").value != "" )
            alert("Prontinho! você receberá as novidades por email.")
    
    else{
        alert("Por favor, preencha os campos nome, e-mail e telefone.")
    }
}