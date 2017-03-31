# Foundation for Sites Template

## Manual Setup

To manually set up the project, first clone it with Git:

```bash
git clone https://[user]@gitlab.com/stiracuk/f6dtp.git projectname
```

Then open the folder in your command line, and install the required dependencies:

```bash
cd projectname
npm install
bower install
```

## Usage

Running `gulp` will watch for any changes to scss/css/js files and run Gulp tasks
when needed.

When working primarily in development, run `gulp --env development` for Gulp to
do some additional tasks such as sourcemaps and supress minification of js and css
to aid debugging.

Use the dist/css/app.css and dist/js/app.js files in your project.

## browserSync (optional)

BrowserSync enables synchronised browser testing. When files are saved, the CSS and
JS is updated automatically without need for a page reload. Try it out, it's dope!

```
gulp --browserSync
```

## Adding Foundation components (e.g. dropdowns)

Unused Foundation components should be commented out in the src/scss/app.scss
file. To re-introduce these, uncomment them and allow Gulp to recompile, etc.

## Adding CSS/JS dependencies

Third party dependencies should be loaded via Bower prior to compiled/combined/etc
so they are not being versioned here. You can search for bower dependencies here:

https://bower.io/search/

For all other dependencies (e.g. those not available to Bower) put into the src/css
and src/js folder.

Once the dependencies is available, add it to the gulpfile array so that it is
part of the compiled/combined/etc distribution:

For Javascript libraries:

```javascript
var scripts = [
    //...
    'src/js/somerandom.js' // <-- added
    'src/js/app.js'
];
```

For CSS libraries:

```javascript
var styles = [
    //...
    'src/css/somerandom.css' // <-- added
    'src/css/app.css'
];
```
