const randomJokeGenerator = {
    apiUrl: 'https://api.chucknorris.io/jokes/random',
    jokesArr: [],
    jokeSpan: document.getElementById("joke"),

    init: function(){
        this.getNextJoke();
        this.addListeners();
    },

    getNextJoke: async function(){
        const response = await fetch(this.apiUrl);
        const data = await response.json(); //parsowanie odpowiedzi z serwera
        this.jokesArr.push(data); //dodawnie żartów do tablicy
        this.updateUIWithJoke(data);
    },

    updateUIWithJoke: function(data){
        const jokeStr = data.value; //pobranie wartości z pola (value)
        this.jokeSpan.innerHTML = `"${jokeStr}"`;
    },

    addListeners: function(){
        document.getElementById("next-joke").addEventListener("click", () => {
            this.getNextJoke();
        });
    },
};

randomJokeGenerator.init();