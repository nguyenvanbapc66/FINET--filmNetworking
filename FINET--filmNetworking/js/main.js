window.onload = init

function init(){
    firebase.auth().onAuthStateChanged(function(user){
        if(view.currentComponent == 'register'){
            return
        } else if(user && user.emailVerified){
            if(user.email == 'nguyenvanbapc66@gmail.com'){
                view.showComponents('management')
            } else{
                view.showComponents('film')
            }
        } else{
            view.showComponents('login')
        }
    })
}