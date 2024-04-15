CREATE SCHEMA trabajointegrador;
USE trabajointegrador;

CREATE TABLE tabla_usuario (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(500) NOT NULL,
contrasena VARCHAR(100) NOT NULL,
fecha DATE NOT NULL,
dni INT NOT NULL,
foto_perfil VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE tabla_productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
imagen_producto VARCHAR(255) NOT NULL,
nombre_produdcto VARCHAR(200) NOT NULL,
descripcion_producto VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_usuario) REFERENCES tabla_usuario(id)
);


CREATE TABLE tabla_comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
texto_comentario VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

FOREIGN KEY (id_producto) REFERENCES tabla_productos(id),
FOREIGN KEY (id_usuario) REFERENCES tabla_usuario(id)
);


-- 10 PUBLICACIONES -- HACERLO BIEN 

INSERT INTO tabla_productos
VALUES (DEFAULT, "1", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "2", "/images/products/Samba.jpg", "ZAPATILLAS SAMBA OG", "ZAPATILLAS ATEMPORALES EN COLORES LLAMATIVOS Y MATERIALES DE ALTA COSTURA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "3", "/images/products/AirJordan.jpg", "Air Jordan 1 Low", "CALZADO EN MOVIMIENTO. Siempre a la moda, siempre fresca.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "4", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "5", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "1", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "2", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "3", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "4", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO tabla_productos
VALUES (DEFAULT, "5", "/images/products/Gazelle.jpg", "ZAPATILLAS GAZELLE", "ZAPATILLAS ADIDAS CON UN LOOK RETRO Y UNA ENERGÍA MODERNA", DEFAULT, DEFAULT, DEFAULT);


-- 5 USUARIOS -- 

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario1', 'usuario1@usuario.com', 'contraseña1', '1990-01-01', 123456789, 'perfil1.jpg', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario2', 'usuario2@usuario.com', 'contraseña2', '1995-05-05', 987654321, 'perfil2.jpg', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario3', 'usuario3@usuario.com', 'contraseña3', '1988-12-10', 567890123, 'perfil3.jpg', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario4', 'usuario4@usuario.com', 'contraseña4', '2000-08-20', 654321789, 'perfil4.jpg', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_usuario
VALUES (DEFAULT, 'usuario5', 'usuario5@usuario.com', 'contraseña5', '1993-03-15', 456789012, 'perfil5.jpg', DEFAULT, DEFAULT, DEFAULT)


-- 3 COMENTARIOS X PUBLICACION

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '1', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '1', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '1', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '2', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '2', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '2', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '3', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '3', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '3', '3', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '4', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '4', '4', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '4', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '5', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '5', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '5', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '6', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '6', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '6', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '7', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '7', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '7', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '8', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '8', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '8', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '9', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '9', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '2', '9', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '1', '10', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '5', '10', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)

INSERT INTO tabla_comentarios
VALUES (DEFAULT, '8', '10', 'Muy comodas, lindas y de muy buena calidad. Recomiendo!', DEFAULT, DEFAULT, DEFAULT)
