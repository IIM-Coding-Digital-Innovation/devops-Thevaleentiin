## URL
    Prod: https://devops-weather-app-prod.herokuapp.com/
    Preprod: https://devops-weather-app-preprod.herokuapp.com/
 
# Fonctionnement du déploiement:

   Mon projet est une application météo en React JS. ce n'est pas le projet que je voulais prendre à la base. Mon projet de base était plus complet que ça mais il datait de deux ans, j'ai eu problème pour le refaire marcher.
  J'ai donc décider de refaire le projet mais je n'ai pas eu le temps de le finir du tout c'est pour ça que le site n'affiche que la température et l'humiditié. J'ai simplement fais deux Branch une master et une preprod. Il est donc déployer sur Heroku. 
Pour les staging, j'utilise Minify CSS pour minifer les fichiers css, ensuite JsLinter pour vérifier la syntaxe de mon javascript. Ensuite je check mon site pour voir si il y a des liens cassé sur mon site et ensuite je deploy sur Heroku
