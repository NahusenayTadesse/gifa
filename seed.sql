-- Seeds Gifa Restaurant & Lounge content from gifa-lounge-website-copy.md.
-- Run AFTER `pnpm db:migrate` (or `db:push`) has created the tables.
--
--   mysql -u <user> -p <database> < seed.sql
--
-- Re-runnable: each section clears its table first, so re-seeding replaces
-- the content rather than duplicating it. Placeholder images reference files
-- already present in .tempFiles (served from /files/<name>) so pages render
-- without any uploads. Opening hours, the drinks list and Just Eat URL are
-- flagged [PLACEHOLDER] below — see the copy deck's [CONFIRM]/[NEEDS CLIENT
-- INPUT] markers and replace via the dashboard before launch.

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM `menu_items`;
DELETE FROM `menu_categories`;
DELETE FROM `page_heroes`;
DELETE FROM `gallery_images`;
DELETE FROM `faqs`;
DELETE FROM `site_settings`;
DELETE FROM `opening_hours`;
DELETE FROM `events`;
DELETE FROM `announcements`;

SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------- page heroes

INSERT INTO `page_heroes` (`page`, `eyebrow`, `title`, `title_accent`, `tagline`, `body`, `image`, `image_alt`) VALUES
('home',
 'Gifa Restaurant & Lounge',
 'Eritrean & Ethiopian, served the way it''s meant to be',
 ' — together.',
 NULL,
 'A restaurant and lounge on Seven Sisters Road. Slow-spiced stews on fresh injera, coffee roasted in front of you, and a room that''s happy to keep you late.',
 'hero.webp',
 'The dining room at Gifa Restaurant & Lounge'),
('menu',
 NULL,
 'Our Menu',
 NULL,
 NULL,
 'Everything on this menu is halal. Dishes marked Vegan are fully plant-based.',
 'image4.webp',
 'A slow-cooked stew, plated and garnished'),
('about',
 NULL,
 'About Gifa',
 NULL,
 NULL,
 'A little of home on Seven Sisters Road.',
 'image6.webp',
 'The interior of Gifa Restaurant & Lounge'),
('book',
 NULL,
 'Book a Table',
 NULL,
 NULL,
 'Reservations are recommended on Friday and Saturday evenings, and for any group of six or more.',
 'image8.webp',
 'A set table at Gifa Restaurant & Lounge'),
('private-hire',
 NULL,
 'Hire the Lounge',
 NULL,
 NULL,
 'Birthdays, engagements, name-days, memorials, work parties, community meetings — the lounge is yours.',
 'image10.webp',
 'Confetti and lights during a private event at Gifa'),
('contact',
 NULL,
 'Contact Us',
 NULL,
 NULL,
 '513 Seven Sisters Road, London N15 6EP.',
 'image13.webp',
 'A low-lit corner of the Gifa lounge'),
('gallery',
 'In the room',
 'Gallery',
 NULL,
 NULL,
 'The food, the coffee ceremony, the lounge after dark — a look at Gifa before you book.',
 'image13.webp',
 'A low-lit corner of the Gifa lounge');

-- ------------------------------------------------------------- menu content

INSERT INTO `menu_categories` (`id`, `name`, `slug`, `type`, `description`, `sort_order`) VALUES
(1, 'Breakfast', 'breakfast', 'food', 'Served with bread or injera.', 1),
(2, 'Vegan & Vegetarian', 'vegan-vegetarian', 'food', 'Entirely plant-based, and always on the table.', 2),
(3, 'Lamb', 'lamb', 'food', NULL, 3),
(4, 'Beef', 'beef', 'food', NULL, 4),
(5, 'Cocktails', 'cocktails', 'drink', '[PLACEHOLDER] The real cocktail list is the single highest-priority content gap — replace with Gifa''s actual menu.', 5),
(6, 'Beer & Wine', 'beer-wine', 'drink', '[PLACEHOLDER] Eritrean/Ethiopian beers, tej and a short wine list — confirm with the client.', 6),
(7, 'Coffee & Tea', 'coffee-tea', 'drink', 'Ethiopian coffee brewed the traditional way, and tea.', 7);

INSERT INTO `menu_items`
	(`category_id`, `name`, `description`, `price`, `is_vegan`, `is_vegetarian`, `is_spicy`, `allergens`, `is_available`, `is_signature`, `sort_order`) VALUES
-- Breakfast
(1, 'Ful Meselah', 'Broad beans slow-cooked and seasoned with sesame oil, topped with boiled egg and cheese, with fresh salad and bread.', 1099, false, true, false, '["gluten","egg"]', true, false, 1),
(1, 'Special Fata', 'Onion, tomato, chilli and meat with yoghurt and green chilli. The one to order when you''re properly hungry.', 1399, false, false, true, '[]', true, false, 2),
(1, 'Kicha Fitfit', 'Torn kicha bread folded through onion, tomato, oil and chilli powder.', 1099, true, true, true, '["gluten"]', true, false, 3),
(1, 'Egg Panini', 'Eggs, lettuce and chilli in French bread.', 1099, false, true, false, '["gluten","egg"]', true, false, 4),
-- Vegan & Vegetarian
(2, 'Bebi-Aynetu', 'The chef''s spread of vegetarian dishes, served together on injera. Entirely plant-based, and the easiest way to try a bit of everything.', 1599, true, true, false, '["gluten"]', true, true, 1),
(2, 'Shero', 'Ground split peas slow-cooked with turmeric and olive oil until velvety. Comfort food, vegan, and a Gifa regular''s order.', 1499, true, true, false, '[]', true, true, 2),
(2, 'Hamli', 'Spinach cooked with olive oil, garlic and chilli.', 1399, true, true, true, '[]', true, false, 3),
(2, 'Special Salad', 'Lettuce, potato, tomato, onion and pepper, dressed with olive oil and lemon.', 1399, true, true, false, '[]', true, false, 4),
-- Lamb
(3, 'Derek Tibs with Veg', 'Lean lamb cubes fried with onion, green chilli, olive oil and house spices, served with salad.', 1699, false, false, true, '[]', true, true, 1),
(3, 'Sada Tibs', 'Lamb cubes fried gently with onion, garlic, ginger and house spices.', 1699, false, false, false, '[]', true, false, 2),
(3, 'Keyih Tibs', 'The same lamb, cooked through berbere for a deeper, hotter finish.', 1799, false, false, true, '[]', true, false, 3),
(3, 'Injera Firfir with Meat', 'Lamb fried in mild spiced butter with onion and green chilli, folded through torn injera.', 1599, false, false, true, '["gluten"]', true, false, 4),
-- Beef
(4, 'Pasta Maccaroni', 'A quiet nod to Eritrea''s Italian century — pasta in a spiced beef sauce.', 1299, false, false, false, '["gluten"]', true, false, 1),
-- Cocktails [PLACEHOLDER]
(5, 'Gifa Old Fashioned', '[PLACEHOLDER] House whisky, honey wine reduction and bitters. Replace with the real recipe and price.', 1000, false, false, false, '[]', true, false, 1),
(5, 'Seven Sisters Spritz', '[PLACEHOLDER] Replace with the real recipe and price.', 1000, false, false, false, '[]', true, false, 2),
-- Beer & Wine [PLACEHOLDER]
(6, 'Asmara Lager', '[PLACEHOLDER] Eritrean lager. Confirm availability and price.', 500, false, false, false, '["gluten"]', true, false, 1),
(6, 'St George Lager', '[PLACEHOLDER] Ethiopian lager. Confirm availability and price.', 500, false, false, false, '["gluten"]', true, false, 2),
(6, 'Tej (Honey Wine)', '[PLACEHOLDER] Traditional Ethiopian honey wine. Confirm price and size.', 600, true, true, false, '["sulphites"]', true, false, 3),
-- Coffee & Tea
(7, 'Buna (Ethiopian Coffee)', 'Green beans roasted, ground and brewed to order, poured from a clay jebena.', 350, true, true, false, '[]', true, false, 1),
(7, 'Shai (Spiced Tea)', 'Black tea with warming spice.', 300, true, true, false, '[]', true, false, 2);

-- ------------------------------------------------------------------- gallery

INSERT INTO `gallery_images` (`src`, `title`, `alt_text`, `caption`, `place`, `context`, `is_featured`, `sort_order`) VALUES
-- Homepage background slideshow. Tag an image `hero` (and feature it) to add
-- it to the rotation behind the homepage headline — see the Gallery page.
('hero.webp', 'The room at golden hour', 'The dining room at Gifa Restaurant & Lounge', NULL, 'Main dining room', 'hero', true, 1),
('image5.webp', 'The lounge, lit up', 'A glowing ''Lounge'' sign at Gifa', NULL, 'The lounge', 'hero', true, 2),
('image3.webp', 'The coffee ceremony, up close', 'Coffee being poured from a clay jebena', NULL, 'Main dining room', 'hero', true, 3),
('image9.webp', 'A private event in full swing', 'Guests celebrating at a private hire night', NULL, 'The lounge', 'hero', true, 4),
('image13.webp', 'Low light seating', 'A low-lit corner of the Gifa lounge', NULL, 'The lounge', 'hero', true, 5),
('image1.webp', 'A shared plate', 'A shared platter of dishes at Gifa', 'Eating from the same plate — the Gifa way', 'Main dining room', 'food', true, 1),
('image2.webp', 'Vegetable stew platter', 'A vegetable stew platter, served family-style', 'Comfort food, entirely plant-based', 'Main dining room', 'food', true, 2),
('image4.webp', 'Shero, fresh from the pot', 'A hearty lentil stew, garnished with mint and egg', 'Comfort food, vegan, and a regular''s order', 'Main dining room', 'food', false, 3),
('image12.webp', 'Derek Tibs with salad', 'Lamb Derek Tibs served with fresh salad', NULL, 'Main dining room', 'food', false, 4),
('image3.webp', 'The coffee ceremony', 'Coffee being poured from a clay jebena', 'Roasted, ground and brewed in front of you', 'Main dining room', 'drink', true, 5),
('coffee.webp', 'Buna, ready to pour', 'Coffee poured into rows of cups during the ceremony', NULL, 'Main dining room', 'drink', false, 6),
('image14.webp', 'A cocktail poured at the bar', 'A cocktail being poured at the bar', '[PLACEHOLDER] swap once the real drinks list and photography land', 'The lounge', 'drink', false, 7),
('image5.webp', 'The lounge, lit up', 'A glowing ''Lounge'' sign at Gifa', 'The lounge after the plates are cleared', 'The lounge', 'interior', true, 8),
('image6.webp', 'The dining room', 'The main dining room at Gifa', NULL, 'Main dining room', 'interior', false, 9),
('image7.webp', 'The bar', 'A glimpse of the bar at Gifa', NULL, 'The lounge', 'interior', false, 10),
('image13.webp', 'Low light seating', 'A low-lit corner of the Gifa lounge', NULL, 'The lounge', 'interior', true, 11),
('hero.webp', 'The room at golden hour', 'The dining room at Gifa Restaurant & Lounge', NULL, 'Main dining room', 'interior', false, 12),
('image9.webp', 'A private event', 'Guests celebrating at a private hire night', 'A birthday night at Gifa', 'The lounge', 'event', true, 13),
('image10.webp', 'Confetti and lights', 'Confetti and lights during a private event at Gifa', NULL, 'The lounge', 'event', false, 14),
('image8.webp', 'A table set for the evening', 'A reserved table set for guests', NULL, 'Main dining room', 'event', false, 15),
('image11.webp', 'The team', 'Gifa front-of-house staff', NULL, NULL, 'team', false, 16);

-- ---------------------------------------------------------------------- faqs

INSERT INTO `faqs` (`page`, `question`, `answer`, `sort_order`) VALUES
('menu', 'Is everything halal?', 'Yes — the whole kitchen is halal.', 1),
('menu', 'What if I have an allergy?', 'Please tell your server about any allergies before ordering — we''ll talk you through every dish.', 2),
('menu', 'Does injera contain gluten?', 'Yes, unless you ask for our teff option — tell us when you order.', 3),
('book', 'Do you take walk-ins?', 'Yes — reservations are recommended on Friday and Saturday evenings, and for groups of six or more, but walking in is usually fine the rest of the week.', 1),
('book', 'Is my booking confirmed instantly?', 'Not automatically — we confirm every request by phone or email. Call us if you need a table in the next couple of hours.', 2),
('private-hire', 'Can you cater a fully vegan event?', 'Yes — Eritrean and Ethiopian cooking has been feeding vegans beautifully for centuries, and we build set menus around your guests.', 1);

-- ------------------------------------------------------------- site settings

INSERT INTO `site_settings`
	(`phone`, `email`, `address`, `instagram_url`, `facebook_url`, `just_eat_url`, `hero_heading`, `hero_sub`, `footer_blurb`, `delivery_enabled`) VALUES
('07950 786579',
 'gifalounge@gmail.com',
 '513 Seven Sisters Road, London N15 6EP',
 'https://instagram.com/gifalounge',
 'https://facebook.com/gifalounge',
 NULL,
 'Eritrean & Ethiopian, served the way it''s meant to be — together.',
 'A restaurant and lounge on Seven Sisters Road. Slow-spiced stews on fresh injera, coffee roasted in front of you, and a room that''s happy to keep you late.',
 'A warm North London home for Eritrean and Ethiopian food, coffee and late-evening lounge culture — seven minutes from Seven Sisters.',
 true);

-- ------------------------------------------------------------- opening hours
-- [PLACEHOLDER] Not published anywhere online per the copy deck audit — this
-- is the single highest-value fix before launch. Replace via the dashboard.

INSERT INTO `opening_hours` (`weekday`, `open_time`, `close_time`, `is_closed`) VALUES
(0, '12:00:00', '23:00:00', false), -- Sunday
(1, '12:00:00', '22:30:00', false), -- Monday
(2, '12:00:00', '22:30:00', false), -- Tuesday
(3, '12:00:00', '22:30:00', false), -- Wednesday
(4, '12:00:00', '23:00:00', false), -- Thursday
(5, '12:00:00', '00:00:00', false), -- Friday
(6, '12:00:00', '00:00:00', false); -- Saturday

-- ------------------------------------------------------------------- events

INSERT INTO `events`
	(`title`, `slug`, `description`, `event_type`, `starts_at`, `ends_at`, `poster_image`, `is_private_hire_example`, `ticket_url`, `booking_note`, `is_published`, `sort_order`) VALUES
('Eritrean New Year Night', 'eritrean-new-year-night', 'A private celebration in the lounge — full bar, live music and a set menu built around the guests.', 'private party', '2025-09-11 19:00:00', '2025-09-12 01:00:00', 'image9.webp', true, NULL, NULL, true, 1),
('Live Music Friday', 'live-music-friday', 'A live band through the evening — cocktails, low light and a room built for lingering.', 'live music', '2026-08-14 20:00:00', '2026-08-15 00:00:00', 'image5.webp', false, NULL, 'No booking needed — just walk in.', true, 2),
('DJ Night: Habesha Sounds', 'dj-night-habesha-sounds', 'A DJ set of Eritrean and Ethiopian classics alongside afrobeat, all night on the dancefloor.', 'DJ night', '2026-08-22 21:00:00', '2026-08-23 02:00:00', 'image10.webp', false, NULL, NULL, true, 3),
('Coffee Ceremony Evening', 'coffee-ceremony-evening', 'A slower night dedicated to the coffee ceremony — beans roasted table-side, incense in the room, and a chef''s spread to share.', 'coffee ceremony', '2026-09-05 18:30:00', '2026-09-05 22:00:00', 'image3.webp', false, NULL, 'Reservations recommended — the room seats a set number for this one.', true, 4),
('End of Summer Lounge Party', 'end-of-summer-lounge-party', 'The lounge stays open late to send off summer — resident DJ, full bar and a guest list of regulars.', 'DJ night', '2026-09-19 20:00:00', '2026-09-20 01:00:00', 'hero.webp', false, NULL, NULL, true, 5);
