// save all UI logic
const view = {
    currentComponent: null
}

view.showComponents = async function (name) {
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

            // Lấy dữ liệu từ fireStorage
            await controller.loadFilmsHomePage();

            try {
                view.ShowListFilmsHomePage();


                // Add event click film - image
                let listImages = document.getElementsByClassName('d-block');
                for (const img of listImages) {
                    img.onclick = controller.showInformationOfChosenFilm;
                }

                // Show list in homepage
                view.showSummaryAboutTheRandomFilm();

                view.setText('user-name', firebase.auth().currentUser.email)

                view.changeAvatar();

                let logOut = document.getElementById('log-out')
                logOut.onclick = logOutClickHandler

                function logOutClickHandler() {
                    firebase.auth().signOut()
                    view.showComponents('login')
                }

                let btnSearch = document.getElementById('inputSearch');
                btnSearch.onkeypress = controller.search;



                break;
            }
            catch (error) {
                console.log('Something wrong!')
                break;
            }
        }


        case 'management': {
            let app = document.getElementById('app')
            app.innerHTML = components.management + components.editModal

            controller.loadFilms()
            controller.setupDatabaseChange()

            let logOut = document.getElementById('log-out')
            logOut.onclick = logOutClickHandler

            let loader = document.getElementById('add-link-film')

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
                
                // upload film, image
                loader.innerHTML = '<i class="fa fa-spinner fa-spin"></i>'
                let link, image
                try {
                    link = await controller.upload(file)
                    image = await controller.upload(filmImage)
                } catch (err) {
                    console.log(err.message)
                }

                let validateResult = [
                    view.validate(nameFilm, 'name-film-error', "Please enter the movie's name"),
                    view.validate(genre, 'genre-error', 'Please enter the genre'),
                    view.validate(description, 'description-error', 'Please enter the description')
                ]

                if (allPassed(validateResult)) {
                    let film = {
                        admin: 'nguyenvanbapc66@gmail.com',
                        name: nameFilm,
                        genre: genre,
                        link: link,
                        nameLink: file.name,
                        image: image,
                        description: description
                    }
                    controller.addFilm(film)
                }
                loader.innerHTML = '<i class="fas fa-plus"></i>'
            }

            view.changeAvatar()

            view.setText('user-name', firebase.auth().currentUser.email)

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


view.ShowListFilmsHomePage = function () {
    if (model.films) {
        let films = model.films
        let TVShows = films.filter(function (item) {
            return item.genre === 'TVShows';
        });

        initSliderData('TV-Shows-Content', TVShows)

        let Movies = films.filter(function (item) {
            return item.genre === 'Movies';
        });

        initSliderData('Movies-Content', Movies)

    }
}



// Show Summary About A Random Film Below The Header
view.showSummaryAboutTheRandomFilm = function () {

    // Random film 
    let filmArray = model.films;
    let randomNumber = Math.floor(Math.random() * filmArray.length);

    document.getElementById('film-name').innerText = filmArray[randomNumber].name;
    document.getElementById('background-trailer-year').innerText = filmArray[randomNumber].genre;
    document.getElementById('background-trailer-description').innerText = filmArray[randomNumber].description;
    document.getElementById('image-trailer-fill').src = filmArray[randomNumber].image;

    let btnPlayRandomFilm = document.getElementById('btnRandomFilm');
    btnPlayRandomFilm.onclick = function () {
        document.getElementById('video').innerHTML = ``;
        document.getElementById('description').innerText = '\n' + filmArray[randomNumber].description;
        document.getElementById('video').innerHTML = `
                <video controls style=""width="100%">
                <source src="${filmArray[randomNumber].link}" type="video/mp4">
                </video>
                `
        document.getElementById('btn-show-box').click();

    }
}

view.showListFilms = async function () {
    if (model.films) {
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
                    <img style="width: 180px; height: 252px;" src="${film.image}">,
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
        for (let film of films) {
            // Bind event to delete button
            let deleteBtn = document.getElementById('delete-film-' + film.id)
            deleteBtn.onclick = deleteBtnClickHandler

            function deleteBtnClickHandler() {
                controller.removeFilm(film)
            }

            // Bind event to edit button
            let editBtn = document.getElementById('edit-film-' + film.id)
            editBtn.onclick = editBtnClickHandler

            function editBtnClickHandler() {
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

        function editInfoClickHandler(e) {
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

view.showCurrentFilm = function () {
    if (model.currentFilm) {
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


function initSliderData(innerSliderID, data) {
    let html = '';
    for (let i = 0; i < data.length; i += 4) {
        html += i < 4 ? `<div class = "carousel-item active>
                <div id="row-container" class="row-container" style="display: flex; width: 25%;" >
                `
            : `<div class = "carousel-item">
                <div id="row-container" class="row-container" style="display: flex; width: 25%;" >
                `;

        for (let j = i; j < i + 4; j++) {
            if (j >= data.length) {
                break;
            } else {
                html +=
                    `
                    <img class="d-block w-100 image-film" id="${data[j].id}"
                    src="${data[j].image}" >
                    
                `
            }
        }

        html += '</div>';
    }
    document.getElementById(innerSliderID).innerHTML = html;

}

