/*
Navicat MySQL Data Transfer

Source Server         : phpMyAdmin
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : nodeproject

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2018-05-03 17:47:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15671559817', '111111');
INSERT INTO `user` VALUES ('2', '15671559816', 'abcdefg');
INSERT INTO `user` VALUES ('3', '15671559815', 'lkdhhjss');
INSERT INTO `user` VALUES ('4', '15671559814', 'djheuehj');
