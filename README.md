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
