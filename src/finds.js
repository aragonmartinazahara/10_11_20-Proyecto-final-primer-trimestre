/** 'nombre empieza por E','tecnica = "temple sobre madera" y "Óleo sobre tabla"', 'conyuge de pintor = false' */
db.cuadros.find({nombre: {$regex: /^E/m}, tecnica: {$in: ["Temple sobre madera", "Óleo sobre tabla"]}, "pintor.conyuge": false})
db.cuadros.find({nombre: {$regex: /^e/, $options: 'mi'}, tecnica: {$in: ["Temple sobre madera", "Óleo sobre tabla"]}, "pintor.conyuge": false})
    { "_id" : 4, "nombre" : "El bautismo de cristo", "ancho" : [ 177, "cm" ], "alto" : [ 171, "cm" ], "año" : 1475, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "Andrea Verrocchio",
     "f_nac" : ISODate("1434-11-29T23:00:00Z"), "f_fall" : ISODate("1488-10-09T22:00:00Z"), "conyuge" : false } }
    { "_id" : 11, "nombre" : "El nacimiento de Venus", "ancho" : [ 278.5, "cm" ], "alto" : [ 109.6, "cm" ], "año" : 1483, "tecnica" : "Temple sobre madera", "pintor" : { "nombre" : "Sandro Botticelli",
     "f_nac" : ISODate("1445-02-28T23:00:00Z"), "f_fall" : ISODate("1510-05-16T22:00:00Z"), "conyuge" : false } }
    { "_id" : 15, "nombre" : "El jardín de las delicias", "ancho" : [ 220, "cm" ], "alto" : [ 195, "cm" ], "año" : 1480, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "El Bosco", 
     "f_nac" : ISODate("1449-11-29T23:00:00Z"), "f_fall" : ISODate("1516-08-08T22:00:00Z"), "conyuge" : false } }

/** 'f_nac >= 1400-01-01T00:00:00.000Z', 'f_nac <= 1450-12-31T00:00:00.000Z' y 'año > 1479' */
db.cuadros.find({$and:[{"pintor.f_nac":{"$gte": ISODate("1400-01-01T00:00:00.000Z")}, "pintor.f_nac":{"$lte": ISODate("1450-12-31T00:00:00.000Z")}, año: {$gt: 1479}}]})
    { "_id" : 11, "nombre" : "El nacimiento de Venus", "ancho" : [ 278.5, "cm" ], "alto" : [ 109.6, "cm" ], "año" : 1483, "tecnica" : "Temple sobre madera", "pintor" : { "nombre" : "Sandro Botticelli",
     "f_nac" : ISODate("1445-02-28T23:00:00Z"), "f_fall" : ISODate("1510-05-16T22:00:00Z"), "conyuge" : false } }
    { "_id" : 15, "nombre" : "El jardín de las delicias", "ancho" : [ 220, "cm" ], "alto" : [ 195, "cm" ], "año" : 1480, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "El Bosco",
     "f_nac" : ISODate("1449-11-29T23:00:00Z"), "f_fall" : ISODate("1516-08-08T22:00:00Z"), "conyuge" : false } }

/** 'nombre del pintor = Leonardo Da Vinci', 'año > 1490' o 'alto != 243 y 53' */
db.cuadros.find({$or:[{"pintor.nombre":{$eq: "Leonardo Da Vinci"}, año: {$lt: 1490}, alto: {$nin: [243, 53]}}]})
    { "_id" : 1, "nombre" : "Anunciación", "ancho" : [ 98.4, "cm" ], "alto" : [ 217, "cm" ], "año" : 1473, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "Leonardo Da Vinci",
     "f_nac" : ISODate("1452-04-14T22:00:00Z"), "f_fall" : ISODate("1519-05-01T22:00:00Z"), "conyuge" : false } }

/** 'nombre del pintor = Leonardo Da Vinci', 'año != 1490' que no coincidan */
db.cuadros.find({$nor:[{"pintor.nombre":{$eq: "Leonardo Da Vinci"}, año: {$ne: 1490}}]})                          
    { "_id" : 4, "nombre" : "El bautismo de cristo", "ancho" : [ 177, "cm" ], "alto" : [ 171, "cm" ], "año" : 1475, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "Andrea Verrocchio",
     "f_nac" : ISODate("1434-11-29T23:00:00Z"), "f_fall" : ISODate("1488-10-09T22:00:00Z"), "conyuge" : false } }
    { "_id" : 5, "nombre" : "Las tres gracias", "ancho" : [ 221, "cm" ], "alto" : [ 181, "cm" ], "año" : 1635, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Pedro Pablo Rubens",
     "f_nac" : ISODate("1577-06-27T22:00:00Z"), "f_fall" : ISODate("1640-05-29T22:00:00Z"), "conyuge" : true } }
    { "_id" : 6, "nombre" : "Vulcano forjando los rayos de Júpiter", "ancho" : [ 181, "cm" ], "alto" : [ 98, "cm" ], "año" : 1676, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Pedro Pablo Rubens",
     "f_nac" : ISODate("1577-06-27T22:00:00Z"), "f_fall" : ISODate("1640-05-29T22:00:00Z"), "conyuge" : true } }
    { "_id" : 7, "nombre" : "Las meninas", "ancho" : [ 3.2, "m" ], "alto" : [ 2.76, "m" ], "año" : 1656, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Diego Velázquez",
     "f_nac" : ISODate("1598-11-29T23:00:00Z"), "f_fall" : ISODate("1660-08-05T22:00:00Z"), "conyuge" : true } }
    { "_id" : 8, "nombre" : "Retrato de Cristóbal Suárez de Ribera", "ancho" : [ 207, "cm" ], "alto" : [ 148, "cm" ], "año" : 1620, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Diego Velázquez",
     "f_nac" : ISODate("1598-11-29T23:00:00Z"), "f_fall" : ISODate("1660-08-05T22:00:00Z"), "conyuge" : true } }
    { "_id" : 9, "nombre" : "San Hugo en el refectorio de los cartujos", "ancho" : [ 262, "cm" ], "alto" : [ 307, "cm" ], "año" : 1630, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Francisco de Zurbarán",
     "f_nac" : ISODate("1598-11-06T23:00:00Z"), "f_fall" : ISODate("1664-08-26T22:00:00Z"), "conyuge" : true } }
    { "_id" : 10, "nombre" : "Visión de san Pedro Nolasco", "ancho" : [ 179, "cm" ], "alto" : [ 223, "cm" ], "año" : 1629, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Francisco de Zurbarán",
     "f_nac" : ISODate("1598-11-06T23:00:00Z"), "f_fall" : ISODate("1664-08-26T22:00:00Z"), "conyuge" : true } }
    { "_id" : 11, "nombre" : "El nacimiento de Venus", "ancho" : [ 278.5, "cm" ], "alto" : [ 109.6, "cm" ], "año" : 1483, "tecnica" : "Temple sobre madera", "pintor" : { "nombre" : "Sandro Botticelli",
     "f_nac" : ISODate("1445-02-28T23:00:00Z"), "f_fall" : ISODate("1510-05-16T22:00:00Z"), "conyuge" : false } }
    { "_id" : 12, "nombre" : "Retrato de Balthazar Castiglione", "ancho" : [ 82, "cm" ], "alto" : [ 67, "cm" ], "año" : 1514, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Raffaello Sanzio",
     "f_nac" : ISODate("1483-04-05T22:00:00Z"), "f_fall" : ISODate("1520-04-05T22:00:00Z"), "conyuge" : false } }
    { "_id" : 13, "nombre" : "El guernica", "ancho" : [ 349.3, "cm" ], "alto" : [ 777.6, "cm" ], "año" : 1937, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Pablo Picasso",
     "f_nac" : ISODate("1881-09-24T22:00:00Z"), "f_fall" : ISODate("1973-04-07T22:00:00Z"), "conyuge" : true } }
    { "_id" : 14, "nombre" : "Joven con loro", "ancho" : [ 72, "cm" ], "alto" : [ 28.3, "cm" ], "año" : 1758, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Giovanni Battista Tiepolo",
     "f_nac" : ISODate("1696-03-04T23:00:00Z"), "f_fall" : ISODate("1770-03-26T22:00:00Z"), "conyuge" : true } }
    { "_id" : 15, "nombre" : "El jardín de las delicias", "ancho" : [ 220, "cm" ], "alto" : [ 195, "cm" ], "año" : 1480, "tecnica" : "Óleo sobre tabla", "pintor" : { "nombre" : "El Bosco",
     "f_nac" : ISODate("1449-11-29T23:00:00Z"), "f_fall" : ISODate("1516-08-08T22:00:00Z"), "conyuge" : false } }
    { "_id" : 16, "nombre" : "Betsabe en el baño", "ancho" : [ 142, "cm" ], "alto" : [ 142, "cm" ], "año" : 1654, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Rembrandt",
     "f_nac" : ISODate("1606-07-14T22:00:00Z"), "f_fall" : ISODate("1669-10-03T22:00:00Z"), "conyuge" : false } }
    { "_id" : 17, "nombre" : "El caballero de la mano en el pecho", "ancho" : [ 81.8, "cm" ], "alto" : [ 65.8, "cm" ], "año" : 1580, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "El Greco",
     "f_nac" : ISODate("1541-09-30T22:00:00Z"), "f_fall" : ISODate("1614-04-06T22:00:00Z"), "conyuge" : true } }
    { "_id" : 18, "nombre" : "Fusilamientos del 3 de mayo", "ancho" : [ 268, "cm" ], "alto" : [ 347, "cm" ], "año" : 1814, "tecnica" : "Óleo sobre lienzo", "pintor" : { "nombre" : "Francisco de Goya",
     "f_nac" : ISODate("1746-03-29T22:00:00Z"), "f_fall" : ISODate("1828-04-15T22:00:00Z"), "conyuge" : true } }
    { "_id" : 19, "nombre" : "Sagrada familia", "ancho" : [ 120, "cm" ], "alto" : [ 120, "cm" ], "año" : 1506, "tecnica" : "Óleo y temple sobre madera", "pintor" : { "nombre" : "Michelangelo Buonarroti",
     "f_nac" : ISODate("1475-03-05T23:00:00Z"), "f_fall" : ISODate("1564-02-17T23:00:00Z"), "conyuge" : false } }