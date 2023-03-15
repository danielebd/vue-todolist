'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
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
    },
    methods: {
        barClick(i){
            if(this.toDo[i].done === false){
                this.toDo[i].done = true;
                return console.log(this.toDo[i].done)
            }
            else if(this.toDo[i].done === true){
                this.toDo[i].done = false;
                return console.log(this.toDo[i].done)
            }
        },
        bar(i){
            if(this.toDo[i].done === false){
                return ''
            }
            else if (this.toDo[i].done === true){
                return 'text-bar'
            }
        },
        remove(elementDelete){
            this.toDo.splice(elementDelete, 1)
        },
        addTodo(){
            if(this.newTodo !== ''){
                this.toDo.push({text: this.newTodo, done: false})
                this.newTodo=''
                console.log('ok');
            }
        },
        addClass(){
            for(let i = 0; i < this.toDo.lenght -1; i++){
                 document.getElementById('list-item').classList.add('border-bottom');
                
            }
        }
    }

}).mount('#app')