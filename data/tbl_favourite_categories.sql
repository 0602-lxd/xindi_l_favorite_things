-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2020-12-15 03:07:05
-- 服务器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `db_favourite`
--

-- --------------------------------------------------------

--
-- 表的结构 `tbl_favourite_categories`
--

DROP TABLE IF EXISTS `tbl_favourite_categories`;
CREATE TABLE IF NOT EXISTS `tbl_favourite_categories` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `type` varchar(15) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `avatar` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tbl_favourite_categories`
--

INSERT INTO `tbl_favourite_categories` (`ID`, `name`, `type`, `reason`, `description`, `avatar`) VALUES
(1, 'Almond Blossom', 'Oil on Canvas', 'I love Vincent Willem van Gogh when I was young. This painting creates the joy of spring.', 'It is painted in 1980 in French. Flowering trees were special to van Gogh. They represented awakening and hope. He enjoyed them aesthetically and found joy in painting flowering trees.', 'painting.jpg'),
(2, 'Spicy Hotpot', 'Chinese Food', 'I love spicy food very much and hotpot is delicious and convenient!', 'While a hot pot full of flavored broth is kept simmering, raw ingredients are placed into the pot and are cooked in a manner similar to fondue.delicious!', 'hotpot.jpg'),
(3, 'Pride and Prejudice', 'Novel of manner', 'it is a classic love story and it set the pattern for a modern popular love story.', 'Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.', 'book.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
