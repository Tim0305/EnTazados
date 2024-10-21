-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: entazados
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `ID_Cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`ID_Cliente`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flyway_schema_history`
--

LOCK TABLES `flyway_schema_history` WRITE;
/*!40000 ALTER TABLE `flyway_schema_history` DISABLE KEYS */;
INSERT INTO `flyway_schema_history` VALUES (1,'1','create-table-tazas','SQL','V1__create-table-tazas.sql',1287709946,'root','2024-10-20 15:10:00',80,1),(2,'2','create-table-clientes','SQL','V2__create-table-clientes.sql',-3294157,'root','2024-10-20 15:22:55',76,1);
/*!40000 ALTER TABLE `flyway_schema_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tazas`
--

DROP TABLE IF EXISTS `tazas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tazas` (
  `ID_Taza` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `precio` double NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `cantidad` int NOT NULL,
  `existe` bit(1) NOT NULL,
  PRIMARY KEY (`ID_Taza`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tazas`
--

LOCK TABLES `tazas` WRITE;
/*!40000 ALTER TABLE `tazas` DISABLE KEYS */;
INSERT INTO `tazas` VALUES (1,'Taza 1','Taza 1 ejemplo',99.99,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',1,_binary ''),(2,'Taza 2','Taza 2 ejemplo',200,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza10_tglcog.png',1,_binary ''),(3,'Taza 3','Taza 3 ejemplo',300,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',1,_binary ''),(4,'Taza 4','Taza 4 ejemplo',400,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza2_msgcxb.png',1,_binary ''),(5,'Taza 5','Taza 5 ejemplo',500,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza4_ik5x7a.png',1,_binary ''),(6,'Taza 6','Taza 6 ejemplo',600,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza5_yrnhdz.png',1,_binary ''),(7,'Taza 7','Taza 7 ejemplo',700,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza6_guh5di.png',1,_binary ''),(8,'Taza 8','Taza 8 ejemplo',800,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza7_wuyeo5.png',1,_binary ''),(9,'Taza 9','Taza 9 ejemplo',900,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza8_l7ptth.png',1,_binary ''),(10,'Taza 10','Taza 10 ejemplo',1000,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza9_fj1t9l.png',1,_binary ''),(11,'Taza 12','Taza Ejemplo 10',700.99,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',21,_binary '');
/*!40000 ALTER TABLE `tazas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 21:24:32
