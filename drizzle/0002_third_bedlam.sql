CREATE TABLE `event_gallery` (
	`id` int AUTO_INCREMENT NOT NULL,
	`event_id` int NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `event_gallery_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `event_gallery` ADD CONSTRAINT `event_gallery_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE cascade ON UPDATE no action;