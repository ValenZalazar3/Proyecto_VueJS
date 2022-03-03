Vue.component('saludo', {
    template: //html
    `
    <section>
    <h1>{{saludo}}</h1>
    <p>Soy Hacker<p>
    </section>
    `,
    data(){
        return{
            saludo: 'Adios Mundo'
        }
    }

})