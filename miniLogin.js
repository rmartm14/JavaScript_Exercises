//Mini login of master

let username = prompt("Username: ")

if(username == "" || username == null){
    alert("Cancelled");
}
else if(username == "Admin"){
    let password = prompt("Password: ");
    let passRequest = (password == "TheMaster") ? "Welcome!" : 
    (password == "" || password == null) ? "Cancelled" : "Wrong Password";
    alert(passRequest)
}
else{
    alert("I dont know you");
} 