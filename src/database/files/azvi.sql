CREATE DATABASE  IF NOT EXISTS `azvi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `azvi`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: azvi
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Carpinteria'),(2,'Plomeria'),(3,'Pintura'),(4,'Cerrajeria'),(5,'Heladeras'),(6,'Mecanico'),(7,'Lavarropas'),(8,'Acc');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `plan` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Katine','(319) 3289326','2021-02-01 11:39:53',NULL,'Plan seleccionado: Intermedio por $850 mensuales'),(2,'Brooke','(718) 1607429','2021-02-01 11:39:53',NULL,'Plan seleccionado: Premium por $1150 mensuales'),(3,'Bianka','(355) 1844200','2021-02-01 11:39:53',NULL,'Plan seleccionado: Basico por $450 mensuales'),(4,'Nollie','(166) 2883770','2021-02-01 11:39:53',NULL,'Plan seleccionado: Intermedio por $850 mensuales'),(5,'Carlo','(105) 4772813','2021-02-01 11:39:53',NULL,'Plan seleccionado: Basico por $450 mensuales'),(6,'Caressa','(925) 4047252','2021-02-01 11:39:53',NULL,'Plan seleccionado: Intermedio por $850 mensuales'),(7,'Faber','(427) 9754315','2021-02-01 11:39:53',NULL,'Plan seleccionado: Premium por $1150 mensuales'),(8,'Raimondo','(397) 9228824','2021-02-01 11:39:53',NULL,'Plan seleccionado: Premium por $1150 mensuales'),(9,'Vanni','(266) 8880859','2021-02-01 11:39:53',NULL,'Plan seleccionado: Premium por $1150 mensuales'),(10,'Dode','(745) 8209151','2021-02-01 11:39:53',NULL,'Plan seleccionado: Intermedio por $850 mensuales'),(35,'mario','15484815','2021-02-08 02:32:25','2021-02-08 02:32:25','Plan seleccionado: Intermedio por $850 mensuales');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `providers`
--

DROP TABLE IF EXISTS `providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `providers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cellphone` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `location` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `score` tinyint DEFAULT NULL,
  `categorieId` bigint unsigned NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` bigint unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_providers_categories1_idx` (`categorieId`),
  CONSTRAINT `fk_providers_categories1` FOREIGN KEY (`categorieId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `providers`
--

LOCK TABLES `providers` WRITE;
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
INSERT INTO `providers` VALUES (1,'Carlos','Jeffords','ajefford0@irs.gov','941-740-3584','La Plata',3,3,'AdlerJeffords.jpg',450,'2021-02-01 11:39:52','2021-02-09 00:00:59'),(3,'Carlos','Gallemore','agallemore2@businesswire.com','860-412-2453','Chubut',4,8,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(4,'Carlos','Beadham','dbeadham3@ustream.tv','276-111-4225','Chubut',4,8,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(5,'Carlos','Hunte','ehunte4@sakura.ne.jp','998-565-5346','Chubut',5,8,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(6,'Carlos','Devorill','kdevorill5@redcross.org','395-523-7897','Chubut',5,1,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(7,'Carlos','Pearle','cpearle6@nba.com','802-361-9600','Chubut',5,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(8,'Carlos','Trotton','gtrotton7@wikispaces.com','852-490-4286','Chubut',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(9,'Carlos','Sydenham','csydenham8@moonfruit.com','889-742-5105','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(10,'Roberto','Worster','sworster9@marriott.com','708-551-2931','Chubut',4,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(11,'Roberto','Foulks','tfoulksa@npr.org','406-850-2753','Chubut',4,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(12,'Roberto','Ambrogio','tambrogiob@forbes.com','764-445-9839','Chubut',4,1,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(13,'Roberto','Lidgett','jlidgettc@reddit.com','895-698-4314','Chubut',4,1,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(14,'Roberto','Thorald','dthoraldd@sciencedirect.com','652-566-6341','Chubut',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(15,'Gonzalo','Curgenven','vcurgenvene@gnu.org','515-585-6733','Chubut',4,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(16,'Gonzalo','Willimot','mwillimotf@prweb.com','841-741-3022','Chubut',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(17,'Gonzalo','Pierrepoint','kpierrepointg@army.mil','317-224-1708','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(18,'Gonzalo','Houlston','shoulstonh@ow.ly','818-470-3459','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(19,'Gonzalo','Standage','dstandagei@epa.gov','360-403-7300','Chubut',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(20,'Raul','Rouke','croukej@yelp.com','141-596-2049','Chubut',4,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(21,'Raul','Chidgey','hchidgeyk@about.com','297-977-6993','Chubut',5,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(22,'Raul','Harmston','gharmstonl@trellian.com','286-263-2745','Chubut',3,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(23,'Raul','Nussii','lnussiim@facebook.com','923-729-7639','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(24,'Raul','Gilfoy','fgilfoyn@amazon.com','973-655-2790','Chubut',3,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(25,'Claudio','Pusey','cpuseyo@jiathis.com','661-779-6172','Chubut',4,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(26,'Claudio','Chelley','ochelleyp@sogou.com','358-749-7673','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(27,'Claudio','Godbert','ngodbertq@dagondesign.com','149-715-4925','Chubut',4,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(28,'Claudio','Letcher','lletcherr@howstuffworks.com','730-868-6150','Chubut',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(29,'Claudio','Somner','asomners@sakura.ne.jp','345-343-3664','Chubut',4,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(30,'Jose','Leadley','mleadleyt@devhub.com','701-792-8237','Rawson',4,7,'user_22.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(31,'Jose','Server','oserveru@delicious.com','129-465-6693','Rawson',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(32,'Jose','Jerger','sjergerv@alexa.com','351-651-2943','Rawson',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(33,'Jose','Simo','vsimow@adobe.com','881-389-3916','Rawson',4,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(34,'Jose','Ipsgrave','ripsgravex@nydailynews.com','232-939-1416','Rawson',4,1,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(35,'Jose','Randlesome','trandlesomey@ustream.tv','619-226-0717','Rawson',4,1,'user_2.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(36,'Jose','Swinfon','dswinfonz@nifty.com','916-108-8129','Rawson',4,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(37,'Jose','Riccioppo','griccioppo10@cnbc.com','143-281-7177','Rawson',4,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(38,'Jose','Crewe','acrewe11@scribd.com','326-206-6753','Rawson',4,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(39,'Jose','Neate','bneate12@youku.com','276-284-7282','Rawson',4,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(40,'Jose','Jennaroy','gjennaroy13@wix.com','411-371-7499','Rawson',4,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(41,'Jose','Kineton','akineton14@va.gov','702-192-9373','Rawson',4,2,'user_4.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(42,'Jose','Galley','egalley15@timesonline.co.uk','369-963-1515','Rawson',4,3,'user_14.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(43,'Jose','Calverley','fcalverley16@whitehouse.gov','649-724-7198','Rawson',4,4,'user_24.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(44,'Jose','Titterington','ctitterington17@comcast.net','916-810-8929','Rawson',4,6,'user_11.jpg',550,'2021-02-01 11:39:52',NULL),(45,'Jose','Capeloff','dcapeloff18@apache.org','240-346-6558','Rawson',4,5,'user_26.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(46,'Jose','Baroc','mbaroc19@amazon.com','255-101-5221','Rawson',4,5,'user_26.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(47,'Jose','Boshard','lboshard1a@ftc.gov','484-147-1149','Rawson',4,5,'user_26.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(48,'Jose','Chiverstone','kchiverstone1b@acquirethisname.com','883-186-7955','Rawson',4,6,'user_11.jpg',550,'2021-02-01 11:39:52',NULL),(49,'Jose','Durnell','edurnell1c@cmu.edu','126-267-4312','Rawson',4,1,'user_2.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(50,'Armando','Charman','qcharman1d@businessinsider.com','590-939-8175','Cordoba Capital',4,6,'user_11.jpg',550,'2021-02-01 11:39:52',NULL),(51,'Armando','Newlyn','xnewlyn1e@harvard.edu','563-369-4955','Cordoba Capital',4,3,'user_14.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(52,'Armando','Telford','gtelford1f@slashdot.org','861-152-9978','Cordoba Capital',4,2,'user_4.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(53,'Armando','Crennan','mcrennan1g@spiegel.de','303-711-9472','Cordoba Capital',4,1,'user_2.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(54,'Armando','Rothchild','jrothchild1h@printfriendly.com','557-699-0258','Cordoba Capital',4,7,'user_22.jpg',550,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(55,'Esteban','Quogan','wquogan1i@deviantart.com','513-246-0739','Cordoba Capital',4,5,'user_26.jpg',600,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(56,'Esteban','Simonitto','lsimonitto1j@bizjournals.com','696-519-8190','Cordoba Capital',4,8,'user_2.jpg',600,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(57,'Esteban','Stallworth','cstallworth1k@trellian.com','248-879-1682','Cordoba Capital',4,8,'user_14.jpg',600,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(58,'Esteban','Taffley','staffley1l@microsoft.com','516-407-0349','Cordoba Capital',4,8,'user_26.jpg',600,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(59,'Esteban','Forcer','bforcer1m@hubpages.com','466-322-1291','Cordoba Capital',4,7,'user_22.jpg',600,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(60,'Esteban','Weatherell','bweatherell1n@cmu.edu','388-928-0805','Cordoba Capital',4,3,'user_14.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(61,'Esteban','Talby','ctalby1o@tripod.com','150-477-5411','Cordoba Capital',4,2,'user_4.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(62,'Esteban','McCall','nmccall1p@geocities.com','563-327-5516','Cordoba Capital',4,3,'user_14.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(63,'Esteban','McDonell','gmcdonell1q@nih.gov','347-460-7782','Cordoba Capital',4,3,'user_14.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(64,'Esteban','Ewart','gewart1r@cmu.edu','556-915-8809','Cordoba Capital',4,6,'user_11.jpg',300,'2021-02-01 11:39:52',NULL),(65,'Esteban','Scantlebury','escantlebury1s@sbwire.com','449-656-5751','Cordoba Capital',4,5,'user_26.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(66,'Corella','Isakovic','cisakovic1t@xinhuanet.com','236-272-3788','Cordoba Capital',3,8,'user_14.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(67,'Pepillo','De Vaan','pdevaan1u@house.gov','739-764-3500','Cordoba Capital',4,8,'user_4.jpg',300,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(68,'Karil','Barkaway','kbarkaway1v@webmd.com','261-163-8489','Cordoba Capital',5,8,'user_11.jpg',650,'2021-02-01 11:39:52',NULL),(69,'Rosmunda','Derkes','rderkes1w@vk.com','930-663-9197','Cordoba Capital',5,8,'user_26.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(70,'Kial','Brombell','kbrombell1x@phoca.cz','789-952-5363','Cordoba Capital',5,8,'user_22.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(71,'Kinnie','Farrell','kfarrell1y@friendfeed.com','254-780-6268','Cordoba Capital',4,3,'user_14.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(72,'Chrissie','Stileman','cstileman1z@icio.us','877-473-7399','Cordoba Capital',2,3,'user_14.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(73,'Marjy','Rizzini','mrizzini20@buzzfeed.com','151-791-5058','Cordoba Capital',4,4,'user_24.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(74,'Crissie','Spensly','cspensly21@google.co.jp','665-739-2444','Cordoba Capital',3,7,'user_22.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(75,'Patrice','Coan','pcoan22@state.gov','652-303-0829','Cordoba Capital',1,6,'user_11.jpg',400,'2021-02-01 11:39:52',NULL),(76,'Essy','Crossgrove','ecrossgrove23@webnode.com','598-264-6129','Cordoba Capital',1,4,'user_24.jpg',400,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(77,'Salim','Robinson','srobinson24@pen.io','512-862-7111','Cordoba Capital',2,4,'user_24.jpg',400,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(78,'Marieann','Crehan','mcrehan25@opensource.org','762-265-4970','Cordoba Capital',2,6,'user_11.jpg',400,'2021-02-01 11:39:52',NULL),(79,'Denver','Mulhill','dmulhill26@hexun.com','898-431-5495','Cordoba Capital',4,5,'user_26.jpg',400,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(80,'Dela','Gringley','dgringley27@freewebs.com','427-212-8337','La Plata',1,7,'user_22.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:57:24'),(81,'Reeva','Mettrick','rmettrick28@wisc.edu','847-591-9420','La Plata',2,6,'user_11.jpg',650,'2021-02-01 11:39:52',NULL),(82,'Phil','Hankins','phankins29@go.com','265-244-0157','La Plata',2,1,'user_2.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(83,'Zita','Vivyan','zvivyan2a@biblegateway.com','440-925-1079','La Plata',2,1,'user_2.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:55:25'),(84,'Dollie','Shiel','dshiel2b@nps.gov','187-323-9419','La Plata',2,5,'user_26.jpg',650,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(85,'Benson','Philliphs','bphilliphs2c@hibu.com','845-769-1255','La Plata',3,2,'user_4.jpg',700,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(86,'Adolph','Reeday','areeday2d@wufoo.com','652-541-6618','La Plata',1,5,'user_26.jpg',700,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(87,'Evvie','Goff','egoff2e@digg.com','668-730-3367','La Plata',3,4,'user_24.jpg',700,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(88,'Sterne','Wollacott','swollacott2f@flickr.com','626-876-8237','La Plata',5,3,'user_14.jpg',700,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(89,'Chaddie','Terrington','cterrington2g@diigo.com','492-488-9534','La Plata',1,3,'user_14.jpg',700,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(90,'Angus','Burditt','aburditt2h@hp.com','856-679-6793','La Plata',3,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(91,'Minnaminnie','Eglise','meglise2i@mediafire.com','649-340-3137','La Plata',2,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(92,'Godfry','Bonnor','gbonnor2j@over-blog.com','831-728-3461','La Plata',2,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(93,'Farris','Veel','fveel2k@nifty.com','907-110-6444','La Plata',5,3,'user_14.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:53:21'),(94,'Stefania','Stoven','sstoven2l@bloglovin.com','187-971-2219','La Plata',4,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(95,'Elayne','Aslett','easlett2m@wp.com','574-111-1810','La Plata',1,2,'user_4.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:57:54'),(96,'Drusi','Sawrey','dsawrey2n@ebay.co.uk','195-894-6229','La Plata',1,5,'user_26.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(97,'Rosemary','Gerry','rgerry2o@ebay.com','891-931-7508','La Plata',1,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(98,'Derrik','Strevens','dstrevens2p@mediafire.com','471-579-3146','La Plata',3,4,'user_24.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:54:51'),(99,'Rayna','Kremer','rkremer2q@fda.gov','436-394-0741','La Plata',1,6,'user_11.jpg',450,'2021-02-01 11:39:52',NULL),(100,'Ives','Lydden','ilydden2r@symantec.com','394-363-4971','La Plata',2,5,'user_26.jpg',450,'2021-02-01 11:39:52','2021-02-04 20:56:39'),(109,'Adler','Jefford','adle@irs.gov','941-740-3584','La Plata',4,8,'user_21.jpg',450,'2021-02-08 00:44:18',NULL),(110,'pedro','aguirre','pedrio@gmail.com','1165158555','Chubut',3,3,'pedroaguirre.jpg',450,'2021-02-08 02:29:29','2021-02-08 02:29:29');
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `providerId` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_services_providers1_idx` (`providerId`),
  CONSTRAINT `fk_services_providers1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Pintura y murales','Servicios de pintura en general, interior, exterior y muebles.',3),(2,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',4),(3,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',5),(4,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',6),(5,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',13),(6,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',34),(7,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',35),(8,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',49),(9,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',53),(10,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',56),(11,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',82),(12,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',83),(13,'Plomeria general','Limpieza, desagotes, arreglos en general',11),(14,'Plomeria general','Limpieza, desagotes, arreglos en general',33),(15,'Plomeria general','Limpieza, desagotes, arreglos en general',38),(16,'Plomeria general','Limpieza, desagotes, arreglos en general',39),(17,'Plomeria general','Limpieza, desagotes, arreglos en general',41),(18,'Plomeria general','Limpieza, desagotes, arreglos en general',52),(19,'Plomeria general','Limpieza, desagotes, arreglos en general',61),(20,'Plomeria general','Limpieza, desagotes, arreglos en general',67),(21,'Plomeria general','Limpieza, desagotes, arreglos en general',85),(22,'Plomeria general','Limpieza, desagotes, arreglos en general',91),(23,'Plomeria general','Limpieza, desagotes, arreglos en general',95),(24,'Pintura y murales','Servicios de pintura en general, interior, exterior y muebles.',1),(25,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',10),(26,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',25),(27,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',27),(28,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',36),(29,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',37),(30,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',42),(31,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',51),(32,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',57),(33,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',60),(34,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',62),(35,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',63),(36,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',66),(37,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',71),(38,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',72),(39,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',88),(40,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',89),(41,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',90),(42,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',92),(43,'Pintura','Servicios de pintura en general, interior, exterior y muebles.',93),(45,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',15),(46,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',20),(47,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',21),(48,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',24),(49,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',29),(50,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',40),(51,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',43),(52,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',73),(53,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',76),(54,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',77),(55,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',87),(56,'Cerrajeria en general','Copias de llaves, arreglo de cerraduras.',98),(57,'Heladeras','Reparacion a domicilio.',45),(58,'Heladeras','Reparacion a domicilio.',46),(59,'Heladeras','Reparacion a domicilio.',47),(60,'Heladeras','Reparacion a domicilio.',55),(61,'Heladeras','Reparacion a domicilio.',58),(62,'Heladeras','Reparacion a domicilio.',65),(63,'Heladeras','Reparacion a domicilio.',69),(64,'Heladeras','Reparacion a domicilio.',79),(65,'Heladeras','Reparacion a domicilio.',84),(66,'Heladeras','Reparacion a domicilio.',86),(67,'Heladeras','Reparacion a domicilio.',96),(68,'Heladeras','Reparacion a domicilio.',100),(69,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',8),(70,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',14),(71,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',16),(72,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',19),(73,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',31),(74,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',32),(75,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',44),(76,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',48),(77,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',50),(78,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',64),(79,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',68),(80,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',75),(81,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',78),(82,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',81),(83,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',94),(84,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',97),(85,'Mecanica en general','Mantenimiento de vehiculos en general, revisión de fallas previas a presupuesto.',99),(86,'Lavarropas','Mantenimiento general y reparación de equipos.',7),(87,'Lavarropas','Mantenimiento general y reparación de equipos.',9),(88,'Lavarropas','Mantenimiento general y reparación de equipos.',17),(89,'Lavarropas','Mantenimiento general y reparación de equipos.',18),(90,'Lavarropas','Mantenimiento general y reparación de equipos.',22),(91,'Lavarropas','Mantenimiento general y reparación de equipos.',23),(92,'Lavarropas','Mantenimiento general y reparación de equipos.',26),(93,'Lavarropas','Mantenimiento general y reparación de equipos.',28),(94,'Lavarropas','Mantenimiento general y reparación de equipos.',30),(95,'Lavarropas','Mantenimiento general y reparación de equipos.',54),(96,'Lavarropas','Mantenimiento general y reparación de equipos.',59),(97,'Lavarropas','Mantenimiento general y reparación de equipos.',70),(98,'Lavarropas','Mantenimiento general y reparación de equipos.',74),(99,'Lavarropas','Mantenimiento general y reparación de equipos.',80),(100,'Reparaciones en general','Realizo reparaciones en general de cualquier tipo de mueble del hogar, también en puertas o ventanas de madera.',12),(106,'Pintureria en general','Hago todo tipo de trabajo , especialmente frentes',110);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppinghistory`
--

DROP TABLE IF EXISTS `shoppinghistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppinghistory` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `userId` bigint unsigned NOT NULL,
  `providerId` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shoppingHistory_users_idx` (`userId`),
  KEY `fk_shoppingHistory_providers1_idx` (`providerId`),
  CONSTRAINT `fk_shoppingHistory_providers1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`),
  CONSTRAINT `fk_shoppingHistory_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppinghistory`
--

LOCK TABLES `shoppinghistory` WRITE;
/*!40000 ALTER TABLE `shoppinghistory` DISABLE KEYS */;
INSERT INTO `shoppinghistory` VALUES (12,3,5);
/*!40000 ALTER TABLE `shoppinghistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(10) COLLATE utf8mb4_general_ci DEFAULT 'user',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_general_ci DEFAULT 'generalAvatar.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'azvi','azvi','prueba@gmail.com','$2b$10$GprdrGr3yVqhvmszQX5K8eaEvrNG12Gbl/Th6lKjsCt75h2w4yFVO','admin','2021-02-01 11:39:52',NULL,'adminAzvi.png'),(2,'Etan','Perllman','eperllman1@freewebs.com','$2b$10$wF8bzYlXC/o03Z8TWzK42ec0dIM4uUZeIgcMMoNCQk7FjOreoUN0e','user','2021-02-01 11:39:52',NULL,'generalAvatar.png'),(3,'Klaus','Cator','kcator2@yelp.com','$2b$10$wF8bzYlXC/o03Z8TWzK42ec0dIM4uUZeIgcMMoNCQk7FjOreoUN0e','user','2021-02-01 11:39:52',NULL,'generalAvatar.png'),(4,'Avery','Mohun','amohun3@rediff.com','$2b$10$wF8bzYlXC/o03Z8TWzK42ec0dIM4uUZeIgcMMoNCQk7FjOreoUN0e','user','2021-02-01 11:39:52',NULL,'generalAvatar.png'),(5,'Olivier','Gainforth','ogainforth4@cafepress.com','$2b$10$wF8bzYlXC/o03Z8TWzK42ec0dIM4uUZeIgcMMoNCQk7FjOreoUN0e','user','2021-02-01 11:39:52',NULL,'generalAvatar.png'),(7,'Joaquin','Perez','jzuazociolfi@gmail.com','$2b$10$2RB0Y5WRnUu64yQ/x3pyT.p13huLI2ukHmyu8l9mIYND6TiHV19/m','user','2021-02-02 11:35:20','2021-02-03 18:13:01','avatar-1612375950001.png'),(8,'Joaquin','Ciolfi','joaquinzuazo@ingeme.com.ar','$2b$10$DZfhy8pfQB6MUONsFLCpeuTw7OELNI3jh0NEwMvAtZDtCdNcQ1f4y','user','2021-02-02 14:08:00','2021-02-02 14:08:00','generalAvatar.png'),(9,'usuario','invitado','user1@azvi.com','$2b$10$nXuxKikbMHDon2f0WRBkOeFvaNFlnJXIZDNbkRRcjFEQY3bDp2K0C','user','2021-02-07 13:50:52','2021-02-07 13:50:52','generalAvatar.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-09  9:12:31
