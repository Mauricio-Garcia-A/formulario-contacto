instala en el Linter
    npm install ts-standard -D

Configuracion del linterd (en el archivo '.eslintrc.json' copiar la sigiente configuarion):

    {
    "extends": [
        "next/core-web-vitals",
        "./node_modules/ts-standard/eslintrc.json"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off"
    }
    }
____________________

Utilizamos BD de vercel (KV database) con el nombre contact-form

para ello creamos un proyecto nuevo en vercel, con el comando: 
(npm i -g vercel)

   - vercel link
   - vercel env pull
   - npm install @vercel/kv

-------------------
Instalamos SONNER para mostras en pantalla si las llamadas a la api se hicieron con exito
 - npm install sonner


 --------------
 instala en confetti:
 - npm i canvas-confetti -E
 - npm i --save-dev @types/canvas-confetti

 ----------
 Ahora utilizamos una BD de vercel para datos mas complejos (Postgres database). creamos la BD con el nombre contact-form en la web de vercel y la conectamos con el proyecto.
 En la web creamos la tabla con el comando SQL:
 CREATE TABLE messages (
    id serial PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    message varchar(255),
    created_at timestamp DEFAULT NOW(),
 )

 - vercel env pull .env.development.local
 - npm install @vercel/postgres

 

