# ReactNodeJsLoginSystem
* Aplikace slouží jako ukázka!
## Použité balíčky 
* body-parser@1.19.0
* cors@2.8.5
* dotenv@8.2.0
* express@4.17.1
* mysql@2.18.1
* nodemon@2.0.7
* @testing-library/jest-dom@5.11.10
* @testing-library/react@11.2.5
* @testing-library/user-event@12.8.3
* axios@0.21.1
* bootstrap@4.6.0
* react@17.0.2
* react-dom@17.0.2
* react-router-dom@5.2.0
* react-scripts@4.0.3
* web-vitals@1.1.1

# Potřebné nastavení
## Npm install
* Ve složce `client` a server nainstalujte balíčky pomocí `npm i`

## Jak nastavit porty?
* V souboru `client\.env.local` nastavení portu react app
* V souboru `.env` nastavení portu serveru `SERVER_PORT`

## Jak nastavit post request?
* V souboru `client\src\ App.js`
```js
const URL = "http://localhost:3001/api/register"; //Post pro register
const URLUser = "http://localhost:3001/api/usernamech"; //Post pro kontrolu jména
```
* Url na post
* Port na kterém běží server 
* `/api/register` - app post
* Výchozí port react app: `3000`
* Výchozí port serveru: `3001`

## Jak nastavit mysql?
* V souboru `.env` 
```mysql
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASS=
DATABASE_DB=test
```



