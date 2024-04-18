-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-02-2024 a las 04:44:31
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
(452, 'flexion romana, abierta,cerrda y en diamante', 'Flexiones de pecho', 3, 1),
(453, 'laterales y crunch', 'abdominales', 3, 6),
(454, 'bicicleta,sentadilla, zancadas', 'piernas', 2, 7),
(502, 'dominadas, remo y jale de barra', 'espalda', 4, 2);

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
(601);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impermeable`
--

CREATE TABLE `gym` (
  `correo` varchar(40) NOT NULL,
  `contrasena` varchar(20) NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `impermeable`
--

INSERT INTO `gym` (`correo`, `contrasena`, `id`) VALUES
('alicia12@gmail.com', '12345', 1953),
('anamariabarbosa@gmail.com', 'ano12345', 1602),
('ano12@gmail.com', 'ano123', 2002),
('diegomartinez@gmail.com', '12345', 1852),
('gringo1234@gmail.com', '12345678', 2103),
('gringo12@gmail.com', 'gringo123', 1552),
('hecto123112@gmail.com', '123443', 2055),
('hecto12312@gmail.com', '12345', 2053),
('hecto12@gmail.com', 'goku123', 1703),
('joseqw@hotmail.com', 'santiago124', 1402),
('mundoverdeong@hotmail.com', 'goku12345', 1652),
('sada@jaaj123', '213sas', 1802),
('u20212@sjkas.co', '1234t65', 1902),
('vegeta1222@hotmail.com', '444ssa', 1202);

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
(1);

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
(553, 'Santiago ', 'Barbosa', 'u20212200802@usco.edu.co', 'Calle 38 # 7 A 51', 23, 1003865544, '2003-02-01', 'Femenino', 'Cédula de ciudadanía', 'goli123'),
(554, 'Santiago José ', 'Barbosa Rivas', 'sbarbosarivas@gmail.com', 'Calle 38 # 7 A 51', 21, 1003865544, '2003-02-02', 'No binario', 'Cédula de ciudadanía', 'goku1234'),
(2252, 'diego', 'barbosa', 'mundoverdeong@hotmail.com', 'Calle 38 # 7 A 51 las granjas', 22, 10003, '2003-02-01', 'Masculino', 'Cédula de ciudadanía', '11231'),
(2302, 'Santiago ', 'Barbosa', 'u20212200802@usco.edu.co', 'calle musulman', 38, 2111, '2003-02-02', 'Masculino', 'Cédula de ciudadanía', 'sa123'),
(2402, 'snmasdn', 'jsdams', 'u1239129@gmail', 'calle musulman', 29, 123812, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', 'asd12'),
(2452, 'jose', 'arnulfo', 'jose12@hotmail.com', 'calle 80  # 20 cambulos', 22, 928212, '1999-03-02', 'Masculino', 'Cédula de ciudadanía', 'diego124'),
(2502, 'goku', 'barbosa', 'sa12@hotmail.com', 'calle 10', 25, 101002, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', 'santiago124'),
(2552, 'jose', 'rivas', 'gringo12@gmail.com', 'calle 40  7 a 72', 38, 10003574, '1989-03-02', 'Masculino', 'Cédula extranjera', 'gringo123'),
(2602, 'ana maria', 'Barbosa Rivas', 'anamariabarbosarivas@gmail.com', 'Calle 38 # 7 A 51', 18, 1076503926, '2004-04-05', 'Femenino', 'Cédula de ciudadanía', 'anibarbosa5'),
(2652, 'hector', 'ramirez', 'mundoverdeong@hotmail.com', 'calle 80  # 20 cambulos', 38, 1075235603, '1985-02-01', 'Masculino', 'Cédula de ciudadanía', 'goku123'),
(2702, 'fer', 'rivas', 'u20212200802@usco.edu.co', 'calle 80 # 20 cambulos', 42, 10033, '1980-02-01', 'Masculino', 'Cédula de ciudadanía', 'dsant12'),
(2752, 'diego', 'martinez', 'diegoas@gmail.com', 'calle 40', 25, 1923012, '1989-02-01', 'Masculino', 'Cédula de ciudadanía', '12312j'),
(2802, 'Santiago ', 'rivas', 'u20212200802@usco.edu.co', 'calle musulman', 21, 1003865544, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', 'sa123'),
(2852, 'alberto', 'barbosa Rivas', 'alberto123@gmail.com', 'calle 80  # 40 cambulos', 18, 1029391, '2000-02-01', 'Masculino', 'Cédula de ciudadanía', '12345'),
(2952, 'santigo ', 'barbosa', 'anitabarbosa05@hotmail.com', 'calle 80 # 20 cambulos', 18, 1003865544, '2003-02-01', 'Masculino', 'Cédula de ciudadanía', '123com');

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
(1);

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
(403, 'Completado', '2024-02-16 03:38:59.000000', '00:33', 4, 502);

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
(501);

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
('Diego Martinez ', '3217696864', 410001, 1003865522, 'Cédula de ciudadanía', 'calle musulman', 'Neiva', 'DAVIPLATA', 'Pijama Cubierta', 2, 82000, 123, 'diegomartinez@gmail.com'),
('santigo barbosa', '23213', 2141, 21312, 'Cédula extranjera', 'calle 80  # 20 cambulos', 'Bogotá', 'NEQUI', 'Impermeable', 1, 70, 102, 'gringo12@gmail.com'),
('ana rivas', '32176968', 81001, 1076503926, 'Cédula de ciudadanía', 'Calle 38 # 7 A 51 las granjas', 'Medellin', 'CONTRAENTREGA', 'Impermeable', 12, 770000, 202, '123@uscoe.edu.co'),
('ana maria barbosa ', '3217696864', 41221, 1003865544, 'Permiso  de permanencia', 'calle 80 # 20 cambulos', 'Medellin', 'CONTRAENTREGA', 'Impermeable', 1, 50000, 302, 'u2021222132@gmail.com'),
('Hector Ramirez', '3217696864', 410001, 1075235604, 'Permiso  de permanencia', 'calle 80 # 20 cambulos', 'Barranquilla', 'CONTRAENTREGA', 'Impermeable Para Moto', 2, 10000, 352, 'mundoverdeong@hotmail.com'),
('ana rivas', '3217696864', 410001, 1003865544, 'Permiso  de permanencia', 'Calle 38 # 7 A 51', 'Bogotá', 'BANCOLOMBIA', 'Sudadera Camuflada', 3, 120000, 402, 'gringo12@gmail.com'),
('jose goku', '3217696864', 41001, 10928319, 'Cédula extranjera', 'calle goku', 'cucuta', 'BANCOLOMBIA', 'Impermeable Siliconado 100%', 32, 1200000, 452, 'sadas12@asa'),
('santigo barbosa', '32131221', 412312, 21321, 'Cédula de ciudadanía', 'calle musulman', 'Medellin', 'DAVIPLATA', '>Sudadera camufladae', 1, 120900, 502, 'asdq1331@gmail.com'),
('leidy yisela', '28371298', 421312, 1232312, 'Cédula extranjera', 'calle 80 # 20 cambulos', 'Estados Unidos', 'CONTRAENTREGA', 'Protector Antideslizante', 4, 1000000, 552, 'leidye@madm.com'),
('sdasdad', '31232', 41001, 1003865544, 'Cédula de ciudadanía', 'calle 46', 'cartagena', 'BANCOLOMBIA', 'Protector Antideslizante', 1, 65000, 602, 'asda@gmail.com'),
('alberto Barbosa Rivas', '3106090707', 410001, 12117922, 'Cédula de ciudadanía', 'Calle 38 # 7 A 71 las granjas', 'Neiva', 'CONTRAENTREGA', 'Impermeable niños de coloroes', 1, 26910, 652, 'alberto123@gmail.com'),
('hector rivas', '321766590', 410001, 109128091, 'Cédula de ciudadanía', 'Calle 38 # 7 A 51 las granjas', 'Neiva', 'CONTRAENTREGA', 'Impermeable Siliconado 100%', 2, 65000, 702, 'hecto123112@gmail.com'),
('ana capurra', '3217696864', 41001, 1003865544, 'Cédula de ciudadanía', 'calle 49', 'neiva', 'NEQUI', 'Capa Plástica Desechable', 3, 99990, 752, 'sbarbosarivas@gmail.co');

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
(1);

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
-- Indices de la tabla `impermeable`
--
ALTER TABLE `impermeable`
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
