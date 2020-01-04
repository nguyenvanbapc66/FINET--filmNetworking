// save all UI logic
const view = {
    currentComponent: null
}

view.showComponents = function (name) {
    view.currentComponent = name
    switch (name) {
        case 'register': {
            let app = document.getElementById('app')
            app.innerHTML = components.register

            let link = document.getElementById('register-link')
            link.onclick = registerLinkClickHandler

            let form = document.getElementById('form-register')
            form.onsubmit = formRegisterSubmitHandler

            function registerLinkClickHandler() {
                view.showComponents('login')
            }

            function formRegisterSubmitHandler(e) {
                e.preventDefault()

                // 1. Get info
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    comfirmPassword: form.comfirmPassword.value
                }

                // 2. Validate info
                let validateResult = [
                    view.validate(
                        registerInfo.firstname,
                        'firstname-error',
                        'Please enter your firstname'
                    ),
                    view.validate(
                        registerInfo.lastname,
                        'lastname-error',
                        'Please enter your lastname'
                    ),
                    view.validate(
                        registerInfo.email.includes('@'),
                        'email-error',
                        'Invalid email'
                    ),
                    view.validate(
                        registerInfo.password && registerInfo.password >= 6,
                        'password-error',
                        'Your password length must be 6 or more'
                    ),
                    view.validate(
                        registerInfo.comfirmPassword && registerInfo.comfirmPassword >= 6,
                        'comfirm-password-error',
                        'Password incorrect'
                    )
                ]

                // 3. Submit info (next session)
                if (allPassed(validateResult)) {
                    controller.register(registerInfo)
                }
            }

            break
        }
        case 'login': {
            let app = document.getElementById('app')
            app.innerHTML = components.login

            let link = document.getElementById('login-link')
            link.onclick = loginLinkClickHandler

            let form = document.getElementById('form-login')
            form.onsubmit = formLoginSubmitHandler

            function loginLinkClickHandler() {
                view.showComponents('register')
            }

            function formLoginSubmitHandler(e) {
                e.preventDefault()

                // 1. Get info
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value
                }

                // 2. Validate info
                let validateResult = [
                    view.validate(
                        loginInfo.email.includes('@'),
                        'email-error',
                        'Please enter a valid email'
                    ),
                    view.validate(
                        loginInfo.password && loginInfo.password >= 6,
                        'password-error',
                        'Your password length must be 6 or more'
                    )
                ]

                // 3. Submit info (next session)
                if (allPassed(validateResult)) {
                    controller.login(loginInfo)
                }
            }

            break
        }
        case 'film': {
            let app = document.getElementById('app')
            app.innerHTML = components.nav

            let logOut = document.getElementById('log-out')
            logOut.onclick = logOutClickHandler

            function logOutClickHandler() {
                firebase.auth().signOut()
                view.showComponents('login')
            }

            view.setText('user-name', firebase.auth().currentUser.displayName)

            break
        }
        case 'management': {
            let app = document.getElementById('app')
            app.innerHTML = components.management

            controller.loadFilms()

            let logOut = document.getElementById('log-out')
            logOut.onclick = logOutClickHandler

            let form = document.getElementById('form-upload')
            form.onsubmit = uploadLinkSubmitHandler

            async function uploadLinkSubmitHandler(e) {
                e.preventDefault()

                try {
                    let files = form.chooser.files
                    let genre = form.genre.value
                    let file = files[0]
                    if (!file) {
                        throw new Error('Please choose a file!')
                    }
                    let link = await controller.upload(file)
                    let film = {
                        admin: 'nguyenvanbapc66@gmail.com',
                        genre: genre,
                        link: link,
                        view: 0
                    }

                    controller.addFilm(film)
                } catch (err) {
                    alert(err.message)
                }
            }

            view.changeAvatar()

            view.setText('user-name', firebase.auth().currentUser.displayName)

            function logOutClickHandler() {
                firebase.auth().signOut()
                view.showComponents('login')
            }

            break
        }
    }
}

view.changeAvatar = function () {
    let currentAvatar = document.getElementById('current-avatar')

    for (let i = 1; i <= 8; i++) {
        let newAvatar = document.getElementById(`avatar-${i}`)
        newAvatar.addEventListener('click', setAvatar)

        function setAvatar() {
            currentAvatar.src = newAvatar.src
        }
    }
}
/* <div class="film-content">
            <img src="#">
            <span id="file-link"></span>
            <button type="submit">
                <i class="fas fa-minus"></i>
            </button>
            <button type="submit">
                <i class="fas fa-pen-alt"></i>
            </button>
        </div> */
view.showListFilms = function(){

}

view.setText = function (id, text) {
    document.getElementById(id).innerHTML = text
}

view.validate = function (condition, idErrorTag, messageError) {
    if (condition) {
        view.setText(idErrorTag, '')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}

view.disable = function (id) {
    document.getElementById(id).setAttribute('disabled', true)
}

view.enable = function (id) {
    document.getElementById(id).removeAttribute('disabled')
}

function allPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false
        }
    }
    return true
}