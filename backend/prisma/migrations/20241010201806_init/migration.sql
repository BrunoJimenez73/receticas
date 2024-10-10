-- CreateTable
CREATE TABLE "Receta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT,
    "descripcion" TEXT,
    "autor" TEXT,
    "tiempoPrep" INTEGER,
    "dificultad" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "preparacion" TEXT NOT NULL,
    "fechaCreacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaModificacion" DATETIME NOT NULL
);
