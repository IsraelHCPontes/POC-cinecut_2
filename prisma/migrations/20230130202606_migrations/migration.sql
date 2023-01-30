-- CreateTable
CREATE TABLE "director" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "director_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "directorId" INTEGER NOT NULL,
    "studioId" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "studio_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("directorId") REFERENCES "director"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("studioId") REFERENCES "studio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
