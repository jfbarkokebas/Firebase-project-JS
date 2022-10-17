//pegando o elento e o evento onsubmit:
authForm.onsubmit = function (e) {
    e.preventDefault()

    if (authForm.submitAuthForm.innerHTML == 'Acessar') {

        firebase.auth().signInWithEmailAndPassword( /* email, senha */
            authForm.email.value,
            authForm.password.value
        ).then(user =>{ /* se der certo retorna o objeto usuario */
                console.log('sucesso!');
                console.log(user);
        }).catch(error=>{
            console.log('falha no acesso.');
            console.log(error);
        })

    } else {

        firebase.auth().createUserWithEmailAndPassword(
            authForm.email.value,
            authForm.password.value
        ). then(user=>{

            console.log('Cadastrado com sucesso');
            console.log(user);

        }).catch(error=>{

            console.log('falha no cadastro');
            console.log(user);

        })

    }
}