DROP DATABASE musicweekly;
CREATE DATABASE musicweekly;
Use musicweekly;

CREATE TABLE Users (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE POSTS (
    id int NOT NULL AUTO_INCREMENT,
    Title varchar(255) NOT NULL,
    Instuction varchar(255) NOT NULL,
    created_at datetime not null DEFAULT CURRENT_TIMESTAMP,
    Attached_type varchar(100),
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
); 



