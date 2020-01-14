// save all page
const components = {}

components.register = `
<div class="logo-form">
<img class="logo" src="./img/logo.png">
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
<img class="logo" src="./img/logo.png">
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
                <span id="log-out">Sign out of finet</span>
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
                        <a href="#tenbophim" class="film-name" id="film-name">Name</a>
                        <p class="background-trailer-readable">
                            <span class="background-trailer-year" id="background-trailer-year">Year</span>
                            <span class="background-trailer-maturity" id="background-trailer-maturity">Maturity</span>
                            <span class="background-trailer-duration" id="background-trailer-duration">Duration</span>
                        </p>

                        <p class="background-trailer-description" id="background-trailer-description">
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
            <img class="image-trailer-fill" id="image-trailer-fill"
                src="https://www.elleman.vn/wp-content/uploads/2018/03/09/xep-hang-phim-sieu-anh-hung-marvel-elle-man-feature-10.jpg"
                alt="">
        </div>
        <!-- Header trailer -->
    </div>
</div>


<!------------------------------------------------------------------------------------------->
<div class="films-list" id="films-list">

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

                        <div class="carousel-inner" >
                            <div class="carousel-item active">
                                <div id="row-container" class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100 "
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg"
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
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg"
                                        alt="4 slide">
                                </div>

                            </div>
                            <div class="carousel-item">
                                <div class="row-container" style="display: flex; width: 25%;">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorthedarkworld_lob_crd_02_1.jpg"
                                        alt="First slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg"
                                        alt="Second slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg"
                                        alt="Third slide">
                                    <img class="d-block w-100"
                                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg"
                                        alt="4 slide">
                                </div>
                            </div>

                        </div>

                    </div>


                    <a class="carousel-control-prev" id="carousel-control-prev" href="#trending-now" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" id="carousel-control-next" href="#trending-now" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>




            </div>
        </div>




    </div>


    <div class="film-element TvShows" id="Tag-Tv-Shows">
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

                        <div class="carousel-inner" id="TV-Shows-Content">
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


    <div class="film-element Movies" id="Tag-Movies">
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

                        <div class="carousel-inner" id="Movies-Content">
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

    <div class="film-element Action">
    <h2 class="rowHeader trendingNow">
        <span class="rowTitle">
            <div class="row-title-header">
                Action
            </div>
        </span>
    </h2>

    <div class="film-container-row">

        <div class="film-container" style="display: flex;">
            <div class="film-content">
                <div id="Action" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#Action" data-slide-to="0" class="active">
                        </li>
                        <li data-target="#Action" data-slide-to="1"></li>
                        <li data-target="#Action" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/fox_deadpool_lob_crd_01.jpg"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
                                    alt="4 slide">
                            </div>

                        </div>
                        <div class="carousel-item ">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="https://www.phimoxy.com/wp-content/uploads/2019/11/nha-trang-thu-ke-phan-boi-angel-fallen-2019-poster.jpg"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="https://vuviphimmoi.com/wp-content/uploads/2017/03/Than-Bai-Tai-Xuat-The-Return-of-the-God-of-Gamblers-1994-Poster.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="https://mangpong.co.th/ProductImage/product/005408.jpg"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="http://image.phimmoi.net/film/3669/poster.medium.jpg"
                                    alt="4 slide">
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2015_09_06/Poster_Transporter.jpg"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="http://image.phimmoi.net/film/1283/poster.medium.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="https://images-na.ssl-images-amazon.com/images/I/51-v2kovwfL.jpg"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="https://m.media-amazon.com/images/M/MV5BNGNhYTcwZjItOGQwNy00NTJkLTlhNjQtOWVjM2Q4YWYxZDJkXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SY1000_CR0,0,699,1000_AL_.jpg"
                                    alt="4 slide">
                            </div>
                        </div>

                    </div>

                </div>


                <a class="carousel-control-prev" href="#Action" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#Action" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>




        </div>
    </div>




</div>

<div class="film-element Anime">
    <h2 class="rowHeader trendingNow">
        <span class="rowTitle">
            <div class="row-title-header">
                Anime
            </div>
        </span>
    </h2>

    <div class="film-container-row">

        <div class="film-container" style="display: flex;">
            <div class="film-content">
                <div id="Anime" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#Anime" data-slide-to="0" class="active">
                        </li>
                        <li data-target="#Anime" data-slide-to="1"></li>
                        <li data-target="#Anime" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="http://www.gstatic.com/tv/thumb/tvbanners/10873160/p10873160_b_v8_aa.jpg"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="http://image.phimmoi.net/film/5390/poster.medium.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="http://image.phimmoi.net/film/6436/poster.medium.jpg"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="https://i.pinimg.com/originals/99/03/bb/9903bbbe9d66f423cfb4f33172aae59f.jpg"
                                    alt="4 slide">
                            </div>

                        </div>
                        <div class="carousel-item ">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="http://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00001931?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="http://image.phimmoi.net/film/7146/poster.medium.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="https://upload.wikimedia.org/wikipedia/vi/3/3a/Tokyo_Ghoul_Anime.png"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                                    alt="4 slide">
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div class="row-container" style="display: flex; width: 25%;">
                                <img class="d-block w-100"
                                    src="https://pbs.twimg.com/media/EDoDMY5XYAEU6yI.jpg"
                                    alt="First slide">
                                <img class="d-block w-100"
                                    src="https://zingtv-photo-td.zadn.vn/tv_program_275_275/d/7/d7b1bc44afe616068b000e4393ff56c9_1486354674.jpg"
                                    alt="Second slide">
                                <img class="d-block w-100"
                                    src="https://images-na.ssl-images-amazon.com/images/I/616%2BtWWzLTL.jpg"
                                    alt="Third slide">
                                <img class="d-block w-100"
                                    src="https://i.pinimg.com/originals/2b/f3/f2/2bf3f2335ae81e0a3a36576a887375bb.jpg"
                                    alt="4 slide">
                            </div>
                        </div>

                    </div>

                </div>


                <a class="carousel-control-prev" href="#Anime" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#Anime" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>




        </div>
    </div>




</div>




    <!-- Information Box of The Chosen  -->
    <div class="chosen-box">
    
    <button type="button" class="btn btn-primary" id="btn-show-box" data-toggle="modal"
        data-target=".bd-example-modal-xl">Extra large modal</button>

    <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog"
        aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" id="chosen-box" role="document">
            <div class="modal-content content-box">
                <div class="modal-header" style="border: none;">
                    <!-- <h5 class="modal-title h4" id="myExtraLargeModalLabel" style="color: black;">
      Extra large modal
    </h5> -->
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" 
                    style="display:flex;
                    justify-content: flex-end; 
                    width: fit-content;
                    height: fit-content;
                    background: white;">
                         <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body" style="color: black !important;">
                    <div class="trailer" id="video">
                        <h2>Video</h2>
                        <video src="../FINET--filmNetworking/"></video>
                    </div>
                    <div class="film-detail" id="type-of-film">
                        <h2>Film Detail:</h2>
                        Humorous, Action , Fiction
                    </div>
                    <div class="film-description" id="description">
                        <h2>Film Description:</h2>
                        Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics
                        superhero team the Avengers, produced by Marvel Studios and distributed by Walt
                        Disney Studios Motion Pictures.
                        It is the sequel to 2012's The Avengers, 2015's Avengers: Age of Ultron, and 2018's
                        Avengers: Infinity War, and the twenty-second film in the Marvel Cinematic Universe
                        (MCU).
                        It was directed by Anthony and Joe Russo and written by Christopher Markus and
                        Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris
                        Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don
                        Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon
                        Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin.
                        In the film, the surviving members of the Avengers and their allies attempt to
                        reverse the damage caused by Thanos in Infinity War.
                    </div>
                </div>
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