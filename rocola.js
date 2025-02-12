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

        let tema;
        return tema;
    }
}