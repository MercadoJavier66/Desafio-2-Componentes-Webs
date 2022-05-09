
Vue.component("tabla-vehiculo", {
    props:{
        titulos: {
            type: Array,
            required: true
        },
        registros:{
            type: Array,
            required: true
        },
        estilos:{
            type: String,
            required: true
        }

    },
    template:`
        <div>
            <table :class="estilos">
                <thead >
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(unidad, u) in registros" :key="u">
                        <th>{{ u + 1 }}</th>
                        <th>{{ unidad.marca }}</th>
                        <th>{{ unidad.modelo }}</th>
                        <th>{{ unidad.precio }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});



var app = new Vue({
    el:"#app",
    data:{
        tabla1: {
            titulos: ["Opcion", "Marca", "Modelo", "Precio"],
            registros: [
                {
                    marca: 'Fiat',
                    modelo: ' Uno Way',
                    precio: 850000
                },
                {
                    marca: 'Ford',
                    modelo: 'Fiesta Kinetic',
                    precio: 1750000
                },
                {
                    marca: 'Volskwagen',
                    modelo: 'Nivus',
                    precio: 2600000
                },
                
            ],
 
        },
        tabla2: {
            titulos: ['Opcion', 'Motor', 'Caja', 'Combustible'],
            registros: [
                {
                    marca: 'Motor 1.4',
                    modelo: '5 velocidades Manual',
                    precio: 45 //combustible
                },
                {
                    marca: 'Motor 1.6',
                    modelo: '6 velocidades Automatica',
                    precio: 52
                },
                {
                    marca: 'Motor 1.0',
                    modelo: '6 Velocidades Manual',
                    precio: 55
                }
            ]
        },
        tabla3: {
            titulos: ['Opcion', 'GPS', 'ABS', 'ESP'],
            registros: [
                {
                    marca: 'No',
                    modelo: 'Si',
                    precio: 'No'
                },
                {
                    marca: 'Si',
                    modelo: 'Si',
                    precio: 'No'
                },
                {
                    marca: 'Si',
                    modelo: 'Si',
                    precio: 'Si'
                }
            ]
        },
    }
})