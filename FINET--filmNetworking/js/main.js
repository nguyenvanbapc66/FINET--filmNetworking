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

async function upload(file){
    let fileName = file.name
    let filePath = `upload/${fileName}`
    let fileRef = firebase.storage().ref().child(filePath)
    await fileRef.put(file)
    let fileLink = getFileUrl(fileRef)
    return fileLink
}

function getFileUrl(fileRef){
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullpath)}?alt=media`
}