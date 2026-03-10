/*
El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
*/

/*
SELECT nomestudio, sum(presupuesto) as 'Monto Total'
FROM Pelicula
WHERE año BETWEEN 1980 AND 1990
GROUP BY nomestudio
ORDER BY SUM(presupuesto) DESC
*/

/* Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película. */

/*
SELECT nombre, AVG(sueldo) as 'Promedio de Sueldos'
FROM Elenco, Actor 
WHERE Elenco.nombre = Actor.nombre AND Actor.sexo = 'male'
Group by Actor.nombre
HAVING AVG(sueldo) > 5,000,000
order by AVG(sueldo) DESC
*/

/* Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). */

/*
SELECT Titutlo, Año, MIN(Presupuesto) as "Presupuesto mas bajo"
FROM Pelicula
Group by titulo
ORDER BY MIN(presupuesto) DESC

*/


/*
Mostrar el sueldo de la actriz mejor pagada.
*/


/*
SELECT MAX(sueldo) as "Mayor Sueldo en Actrices"
From Elenco, Actor
where Elenco.nombre = Actor.nombre AND Actor.sexo = 'female'
*/

/* TOTAL DE TOTALES NO SE USA WHERE */