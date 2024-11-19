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
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `ID_Compra` int NOT NULL AUTO_INCREMENT,
  `ID_Pedido` int NOT NULL,
  `fecha_compra` datetime NOT NULL,
  `ID_Usuario` int NOT NULL,
  `ID_Taza` int NOT NULL,
  `precio_actual_taza` double NOT NULL,
  `activo` bit(1) NOT NULL,
  PRIMARY KEY (`ID_Compra`),
  KEY `ID_Usuario` (`ID_Usuario`),
  KEY `ID_Taza` (`ID_Taza`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuarios` (`ID_Usuario`),
  CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`ID_Taza`) REFERENCES `tazas` (`ID_Taza`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,1,'2024-11-14 19:06:53',1,1,99.99,_binary ''),(2,2,'2024-11-14 19:07:16',1,1,100,_binary ''),(3,3,'2024-11-14 19:10:26',1,3,300,_binary ''),(4,4,'2024-11-14 19:10:38',1,2,200,_binary ''),(5,4,'2024-11-14 19:10:38',1,5,500,_binary ''),(6,5,'2024-11-14 19:19:08',1,3,300,_binary ''),(7,6,'2024-11-14 19:33:29',1,4,400,_binary ''),(8,6,'2024-11-14 19:33:29',1,6,600,_binary ''),(9,7,'2024-11-14 19:35:39',1,7,700,_binary ''),(10,8,'2024-11-14 19:44:42',1,1,100,_binary ''),(11,9,'2024-11-19 11:48:18',7,2,200,_binary '');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
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
INSERT INTO `flyway_schema_history` VALUES (1,'1','create-table-tazas','SQL','V1__create-table-tazas.sql',1287709946,'root','2024-10-20 15:10:00',80,1),(2,'2','create-table-clientes','SQL','V2__create-table-clientes.sql',-3294157,'root','2024-11-15 00:28:21',85,1),(3,'3','alter-table-clientes-usuarios','SQL','V3__alter-table-clientes-usuarios.sql',854594590,'root','2024-11-15 00:28:21',66,1),(4,'4','create-table-compras-drop-table-usuarios','SQL','V4__create-table-compras-drop-table-usuarios.sql',-311699508,'root','2024-11-15 01:05:10',180,1),(5,'5','alter-table-compras','SQL','V5__alter-table-compras.sql',1979728626,'root','2024-11-15 01:05:10',31,1),(6,'6','alter-table-usuarios','SQL','V6__alter-table-usuarios.sql',-931753290,'root','2024-11-16 03:14:20',131,1),(7,'7','alter-table-compras','SQL','V7__alter-table-compras.sql',1834362353,'root','2024-11-19 17:22:09',73,1),(8,'8','alter-table-usuarios','SQL','V8__alter-table-usuarios.sql',-1042955852,'root','2024-11-19 19:11:12',336,1);
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
INSERT INTO `tazas` VALUES (1,'Taza 1','Taza 1 ejemplo',100,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',0,_binary '\0'),(2,'Taza 2','Taza 2 ejemplo',200,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza10_tglcog.png',0,_binary '\0'),(3,'Taza 3','Taza 3 ejemplo',300,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',1,_binary ''),(4,'Taza 4','Taza 4 ejemplo',400,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza2_msgcxb.png',1,_binary ''),(5,'Taza 5','Taza 5 ejemplo',500,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza4_ik5x7a.png',1,_binary ''),(6,'Taza 6','Taza 6 ejemplo',600,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza5_yrnhdz.png',1,_binary ''),(7,'Taza 7','Taza 7 ejemplo',700,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza6_guh5di.png',1,_binary ''),(8,'Taza 8','Taza 8 ejemplo',800,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza7_wuyeo5.png',1,_binary ''),(9,'Taza 9','Taza 9 ejemplo',900,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza8_l7ptth.png',1,_binary ''),(10,'Taza 10','Taza 10 ejemplo',1000,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477710/taza9_fj1t9l.png',1,_binary ''),(11,'Taza 12','Taza Ejemplo 10',700.99,'https://res.cloudinary.com/dyzja6mqy/image/upload/v1729477702/taza3_khojjq.png',21,_binary '');
/*!40000 ALTER TABLE `tazas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `ID_Usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol` int NOT NULL,
  `respuesta_pregunta` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_Usuario`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Timoteo','Aguilar','timo@entazados.com','Calle 1','$2a$10$tJeCtaJZGJmJc/b6PEUKD.GdYopmcjWSbTHjcxMD687iUBbDmin0u',1,'nina'),(7,'Karen','Navarrete','karen@entazados.com','Calle 2','$2a$10$XrJel2qYoPOT374J7dM6YOmuOHbPxj1vyN2D2p/rt518CSwcDN4GS',2,'nina'),(8,'Paolo','Villarello','paolo@entazados.com','Calle 3','$2a$10$0kK1JGpgf6B7WXxQSku93uK1rdaIs5ikk0IM6IgSaBgfQuN/A860C',2,'nina');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-19 14:18:42
