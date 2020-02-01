# WeatherReport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




### Run the following script

npm install
npm run dev -- runs the node server (http://127.0.0.1:9000/) with the angular application (http://localhost:4200/)

### Components flow

   # app.component 

     ---   weather-report.component lazy loaded in the router-outlet

   # weather-report.component 

    --- added with data-grid.component (reusuable component used to list the city and hourly weather report)

   # data-grid.component 

    --- has the following inputs 

            * dataToRender$ - an observable of data to be rendered
            * displayedColumns - list of columns to be rendered (from constant.ts)
            * showAction - to show or hide action button
            * buttonLabel - label to be shown in the button is rendered
            

    --- has the following events

            * showHourlyDetails - to load the hourly weather report


### Other details

    ## server.js - Node server

    ## proxy.config.json - Proxy settings

    ## Ngrx - used for state maintenenace

            # app-state.model

                        -- it contains the Appstate.
                        

    ## assets/constants.ts
    
        -- it consists of some details lile city names and the columns to render on the data-grid component
    
    ## shared/selectors.ts

    -- it contains the Ngrx selectors that filter out the details that are to be rendered in the reporting table

    ## shared/async-observable-helpers

    -- unit test mocking async data
