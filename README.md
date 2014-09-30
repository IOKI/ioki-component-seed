ioki-component-seed
===================
IOKI component seed is ready to use environment for developers who want to release their own packages for bower package manager.
It has built in Grunt tasks for easier development and releasing the package.

Be sure to use:

* ``` npm install ```
* ``` bower install ```

Before you start.

## Setup a project
Simply type to your terminal ``` grunt ```

## Features
Built in features, mostly already configured grunt tasks:

* Livereload on server
* JSHint
* Compass
* Concatenation of files
* Uglify
* ngAnnotate
* ngtemplates

## Directories structure
Here is short description of where you should keep your files.

    project/
        demo/                        // directory for development
            css/                     // you can treat it as user's environment
            js/                      // it could be kind of demo how to use
            template/                // your component
            app.js
            development.html
        src/                         // source of your component
            js/
            scss/

## Configuration
To configure your component you need to rename a few files and some occurrences in the code.

You should simply refactor all files and change name of your component by replacing

    COMPONENT_SEED

to for example:

    treeview / keyboard-manager etc...

Please configure also ```package.json``` and add proper description for your component.

## Release - preparation
If you want to prepare a package for release it's good to use one of built in grunt tasks.

Use: ``` grunt release ```

The output of this operation are four files in main directory:

* ioki-nameOfComponent.css
* ioki-nameOfComponent.min.css
* ioki-nameOfComponent.js
* ioki-nameOfComponent.min.js

They are well prepared for releasing.

## Release
There are some steps you need to do:

1) Please look at files:

*  ```bower.json```
*  ```package.json```
*  ```README.md```

and make sure you increase version of your component.

2) Be sure you run ``` grunt release``` task.

3) Commit your changes to github with some neat description e.g. "Release 0.1.2 Name of version or crucial changes".

4) Tag your repositorium with proper version e.g.

    git tag -a v0.1.2 -m "Release version 0.1.2"

5) Push your tag to the repositorium

    git push origin v0.1.2

## Using component
Provide docs how to use your component but for sure users need to have something like this in their ```bower.json``` files:

    "ioki-YOUR_COMPONENT": "git://github.com/IOKI/ioki-YOUR_COMPONENT.git#0.1.2"

## Documentation
It would be nice to provide some documentation and examples for other developers who want to use your component.

This section will be updated in near future with some standards.