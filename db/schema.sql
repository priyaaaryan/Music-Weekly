DROP DATABASE musicweekly;
CREATE DATABASE musicweekly;
Use musicweekly;
CREATE TABLE Users (
    id int NOT NULL AUTO_INCREMENT,
    Username varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE POSTS (
    id int NOT NULL AUTO_INCREMENT,
    Title varchar(255) NOT NULL,
    post_url varchar(255) NOT NULL,
    user_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
); 

CREATE TABLE `file` (
  `id` int(11) NOT NULL,
  `filepath` varchar(100) NOT NULL,
  `filetype` int(11) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);


