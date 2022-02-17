# CoinCaexTesting
## NOTA
Como nota, este proyecto se estableció en el sistema operativo Windows, por lo tanto, los comandos, que tienen rutas, varían y esto puede afectar.
Por Ejemplo:

WINDOWS:

```sh
{
    "open": ".\\node_modules\\.bin\\cypress open",
}
```

MAC:

```sh
{
    "open": "./node_modules/.bin/cypress open",
}
```
## Instalacion de paquetes
Ve a la carpeta del proyecto e utiliza el compando de instalacion
`cd CoinCaexTesting`
 `npm install`

## Ejecucion de Cypress
Para la ejecucion de Cypress se utiliza el comando `npm run open`

## Ejecucion de Cypress y su generador de reporte
Para la ejecucion de todos los test y su generador de reporte en formato HTML, se utiliza el comando `npm rungenerate-report`


### Paquetes

- [cypress](https://github.com/cypress-io/cypress#readme)
- [cypress-multi-reporterr](https://github.com/you54f/cypress-multi-reporters#readme)
- [mocha](https://github.com/mochajs/mocha#readme)
- [mocha-multi-reporters](https://github.com/stanleyhlng/mocha-multi-reporters#readme)
- [mocha-simple-html-reporter](https://github.com/blond/mocha-simple-html-reporter#readme)
- [mochawesome](https://github.com/adamgruber/mochawesome#readme)
- [mochawesome-merge](https://github.com/Antontelesh/mochawesome-merge#readme)
- [mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator#readme)

### Run Tests

Dos maneras de correr las pruebas.

- Headless Mode
- With CYPRESS UI

Para ejecutar las pruebas en 'Headless Mode' Debe ejecutar este comando:
![image](https://user-images.githubusercontent.com/23411606/154401231-6af4532a-f745-490b-a323-3708703cd00f.png)


```
npx cypress run
```

Para mas informacion [Headless Mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

Para ejecutar pruebas con la interfaz de usuario de CYPRESS, ejecute el siguiente comando

```
npm run open
```
Para mas informacion [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)


## Reporte
Para generar el informe, ejecute los siguientes comandos:
`npx cypress run`
`npm run merge`
`npm run marge`
<br>
Este resultado se encuentran el siguiente carpeta: 
`CoinCaexTesting/cypress/results/html/report.html`
<br>
Debería verse así: 

