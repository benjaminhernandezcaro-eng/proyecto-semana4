Resolución del conflicto

Primero se modificó la misma línea del elemento <h1> en la rama feature/estructura-base, cambiando el título del proyecto, y se realizó un commit.

Después se cambió a la rama feature/menu-navegacion y se modificó la misma línea del <h1> con un texto diferente. También se realizó un commit.

Posteriormente se cambió a la rama develop y se realizó un merge de feature/estructura-base. Luego se intentó fusionar feature/menu-navegacion.

Git detectó un conflicto porque las dos ramas habían modificado la misma línea. Se abrió index.html y se localizaron las marcas <<<<<<<, ======= y >>>>>>>.

Se compararon las dos versiones y se creó una versión final del título. Después se eliminaron las marcas del conflicto y se guardó el archivo.

Finalmente se ejecutaron git add index.html y git commit para confirmar la resolución del conflicto.