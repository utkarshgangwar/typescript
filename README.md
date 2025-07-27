# NOTES

**TO RUN THE FILES**
*ts-node <file_name.ts>*

_npm install --save-dev @types/node_
**This is to install type definitions for node**
Also, Typescript 5.6 introduced some breaking changes a few weeks ago related to imports. ts-node is currently not in sync with this since it has not seen an update since 2023.
To address this, please install the latest 5.5 version of TypeScript:
_npm uninstall -g typescript_
_npm install -g typescript@5.5_
Otherwise, you will find persistent "Cannot use import statement outside a module" errors.

**1. A First App: fetchjson**
[link to Fake JSON API](https://jsonplaceholder.typicode.com/)

**_Interface_**
_Interface in typescript are used to define the structure of an object_

**_Type_**
_Easy way to refer to the different properties + functions that a value has_
- Two Types
    - Primitive
        - number
        - string
        - boolean
        - null
        - undefined
        - symbol
    - Object Types
        - functions
        - object
        - array
        - classes

**String**

- Properties + Methods a 'string' has
  - charAt()
  - charCodeAt()
  - concat()
  - includes()
  - endsWith()
  - indexOf()
  - lastIndexOf()
  - localeCompare()
  - match()

**Type Annotations**
*- Code we add to tell Typescript what type of value a variable will refer to*

**Type Inference**
*- Typescript tries to figure out what type of value a variable refers to*

**- functions**
**- objects**
**- arrays**
**- Pipes**


