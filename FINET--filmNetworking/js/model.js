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

model.updateFilm = function(film){
    // 1. if conversation not yet exits in model.conversations >> add to model
    // 2. if conversation already exits in model.conversations >> replace old by new
    let exitedIndex = model.films.findIndex(function(c){
        return c.id == film.id
    })
    if(exitedIndex >= 0){
        model.films[exitedIndex] = film
    } else{
        model.films.unshift(film)
    }
}

model.removeFilm = function(film){
    if(model.films){
        let index = model.films.findIndex(function(element){
            return element.id == film.id
        })
        if(index >= 0){
            model.films.splice(index, 1)
        }
    }
}

