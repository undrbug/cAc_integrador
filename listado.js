
const Listado = [
    {
        nombre: "Gabriel Martinez",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Electricista",
        email: "bobinajesmartinez@outlook.com",
        telefono: "11 1234-5678",
        comentario: "Encantado de conocerte, soy Gabriel Martinez, me recibí como Técnico en Eletrónica en 2012 y priorizo la profesionalidad ante todo.",
        puntaje: 4.13,
        precioMin: 2000
    },

    {
        nombre: "Laura Fernández",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Plomera",
        email: "lfplomeria@gmail.com",
        telefono: "11 2345-6789",
        comentario: "Hola, soy Laura Fernández, plomera certificada con más de 10 años de experiencia. Trabajo rápido y limpio.",
        puntaje: 4.75,
        precioMin: 2500
    },

    {
        nombre: "Carlos Gómez",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Pintor",
        email: "carlospinturas@hotmail.com",
        telefono: "11 3456-7890",
        comentario: "Mi nombre es Carlos Gómez, ofrezco servicios de pintura interior y exterior con atención a los detalles y acabados de calidad.",
        puntaje: 3.90,
        precioMin: 1800
    },

    {
        nombre: "Ana Rodríguez",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Jardinera",
        email: "anarodriguezjardineria@outlook.com",
        telefono: "11 4567-8901",
        comentario: "Soy Ana Rodríguez, jardinera apasionada por la naturaleza. Ofrezco mantenimiento y diseño de jardines.",
        puntaje: 4.80,
        precioMin: 1500
    },

    {
        nombre: "Miguel Torres",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Carpintero",
        email: "miguelcarpintero@gmail.com",
        telefono: "11 5678-9012",
        comentario: "Hola, soy Miguel Torres, carpintero con 15 años de experiencia. Realizo muebles a medida y reparaciones.",
        puntaje: 4.20,
        precioMin: 2200
    },

    {
        nombre: "Sofía López",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Cerrajera",
        email: "sofialocksmith@yahoo.com",
        telefono: "11 6789-0123",
        comentario: "Me llamo Sofía López, cerrajera profesional disponible las 24 horas para cualquier emergencia de cerrajería.",
        puntaje: 4.55,
        precioMin: 3000
    },

    {
        nombre: "Javier Pérez",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Albañil",
        email: "javieralbanil@gmail.com",
        telefono: "11 7890-1234",
        comentario: "Soy Javier Pérez, albañil con amplia experiencia en construcciones y remodelaciones. Calidad garantizada.",
        puntaje: 4.70,
        precioMin: 2500
    },

    {
        nombre: "Lucía Ramírez",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Decoradora de interiores",
        email: "luciad.decoradora@outlook.com",
        telefono: "11 8901-2345",
        comentario: "Hola, soy Lucía Ramírez, decoradora de interiores. Ayudo a transformar espacios con estilo y funcionalidad.",
        puntaje: 3.95,
        precioMin: 3000
    },

    {
        nombre: "Roberto Sánchez",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Fontanero",
        email: "robertofontanero@gmail.com",
        telefono: "11 9012-3456",
        comentario: "Soy Roberto Sánchez, fontanero con más de 20 años de experiencia. Garantizo un servicio rápido y eficiente.",
        puntaje: 4.90,
        precioMin: 2700
    },

    {
        nombre: "Elena García",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Electricista",
        email: "elenag.electricista@outlook.com",
        telefono: "11 0123-4567",
        comentario: "Encantada de conocerte, soy Elena García, electricista con amplia experiencia en instalaciones y reparaciones eléctricas.",
        puntaje: 4.65,
        precioMin: 2100
    },

    {
        nombre: "Marco Bianchi",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Carpintero",
        email: "marcobianchi@gmail.com",
        telefono: "11 5678-3456",
        comentario: "Soy Marco Bianchi, carpintero con más de 10 años de experiencia. Realizo trabajos a medida y reparaciones de alta calidad.",
        puntaje: 4.35,
        precioMin: 2300
    },

    {
        nombre: "Isabel Moreno",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Jardinera",
        email: "isabelmoreno@yahoo.com",
        telefono: "11 6789-4567",
        comentario: "Hola, soy Isabel Moreno, jardinera con pasión por la naturaleza. Diseño y mantengo jardines con dedicación.",
        puntaje: 4.50,
        precioMin: 1600
    },

    {
        nombre: "Hans Müller",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Pintor",
        email: "hansmuller@gmail.com",
        telefono: "11 7890-5678",
        comentario: "Me llamo Hans Müller, pintor con más de 20 años de experiencia. Ofrezco servicios de pintura de alta calidad.",
        puntaje: 4.80,
        precioMin: 2400
    },

    {
        nombre: "James Smith",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Fontanero",
        email: "james.smith@outlook.com",
        telefono: "11 8901-6789",
        comentario: "Soy James Smith, fontanero con vasta experiencia en instalaciones y reparaciones. Trabajo rápido y con garantía.",
        puntaje: 4.60,
        precioMin: 2500
    },

    {
        nombre: "Natalia Martínez",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Electricista",
        email: "nataliamartinez@outlook.com",
        telefono: "11 1234-7890",
        comentario: "Encantada de conocerte, soy Natalia Martínez, electricista con formación y experiencia en instalaciones seguras y eficientes.",
        puntaje: 4.25,
        precioMin: 2000
    },

    {
        nombre: "Giuseppe Romano",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Albañil",
        email: "giusepperomano@gmail.com",
        telefono: "11 2345-8901",
        comentario: "Soy Giuseppe Romano, albañil con décadas de experiencia en construcción y renovación. Calidad y durabilidad aseguradas.",
        puntaje: 4.85,
        precioMin: 2600
    },

    {
        nombre: "Emma Fischer",
        imagen: "imgs/pfp_jardinera.png",
        oficio: "Decoradora de interiores",
        email: "emma.fischer@outlook.com",
        telefono: "11 3456-9012",
        comentario: "Hola, soy Emma Fischer, decoradora de interiores. Creo espacios que combinan estética y funcionalidad.",
        puntaje: 4.75,
        precioMin: 3200
    },

    {
        nombre: "Juan López",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Cerrajero",
        email: "juan.lopez@gmail.com",
        telefono: "11 4567-0123",
        comentario: "Me llamo Juan López, cerrajero con más de 15 años de experiencia. Disponible las 24 horas para cualquier emergencia.",
        puntaje: 4.50,
        precioMin: 2800
    },

    {
        nombre: "Michael Johnson",
        imagen: "imgs/pfp_tecnico.png",
        oficio: "Electricista",
        email: "michael.johnson@outlook.com",
        telefono: "11 5678-1234",
        comentario: "Encantado de conocerte, soy Michael Johnson, electricista especializado en instalaciones residenciales y comerciales.",
        puntaje: 4.40,
        precioMin: 2200
    }
];

function importarListado(){
    let wrapper = document.getElementById("listado");
Listado.map((articulo) => {
    wrapper.insertAdjacentHTML('afterbegin', `
    <div class="d-flex flex-column border border-info rounded my-2 p-3">
        
        <div class="d-flex align-items-center gap-3 mb-3">
            <div>
                <img src='${articulo.imagen}' class="profile_pic"></img>
            </div>
            <div>
                <div class="d-flex align-items-center gap-3">
                    <div class="fs-1"> 
                        ${articulo.nombre}
                    </div>

                    <div class="fs-2">
                        ${articulo.puntaje} <i class="bi bi-star-fill text-warning"></i>
                    </div>
                </div>            

                <div class="fs-4">
                    ${articulo.oficio}
                </div>
            </div>
        </div>
        
        <div class="fs-4">
            <span>Precio Mínimo:</span>
            $${articulo.precioMin}
        </div>

        <div class="fs-5">
            ${articulo.comentario}
        </div>

        <div class="fs-6">
            <span>Contacto:</span>
            <div class="d-flex gap-3">
                <div>
                    ${articulo.telefono}
                </div>
            
                <div>
                    ${articulo.email}
                </div>
            </div>
        </div>
        
    </div>
    `)
});
}

importarListado();