select activity_date as day,count(distinct user_id) AS active_users from Activity 
where activity_date>date_sub("2019-07-27",INTERVAL 30 DAY) and activity_date <="2019-07-27" group by  activity_date