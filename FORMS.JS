document.getElementById("reg-button").addEventListener("click",function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
    alert("welcome");
});
document.getElementById("log-button").addEventListener("click",function(){
    document.getElementById("login-div").style.display="inline";
    document.getElementById("register-div").style.display="none";});