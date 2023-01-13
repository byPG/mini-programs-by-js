const randomRac = {
    contentPreload: document.getElementById("content-preload"),
    content: document.getElementById("content"),
    text: document.getElementById("text"),

    init: function() {
        console.log("start");
        this.getContent();

        document.addEventListener("keyup", (event) => {
            if(event.code == "Space"){
                this.getContent();
            }
        });
    },

    getContent: async function() {
        const apiUrl = 'https://some-random-api.ml/animal/raccoon';
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        this.preloadPic(data);
    },

    preloadPic: function(data){
        const imgSrc = data.image;
        const textFact = data.fact;

        this.contentPreload.src = imgSrc;
        this.contentPreload.onerror = () => {
            console.log("img load error");
            this.getContent();
        }

        this.contentPreload.onload = () => {
            console.log(this);
            this.show(data);
        }
    },

    show: function(data){
        console.log(data);
        const imgSrc = data.image;
        const textFact = data.fact;

        this.content.src = imgSrc;
        this.text.innerHTML = textFact;
    }
};

randomRac.init();