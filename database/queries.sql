/* Show the job of everybody */
SELECT users.name AS "User's name", jobs.name AS "Job's name"
FROM users
JOIN work ON users.id = work.id
JOIN jobs ON work.id_1 = jobs.id;


/* Show the hobbies of everybody */
SELECT users.name AS "User's name", hobbies.name AS "Hobby's name"
FROM users
JOIN practice ON users.id = practice.id
JOIN hobbies ON practice.id_1 = hobbies.id;


/* Show the people living in big cities */
SELECT users.name AS "User's name", cities.name AS "City's name", cities.population AS "City's population"
FROM users
JOIN live ON users.id = live.id
JOIN cities ON live.id_1 = cities.id
WHERE cities.population > 2000000;

/* Show the people who earn a good salary */
SELECT users.name AS "User's name", jobs.name AS "Job's name", jobs.salary AS "Job's salary"
FROM users
JOIN work ON users.id = work.id
JOIN jobs ON work.id_1 = jobs.id
WHERE jobs.salary > 60000;

