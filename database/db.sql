CREATE TABLE suscripciones (
    ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(25) NOT NULL,
    apellido varchar(25) NOT NULL,
    puesto varchar(40) NOT NULL,
    email varchar(100) NOT NULL,
    mensaje text NOT NULL
);