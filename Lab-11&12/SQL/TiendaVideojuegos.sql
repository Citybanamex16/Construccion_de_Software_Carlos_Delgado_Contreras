-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2026 a las 17:54:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `TiendaVideojuegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Comentarios`
--

CREATE TABLE `Comentarios` (
  `username` varchar(100) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Comentarios`
--

INSERT INTO `Comentarios` (`username`, `comment`, `fecha`) VALUES
('Carlos Delgado Contreras', 'Hola desde App', '2026-03-08'),
('Gael Rene Gonzales', 'Hola desde los comentarios', '2026-03-10'),
('Jhonathan Lugo', 'Basado', '2026-03-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Videojuego`
--

CREATE TABLE `Videojuego` (
  `nombre` varchar(250) NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `Descripción` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Comentarios`
--
ALTER TABLE `Comentarios`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `Videojuego`
--
ALTER TABLE `Videojuego`
  ADD PRIMARY KEY (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
