const model = {
    films: null, // tat ca cac bo film
    currentFilm: null // film ma nguoi dung dang chon
}

model.saveFilms = function(films){
    model.films = films
}

model.saveCurrentFilm = function(film){
    model.currentFilm = film
}

