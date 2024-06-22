CREATE SCHEMA trabajointegrador;
USE trabajointegrador;

CREATE TABLE tabla_usuario (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(500) NOT NULL, 
email VARCHAR(500) NOT NULL,
contrasena VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
foto_perfil VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE tabla_productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
imagen_producto VARCHAR(255) NOT NULL,
nombre_producto VARCHAR(200) NOT NULL,
descripcion_producto VARCHAR(1000) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_usuario) REFERENCES tabla_usuario(id)
);


CREATE TABLE tabla_comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
texto_comentario VARCHAR(1000) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_producto) REFERENCES tabla_productos(id),
FOREIGN KEY (id_usuario) REFERENCES tabla_usuario(id)
);

-- 5 USUARIOS -- 

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario 1', 'usuario1@usuario.com', 'contraseña1', '1990-01-01', 123456789, '/images/users/perfil1.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario 2', 'usuario2@usuario.com', 'contraseña2', '1995-05-05', 987654321, '/images/users/perfil2.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario 3', 'usuario3@usuario.com', 'contraseña3', '1988-12-10', 567890123, '/images/users/perfil3.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario 4', 'usuario4@usuario.com', 'contraseña4', '2000-08-20', 654321789, '/images/users/perfil4.jpg', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario 5', 'usuario5@usuario.com', 'contraseña5', '1993-03-15', 456789012, '/images/users/perfil5.jpg', DEFAULT, DEFAULT, DEFAULT);


-- 10 PUBLICACIONES -- 

INSERT INTO tabla_productos
VALUES (DEFAULT, '1', "/images/products/1.jpg", "ZAPATILLAS GAZELLE", "Zapatillas adidas con un look retro y una energia moderno", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '2', "/images/products/2.jpg", "ZAPATILLAS SAMBA OG", "Zapatillas atemporales en colores llamativos y materiales de alta costura", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '3', "/images/products/3.jpg", "AIR JORDAN 1 LOW", "El Air Jordan 1 Low te ofrece una parte de la historia y herencia Jordan con una comodidad que dura todo el día", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '4', "/images/products/4.jpg", "ZAPATILLAS AIR JORDAN 1 RETRO HIGH OG", "Esta iteración del AJ1 reinventa el primer modelo exclusivo de Mike con una nueva combinación de colores", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '5', "/images/products/5.jpg", "ZAPATILLAS PALERMO LTH UNISEX", "Exterior de piel con superposiciones de ante y formstrip, Ojetera, lengüeta y etiqueta PUMA de material sintético", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '1', "/images/products/6.jpg", "ZAPATILLAS SUEDE CLASSIC XXI ADP", "Diseño clásico de caña baja, Empeine de ante completo con forro sintético, Plantilla cómoda, Entresuela de goma, Suela exterior de goma y Cierre con cordones", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '2', "/images/products/7.jpg", "ZAPATILLAS CHUCK TAYLOR", "Un icono para el dia a dia. Es difícil negar que los niños se ven realmente lindos con las zapatillas Chuck Taylor All Star", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '3', "/images/products/8.jpg", "ZAPATILLAS CHUCk 70", "Las Chuck 70 combinan los mejores detalles de las Chuck de los 70 con una confección artesanal impecable y materiales premium", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '4', "/images/products/9.jpg", "ZAPATILLAS 500", "La zapatilla para mujer 500 te proporciona el confort que buscas en tu día a día sin renunciar al estilo", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, '5', "/images/products/10.jpg", "ZAPATILLAS 515 v3", "El estilo informal se suma a la comodidad de nuestras zapatillas para mujer 515v3", DEFAULT, DEFAULT, DEFAULT);




-- 3 COMENTARIOS X PUBLICACION

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '1', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '1', 'El diseño de estas zapatillas es genial, ¡me encanta el estilo!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '1', 'Me sorprendió lo ligeras que son estas zapatillas, perfectas para caminar.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '2', 'La calidad de los materiales es evidente en estas zapatillas, se ven duraderas.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '2', '¡Me encanta el color de estas zapatillas, realmente resalta!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '2', 'Estas zapatillas de estilo minimalista son perfectas para aquellos que buscan un look elegante y discreto', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '3', 'El diseño moderno de estas zapatillas de estilo futurista realmente hace que destaquen entre la multitud.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '3', '¡Me encanta la atención al detalle en el acabado de estas zapatillas, se nota el cuidado en la fabricación!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '3', 'Con su estampado único, estas zapatillas de estilo artístico son una declaración de moda en sí mismas', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '4', 'El diseño único y colorido de estas zapatillas de estilo étnico las convierte en el centro de atención donde quiera que vaya.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '4', '4', 'La simplicidad elegante de estas zapatillas las hace perfectas para usar en cualquier ocasión del día a día.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '4', 'Estas zapatillas son tan cómodas que me las pongo para todo, desde recados rápidos hasta salidas informales.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '5', 'Estas zapatillas son mi opción número uno para el día a día; son lindas, cómodas y siempre a la moda.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '5', 'Estas zapatillas son la combinación perfecta de estilo y funcionalidad para mis ocupados días cotidianos.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '5', 'Me encanta cómo estas zapatillas son cómodas y a la vez estilosas. Son ideales para largos paseos urbanos', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '6', 'Con estas zapatillas, cada paso es un placer. Son livianas y amortiguan perfectamente.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '6', 'Estas zapatillas son más que un calzado, son una declaración de estilo. Definitivamente elevan cualquier conjunto casual', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '6', 'Siempre recibo cumplidos cuando uso estas zapatillas. Son el complemento perfecto para cualquier look.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '7', 'Estas zapatillas son como un básico en mi armario. Siempre puedo confiar en ellas para cualquier ocasión casual.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '4', '7', 'Estas zapatillas tienen ese toque de estilo urbano que hace que cualquier conjunto luzca genial sin esfuerzo!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '7', 'La atención al detalle en el diseño de estas zapatillas urbanas es impresionante', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '4', '8', 'Estas zapatillas urbanas son esenciales en cualquier guardarropa. Combinan estilo y comodidad a la perfección', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '8', 'Recomiendo estas zapatillas urbanas por su durabilidad y diseño atemporal. Son perfectas para cualquier ocasión casual!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '8', 'No puedo recomendar lo suficiente estas zapatillas urbanas. Son ligeras, cómodas y se adaptan a cualquier entorno urbano con estilo.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '9', 'Estas zapatillas urbanas son una excelente inversión. Su diseño minimalista las hace perfectas para cualquier conjunto', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '9', 'Con estas zapatillas urbanas, no solo estarás a la moda, sino también cómodo en cualquier situación', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '9', 'Su estilo versátil las hace adecuadas para diversas ocasiones', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '10', 'Me encantan, súper cómodas y igual a lo que quería', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '10', 'La verdad es que me siento supercomodo con ellas. Gran acabado y buena adaptación desde el primer momento', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '10', 'Buen diseño, buena comodidad y buena calidad. La plantilla es lo que menos me gusta', DEFAULT, DEFAULT, DEFAULT);