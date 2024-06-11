### MAIN o PROD

## QA/Testing

## DEV

# Feature o Bugfix

Feature: la creamos cuando queremos agregar una caracteristica a una pagina
EJEMPLO: Desarrollo el formulario de login

Bugfix: la creamos par arreglar codigo no funcional
EJEMPLO: Arreglo validacion de password


git add .
git commit -m 'checkpoint-form-login'
git push -u feature/form-login
git checkout dev
git merge feature/form-login (nombre de la rama feature)
Probamos que todo este bien integrado en DEV
Despues eliminamos la rama feature/form-login tanto localmente como en github



### GITFLOW:

#### Crear una rama de desarrollo:

```bash

git checkout -b development

`

**Subir la rama de desarrollo:**

git push -u origin development

Hacer feature:

git checkout -b feature/nombre_de_la_feature
git add .
git commit -m "Mensaje descriptivo de la feature"
git push -u origin feature/nombre_de_la_feature

Una vez terminada la feature:

git checkout development
git merge feature/nombre_de_la_feature
git branch -d feature/nombre_de_la_feature
git push origin development
git push origin --delete feature/test