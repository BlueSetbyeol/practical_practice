CREATE TABLE exploring_map
(id INT AUTO_INCREMENT PRIMARY KEY,
 city_name varchar(150) not null,
 latitude FLOAT NOT NULL,
 longitude FLOAT NOT NULL,
 description varchar(350),
 year date,
 img varchar(250) not null
);

INSERT INTO exploring_map (id,city_name,latitude,longitude,description,year,img)
VALUES (1, "Lyon", 45.76, 4.83, "Native City", 19880712,"https://www.visitelyon.fr/wp-content/uploads/2021/05/ville-de-lyon-1-1230x699.webp"),
  (2, "San Francisco", 37.77, -122.26, "First travel worldwide", 20000701,"https://cdn.prod.website-files.com/64bd94de0b26820044ae16e2/65e5d2ee1a9a6af1ddcbc57e_N%C3%A1vrh%20bez%20n%C3%A1zvu%20(46)%20(1).jpg"),
  (3, "Séoul", 37.55, 126.99, "First exploration alone abroad", 20100715,"https://cdn.concreteplayground.com/content/uploads/2023/12/City-of-Seoul_CJNattanai_Getty-Images-1.jpg"),
  (4, "London", 51.505, -0.09, "First time working abroad", 20140721,"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg");
