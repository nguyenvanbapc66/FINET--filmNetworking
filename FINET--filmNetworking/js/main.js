window.onload = init

function init(){
    firebase.auth().onAuthStateChanged(function(user){
        if(view.currentComponent == 'register'){
            return
        } else if(user && user.emailVerified){
            view.showComponents('film')
        } else{
            view.showComponents('login')
        }
    })
}