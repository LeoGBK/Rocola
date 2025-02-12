class Rocola {

    temas = [
        "Stairway To Heaven",
        "Light My Fire",
        "No Me Sejan Salir",
        "Persiana Americana",
        "Eres",
        "Strobe",
        "Bangarang",
        "Te recuerdo Amanda"
    ];

    queue = [];

    play(k) {
        if (this.queue.length > 1) {
            let primero = this.queue.shift();
            this.temas.push(primero);
        }

        let indiceRandom = Math.floor(Math.random() * this.temas.length);

        let tema = this.temas.splice(indiceRandom, 1);
        return tema[0];
    }
}