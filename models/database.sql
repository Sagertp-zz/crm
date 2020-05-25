CREATE DATABASE crmapp2;

USE crmapp2;

CREATE TABLE productos (
    id_producto int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR NOT NULL
    descripcion VARCHAR NOT NULL
);

DESCRIBE productos;

INSERT INTO productos (nombre, descripcion) 
VALUES 
("Coek", "Servicio de internet corporativo"),
("Servicio TIC", "Servicio tercerizado de Tecnologia"),
("Servicio RE", "Servicio tercerizado de Redes");

SELECT * FROM productos;

CREATE USER 'admin'@'%' IDENTIFIED BY 'Xiaomi3325.';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;










--ESTOS SON LOS PASOA A SEGUIR AL MOMENTO DE USAR EL MODUFO mysql DE NODE Y NO QUIERE AUTENTICAR CON EL ERROR NUMERO 1152"ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MariaDB client" 1251
CREATE USER 'ne'@'%' IDENTIFIED WITH mysql_native_password BY '***';
GRANT USAGE ON *.* TO 'admin'@'%';
ALTER USER 'admin'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `admin`.* TO 'admin'@'%';
FLUSH PRIVILEGES;

ALTER USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY 'Xiaomi3325.'; --ESTE ES EL QUE FUNCIONA 
