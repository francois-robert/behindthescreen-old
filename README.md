# Tester le front React avec Cypress et Cucumber

Proof of concept de la possibilité de tester un projet React avec Cypress et Cucumber.

## Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn cy-ct:run`

Lance les tests des composants React (pour en savoir plus : [https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/) )

Il est aussi de lancer ces tests cypress de manière intéractive avec la commande
```
yarn cy-ct:open
```

### `yarn cuke:run`

Lance le serveur (**ATTENTION** : le port 3006 doit être libre!!) puis les tests cucumber avec [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor).

Les features doivent être placées dans `cypress/integration` et les définitions de step doivent être codées dans un dossier ayant le nom de la feature. Il est aussi possible d'avoir des step commun dans le dossier `cypress/integration/common`

**Exemple** : Pour la feature `cypress/integration/Homepage.feature`, les steps doivent être définis dans le dossier `cypress/integration/homepage`

**Introduction rapide à cucumber** : [https://cucumber.io/docs/guides/overview/](https://cucumber.io/docs/guides/overview/)

Il est aussi de lancer ces tests cypress de manière intéractive avec la commande
```
yarn cuke:open
```

### `yarn test`

```
yarn cy-ct:run && yarn cuke:run
```