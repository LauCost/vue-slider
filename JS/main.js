const vueApp = new Vue({

    el: "#laterale",
    data: {

        images: [{

            immagine: "./img/01.jpg",
            titolo: "Svezia",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."

        },
        {
            immagine: "./img/02.jpg",
            titolo: "Svizzera",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
        },
        {
            immagine: "./img/03.jpg",
            titolo: "Gran Bretagna",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
        },
        {
            immagine: "./img/04.jpg",
            titolo: "Germania",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
        },
        {
            immagine: "./img/05.jpg",
            titolo: "Paradise",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
        }
        ],

        counter: 0,


    },

    methods: {

        piu() {

            ++this.counter

            if (this.counter > this.images.length - 1) {
                this.counter = 0
            }

        },

        meno() {

            --this.counter

            if (this.counter < 0) {

                this.counter = this.images.length - 1;
            }

        }

    }

})

