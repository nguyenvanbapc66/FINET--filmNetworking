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
        <div class="preview-film">
            <h2>Preview as guest</h2>
            <span>No time to register right now? No problem. You can register later, let's preview.</span>
            <button>Preview as guest</button>
        </div>
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
        <div class="avatar drop-down">
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
                <span id="log-out">Sign Out</span>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
    </div>
</nav>
`

components.film = `
<div class="content">
<!-- Content right hereeeeeeeeeeeeeeeeeeeee -->
<div class="background-trailer-wrapper">
    <div class="background-trailer">
        <table class="background-trailer-wrapper-table">
            <tbody>
                <tr>
                    <td class="background-trailer-table-content">
                        <a href="#tenbophim" class="film-name">Tên phim</a>
                        <p class="background-trailer-readable">
                            <span class="background-trailer-year">Year</span>
                            <span class="background-trailer-maturity">Maturity</span>
                            <span class="background-trailer-duration">Duration</span>
                        </p>

                        <p class="background-trailer-description">
                            Description about this film.
                        </p>
                        <div class="background-trailer-actions">
                            <a href="#" class="action-button">
                                <button>Play</button>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>

        <div class="image-trailer">
            <!-- Chỉnh kích thước ảnh background trailer ngay tại class image-trailer -->
            <img class="image-trailer-fill"
                src="https://www.elleman.vn/wp-content/uploads/2018/03/09/xep-hang-phim-sieu-anh-hung-marvel-elle-man-feature-10.jpg"
                alt="">
        </div>
        <!-- Header trailer -->
    </div>
</div>


<!------------------------------------------------------------------------------------------->
<div class="films-list">

    <div class="film-element trendingNow">
        <h2 class="rowHeader trendingNow">
            <span class="rowTitle">
                <div class="row-title-header">
                    Trending now
                </div>
            </span>
        </h2>

        <div class="film-container-row">

            <div class="film-container" style="display: flex;">
                <div class="film-content">
                    <div id="trending-now" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#trending-now" data-slide-to="0" class="active">
                            </li>
                            <li data-target="#trending-now" data-slide-to="1"></li>
                            <li data-target="#trending-now" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100 image-film"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item ">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>
                            </div>

                        </div>

                    </div>


                    <a class="carousel-control-prev" href="#trending-now" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#trending-now" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>




            </div>
        </div>




    </div>


    <div class="film-element TvShows">
        <h2 class="rowHeader trendingNow">
            <span class="rowTitle">
                <div class="row-title-header">
                    Tv Shows
                </div>
            </span>
        </h2>

        <div class="film-container-row">

            <div class="film-container" style="display: flex;">
                <div class="film-content">
                    <div id="TvShows" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#TvShows" data-slide-to="0" class="active">
                            </li>
                            <li data-target="#TvShows" data-slide-to="1"></li>
                            <li data-target="#TvShows" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item ">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>
                            </div>

                        </div>

                    </div>


                    <a class="carousel-control-prev" href="#TvShows" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#TvShows" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>




            </div>
        </div>




    </div>


    <div class="film-element Movies">
        <h2 class="rowHeader trendingNow">
            <span class="rowTitle">
                <div class="row-title-header">
                    Movies
                </div>
            </span>
        </h2>

        <div class="film-container-row">

            <div class="film-container" style="display: flex;">
                <div class="film-content">
                    <div id="Movies" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#Movies" data-slide-to="0" class="active">
                            </li>
                            <li data-target="#Movies" data-slide-to="1"></li>
                            <li data-target="#Movies" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item ">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://www.stonetechgroup.gr/files/files/products/neolith/iron/iron-grey.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://www.tubadzin.pl/sites/default/files/en-gb_PS-Elementary-grey.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&auto=format&fit=crop&w=416&h=312&q=60"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg"
                                        alt="4 slide">
                                </div>
                            </div>

                        </div>

                    </div>


                    <a class="carousel-control-prev" href="#Movies" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#Movies" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>




            </div>
        </div>




    </div>


</div>



</div>

`

components.management = `
<form class="form-upload nav-contents-right" id="form-upload">
    <div class="input-wrapper">
        <span>
            <input id="name-film" type="text" name="nameFilm" placeholder="Movie's name">
            <div id="name-film-error" class="message-error"></div>
        </span>
        <span>
            <input id="genre" type="text" name="genre" placeholder="Genre">
            <div id="genre-error" class="message-error"></div>
        </span>
        <span>
            <input type="file" name="image">
            <div id="img-error" class="message-error"></div>
        </span>
        <span>
            <input type="file" name="chooser">
            <div id="file-error" class="message-error"></div>
        </span>
        <span>
            <textarea id="description" class="description" name="description" placeholder="Description"></textarea>
            <div id="description-error" class="message-error"></div>
        </span>
    </div>
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