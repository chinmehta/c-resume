# c-resume

Resume Builder Application Using Angular Demonstrating Micro Frontends and Clean Architecture

## step 1: create workspace

> ng new c-resume --createApplication

## step 2: switch to workspace

> cd c-resume

## step 3: create micro apps 
```
> ng generate application --routing --style scss main-app
> ng generate application --routing --style scss login-signup
> ng generate application --routing --style scss details-form
> ng generate application --routing --style scss list-details
> ng generate application --routing --style scss pick-template
> ng generate application --routing --style scss display-resume
> ng generate application --routing --style scss save-as-pdf
```
## step 4: add ng-micro-frontend 
```
> ng add ng-micro-frontend --project main-app --type shell --port 4200
> ng add ng-micro-frontend --project login-signup --type micro --port 4210
> ng add ng-micro-frontend --project details-form --type micro --port 4220
> ng add ng-micro-frontend --project list-details --type micro --port 4230
> ng add ng-micro-frontend --project pick-template --type micro --port 4240
> ng add ng-micro-frontend --project display-resume --type micro --port 4250
> ng add ng-micro-frontend --project save-as-pdf --type micro --port 4260 
```