db.cuadros.drop()

/*Ejemplo para mostrar las diferentes formas de insertar datos en una colección.*/
db.cuadros.insertOne({_id:01, nombre: "Anunciación", ancho: [98.4, "cm"], alto: [217, "cm"], año: 1473, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}})

db.cuadros.insertMany([
    {_id:02, nombre: "La adoración de los magos", ancho: [246, "cm"], alto: [243, "cm"], año: 1481, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}},
    {_id:03, nombre: "La gioconda", ancho: [77, "cm"], alto: [53, "cm"], año: 1503, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}},
])

db.cuadros.insertMany([
    {_id:04, nombre: "El bautismo de cristo", ancho: [177, "cm"], alto: [171, "cm"], año: 1475, tecnica: "Óleo sobre tabla", pintor:{nombre: "Andrea Verrocchio", f_nac: new Date("1435, 00, 00"), f_fall: new Date("1488, 10, 10"), conyuge: false}},
    {_id:05, nombre: "Las tres gracias", ancho: [221, "cm"], alto: [181, "cm"], año: 1635, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Pedro Pablo Rubens", f_nac: new Date("1577, 06, 28"), f_fall: new Date("1640, 05, 30"), conyuge: true}},
])

db.cuadros.drop()

db.cuadros.insertMany([
    {_id:01, nombre: "Anunciación", ancho: [98.4, "cm"], alto: [217, "cm"], año: 1473, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}},
    {_id:02, nombre: "La adoración de los magos", ancho: [246, "cm"], alto: [243, "cm"], año: 1481, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}},
    {_id:03, nombre: "La gioconda", ancho: [77, "cm"], alto: [53, "cm"], año: 1503, tecnica: "Óleo sobre tabla", pintor:{nombre: "Leonardo Da Vinci", f_nac: new Date("1452, 04, 15"), f_fall: new Date("1519, 05, 02"), conyuge: false}},
    {_id:04, nombre: "El bautismo de cristo", ancho: [177, "cm"], alto: [171, "cm"], año: 1475, tecnica: "Óleo sobre tabla", pintor:{nombre: "Andrea Verrocchio", f_nac: new Date("1435, 00, 00"), f_fall: new Date("1488, 10, 10"), conyuge: false}},
    {_id:05, nombre: "Las tres gracias", ancho: [221, "cm"], alto: [181, "cm"], año: 1635, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Pedro Pablo Rubens", f_nac: new Date("1577, 06, 28"), f_fall: new Date("1640, 05, 30"), conyuge: true}},
    {_id:06, nombre: "Vulcano forjando los rayos de Júpiter", ancho: [181, "cm"], alto: [98, "cm"], año: 1676, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Pedro Pablo Rubens", f_nac: new Date("1577, 06, 28"), f_fall: new Date("1640, 05, 30"), conyuge: true}},
    {_id:07, nombre: "Las meninas", ancho: [3.2, "m"], alto: [2.76, "m"], año: 1656, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Diego Velázquez", f_nac: new Date("1599, 00, 00"), f_fall: new Date("1660, 08, 06"), conyuge: true}},
    {_id:08, nombre: "Retrato de Cristóbal Suárez de Ribera", ancho: [207, "cm"], alto: [148, "cm"], año: 1620, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Diego Velázquez", f_nac: new Date("1599, 00, 00"), f_fall: new Date("1660, 08, 06"), conyuge: true}},
    {_id:09, nombre: "San Hugo en el refectorio de los cartujos", ancho: [262, "cm"], alto: [307, "cm"], año: 1630, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Francisco de Zurbarán", f_nac: new Date("1598, 11, 07"), f_fall: new Date("1664, 08, 27"), conyuge: true}},
    {_id:10, nombre: "Visión de san Pedro Nolasco", ancho: [179, "cm"], alto: [223, "cm"], año: 1629, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Francisco de Zurbarán", f_nac: new Date("1598, 11, 07"), f_fall: new Date("1664, 08, 27"), conyuge: true}},
    {_id:11, nombre: "El nacimiento de Venus", ancho: [278.5, "cm"], alto: [109.6, "cm"], año: 1483, tecnica: "Temple sobre madera", pintor:{nombre: "Sandro Botticelli", f_nac: new Date("1445, 03, 01"), f_fall: new Date("1510, 05, 17"), conyuge: false}},
    {_id:12, nombre: "Retrato de Balthazar Castiglione", ancho: [82, "cm"], alto: [67, "cm"], año: 1514, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Raffaello Sanzio", f_nac: new Date("1483, 04, 06"), f_fall: new Date("1520, 04, 06"), conyuge: false}},
    {_id:13, nombre: "El guernica", ancho: [349.3, "cm"], alto: [777.6, "cm"], año: 1937, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Pablo Picasso", f_nac: new Date("1881, 09, 25"), f_fall: new Date("1973, 04, 08"), conyuge: true}},
    {_id:14, nombre: "Joven con loro", ancho: [72, "cm"], alto: [28.3, "cm"], año: 1758, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Giovanni Battista Tiepolo", f_nac: new Date("1696, 03, 05"), f_fall: new Date("1770, 03, 27"), conyuge: true}},
    {_id:15, nombre: "El jardín de las delicias", ancho: [220, "cm"], alto: [195, "cm"], año: 1480, tecnica: "Óleo sobre tabla", pintor:{nombre: "El Bosco", f_nac: new Date("1450, 00, 00"), f_fall: new Date("1516, 08, 09"), conyuge: false}},
    {_id:16, nombre: "Betsabe en el baño", ancho: [142, "cm"], alto: [142, "cm"], año: 1654, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Rembrandt", f_nac: new Date("1606, 07, 15"), f_fall: new Date("1669, 10, 04"), conyuge: false}},
    {_id:17, nombre: "El caballero de la mano en el pecho", ancho: [81.8, "cm"], alto: [65.8, "cm"], año: 1580, tecnica: "Óleo sobre lienzo", pintor:{nombre: "El Greco", f_nac: new Date("1541, 10, 01"), f_fall: new Date("1614, 04, 07"), conyuge: true}},
    {_id:18, nombre: "Fusilamientos del 3 de mayo", ancho: [268, "cm"], alto: [347, "cm"], año: 1814, tecnica: "Óleo sobre lienzo", pintor:{nombre: "Francisco de Goya", f_nac: new Date("1746, 03, 30"), f_fall: new Date("1828, 04, 16"), conyuge: true}},
    {_id:19, nombre: "Sagrada familia", ancho: [120, "cm"], alto: [120, "cm"], año: 1506, tecnica: "Óleo y temple sobre madera", pintor:{nombre: "Michelangelo Buonarroti", f_nac: new Date("1475, 03, 06"), f_fall: new Date("1564, 02, 18"), conyuge: false}}
])