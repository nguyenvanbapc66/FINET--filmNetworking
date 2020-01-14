// save all business logic
const controller = {}

controller.register = async function(registerInfo){
    // 1. create user with email + password
    // 2. update user's displayName = firstname + " " + lastname
    // 3. send user an email varification

    let email = registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.firstname + ' ' + registerInfo.lastname 

    view.setText('register-error', '')
    view.setText('register-sucess', '')
    view.disable('register-submit-btn')
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-sucess', 'An email verification has been sened to your email address')
    } catch(err){
        view.setText('register-error', err.message)
    }
    view.enable('register-submit-btn')
    firebase.auth().signOut()
}

controller.login = async function(loginInfo){
    let email = loginInfo.email
    let password = loginInfo.password

    view.setText('login-error', '')
    view.disable('login-submit-btn')
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        
        if(!result.user || !result.user.emailVerified){
            throw new Error('You must verify your email')
        }
    } catch(err){
        view.setText('login-error', err.message)
        view.enable('login-submit-btn')
    }
}


// About films
controller.showInformationOfChosenFilm = function (e) {
    let currentID = e.target.id;
    document.getElementById('video').innerHTML =``;
    for (const film of model.films) {
        if (currentID === film.id) {
            document.getElementById('description').innerText = 'Film Description:\n' + film.description;
            document.getElementById('video').innerHTML = `
            <video controls style=""width="100%">
            <source src="${film.link}" type="video/mp4">
            </video>
            `
            document.getElementById('btn-show-box').click();
        }

    }


}


controller.search = function (e) {
    if (e.keyCode == 13) {
        let inputValue = document.getElementById('inputSearch').value;
        let result = [];
        let html = ``;
        console.log(result)
        if (inputValue.indexOf(" ") !== -1
            || inputValue.trim() === null
            || inputValue.trim() === undefined
            || inputValue.trim() === " "
            || inputValue === ""
        ) {
            document.getElementById('search-error').innerText = 'Enter valid value!';
            // alert('Enter value!');
        } else {
            document.getElementById('search-error').innerText = '';
            for (const film of model.films) {
                if (film.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                    result.push(film)
                } else if (film.genre.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) {
                    result.push(film)
                }

            }

            for (const element of result) {
                html += `
            <span style="display:flex">
                <video width="400px" height="200px" controls class="video-display">
                     <source src="${element.link}" type="video/mp4">
                </video>
                <img src ="${element.image}" width="400px" height="200px" class="video-display">
            </span>
                `
            };
            console.log(result)
            document.getElementById('content').innerHTML = html;
        };

    }


}

controller.loadFilmsHomePage = async function(){
    // 1. load data form db

    let result = await firebase
        .firestore()
        .collection('films')
        .get()
    let docs = result.docs
    let films = tranformDocs(docs)
    
    // 2. Save data to model
    model.saveFilms(films)
    
    // 3. Display data
    view.ShowListFilmsHomePage()
}


controller.loadFilms = async function(){
    // 1. load data form db
    let admin = firebase.auth().currentUser.email

    let result = await firebase
        .firestore()
        .collection('films')
        .where('admin', '==', admin)
        .get()
    let docs = result.docs
    let films = tranformDocs(docs)
    
    // 2. Save data to model
    model.saveFilms(films)
    
    // 3. Display data
    view.showListFilms()
}

controller.setupDatabaseChange = function(){
    let admin = firebase.auth().currentUser.email
    let isFirstRun = true

    firebase
        .firestore()
        .collection('films')
        .where('admin', '==', admin)
        .onSnapshot(function(snapshot){
            if(isFirstRun){
                isFirstRun = false
                return
            }
            let docChanges = snapshot.docChanges()
            for(let docChange of docChanges){
                if(docChange.type == 'modified'){
                    let doc = docChange.doc
                    let film = tranformDoc(doc)                
                    
                    model.saveCurrentFilm(film)
                    view.showCurrentFilm()
                    model.updateFilm(film)
                }
                if(docChange.type == 'added'){
                    let film = tranformDoc(docChange.doc)

                    model.updateFilm(film)
                    view.showListFilms()
                }
                if(docChange.type == 'removed'){
                    // update model
                    // update view
                    let film = tranformDoc(docChange.doc)

                    model.removeFilm(film)
                    view.showListFilms()
                }
            }
        })
}

controller.addFilm = async function(film){
    view.disable('add-link-film')

    await firebase
        .firestore()
        .collection('films')
        .add(film)

    document.getElementById('name-film').value = ''
    document.getElementById('genre').value = ''
    document.getElementById('description').value = ''

    view.enable('add-link-film')
}  

controller.removeFilm = async function(film){
    await firebase
        .firestore()
        .collection('films')
        .doc(film.id)
        .delete()
}

controller.editFilm = async function(idFilm, nameFilmEdit, genreFilmEdit){
    document.getElementById('myModal').style.display = 'none'
    view.disable('edit-info-btn')

    await firebase
        .firestore()
        .collection('films')
        .doc(idFilm)
        .update({
            name: nameFilmEdit,
            genre: genreFilmEdit
        })

    view.enable('edit-info-btn')
}

controller.upload = async function(file){
    let fileName = file.name
    let filePath = `upload/${fileName}`
    let fileRef = firebase.storage().ref().child(filePath)
    await fileRef.put(file)
    let url = await fileRef.getDownloadURL();
    return url;
    // let fileLink = getFileUrl(fileRef)
    // return fileLink
}

function getFileUrl(fileRef){
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullpath)}?alt=media`
}

function tranformDocs(docs){
    let datas = []
    for(let doc of docs){
        let data = doc.data()
        data.id = doc.id
        datas.push(data)
    }
    return datas
}

function tranformDoc(doc){
    let data = doc.data()
    data.id = doc.id
    return data
}