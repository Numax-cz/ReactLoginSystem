# ReactNodeJsLoginSystem
* Aplikace slouží jako ukázka!
* Hesla se nešifrují do databáze!
* Aplikace má základní kontrolu registrace!
***
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
* Nainstalujte balíčky pomocí `npm i`
* Balíčky musíte nainstalovat jak ve složce `client` tak `server`

***
## Jak nastavit porty?
* V souboru `client\.env.local` nastavení portu `React App`
* V souboru `.env` nastavení portu `serveru`
* Výchozí port react app: `3000`
* Výchozí port serveru: `3001`
***
## Jak nastavit post request?
* V souboru `client\src\ App.js`
* Neupravujte prosím /api/....
```js
const URL = "http://localhost:3001/api/register"; //Post pro register
const URLUser = "http://localhost:3001/api/usernamech"; //Post pro name checker
export const URLLoginPage = "http://localhost:3001/api/login" //Post pro login
```
***
## Jak nastavit mysql?
* V souboru `.env`  nastavit údaje od databáze
```
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASS=
DATABASE_DB=
```
* Použité parametry databáze:
```sql
CREATE TABLE `test`.`login` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL , `password` VARCHAR(500) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```
***
## Jak spustit server?
* Spuštění serveru ve `vývojářském režimu` (automatický restart serveru při změně)
```
npm run dev
``` 
* Spuštění serveru v `hostovaném režimu` (žádný restart při změně)
```
npm run start
``` 
***
## Jak spustit react app?
```
npm run start
``` 

