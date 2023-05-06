-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2023 at 06:54 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `anganwadis`
--

CREATE TABLE `anganwadis` (
  `aid` int(12) NOT NULL,
  `astreet` varchar(40) DEFAULT NULL,
  `avil` varchar(40) NOT NULL,
  `amandal` varchar(40) NOT NULL,
  `adistrict` varchar(40) NOT NULL,
  `astate` varchar(40) NOT NULL,
  `apincode` int(10) NOT NULL,
  `amobile` bigint(20) NOT NULL,
  `aemail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anganwadis`
--

INSERT INTO `anganwadis` (`aid`, `astreet`, `avil`, `amandal`, `adistrict`, `astate`, `apincode`, `amobile`, `aemail`) VALUES
(1, '1-40B,Main Street', 'Vaddimadugu', 'Konakanamitla', 'Prakasam', 'Andhra Pradesh', 523241, 7981262790, 'vaddimaduguanganwadi1@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `aworkers`
--

CREATE TABLE `aworkers` (
  `aid` int(12) NOT NULL,
  `wuid` bigint(30) NOT NULL,
  `password` varchar(15) NOT NULL,
  `wname` varchar(40) NOT NULL,
  `wqualification` varchar(15) NOT NULL,
  `wdob` date NOT NULL,
  `wmobile` bigint(20) NOT NULL,
  `wemail` varchar(50) NOT NULL,
  `wstreet` varchar(40) DEFAULT NULL,
  `wvil` varchar(40) NOT NULL,
  `wmandal` varchar(40) NOT NULL,
  `wdistrict` varchar(40) NOT NULL,
  `wstate` varchar(40) NOT NULL,
  `wpincode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aworkers`
--

INSERT INTO `aworkers` (`aid`, `wuid`, `password`, `wname`, `wqualification`, `wdob`, `wmobile`, `wemail`, `wstreet`, `wvil`, `wmandal`, `wdistrict`, `wstate`, `wpincode`) VALUES
(1, 202320230001, '12345678', 'Mavidakula Venkata Latha', 'SSC', '1992-01-01', 9988776655, 'lathamavidakula@gmail.com', '2-35C,Main Street', 'Vaddimadugu', 'Konakanamitla', 'Prakasam', 'Andhra Pradesh', 523241);

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

CREATE TABLE `children` (
  `aid` int(12) NOT NULL,
  `cuid` bigint(30) NOT NULL,
  `cname` varchar(40) NOT NULL,
  `cdob` date NOT NULL,
  `cgen` varchar(6) NOT NULL,
  `muid` bigint(30) NOT NULL,
  `mname` varchar(40) NOT NULL,
  `mmobile` bigint(20) DEFAULT NULL,
  `schooling` tinyint(1) NOT NULL DEFAULT 0,
  `cstreet` varchar(40) DEFAULT NULL,
  `cvil` varchar(40) NOT NULL,
  `cmandal` varchar(40) NOT NULL,
  `cdistrict` varchar(40) NOT NULL,
  `cstate` varchar(40) NOT NULL,
  `cpincode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`aid`, `cuid`, `cname`, `cdob`, `cgen`, `muid`, `mname`, `mmobile`, `schooling`, `cstreet`, `cvil`, `cmandal`, `cdistrict`, `cstate`, `cpincode`) VALUES
(1, 202320232221, 'Kaluva Kiran', '2022-08-31', 'male', 202320231112, 'Kaluva Kamalamma', 8976875643, 0, 'Kaluva vari Bazar', 'Vaddimadugu', 'Konakanamitla', 'Prakasam', 'Andhra Pradesh', 523241);

-- --------------------------------------------------------

--
-- Table structure for table `dairy`
--
-- Error reading structure for table sampledb.dairy: #1932 - Table 'sampledb.dairy' doesn't exist in engine
-- Error reading data for table sampledb.dairy: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `sampledb`.`dairy`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `dosages`
--

CREATE TABLE `dosages` (
  `did` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `dn` int(11) NOT NULL,
  `start` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dosages`
--

INSERT INTO `dosages` (`did`, `vid`, `dn`, `start`) VALUES
(1, 1, 1, 90),
(2, 1, 2, 120),
(3, 2, 1, 1),
(4, 3, 1, 45),
(5, 3, 2, 75),
(6, 3, 3, 105),
(7, 4, 1, 270),
(8, 5, 1, 270),
(9, 5, 2, 450),
(10, 5, 3, 630),
(11, 5, 4, 810),
(12, 5, 5, 990),
(13, 5, 6, 1170),
(14, 5, 7, 1350),
(15, 5, 8, 1530),
(16, 5, 9, 1710),
(17, 6, 1, 1800);

-- --------------------------------------------------------

--
-- Table structure for table `nutrition`
--

CREATE TABLE `nutrition` (
  `cid` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `cdesc` varchar(100) NOT NULL,
  `items` varchar(150) NOT NULL,
  `cfor` varchar(2) NOT NULL,
  `cbeg` int(11) NOT NULL,
  `cend` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nutrition`
--

INSERT INTO `nutrition` (`cid`, `category`, `cdesc`, `items`, `cfor`, `cbeg`, `cend`) VALUES
(1, 1, 'All Pregnant Women', 'Lunch, 1-Egg, 200gm-Milk (Daily),BalaSanjivini Kit { Ragipindi-1Kg, Jonna/Sodda Pindi-1Kg, Atukulu-1Kg, Bellam-250gm, Chikki-250gm } (Monthly Once)', 'p', 0, 270),
(2, 2, 'Delivered Women Upto Sixth Month Completion', 'Lunch, 1-Egg, 200gm-Milk (Daily)\r\nBalaSanjivini Kit { Ragipindi-1Kg, Jonna/Sodda Pindi-1Kg, Atukulu-1Kg, Bellam-250gm, Chikki-250gm } (Monthly Once)', 'd', 0, 180),
(3, 3, 'Delivered Women Having Baby of age lies in [7th Month -3rd Year]', 'Balamrutham-2.5Kg, Eggs-25, Milk-2.5Ltrs(Monthly Once)', 'd', 180, 1080),
(4, 1, 'Children of Age lies in [4th Year - 5th Year]', 'Lunch, 1-Egg, 200gm-Milk (Daily)\r\n', 'c', 1440, 1800);

-- --------------------------------------------------------

--
-- Table structure for table `pregnants`
--

CREATE TABLE `pregnants` (
  `aid` int(12) NOT NULL,
  `puid` bigint(30) NOT NULL,
  `pname` varchar(40) NOT NULL,
  `pdob` date NOT NULL,
  `pdoc` date NOT NULL,
  `delivery` tinyint(1) NOT NULL DEFAULT 0,
  `pdod` date DEFAULT NULL,
  `pmobile` bigint(20) NOT NULL,
  `guid` bigint(30) NOT NULL,
  `gname` varchar(40) NOT NULL,
  `gmobile` bigint(20) NOT NULL,
  `relation` varchar(20) DEFAULT NULL,
  `pstreet` varchar(40) DEFAULT NULL,
  `pvil` varchar(40) NOT NULL,
  `pmandal` varchar(40) NOT NULL,
  `pdistrict` varchar(40) NOT NULL,
  `pstate` varchar(40) NOT NULL,
  `ppincode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pregnants`
--

INSERT INTO `pregnants` (`aid`, `puid`, `pname`, `pdob`, `pdoc`, `delivery`, `pdod`, `pmobile`, `guid`, `gname`, `gmobile`, `relation`, `pstreet`, `pvil`, `pmandal`, `pdistrict`, `pstate`, `ppincode`) VALUES
(1, 202320231111, 'Ungarala Sai Kalyani', '1999-12-31', '2022-12-01', 0, NULL, 8998890089, 202320230111, 'Ungarala Ravi Kumar', 9808905678, 'Marrital', NULL, 'Vaddimadugu', 'Konakanamitla', 'Prakasam', 'Andhra Pradesh', 523241),
(1, 202320231112, 'Kaluva Kamalamma', '1992-12-31', '2021-12-31', 1, '2022-09-01', 8976875643, 202320230112, 'Kaluva Veeraiah', 8875445342, 'Marrital', NULL, 'Vaddimadugu', 'Konakanamitla', 'Prakasam', 'Andhra Pradesh', 523241);

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--
-- Error reading structure for table sampledb.quotes: #1932 - Table 'sampledb.quotes' doesn't exist in engine
-- Error reading data for table sampledb.quotes: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `sampledb`.`quotes`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `schemes`
--

CREATE TABLE `schemes` (
  `sid` int(20) NOT NULL,
  `sname` varchar(40) NOT NULL,
  `sdesc` varchar(80) NOT NULL,
  `seligibility` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--
-- Error reading structure for table sampledb.todo: #1932 - Table 'sampledb.todo' doesn't exist in engine
-- Error reading data for table sampledb.todo: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `sampledb`.`todo`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Error reading structure for table sampledb.users: #1932 - Table 'sampledb.users' doesn't exist in engine
-- Error reading data for table sampledb.users: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `sampledb`.`users`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `vaccinations`
--

CREATE TABLE `vaccinations` (
  `tid` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  `vid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `uid` bigint(30) NOT NULL,
  `uname` varchar(40) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaccinations`
--

INSERT INTO `vaccinations` (`tid`, `aid`, `vid`, `did`, `uid`, `uname`, `status`, `date`) VALUES
(1, 1, 2, 3, 202320232221, 'Kaluva Kiran', 1, '2022-09-03'),
(2, 1, 3, 5, 202320232221, 'Kaluva Kiran', 1, '2022-11-16'),
(3, 1, 3, 4, 202320232221, 'Kaluva Kiran', 1, '2022-10-15'),
(4, 1, 3, 6, 202320232221, 'Kaluva Kiran', 1, '2023-12-15'),
(5, 1, 1, 1, 202320231111, 'Ungarala Sai Kalyani', 1, '2023-03-06'),
(6, 1, 1, 1, 202320231112, 'Kaluva Kamalamma', 1, '2022-03-10'),
(7, 1, 1, 2, 202320231112, 'Kaluva Kamalamma', 1, '2022-04-11');

-- --------------------------------------------------------

--
-- Table structure for table `vaccines`
--

CREATE TABLE `vaccines` (
  `vid` int(11) NOT NULL,
  `vname` varchar(20) NOT NULL,
  `vfname` varchar(40) NOT NULL,
  `vfor` varchar(2) NOT NULL,
  `vdesc` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaccines`
--

INSERT INTO `vaccines` (`vid`, `vname`, `vfname`, `vfor`, `vdesc`) VALUES
(1, 'TT', 'Tetanus Toxoid', 'p', ''),
(2, 'BCG', 'Bacille Calmette Guerin', 'c', ''),
(3, 'H/OPV', 'Hepatities/Oral Polio Virus', 'c', ''),
(4, 'Measles', 'Measles', 'c', ''),
(5, 'Vit-A', 'Vitamin-A', 'c', ''),
(6, 'DTP', 'Diptheria Tetanus Pertussis', 'c', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anganwadis`
--
ALTER TABLE `anganwadis`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `aworkers`
--
ALTER TABLE `aworkers`
  ADD PRIMARY KEY (`wuid`),
  ADD KEY `aid` (`aid`);

--
-- Indexes for table `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`cuid`),
  ADD KEY `aid` (`aid`);

--
-- Indexes for table `dosages`
--
ALTER TABLE `dosages`
  ADD PRIMARY KEY (`did`),
  ADD KEY `vid` (`vid`);

--
-- Indexes for table `nutrition`
--
ALTER TABLE `nutrition`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `pregnants`
--
ALTER TABLE `pregnants`
  ADD PRIMARY KEY (`puid`),
  ADD KEY `aid` (`aid`);

--
-- Indexes for table `schemes`
--
ALTER TABLE `schemes`
  ADD PRIMARY KEY (`sid`,`sname`);

--
-- Indexes for table `vaccinations`
--
ALTER TABLE `vaccinations`
  ADD PRIMARY KEY (`tid`),
  ADD KEY `aid` (`aid`),
  ADD KEY `vid` (`vid`),
  ADD KEY `did` (`did`);

--
-- Indexes for table `vaccines`
--
ALTER TABLE `vaccines`
  ADD PRIMARY KEY (`vid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anganwadis`
--
ALTER TABLE `anganwadis`
  MODIFY `aid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dosages`
--
ALTER TABLE `dosages`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `nutrition`
--
ALTER TABLE `nutrition`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `schemes`
--
ALTER TABLE `schemes`
  MODIFY `sid` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vaccinations`
--
ALTER TABLE `vaccinations`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `vaccines`
--
ALTER TABLE `vaccines`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aworkers`
--
ALTER TABLE `aworkers`
  ADD CONSTRAINT `aworkers_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `anganwadis` (`aid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `children`
--
ALTER TABLE `children`
  ADD CONSTRAINT `children_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `anganwadis` (`aid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dosages`
--
ALTER TABLE `dosages`
  ADD CONSTRAINT `dosages_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `vaccines` (`vid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pregnants`
--
ALTER TABLE `pregnants`
  ADD CONSTRAINT `pregnants_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `anganwadis` (`aid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vaccinations`
--
ALTER TABLE `vaccinations`
  ADD CONSTRAINT `vaccinations_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `anganwadis` (`aid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vaccinations_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `vaccines` (`vid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vaccinations_ibfk_3` FOREIGN KEY (`did`) REFERENCES `dosages` (`did`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
