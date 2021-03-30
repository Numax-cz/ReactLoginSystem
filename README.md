# ReactNodeJsLoginSystem
* Aplikace slouží jako ukázka!
## Použité balíčky 

# Potřebné nastavení

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



