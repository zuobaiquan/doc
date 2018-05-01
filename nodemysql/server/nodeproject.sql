/*
Navicat MySQL Data Transfer

Source Server         : phpMyAdmin
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : nodeproject

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-04-29 22:57:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15671559817', '123456');
INSERT INTO `user` VALUES ('5', '15671559810', '111');
INSERT INTO `user` VALUES ('6', '15671559811', '1111');
