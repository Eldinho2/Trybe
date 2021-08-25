-- 1
SELECT MAX(salary) FROM hr.employees

-- 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- 3
SELECT JOB_ID, AVG(SALARY) AS average_salary FROM hr.employees
GROUP BY JOB_ID
ORDER BY average_salary DESC;

-- 4
SELECT SUM(SALARY) FROM hr.employees;

-- 5
SELECT ROUND(MAX(SALARY), 2) AS o_maior_salário,
       ROUND(MIN(SALARY), 2) AS o_menor_salário,
       ROUND(SUM(SALARY), 2) AS soma_de_salarios,
       ROUND(AVG(SALARY), 2) AS media_salarios
FROM hr.employees;

-- 6
SELECT COUNT(*) FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- 7
SELECT JOB_ID, SUM(SALARY) AS total_payment FROM hr.employees
GROUP BY JOB_ID;

-- 8
SELECT JOB_ID, SUM(SALARY) AS total_payment FROM hr.employees
GROUP BY JOB_ID;

-- 9
SELECT JOB_ID, AVG(SALARY) AS avg_payment FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY avg_payment DESC;

-- 10
SELECT 	department_id,
		COUNT(*) AS total_employees,
        AVG(SALARY) AS avg_salary
FROM hr.employees
GROUP BY department_id
HAVING total_employees > 10;

-- 11
R: UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%'

-- 12
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

-- 13
SELECT 	EMPLOYEE_ID,
		FIRST_NAME,
        YEAR(HIRE_DATE)
FROM hr.employees;

-- 14
SELECT 	EMPLOYEE_ID,
		FIRST_NAME,
        DAY(HIRE_DATE)
FROM hr.employees;

-- 15
SELECT 	EMPLOYEE_ID,
		FIRST_NAME,
        MONTH(HIRE_DATE)
FROM hr.employees;

-- 16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS UCASE_NAMES FROM hr.employees;

-- 17
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE YEAR(HIRE_DATE) = 1987;

-- 18
SELECT 	FIRST_NAME AS PRIMEIRO_NOME,
		LAST_NAME AS SOBRENOME,
        DATEDIFF(NOW(), HIRE_DATE)
FROM hr.employees;
