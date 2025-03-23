-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2025 at 04:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itm`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2025_03_18_043559_create_tasks_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(4, 'App\\Models\\User', 1, 'auth_token', 'cc76a37f0dd03d5bd34ccb2a4997528419aed8804a8bdfb7ea6162ce6ab11256', '[\"*\"]', '2025-03-17 22:51:15', NULL, '2025-03-17 22:31:14', '2025-03-17 22:51:15'),
(5, 'App\\Models\\User', 2, 'auth_token', '97decdce43dfcbfbd6165f60d02682d78d9c6816037c99ea3bcfc72937fd8a99', '[\"*\"]', '2025-03-17 23:57:05', NULL, '2025-03-17 23:43:22', '2025-03-17 23:57:05'),
(6, 'App\\Models\\User', 2, 'auth_token', 'edcee8280dcb30dc0f73f0add9e33a0ad6cb42148a82f6ed5aaf2cac9b2c0545', '[\"*\"]', '2025-03-18 00:25:29', NULL, '2025-03-17 23:58:32', '2025-03-18 00:25:29'),
(7, 'App\\Models\\User', 2, 'auth_token', '1d6d95e0d5283124d34b7e5d00ec27b472d90dbd64b540798fe41292fc60df3b', '[\"*\"]', '2025-03-18 01:31:11', NULL, '2025-03-18 00:25:58', '2025-03-18 01:31:11'),
(8, 'App\\Models\\User', 2, 'auth_token', 'ebc5772bc38b7a43f164907921551df74237a6473543ad0508dbf06f7b271c79', '[\"*\"]', '2025-03-18 01:39:44', NULL, '2025-03-18 01:39:44', '2025-03-18 01:39:44'),
(9, 'App\\Models\\User', 2, 'auth_token', '1772a5147e52d4bf0302564333b5aad69fe5f76f443c814ed06d5682152442ad', '[\"*\"]', '2025-03-18 20:59:38', NULL, '2025-03-18 01:50:31', '2025-03-18 20:59:38'),
(10, 'App\\Models\\User', 1, 'auth_token', '62ac9e0c9e5c71bbf8027d35ce8341dc203bc10678f741da15b2a468a334df04', '[\"*\"]', '2025-03-18 22:10:01', NULL, '2025-03-18 22:06:35', '2025-03-18 22:10:01'),
(11, 'App\\Models\\User', 2, 'auth_token', 'fe788b15ae68c3a5605ff255b70ea091b4540b73cb3ff35dcfd1cb0f872212a2', '[\"*\"]', '2025-03-20 03:44:06', NULL, '2025-03-20 03:44:02', '2025-03-20 03:44:06'),
(12, 'App\\Models\\User', 2, 'auth_token', 'e2df8a981d02e138200bd0bbefced80a217e7a9970f9cdd0d6e898caebbc674a', '[\"*\"]', '2025-03-20 03:44:37', NULL, '2025-03-20 03:44:04', '2025-03-20 03:44:37'),
(14, 'App\\Models\\User', 2, 'auth_token', '9724c4b676a04eb59fdec50837cb4b35a740f97dac5dd9597d71bb6138f24b9d', '[\"*\"]', '2025-03-22 21:08:34', NULL, '2025-03-22 21:08:32', '2025-03-22 21:08:34'),
(15, 'App\\Models\\User', 2, 'auth_token', 'ead5655a09a82268736806887ef3e1cbd2863fc405eb8ef4f13869cd96b76d45', '[\"*\"]', '2025-03-22 21:37:15', NULL, '2025-03-22 21:08:32', '2025-03-22 21:37:15'),
(16, 'App\\Models\\User', 3, 'auth_token', 'caf0add782c917707e172eb3cd0de0019767246a70654dfd31ff8ed5cf471285', '[\"*\"]', '2025-03-22 21:37:54', NULL, '2025-03-22 21:37:53', '2025-03-22 21:37:54');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` enum('To Do','In Progress','Done') NOT NULL,
  `due_date` date NOT NULL,
  `creator_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `status`, `due_date`, `creator_id`, `created_at`, `updated_at`) VALUES
(3, 'Complete Documentation', 'Write project documentation for the task manager', 'Done', '2025-03-20', 2, '2025-03-18 01:31:11', '2025-03-22 21:37:15'),
(4, 'Submit Project to ollyo', 'Submit Project to olyo', 'To Do', '2025-03-25', 2, '2025-03-22 21:37:09', '2025-03-22 21:37:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jane Doe', 'jane@example.com', NULL, '$2y$10$WaUIx4Gth0TID/j.nKZ9wO6lMoyR7A15qiJ55mJ0qn2feE.hVD9Ie', NULL, '2025-03-17 22:23:11', '2025-03-17 22:23:11'),
(2, 'Shahadath  Hossian', 'rabby410@gmail.com', NULL, '$2y$10$QEHyLPUL6clwlllCchzqpe5ap9iuApaZyxtYagOJVpv3bt0Av6RCK', NULL, '2025-03-17 23:43:22', '2025-03-17 23:43:22'),
(3, 'Hasan Masud', 'masud@unlock.com', NULL, '$2y$10$/tBotE0yIUBZ3zghBV6.qO2GQtmoeUa2zemzHNj5ypY6xG0Hf3Eb2', NULL, '2025-03-22 21:37:53', '2025-03-22 21:37:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_creator_id_foreign` (`creator_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_creator_id_foreign` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
