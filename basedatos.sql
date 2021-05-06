CREATE DATABASE Redes_P3;

SET sql_mode = "";

USE Redes_P3;

CREATE TABLE INVENTARIO(
id_inventario INT  PRIMARY KEY AUTO_INCREMENT ,
nombre VARCHAR(50) NOT NULL, 
precio INT DEFAULT 0,
cantidad INT
);


CREATE TABLE VENDEDOR(
id_vendedor INT  PRIMARY KEY AUTO_INCREMENT,
dpi VARCHAR(50) NOT NULL ,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
direccion VARCHAR(50) NOT NULL,
telefono INT 
);


CREATE TABLE VENTA (
id_transaccion INT PRIMARY KEY AUTO_INCREMENT,	
id_vendedor INT,
fecha DATE ,
id_inventario INT 
);

ALTER TABLE INVENTARIO 
ADD FOREIGN KEY (id_inventario) REFERENCES INVENTARIO(id_inventario);

ALTER TABLE  VENTA
ADD FOREIGN KEY (id_vendedor) REFERENCES VENDEDOR(id_vendedor);


-- iNSERT 

INSERT INTO VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'4521356475',
'Juan',
'Rodriguez',
'Ciudad de Guatemala',
45268525
);

INSERT INTO  VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'1214575632',
'Luis',
'Solares',
'Xela',
45125841
);

INSERT INTO  VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'8542154621',
'Amelia',
'Diaz',
'Jocotenango',
12548754
);

INSERT INTO  VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'7452115468',
'Romelia',
'Alvarez',
'Sacatepequez',
18585465
);

INSERT INTO  VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'8546254122',
'Toni',
'Lopez',
'Villa nueva',
42569854
);


INSERT INTO  VENDEDOR(dpi,nombre,apellido,direccion,telefono)  VALUES (
'6395211254',
'Rosalia',
'Roma',
'Huehuetenango',
15874525
);


-- INSERT  VENTA 

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
2,
'2021-04-05',
1
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
2,
'2021-04-05',
4
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
5,
'2021-04-05',
6
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
3,
'2021-04-05',
7
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
5,
'2021-04-05',
4
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
2,
'2021-04-05',
3
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
5,
'2021-04-05',
1
);

INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
1,
'2021-04-05',
3
);


INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
1,
'2021-03-03',
3
);


INSERT INTO VENTA(id_vendedor, fecha , id_inventario) VALUES (
1,
'2021-04-08',
5
);


-- GET DE LA TABLA VENTAS 

SELECT v.id_transaccion, ven.id_vendedor , ven.nombre, v.fecha ,i.nombre FROM  
VENTA AS v INNER JOIN VENDEDOR AS ven ON 
v.id_vendedor = ven.id_vendedor
INNER JOIN INVENTARIO AS i 
ON v.id_inventario = i.id_inventario;