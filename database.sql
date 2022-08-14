CREATE TABLE "image_gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (500) NOT NULL,
	"description" VARCHAR (500) NOT NULL,
	"likes" INT NOT NULL
);

INSERT INTO "image_gallery"
	("path", "description", "likes")
VALUES
	('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '0'),
	('images/bby.jpeg', 'baby dragonite', '3001'),
    ('images/blast.jpeg', 'This took 3 years', '40000'),
    ('images/clefa.jpeg', 'shiny clefable', '5000'),
    ('images/dupe.jpeg', 'shiny dupe!', '8000'),
    ('images/gwyn.jpeg', 'Princess of Sunlight, Gwynevere', '150'),
    ('images/Patches.jpeg', 'PATCHES!', '120'),
    ('images/Piplup.jpeg', 'shiny piplup', '2500'),
    ('images/Plymouth.jpeg', 'Shiny dragonite', '3000'),
    ('images/Puppers.jpeg', 'Photo of my moms pupps', '6'),
    ('images/snips.jpeg', 'Shiny pinsir', '500'),
    ('images/willow.jpeg', 'Photo of jacks dog', '110');
    
SELECT * FROM "image_gallery";

UPDATE "image_gallery"
SET "likes" = "likes" +1
WHERE "id" = 10;