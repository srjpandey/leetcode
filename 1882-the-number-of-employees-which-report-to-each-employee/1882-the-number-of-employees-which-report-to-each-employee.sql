# Write your MySQL query statement below
SELECT
    e1.employee_id, 
    e1.name, 
    COUNT(e1.employee_id) as reports_count,
    ROUND(avg(e2.age)) as average_age
FROM
    Employees e1
join Employees e2 on e1.employee_id  = e2.reports_to 
GROUP BY
    e1.employee_id, 
    e1.name
ORDER BY 
    e1.employee_id