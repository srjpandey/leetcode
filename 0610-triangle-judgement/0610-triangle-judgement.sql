# Write your MySQL query statement below
SELECT 
    t.*,
    CASE 
        WHEN (t.x + t.y <= t.z AND t.x + t.y > 0) 
             OR (t.x + t.z <= t.y AND t.x + t.z > 0) 
             OR (t.y + t.z <= t.x AND t.y + t.z > 0)
            THEN "No"
        WHEN t.x < 0 OR t.y < 0 OR t.z < 0
            THEN "No"
        ELSE "Yes"
    END AS triangle
FROM  Triangle t;