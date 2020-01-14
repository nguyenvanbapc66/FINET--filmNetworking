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
            app.innerHTML = components.nav + components.film

            let logOut = document.getElementById('log-out')
            logOut.onclick = logOutClickHandler

            function logOutClickHandler() {
                firebase.auth().signOut()
                view.showComponents('login')
            }

            view.setText('user-name', firebase.auth().currentUser.displayName)

            view.changeAvatar()

            break
        }
        case 'management': {
            let app = document.getElementById('app')
            app.innerHTML = components.management + components.editModal

            controller.loadFilms()
            controller.setupDatabaseChange()

            let logOut = document.getElementById('log-out')
            logOut.onclick = logOutClickHandler

            let form = document.getElementById('form-upload')
            form.onsubmit = addFilmSubmitHandler

            async function addFilmSubmitHandler(e) {
                e.preventDefault()

                let files = form.chooser.files
                let file = files[0]
                let filmImages = form.image.files
                let filmImage = filmImages[0]

                try {
                    if (!file || !filmImage) {
                        throw new Error('Please choose a file!')
                    }
                } catch (err) {
                    view.setText('file-error', err.message)
                }

                // event submit >> add film
                let nameFilm = form.nameFilm.value.trim()
                let genre = form.genre.value.trim()
                let description = form.description.value.trim()
                let link = await controller.upload(file)
                let image = await controller.upload(filmImage)

                let validateResult = [
                    view.validate(nameFilm, 'name-film-error', "Please enter the movie's name"),
                    view.validate(genre, 'genre-error', 'Please enter the genre'),
                    view.validate(description, 'description-error', 'Please enter the description')
                ]

                let film = {
                    admin: 'nguyenvanbapc66@gmail.com',
                    name: nameFilm,
                    genre: genre,
                    link: link,
                    nameLink: file.name,
                    image: image,
                    description: description
                }

                if (allPassed(validateResult)) {
                    controller.addFilm(film)
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

view.showListFilms = async function(){
    if(model.films){
        let films = model.films
        let modal = document.getElementById("myModal")

        let listFilms = document.getElementById('list-films')
        listFilms.innerHTML = ''

        // Show list
        for (let film of films) {
            let html = `
            <div class="film-content">
                <span>
                    <span class="info-film">Link film:</span>
                    <video width="400" controls>
                        <source src="${film.link}" type="video/mp4">
                    </video>,
                    <span class="info-film">link image:</span>
                    <img src="${film.image}">,
                    <span id="info-film-${film.id}" class="info-film">
                        ${film.name},
                        ${film.genre}
                    </span>,
                    <span>${film.description}</span>                       
                </span>
                <button id="delete-film-${film.id}" type="button">
                    <i class="fas fa-minus"></i>
                </button>
                <button id="edit-film-${film.id}" type="button">
                    <i class="fas fa-pen-alt"></i>
                </button>
            </div>
            `
            listFilms.innerHTML += html
        }

        // Bind event to buttons
        for(let film of films){
            // Bind event to delete button
            let deleteBtn = document.getElementById('delete-film-' + film.id)
            deleteBtn.onclick = deleteBtnClickHandler

            function deleteBtnClickHandler(){
                controller.removeFilm(film)
            }
            
            // Bind event to edit button
            let editBtn = document.getElementById('edit-film-' + film.id)
            editBtn.onclick = editBtnClickHandler

            function editBtnClickHandler(){
                // Get modal
                modal.style.display = 'block'

                // Init modal data
                document.getElementById('id-film-edit').value = film.id

                document.getElementById('name-film-edit').value = film.name
                document.getElementById('genre-film-edit').value = film.genre 
            }
        }

        // event edit film
        let editInfoBtn = document.getElementById('edit-info-btn')
        editInfoBtn.onclick = editInfoClickHandler

        function editInfoClickHandler(e){
            e.preventDefault()

            let nameFilmEdit = document.getElementById('name-film-edit').value
            let genreFilmEdit = document.getElementById('genre-film-edit').value
            let idFilm = document.getElementById('id-film-edit').value

            controller.editFilm(idFilm, nameFilmEdit, genreFilmEdit)
        }

        // Close modal
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }
    }
}

view.showCurrentFilm = function(){
    if(model.currentFilm){
        let name = model.currentFilm.name
        let genre = model.currentFilm.genre
        let infoFilm = document.getElementById('info-film-' + model.currentFilm.id)
        infoFilm.innerHTML = ''

        let html = `
                ${name},
                ${genre}
        `
        infoFilm.innerHTML = html
    }
}

view.setText = function (id, text) {
    document.getElementById(id).innerText = text
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