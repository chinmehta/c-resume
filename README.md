# c-resume

Resume Builder Application Using Angular Demonstrating Micro Frontends and Clean Architecture

## step 1: create workspace

ng new c-resume --createApplication

## step 2: switch to workspace

cd c-resume

## step 3: create micro apps 

ng generate application --routing --style scss main-app
ng generate application --routing --style scss login-signup
ng generate application --routing --style scss details-form
ng generate application --routing --style scss list-details
ng generate application --routing --style scss pick-template
ng generate application --routing --style scss display-resume
ng generate application --routing --style scss save-as-pdf