function showAlert(div,type,msg){
    var putInDiv = document.getElementById(div)
    putInDiv.innerHTML = <div class="alert alert-'+type+'alert-dismissible fade show" role="alert">'+msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
    
}

$('#sign_up_form').submit(function(e){
    e.preventDefault()
    var email = document.querySelector('#sign_up_email').value
    var pwd1 = document.querySelector('#sign_up_pwd1').value
    var pwd2 = document.querySelector('#sign_up_pwd2').value

    if(pwd1 == pwd2){
        firebase.auth().createUserWithEmailAndPassword(email, pwd1)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    }else{
        showAlert('sign_up_alerts', 'warning', 'Hi the password are not matching!!')

    }
})