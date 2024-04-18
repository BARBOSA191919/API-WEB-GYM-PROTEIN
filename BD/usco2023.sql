-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-04-2024 a las 06:06:04
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
-- Base de datos: `usco2023`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diasemana`
--

CREATE TABLE `diasemana` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diasemana`
--

INSERT INTO `diasemana` (`id`, `nombre`) VALUES
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miércoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sábado'),
(7, 'Domingo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diasemana_seq`
--

CREATE TABLE `diasemana_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `diasemana_seq`
--

INSERT INTO `diasemana_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `id_dia_semana` int(11) NOT NULL,
  `id_zona_cuerpo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ejercicio`
--

INSERT INTO `ejercicio` (`id`, `descripcion`, `nombre`, `id_dia_semana`, `id_zona_cuerpo`) VALUES
(452, 'flexion romana, abierta,cerrda y en diamante', 'Flexiones de pecho', 1, 1),
(453, 'laterales y crunch', 'Abdominales', 1, 6),
(502, 'dominadas, remo y jale de barra', 'espalda', 6, 2),
(552, 'mancueras con martillo, mancuernas , flexiones', 'Biceps', 3, 4),
(602, 'Gluteos, Cuadriceps y Gemelos', 'Piernas', 0, 7),
(603, 'Gluteos, Cuadriceps y Gemelos', 'Piernas', 0, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio_seq`
--

CREATE TABLE `ejercicio_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ejercicio_seq`
--

INSERT INTO `ejercicio_seq` (`next_val`) VALUES
(701);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gym`
--

CREATE TABLE `gym` (
  `correo` varchar(40) NOT NULL,
  `contrasena` varchar(20) NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gym`
--

INSERT INTO `gym` (`correo`, `contrasena`, `id`) VALUES
('1121aa@gmail.com', 'SA1232', 303),
('anamariabarbosa222@gmail.com', 'sas123', 152),
('anamariabarbosa2321@gmail.com', '212312dsa', 402),
('anamariabarbosa554@gmail.com', 'fd12dssa1221', 352),
('anamariabarbosa@gmail.com', '2121sasad', 202),
('asa@gmail.com', 'akjaslk123', 452),
('askdjakd@hotmail.ccom', 'aletas134', 153),
('diegofer22@gmail.com', 'perra123', 2),
('diegofer@gmail.com', 'xss23', 204),
('gringo1222222@gmail.com', 'saas35', 252),
('gringo122222@gmail.com', 'sssrg', 102),
('sand@skaj', '2312sa', 352),
('sbarbosariva23@gmail.com', 'ssa2123', 302),
('sbarbosarivas1222s@gmail.com', '21312', 53),
('sbarbosarivas12@gmail.com', 'gonorrea123', 1),
('sbarbosarivas232113@gmail.com', 'sada', 153),
('sbarbosarivas32@gmail.com', 'dsdssd2334', 502),
('sbarbosarivas@gmail.com', '232', 402),
('u202122213222@gmail.com', 'ssas23', 202);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gym_seq`
--

CREATE TABLE `gym_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gym_seq`
--

INSERT INTO `gym_seq` (`next_val`) VALUES
(501);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impermeable_seq`
--

CREATE TABLE `impermeable_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `impermeable_seq`
--

INSERT INTO `impermeable_seq` (`next_val`) VALUES
(601);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(10) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `direccion` varchar(40) DEFAULT NULL,
  `edad` int(2) NOT NULL,
  `documento` int(11) NOT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `tipodocumento` varchar(255) DEFAULT NULL,
  `contra` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `email`, `direccion`, `edad`, `documento`, `fecha`, `sexo`, `tipodocumento`, `contra`) VALUES
(3, 'Santiago ', 'Barbosa', 'u20212200802@usco.edu.co', 'Calle 38 # 7 A 51', 32, 312312, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', '21312q'),
(4, 'Santiago José ', 'Barbosa', 'anitabarbosa05@hotmail.com', 'Calle 38 # 7 A 51 las granjas', 32, 312312, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', 'saxzz1231221'),
(52, 'Santiago ', 'Barbosa', 'u20212200802@usco.edu.co', 'calle 80  20 cambulos', 24, 23, '2002-02-01', 'Masculino', 'Cédula de ciudadanía', 'ew2'),
(102, 'asdsda', 'Barbosa', 'u20212200802@usco.edu.co', 'Calle 38 # 7 A 51', 23, 2312, '1999-02-01', 'Masculino', 'Cédula de ciudadanía', '1212sa'),
(152, 'snasa', 'barb', 'zxx@gmail.com', 'casca', 23, 1029, '2001-02-01', 'Masculino', 'Cédula de ciudadanía', 'sasa12'),
(202, 'Santiago ', 'Barbosa', 'sbarbosarivas12@gmail.com', 'calle 50', 19, 100386544, '2004-02-01', 'Masculino', 'Cédula de ciudadanía', '12345'),
(252, 'Santiago ', 'Barbosa', 'u2021220080222@usco.edu.co', 'calle 80  20 cambulos 12', 22, 21321, '2003-02-01', 'Masculino', 'Cédula de ciudadanía', '2221'),
(302, 'santua', 'basa', 'anitabarbosa0512312@hotmail.com', 'calle musulman21323', 19, 32322, '2003-01-01', 'Masculino', 'Cédula de ciudadanía', '122312');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas_seq`
--

CREATE TABLE `personas_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas_seq`
--

INSERT INTO `personas_seq` (`next_val`) VALUES
(401);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_actividad`
--

CREATE TABLE `registro_actividad` (
  `id` int(11) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha` datetime(6) DEFAULT NULL,
  `tiempo_total` varchar(255) DEFAULT NULL,
  `id_dia_semana` int(11) NOT NULL,
  `id_ejercicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro_actividad`
--

INSERT INTO `registro_actividad` (`id`, `estado`, `fecha`, `tiempo_total`, `id_dia_semana`, `id_ejercicio`) VALUES
(361, 'Completado', '2024-02-15 00:00:39.000000', '00:30', 3, 452),
(402, 'Completado', '2024-02-16 03:38:14.000000', '00:15', 4, 454),
(403, 'Completado', '2024-02-16 03:38:59.000000', '00:33', 4, 502),
(452, 'Completado', '2024-02-16 22:31:46.000000', '00:16', 5, 552),
(502, 'Completado', '2024-03-18 22:03:00.000000', '00:03', 1, 452),
(552, 'Completado', '2024-03-30 03:55:39.000000', '00:06', 5, 502),
(553, 'Completado', '2024-03-30 03:55:42.000000', '00:01', 5, 552),
(554, 'Completado', '2024-03-30 03:55:44.000000', '00:11', 5, 502),
(555, 'Completado', '2024-03-30 03:57:10.000000', '01:05', 5, 502),
(602, 'Completado', '2024-03-30 18:31:25.000000', '00:15', 6, 552),
(603, 'Completado', '2024-03-30 18:40:39.000000', '00:16', 6, 502),
(652, 'Completado', '2024-04-14 18:01:29.000000', '00:07', 7, 454),
(702, 'Completado', '2024-04-17 22:26:38.000000', '00:17', 3, 552);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_actividad_seq`
--

CREATE TABLE `registro_actividad_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro_actividad_seq`
--

INSERT INTO `registro_actividad_seq` (`next_val`) VALUES
(801);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `nombres` varchar(30) NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `codigopostal` int(8) NOT NULL,
  `documento` int(11) NOT NULL,
  `tipodocumento` varchar(30) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `tipopago` varchar(30) NOT NULL,
  `tipoproducto` varchar(100) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `precio` float NOT NULL,
  `id` int(11) NOT NULL,
  `correo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`nombres`, `telefono`, `codigopostal`, `documento`, `tipodocumento`, `direccion`, `ciudad`, `tipopago`, `tipoproducto`, `cantidad`, `precio`, `id`, `correo`) VALUES
('ana rivas', '32323', 3213, 1312, 'Cédula de ciudadanía', 'calle musulman', 'Medellin', 'NEQUI', 'Pantaloneta X2 Licra ', 2, 33330, 152, 'diegofer@gmail.com'),
('ana maria barbosa ', '321312', 342, 34212, 'Cédula de ciudadanía', 'Calle 38 # 7 A 51', 'Bogotá', 'NEQUI', 'Proteina Whey Standard 2 LB', 222, 33330, 252, 'gringo12@gmail.com'),
('santiago', '219821', 1821, 192190, 'Cédula de ciudadanía', 'sakmlakcml', 'neiva', 'NEQUI', 'Proteina Whey Standard 2 LB', 2, 30022300, 352, 'assda@gmail.com'),
('ana maria barbosa ', '232', 4121, 2132, 'Cédula de ciudadanía', 'sadasds', 'Medellin', 'DAVIPLATA', 'Proteina Whey Standard 2 LB', 2, 50000, 402, 'sbarbosarivas@gmail.com'),
('ana maria barbosa ', '23', 231, 32321, 'Cédula de ciudadanía', 'Calle 38 # 7 A 51', 'Bogotá', 'NEQUI', 'Proteina Whey Standard 2 LB', 212, 4440, 452, 'u2021222132@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_seq`
--

CREATE TABLE `ventas_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_seq`
--

INSERT INTO `ventas_seq` (`next_val`) VALUES
(551);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona_cuerpo`
--

CREATE TABLE `zona_cuerpo` (
  `id` int(11) NOT NULL,
  `ejercicios` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `zona_cuerpo`
--

INSERT INTO `zona_cuerpo` (`id`, `ejercicios`, `nombre`) VALUES
(1, 'Press de banca, Flexiones, Pullover, Fondos en paralelas', 'Pectorales'),
(2, 'Dominadas, Remo con barra, Peso muerto, Pull-over', 'Espalda'),
(3, 'Press militar, Elevaciones laterales, Pájaros, Remo al mentón', 'Hombros'),
(4, 'Curl de bíceps con barra, Curl martillo, Curl de concentración, Curl de predicador', 'Bíceps'),
(5, 'Press francés, Fondos en banca, Extensión de tríceps, Patada de tríceps', 'Tríceps'),
(6, 'Crunch, Plancha abdominal, Elevación de piernas, Giros rusos', 'Abdominales'),
(7, 'Sentadillas, Prensa de piernas, Zancadas, Elevación de talones', 'Piernas'),
(8, 'Peso muerto rumano, Puente de glúteos, Patada de glúteos, Sentadilla sumo', 'Glúteos'),
(9, 'Elevación de talones, Burro sentado, Máquina de pantorrillas, Salto de pantorrilla', 'Pantorrillas'),
(10, 'Encogimientos con barra, Encogimientos con mancuernas, Elevaciones de hombros, Pájaros con mancuernas', 'Trapecios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona_cuerpo_seq`
--

CREATE TABLE `zona_cuerpo_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `zona_cuerpo_seq`
--

INSERT INTO `zona_cuerpo_seq` (`next_val`) VALUES
(1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `diasemana`
--
ALTER TABLE `diasemana`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gym`
--
ALTER TABLE `gym`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registro_actividad`
--
ALTER TABLE `registro_actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `zona_cuerpo`
--
ALTER TABLE `zona_cuerpo`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
