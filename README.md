# PetsTag

## 原有项目

[手把手教你用ngrx管理Angular状态](https://github.com/fezaoduke/TranslationInstitute/blob/master/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E7%94%A8ngrx%E7%AE%A1%E7%90%86Angular%E7%8A%B6%E6%80%81.md)

### 变动

1. 没有路由守卫，**正常运行**。
2. 增加了`StoreDevtoolsModule`模块，可以使用`redux dev tool`调试状态。

### 注意

ng 版本为4

``` JS
"@ngrx/core": "^1.2.0",
"@ngrx/store": "^2.2.1",
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
