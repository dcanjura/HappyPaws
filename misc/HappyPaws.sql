CREATE DATABASE HappyPaws;
USE HappyPaws;

CREATE TABLE User(
ID_user int(6) NOT NULL AUTO_INCREMENT,
Name varchar(25) NOT NULL,
DUI varchar(25) NOT NULL,
Username varchar(25) NOT NULL,
Password varchar(25) NOT NULL,
Email varchar(25),
CONSTRAINT PK_iduser PRIMARY KEY (ID_user)
);

CREATE TABLE Donations(
ID_donation int(6) NOT NULL AUTO_INCREMENT,
Amount double NOT NULL,
ID_user int(6) NOT NULL,
CONSTRAINT PK_iddonation PRIMARY KEY (ID_donation),
CONSTRAINT FK_iduser FOREIGN KEY (ID_user) REFERENCES User(ID_user) ON UPDATE CASCADE
);

CREATE TABLE Feedback(
ID_feedback int(6) NOT NULL AUTO_INCREMENT,
Comment varchar(1000) NOT NULL,
Date date NOT NULL,
ID_user int(6) NOT NULL,
CONSTRAINT PK_idfeedback PRIMARY KEY (ID_feedback),
CONSTRAINT FK_iduserfeed FOREIGN KEY(ID_user) REFERENCES User(ID_user)
ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Adoption(
ID_adoption int(6) NOT NULL AUTO_INCREMENT,
Date date NOT NULL,
ID_user int(6) NOT NULL,
CONSTRAINT PK_idadoption PRIMARY KEY (ID_adoption),
CONSTRAINT FK_iduseradoption FOREIGN KEY (ID_user) REFERENCES User(ID_user)
ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Pets(
ID_pet int(6) NOT NULL AUTO_INCREMENT,
Name varchar(25) NOT NULL,
Type varchar(25) NOT NULL,
Breed varchar(25),
Age int(6),
CONSTRAINT PK_idpet PRIMARY KEY (ID_pet) 
);

CREATE TABLE PetAdoption(
ID_adoption int(6) NOT NULL,
ID_pet int(6) NOT NULL,
CONSTRAINT FK_idadoption FOREIGN KEY (ID_adoption) REFERENCES Adoption(ID_adoption),
CONSTRAINT FK_idpet FOREIGN KEY (ID_pet) REFERENCES Pets(ID_pet)
ON DELETE CASCADE ON UPDATE CASCADE
);
