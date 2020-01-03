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
<div class="nav-contents-right">
    <input type="text" name="search" placeholder="Titles, people, genres">
    <span id="log-out">Avatar</span>
</div>
</nav>
`

components.management = `
<form class="form-upload" id="form-upload">
        <input type="file" name="chooser">
        <button type="submit">Upload</button>
        <span id="log-out">Avatar</span>
</form>
<div id="file-link" class="file-link">
    <!-- file link will be written here -->
</div>
`