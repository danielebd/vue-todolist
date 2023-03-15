'use strict';

const {createApp} = Vue;

createApp({
    data() {
        return {
            toDo: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'andare dal medico',
                    done: false
                },
                {
                    text: 'chimare il meccanico peer cambio gomme',
                    done: false
                },
                {
                    text: 'chiamare ufficio personale',
                    done: false
                }
            ]
        }
    }

}).mount('#app')