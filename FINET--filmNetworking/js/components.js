// save all page
const components = {}

components.register = `
<div class="logo-form">
<img src="./img/logo.png">
</div>
<section class="register-container">
<form class="form-register">
    <div class="form-header">
        <h1>Register</h1>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="text" placeholder="First name">
            </div>
            <div class="input-wrapper">
                <input type="text" name="text" placeholder="Last name">
            </div>
        </div>
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password">
        </div>
        <div class="input-wrapper">
            <input type="password" name="comfirmPassword" placeholder="Comfirm password">
        </div>
    </div>
    <div class="form-footer">
        <button type="submit">Register</button>
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
<form class="form-login">
    <div class="form-header">
        <h1>Login</h1>
    </div>
    <div class="form-content">
        <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email">
        </div>
        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password">
        </div>
    </div>
    <div class="form-footer">
        <button type="submit">Login</button>
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
    <span>Avatar</span>
</div>
</nav>
`