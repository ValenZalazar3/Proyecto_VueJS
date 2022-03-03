Vue.component('padre',{
    template: //html
    `
    <section>
    <h4>Componente padre</h4>
    <!-----------props para la comunicacion entre componentes----->
    <!----<hijo numero='16'></hijo>--->

    <hijo :numeor="numeroPadre"></hijo>
<button @click= numeroPadre++>+</button>
    </section>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})