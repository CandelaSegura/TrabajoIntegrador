let db = {
    usuario: {
        email: 'hola',
        usuario: 'hola',
        contrasena: 'hola',
        fechaDeNacimiento: 'hola',
        documento: 'hola',
        fotoDePerfil: 'hola',
    },
    productos: [
        {
            imagen:'/images/products/',
            nombre: 'ZAPATILLAS GAZELLE', //https://www.adidas.com.ar/zapatillas-gazelle/IF3817.html
            descripcion: 'ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA. Lucí un estilo casual con estas zapatillas adidas Gazelle. Lanzadas en 1966 como unas zapatillas de entrenamiento, las Gazelle han resistido la prueba del tiempo. Ahora se convirtieron en un ícono audaz que te lleva del trabajo al fin de semana sin perder el ritmo. El exterior de gamuza y la suela de caucho se combinan para ofrecer un look vintage con comodidad moderna. Las Gazelle, alguna vez usadas por atletas ahora aclamadas por todos, siguen atrayendo miradas décadas después de su debut.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'ZAPATILLAS SAMBA OG', //https://www.adidas.com.ar/zapatillas-samba-og/ID0478.html
            descripcion: 'ZAPATILLAS ATEMPORALES EN COLORES LLAMATIVOS Y MATERIALES DE ALTA COSTURA. Para aquellos que marcan tendencias en vez de seguirlas, las zapatillas adidas Samba OG son un modelo esencial. Creadas originalmente para el fútbol de cancha cubierta, estas zapatillas han trascendido sus comienzos deportivos por mucho tiempo. La parte superior de cuero premium y los revestimientos de nobuk se unen para crear una silueta icónica perfecta para destacarte con estilo. Los detalles dorados y las emblemáticas 3 Tiras en el costado evocan el legado de adidas. Un verdadero clásico redefinido para los creadores de tendencias de hoy.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Air Jordan 1 Low', //https://www.nike.com.ar/air-jordan-1-low-dc0774-200/p
            descripcion: 'CALZADO EN MOVIMIENTO. Siempre a la moda, siempre fresca. El Air Jordan 1 Low te ofrece una parte de la historia y herencia Jordan con una comodidad que dura todo el día. Elige tus colores y sal con el perfil icónico creado con una combinación de materiales de alta calidad y Air encapsulado en el talón.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Air Jordan 1 Retro High OG', //https://www.nike.com.ar/air-jordan-1-retro-high-og-fd2596-600/p?snrai_campaign=SC4AKZsAHFDu&snrai_id=279cc1b2-e257-4d50-8021-c7a70148eafe
            descripcion: 'Esta iteración del AJ1 reinventa el primer modelo exclusivo de Mike con una nueva combinación de colores. Los materiales premium, la amortiguación suave y el cuello acolchado en el tobillo brindan máximo soporte y celetopn el calzado que lo inició todo.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Zapatillas Palermo Lth unisex', //https://ar.puma.com/zapatillas-palermo-lth-unisex-396464-03.html?color=13364
            descripcion: 'Exterior de piel con superposiciones de ante y formstrip, Ojetera, lengüeta y etiqueta PUMA de material sintético, Marca PUMA impresa en bajorrelieve y metalizada en la etiqueta del lateral y el refuerzo del talón, Plantilla de malla, Suela de goma',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Zapatillas Suede Classic XXI ADP', //https://ar.puma.com/zapatillas-suede-classic-xxi-adp-388981-90.html?color=12084
            descripcion: 'Diseño clásico de caña baja, Empeine de ante completo con forro sintético, Plantilla cómoda, Entresuela de goma, Suela exterior de goma, Cierre con cordones, Segundo juego de cordones blancos gruesos, Formstrip PUMA en los laterales, Etiqueta PUMA Archive N.º 1 en la lengüeta, Logotipo PUMA N.º 2 estampado en el panel lateral superior',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Chuck Taylor All Star', //https://converse.com.ar/product/756991C
            descripcion: 'UN ÍCONO PARA EL DÍA A DÍA. Es difícil negar que los niños se ven realmente lindos con las zapatillas Chuck Taylor All Star. Hicimos un par para cada período de crecimiento, para que puedan usar estas clásicas zapatillas incluso antes de saber cómo ponerse de pie...',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: 'Chuck 70', //https://converse.com.ar/product/A05114C
            descripcion: 'ESTILO ICÓNICO. ARTESANÍA EXCEPCIONAL. CHUCK 70. Las Chuck 70 combinan los mejores detalles de las Chuck de los 70 con una confección artesanal impecable y materiales premium.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: '500', //https://www.newbalance.com.ar/mujer-zapatillas-N10190280.html
            descripcion: 'La zapatilla para mujer 500 te proporciona el confort que buscas en tu día a día sin renunciar al estilo. Con un empeine en sintético que te hará destacar. Además, la entresuela de EVA y la plantilla NB Comfort Insert aportan una sensación mullida que te acompañará vayas donde vayas.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        },
        {
            imagen:'falta imagen',
            nombre: '515 v3', //https://www.newbalance.com.ar/mujer-zapatillas-N10190272060799.html
            descripcion: 'El estilo informal se suma a la comodidad de nuestras zapatillas para mujer 515v3. Esta zapatilla de fusión clásica y moderna amortigua tu pisada gracias a la espuma EVA y a la plantilla NB Comfort Insert. Este modelo también ofrece un soporte superior gracias a su suela de goma. El empeine de cuero descarne y malla le añade una estética clásica inspirada en el patrimonio.',
            comentarios: [
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'
                },
                {
                    usuario: 'hola',
                    texto: 'hola',
                    fotoDePerfil: 'hola'

                }
            ]
        }
    ]
}


module.export = db;
