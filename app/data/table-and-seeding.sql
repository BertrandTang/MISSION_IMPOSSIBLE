BEGIN; 

DROP TABLE IF EXISTS "agent";

CREATE TABLE "agent" (

"id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"username" varchar NOT NULL UNIQUE,
"password" varchar NOT NULL, 
"created_at" timestamptz NOT NULL DEFAULT now(),
"updated_at" timestamptz
);

INSERT INTO 
"agent" ("username","password")
VALUES 
('e.hunt', '$2a$10$RmDdiawU2bWRB1COIaGKIOv5Uw8j2wZrlKP4/Fm.wZsBQuKi1ba6m');

COMMIT; 