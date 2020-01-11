// save all page
const components = {}

components.register = `
<div class="logo-form">
<img src="./img/logo.png">
</div>
<section class="register-container">
<form id="form-register" class="form-register">
    <div class="form-header">
        <h1>Register</h1>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstname" placeholder="First name">
                <div id="firstname-error" class="message-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="lastname" placeholder="Last name">
                <div id="lastname-error" class="message-error"></div>
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="comfirmPassword" placeholder="Comfirm password">
            <div id="comfirm-password-error" class="message-error"></div>
        </div>
        <div id="register-error" class="message-error"></div>
        <div id="register-sucess" class="message-sucess"></div>
    </div>
    <div class="form-footer">
        <div></div>
        <button id="register-submit-btn" type="submit">Register</button>
        <a id="register-link" href="#">Already have account? Login now</a>
    </div>
</form>
</section>
`

components.login = `
<div class="logo-form">
<img src="./img/logo.png">
</div>
<section class="login-container">
<form id="form-login" class="form-login">
    <div class="form-header">
        <h1>Login</h1>
    </div>
    <div class="form-content">
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div id="login-error" class="message-error"></div>
    </div>
    <div class="form-footer">
        <button id="login-submit-btn" type="submit">Login</button>
        <a id="login-link" href="#">New to Finet? Register now</a>
    </div>
</form>
</section>
`

components.nav = `
<nav class="main-nav">
    <img class="logo" src="./img/logo.png">
    <div class="nav-contents-left">
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
    </div>
    <div id="nav-contents-right" class="nav-contents-right">
        <input type="text" name="search" placeholder="Titles, people, genres">
        <div class="avatar dropdown">
            <img id="current-avatar" class="current-avatar" src="./img/man.png">
            <a class="drop-btn">
                <i class="fas fa-caret-down"></i>
            </a>
            <div id="drop-down-content" class="drop-down-content">
                <img id="avatar-1" src="./img/girl (2).png">
                <img id="avatar-2" src="./img/girl (3).png">
                <img id="avatar-3" src="./img/girl.png">
                <img id="avatar-4" src="./img/man.png">
                <img id="avatar-5" src="./img/man (1).png">
                <img id="avatar-6" src="./img/man (2).png">
                <img id="avatar-7" src="./img/man (3).png">
                <img id="avatar-8" src="./img/boy(4).png">
                <i class="user-name" id="user-name"></i>
                <br>
                <span id="log-out">Sign out of finet</span>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
    </div>
</nav>
`

components.film = `

`

components.management = `
<form class="form-upload nav-contents-right" id="form-upload">
    <span>
        <input id="name-film" type="text" name="nameFilm" placeholder="Movie's name">
        <div id="name-film-error" class="message-error"></div>
    </span>
    <span>
        <input id="genre" type="text" name="genre" placeholder="Genre">
        <div id="genre-error" class="message-error"></div>
    </span>
    <span>
        <input type="file" name="chooser">
        <div id="file-error" class="message-error"></div>
    </span>
    <button id="add-link-film" type="submit">
        <i class="fas fa-plus"></i>
    </button>
    <div class="avatar dropdown">
        <img id="current-avatar" class="current-avatar" src="./img/man.png">
        <a class="drop-btn">
            <i class="fas fa-caret-down"></i>
        </a>
        <div id="drop-down-content" class="drop-down-content">
            <img id="avatar-1" src="./img/girl (2).png">
            <img id="avatar-2" src="./img/girl (3).png">
            <img id="avatar-3" src="./img/girl.png">
            <img id="avatar-4" src="./img/man.png">
            <img id="avatar-5" src="./img/man (1).png">
            <img id="avatar-6" src="./img/man (2).png">
            <img id="avatar-7" src="./img/man (3).png">
            <img id="avatar-8" src="./img/boy(4).png">
            <i class="user-name" id="user-name"></i>
            <br>
            <span id="log-out">Sign out of finet</span>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
</form>
<div class="management">
    <h2>List of managed movies</h2>
    <div id="list-films" class="list-films"></div>
    </div>
</div>
`

components.editModal = `
    <form id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <div class="info-edit">
            <input type="hidden" id="id-film-edit" value="">

            <span>
                <input id="name-film-edit" type="text" placeholder="Movie's name">
                <div id="name-film-edit-error" class="message-error"></div>
            </span>
            <span>
                <input id="genre-film-edit" type="text" placeholder="Genre">
                <div id="genre-film-edit-error" class="message-error"></div>
            </span>
        </div>                        
        <button id="edit-info-btn" class="close" type="submit">
            <i class="fas fa-share"></i>
        </button>
    </div>
    </form>
`