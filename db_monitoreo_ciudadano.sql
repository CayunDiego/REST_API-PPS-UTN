-- MySQL dump 10.13  Distrib 5.7.24, for Win32 (AMD64)
--
-- Host: localhost    Database: db_monitoreo_ciudadano
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `ID_C` int(11) NOT NULL AUTO_INCREMENT,
  `COMMENT` longtext NOT NULL,
  `CREATE_AT` datetime NOT NULL,
  `VOTE` int(11) NOT NULL,
  `ID_COMPLAINT` int(11) NOT NULL,
  `ID_U` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_C`),
  KEY `comments_user_fk` (`ID_U`),
  KEY `comments_complaints_fk` (`ID_COMPLAINT`),
  CONSTRAINT `comments_complaints_fk` FOREIGN KEY (`ID_COMPLAINT`) REFERENCES `complaints` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_user_fk` FOREIGN KEY (`ID_U`) REFERENCES `users` (`ID_U`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Soy el primer comentario','2020-06-03 21:05:59',13,3,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2'),(2,'otro','2020-06-09 23:51:56',15,3,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2'),(3,'otro mas','2020-06-09 23:52:34',15,3,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2'),(16,'otro mas','2020-06-13 06:36:28',0,3,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(17,'que paso','2020-06-13 06:37:21',0,3,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(18,'nada','2020-06-13 06:37:26',0,3,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(19,'hola','2020-06-17 10:45:34',0,8,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(20,'chauu','2020-06-17 10:46:24',1,1,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(22,'asdasd','2020-06-18 06:34:34',0,9,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(23,'sdfsdf','2020-06-24 19:59:48',1,10,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(24,'sdf','2020-06-24 19:59:52',1,10,'cDD7O1VMs1fxjJmvBnELDpsPNao2'),(26,'esta denuncia es falsa!!','2020-06-27 05:10:30',0,16,'rnW8TYNx4UQpRLGbOAifo4EVPBC3');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaints`
--

DROP TABLE IF EXISTS `complaints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `complaints` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CREATE_AT` datetime NOT NULL,
  `DESCRIPTION` longtext NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `LAT` double NOT NULL,
  `LNG` double NOT NULL,
  `PHOTO_URL` longtext NOT NULL,
  `ID_TYPE` int(11) NOT NULL,
  `VOTE` int(11) NOT NULL,
  `ID_U` varchar(100) DEFAULT NULL,
  `STATE` varchar(15) NOT NULL DEFAULT 'Publicada',
  PRIMARY KEY (`ID`),
  KEY `complaints_Users_fk` (`ID_U`),
  KEY `complaints_typework_fk` (`ID_TYPE`),
  CONSTRAINT `complaints_Users_fk` FOREIGN KEY (`ID_U`) REFERENCES `users` (`ID_U`),
  CONSTRAINT `complaints_typework_fk` FOREIGN KEY (`ID_TYPE`) REFERENCES `type_work` (`ID_TYPE`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaints`
--

LOCK TABLES `complaints` WRITE;
/*!40000 ALTER TABLE `complaints` DISABLE KEYS */;
INSERT INTO `complaints` VALUES (1,'2020-06-09 22:52:28','No hay luz','Rondeau 245, Nueva Córdoba, Córdoba',-31.422866,-64.184327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2FSin%20Luz.jpg?alt=media&token=90a05cc7-201a-4dae-a58c-aedfe0e68a4e',15,6,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2','Publicada'),(3,'2020-06-09 23:52:50','p','Rondeau 245, Nueva Córdoba, Córdoba',-31.423366,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2FArenales-1967-6-Ene-2016.jpg?alt=media&token=af6d3869-619f-444c-b7ca-d658f119856a',15,13,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2','Finalizada'),(5,'2020-06-09 22:50:47','soy una denuncia sin usuario','Rondeau 245, Nueva Córdoba, Córdoba',-31.422866,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2F39789196-sin-foto-de-perfil-de-usuario-ilustraci%C3%B3n-dibujados-a-mano.jpg?alt=media&token=b3bc452e-63d3-4009-af45-ac4c7aa17e3a',15,21,NULL,'Rechazada'),(6,'2020-06-09 22:50:45','soy otra denuncia sin usuario','Rondeau 245, Nueva Córdoba, Córdoba',-31.421866,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2F39789196-sin-foto-de-perfil-de-usuario-ilustraci%C3%B3n-dibujados-a-mano.jpg?alt=media&token=77fe03bb-176c-46a0-bd40-63958eaa7770',38,15,NULL,'Publicada'),(8,'2020-06-12 07:06:38','Escuela fea2345678901234567890','Colegio Deán Funes,  Nueva Córdoba, Córdoba',-31.430125,-64.190311,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2Fdescarga%20(1).jpg?alt=media&token=49c42c46-0908-4bc7-b7ea-2f851b063767',20,5,'cDD7O1VMs1fxjJmvBnELDpsPNao2','Ejecucion'),(9,'2020-06-17 10:48:38','Belgrano','La Rioja 1854, Alberdi, Córdoba',-31.404473,-64.206462,'',20,1,'cDD7O1VMs1fxjJmvBnELDpsPNao2','Publicada'),(10,'2020-06-18 04:42:52','Cancha talleres','Avenida Pablo Ricchieri 3167, Santa Rita, Córdoba',-31.449073,-64.176418,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2F97232ad5b34bb5f6a94820753382bcf3.jpg?alt=media&token=dbc11205-7d3d-44ee-9791-a4665bb26674',20,2,'cDD7O1VMs1fxjJmvBnELDpsPNao2','Finalizada'),(14,'2020-06-27 05:03:43','sdfssdfs','San Lorenzo 261, Nueva Córdoba, Córdoba',-31.422866,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2F97232ad5b34bb5f6a94820753382bcf3.jpg?alt=media&token=2f601a67-be22-4494-b79b-d13d359ca0e8',15,0,'cDD7O1VMs1fxjJmvBnELDpsPNao2','Publicada'),(15,'2020-06-27 05:06:55','Pozo en la calle','Rivadavia 270, Centro, Córdoba',-31.422866,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2FArenales-1967-6-Ene-2016.jpg?alt=media&token=4444a32a-2af4-4550-9a72-1434e7498fd5',16,0,NULL,'Publicada'),(16,'2020-06-27 05:08:26','qweqwewq','Rivadavia 270, Centro, Córdoba',-31.422866,-64.183327,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/DenunciaPhoto%2FArenales-1967-6-Ene-2016.jpg?alt=media&token=8eb81950-7969-46cb-a4d2-95dc444b0738',15,0,NULL,'Publicada');
/*!40000 ALTER TABLE `complaints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_work`
--

DROP TABLE IF EXISTS `type_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_work` (
  `ID_TYPE` int(11) NOT NULL,
  `TYPE` varchar(30) NOT NULL,
  `COLOR` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID_TYPE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_work`
--

LOCK TABLES `type_work` WRITE;
/*!40000 ALTER TABLE `type_work` DISABLE KEYS */;
INSERT INTO `type_work` VALUES (15,'Alumbrado','ffE19254'),(16,'Bacheo','ff72a6e9'),(20,'Arquitectura','ff5247a9'),(25,'Ciclovías','ffc6528e'),(38,'Área Central','a61c6e08');
/*!40000 ALTER TABLE `type_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `ID_U` varchar(100) NOT NULL,
  `DISPLAY_NAME` varchar(30) NOT NULL,
  `FIRST_NAME` varchar(30) NOT NULL,
  `LAST_NAME` varchar(30) NOT NULL,
  `DOCUMENT` int(8) NOT NULL,
  `PHOTO_URL` longtext,
  PRIMARY KEY (`ID_U`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('cDD7O1VMs1fxjJmvBnELDpsPNao2','Diego09','Diego','Cayun',33776314,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/profilePhoto%2FPokemon-Ash-y-Pikachu.jpg?alt=media&token=4814f4cf-141e-442d-9b29-15c18579d652'),('Frw7Y3h5MAQas9Yf0C47DvTQ5UX2','MatiasG','Matias','Guzman',11222333,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/profilePhoto%2Fzetngo-2_400x400.jpg?alt=media&token=14054895-e58b-4088-ba4a-fcaf2a0014ba'),('lkxHDBFJIhf1eMluMnZZ6U35ACF2','Diego7','Diego','Cayun',33776314,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/default%2Fusuario.svg?alt=media&token=f2a57817-b672-4679-baf6-b69ea20ed1ba'),('rnW8TYNx4UQpRLGbOAifo4EVPBC3','dd','Diego','Cayun',33776314,'https://firebasestorage.googleapis.com/v0/b/pps-monitoreociudadano.appspot.com/o/profilePhoto%2Fdescarga.jpg?alt=media&token=2dc43bb7-07d3-458e-a7c8-bd03bae78102'),('uzyVJDpTEtORYbdOjRUdr2Vmu472','PeriU','DiegoU','CayunU',33776314,'https://yrlist.ru/portal/img/no_photo.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_admin`
--

DROP TABLE IF EXISTS `users_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_admin` (
  `ID_U` int(11) NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(30) NOT NULL,
  `E_MAIL` varchar(50) NOT NULL,
  `PASSWORD` longtext NOT NULL,
  PRIMARY KEY (`ID_U`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_admin`
--

LOCK TABLES `users_admin` WRITE;
/*!40000 ALTER TABLE `users_admin` DISABLE KEYS */;
INSERT INTO `users_admin` VALUES (1,'Diego','diego@gmail.com','$2a$10$NHHNjbvDIk7s18C6sVngfOeJpRYCtHO12HXY1o4Qa3UAne3jvEWyS'),(2,'Diego2','diego2@gmail.com','$2a$10$yg4U8/2fgD6NNWV8mgt8keBJtleJdzguCO.CNlRy5H2S.sDg7Tj.K'),(3,'peridiegoc3','peridiegoc3@hotmail.com','$2a$10$NqqJMhh84OURhbCOChi2zOZNInM24edQYTdWZUAQ11iO.gjYZYB7O');
/*!40000 ALTER TABLE `users_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes_comments`
--

DROP TABLE IF EXISTS `votes_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes_comments` (
  `ID_VOTE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_U` varchar(100) NOT NULL,
  `ID_C` int(11) NOT NULL,
  PRIMARY KEY (`ID_VOTE`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes_comments`
--

LOCK TABLES `votes_comments` WRITE;
/*!40000 ALTER TABLE `votes_comments` DISABLE KEYS */;
INSERT INTO `votes_comments` VALUES (4,'cDD7O1VMs1fxjJmvBnELDpsPNao2',3),(5,'cDD7O1VMs1fxjJmvBnELDpsPNao2',1),(6,'rnW8TYNx4UQpRLGbOAifo4EVPBC3',24),(7,'rnW8TYNx4UQpRLGbOAifo4EVPBC3',23),(8,'rnW8TYNx4UQpRLGbOAifo4EVPBC3',20);
/*!40000 ALTER TABLE `votes_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes_complaint`
--

DROP TABLE IF EXISTS `votes_complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes_complaint` (
  `ID_VOTE` int(11) NOT NULL AUTO_INCREMENT,
  `ID_U` varchar(100) NOT NULL,
  `ID_COMPLAINT` int(11) NOT NULL,
  PRIMARY KEY (`ID_VOTE`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes_complaint`
--

LOCK TABLES `votes_complaint` WRITE;
/*!40000 ALTER TABLE `votes_complaint` DISABLE KEYS */;
INSERT INTO `votes_complaint` VALUES (13,'cDD7O1VMs1fxjJmvBnELDpsPNao2',6),(14,'cDD7O1VMs1fxjJmvBnELDpsPNao2',5),(15,'cDD7O1VMs1fxjJmvBnELDpsPNao2',3),(16,'cDD7O1VMs1fxjJmvBnELDpsPNao2',1),(17,'Frw7Y3h5MAQas9Yf0C47DvTQ5UX2',10),(18,'rnW8TYNx4UQpRLGbOAifo4EVPBC3',10);
/*!40000 ALTER TABLE `votes_complaint` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-29 22:10:27
