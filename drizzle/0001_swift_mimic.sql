CREATE TABLE `event_registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`event_id` int NOT NULL,
	`name` varchar(120) NOT NULL,
	`phone` varchar(32),
	`email` varchar(180) NOT NULL,
	`guests` tinyint NOT NULL DEFAULT 1,
	`notes` text,
	`status` enum('new','confirmed','cancelled') NOT NULL DEFAULT 'new',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `event_registrations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `event_registrations` ADD CONSTRAINT `event_registrations_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE cascade ON UPDATE no action;