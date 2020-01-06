


// Code show account sub menu
let hoverIn = document.getElementById('account')
hoverIn.onmouseover = showAccountSubMenu
let menu = document.getElementById('account-sub-menu')
menu.onmouseout = disableAccountSubMenu


function showAccountSubMenu() {
    let menu = document.getElementById('account-sub-menu')
    menu.setAttribute('style', 'display: block')
    let listAvatars = document.getElementsByClassName('image-avatar')
    for (const avatar  of listAvatars ) {
        avatar.onclick = function () {
            document.getElementById('my-avatar').src = avatar.src
        }
           
    }
}

function disableAccountSubMenu() {
    let menu = document.getElementById('account-sub-menu')
    menu.setAttribute('style', 'display: none')
}

