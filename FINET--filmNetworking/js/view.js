// save all UI logic
const view = {
    currentComponent: null
}

view.showComponents = function(name){
    view.currentComponent = name
    switch(name){
        case 'register':{
            let app = document.getElementById('app')
            app.innerHTML = components.register

            let link = document.getElementById('register-link')
            link.onclick = registerLinkClickHandler

            function registerLinkClickHandler(){
                view.showComponents('login')
            }
            break
        }
        case 'login':{
            let app = document.getElementById('app')
            app.innerHTML = components.login

            let link = document.getElementById('login-link')
            link.onclick = loginLinkClickHandler

            function loginLinkClickHandler(){
                view.showComponents('register')
            }
            break
        }
    }
}