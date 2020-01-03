window.onload = init

function init() {
    let form = document.getElementById('form-upload')
    form.onsubmit = async function (e) {
        e.preventDefault()

        try {
            let files = form.chooser.files
            let file = files[0]
            if (!file) {
                throw new Error('Please choose a file!')
            }
            let link = await upload(file)
            document.getElementById('file-link').innerText = link
        } catch (err) {
            alert(err.message)
        }
    }
}

async function upload(file) {
    let fileName = file.name
    let filePath = `upload/${fileName}`
    let fileRef = firebase.storage().ref().child(filePath)
    await fileRef.put(file)
    let fileLink = getFileUrl(fileRef)
    return fileLink
}

function getFileUrl(fileRef) {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
}
