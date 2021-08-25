-- 1 
SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN INNER JOIN BoxOffice b ON b.movie_id = m.id;
-- 2
SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

-- 3
SELECT m.title, b.rating
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- 4
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
LEFT JOIN Movies m 
ON t.id = m.theater_id
ORDER BY t.name;

-- 5
SELECT t.id, t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater t
RIGHT JOIN Movies m 
ON t.id = m.theater_id
ORDER BY t.name;

-- 6
SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

SELECT m.title, b.movie_id
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.rating > 7.5;

-- 7
SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);

SELECT b.rating, m.title
FROM BoxOffice b
INNER JOIN Movies m ON b.movie_id = m.id
WHERE m.year > 2009;

-- 8 
SELECT t.name, t.location   
FROM Theater t  
WHERE EXISTS (SELECT * FROM Movies WHERE Movies.theater_id = t.id);


-- 9
SELECT t.name, t.location   
FROM Theater t  
WHERE NOT EXISTS (SELECT * FROM Movies WHERE Movies.theater_id = t.id);

-- 10
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;

-- 11
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Movies t1, Movies t2
WHERE t1.director = t2.director AND t1.title <> t2.title;

-- 12
SELECT 
    m.title
FROM
    Movies m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            BoxOffice b
        WHERE
            b.international_sales >= 500000000
            AND m.length_minutes > 110);

SELECT m.title, b.international_sales
FROM Movies m
INNER JOIN BoxOffice b ON b.movie_id = m.id
WHERE b.international_sales > 500000000 AND m.length_minutes > 110;