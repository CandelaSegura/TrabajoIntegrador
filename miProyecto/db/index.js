// Esto hay que borrarlos una vez terminado los modelos 


let db = {
    usuario: {
        email: 'juangomez@example.com',
        usuario: 'Juan Gomez',
        contrasena: '12345678',
        fechaDeNacimiento: '10/05/1970',
        documento: '1234567890',
        fotoDePerfil: '/images/users/perfil1.jpg',
    },
    productos: [
        {   
            id: 1,
            imagen:'/images/products/1.jpg',
            nombre: 'Gazelle', //https://www.adidas.com.ar/zapatillas-gazelle/IF3817.html
            descripcion: 'Zapatillas adidas con un look retro y una energia moderno',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'Muy comodas, lindas y de muy buena calidad. Recomiendo!',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '2:',
                    texto: 'El diseño de estas zapatillas es genial, ¡me encanta el estilo!',
                    fotoDePerfil: '/images/users/perfil2.jpg'
                }
                

            ]
        },
        {   
            id: 2,
            imagen:'/images/products/2.jpg',
            nombre: 'Samba OG', //https://www.adidas.com.ar/zapatillas-samba-og/ID0478.html
            descripcion: 'Zapatillas atemporales en colores llamativos y materiales de alta costura',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'La calidad de los materiales es evidente en estas zapatillas, se ven duraderas.',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '2:',
                    texto: '¡Me encanta el color de estas zapatillas, realmente resalta!',
                    fotoDePerfil: '/images/users/perfil2.jpg'

                }
                
            ]
        },
        {   
            id: 3,
            imagen:'/images/products/3.jpg',
            nombre: 'Air Jordan 1 Low', //https://www.nike.com.ar/air-jordan-1-low-dc0774-200/p
            descripcion: 'El Air Jordan 1 Low te ofrece una parte de la historia y herencia Jordan con una comodidad que dura todo el día',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'El diseño moderno de estas zapatillas de estilo futurista realmente hace que destaquen entre la multitud.',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '3:',
                    texto: '¡Me encanta la atención al detalle en el acabado de estas zapatillas, se nota el cuidado en la fabricación!',
                    fotoDePerfil: '/images/users/perfil3.jpg'
                }
            ]
        },
        {   
            id: 4,
            imagen:'/images/products/4.jpg',
            nombre: 'Air Jordan 1 Retro', //https://www.nike.com.ar/air-jordan-1-retro-high-og-fd2596-600/p?snrai_campaign=SC4AKZsAHFDu&snrai_id=279cc1b2-e257-4d50-8021-c7a70148eafe
            descripcion: 'Esta iteración del AJ1 reinventa el primer modelo exclusivo de Mike con una nueva combinación de colores',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'El diseño único y colorido de estas zapatillas de estilo étnico las convierte en el centro de atención donde quiera que vaya.',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '4:',
                    texto: 'La simplicidad elegante de estas zapatillas las hace perfectas para usar en cualquier ocasión del día a día.',
                    fotoDePerfil: '/images/users/perfil4.jpg'

                }
            ]
        },
        {   
            id: 5,
            imagen:'/images/products/5.jpg',
            nombre: 'Palermo Lth unisex', //https://ar.puma.com/zapatillas-palermo-lth-unisex-396464-03.html?color=13364
            descripcion: 'Exterior de piel con superposiciones de ante y formstrip, Ojetera, lengüeta y etiqueta PUMA de material sintético',
            comentarios: [
                {
                    usuario: '5:',
                    texto: 'Estas zapatillas son mi opción número uno para el día a día; son lindas, cómodas y siempre a la moda.',
                    fotoDePerfil: '/images/users/perfil5.jpg'
                },
                {
                    usuario: '2:',
                    texto: 'Estas zapatillas son la combinación perfecta de estilo y funcionalidad para mis ocupados días cotidianos.',
                    fotoDePerfil: '/images/users/perfil2.jpg'

                }
            ]
        },
        {   
            id: 6,
            imagen:'/images/products/6.jpg',
            nombre: 'Suede Classic XXI', //https:// ar.puma.com/zapatillas-suede-classic-xxi-adp-388981-90.html?color=12084
            descripcion: 'Diseño clásico de caña baja, Empeine de ante completo con forro sintético, Plantilla cómoda, Entresuela de goma, Suela exterior de goma y Cierre con cordones',
            comentarios: [
                {
                    usuario: '3:',
                    texto: 'Con estas zapatillas, cada paso es un placer. Son livianas y amortiguan perfectamente.',
                    fotoDePerfil: '/images/users/perfil3.jpg'
                },
                {
                    usuario: '5',
                    texto: 'Estas zapatillas son más que un calzado, son una declaración de estilo. Definitivamente elevan cualquier conjunto casual',
                    fotoDePerfil: '/images/users/perfil5.jpg'

                }
            ]
        },
        {   
            id: 7,
            imagen:'/images/products/7.jpg',
            nombre: 'Chuck Taylor All Star', //https://converse.com.ar/product/756991C
            descripcion: 'Un icono para el dia a dia. Es difícil negar que los niños se ven realmente lindos con las zapatillas Chuck Taylor All Star',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'Estas zapatillas son como un básico en mi armario. Siempre puedo confiar en ellas para cualquier ocasión casual.',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '4:',
                    texto: 'Estas zapatillas tienen ese toque de estilo urbano que hace que cualquier conjunto luzca genial sin esfuerzo!',
                    fotoDePerfil: '/images/users/perfil5.jpg'

                }
            ]
        },
        {   
            id: 8,
            imagen:'/images/products/8.jpg',
            nombre: 'Chuck 70', //https://converse.com.ar/product/A05114C
            descripcion: 'Las Chuck 70 combinan los mejores detalles de las Chuck de los 70 con una confección artesanal impecable y materiales premium',
            comentarios: [
                {
                    usuario: '4:',
                    texto: 'Estas zapatillas urbanas son esenciales en cualquier guardarropa. Combinan estilo y comodidad a la perfección',
                    fotoDePerfil: '/images/users/perfil4.jpg'
                },
                {
                    usuario: '1:',
                    texto: 'Recomiendo estas zapatillas urbanas por su durabilidad y diseño atemporal. Son perfectas para cualquier ocasión casual!',
                    fotoDePerfil: '/images/users/perfil1.jpg'

                }
            ]
        },
        {   
            id: 9,
            imagen:'/images/products/9.jpg',
            nombre: '500', //https://www.newbalance.com.ar/mujer-zapatillas-N10190280.html
            descripcion: 'La zapatilla para mujer 500 te proporciona el confort que buscas en tu día a día sin renunciar al estilo',
            comentarios: [
                {
                    usuario: '1:',
                    texto: 'Estas zapatillas urbanas son una excelente inversión. Su diseño minimalista las hace perfectas para cualquier conjunto',
                    fotoDePerfil: '/images/users/perfil.jpg'
                },
                {
                    usuario: '5:',
                    texto: 'Con estas zapatillas urbanas, no solo estarás a la moda, sino también cómodo en cualquier situación',
                    fotoDePerfil: '/images/users/perfil5.jpg'

                }
            ]
        },
        {   
            id: 10,
            imagen:'/images/products/10.jpg',
            nombre: '515 v3', //https://www.newbalance.com.ar/mujer-zapatillas-N10190272060799.html
            descripcion: 'El estilo informal se suma a la comodidad de nuestras zapatillas para mujer 515v3',
            comentarios: [
                {
                    usuario: '1',
                    texto: 'Me encantan, súper cómodas y igual a lo que quería',
                    fotoDePerfil: '/images/users/perfil1.jpg'
                },
                {
                    usuario: '5',
                    texto: 'La verdad es que me siento supercomodo con ellas. Gran acabado y buena adaptación desde el primer momento',
                    fotoDePerfil: '/images/users/perfil5.jpg'

                }
            ]
        }
    ]
}


module.exports = db;