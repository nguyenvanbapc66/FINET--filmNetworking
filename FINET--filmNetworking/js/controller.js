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

function getFileUrl(fileRef){
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullpath)}?alt=media`
}

controller.upload = async function(file){
    let fileName = file.name
    let filePath = `upload/${fileName}`
    let fileRef = firebase.storage().ref().child(filePath)
    await fileRef.put(file)
    let fileLink = getFileUrl(fileRef)
    return fileLink
}

controller.loadFilms = async function(){
    // 1. load data form db
    let admin = 'nguyenvanbapc66@gmail.com'

    let result = await firebase
        .firestore()
        .collection('films')
        .where('admin', '==', admin)
        .get()
    console.log(result)
    let docs = result.docs
    let films = tranformDocs(docs)
    
    // 2. Save data to model
    model.saveFilms(films)
    
    // 3. Display data
    view.showListFilms()
}

controller.addFilm = async function(film){
    
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
    return datas
}