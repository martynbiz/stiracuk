# Foundation for Sites Template

## Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/martynbiz/stiracuk projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `gulp` to ensure that the compiler is working without errors. Run
`gulp watch` so that the compiler re-runs every time you save a scss/js file.

Use the dist/css/app.css and dist/js/app.js files in your project.

## Adding CSS/JS dependencies

Third party dependencies should be loaded via Bower prior to compiled/combined/etc
so they are not being versioned here. You can search for bower dependencies here:

https://bower.io/search/

For all other dependencies (including those not available to Bower) put into the
src/js folder.

Once the dependencies is available, add it to the gulpfile array so that it is
part of the compiled/combined/etc distribution:

For Javascript libraries:

'''javascript
var scripts = [
    //...
    'src/js/somerandom.js' // <-- added
    'src/js/app.js'
];
'''

For CSS libraries:

'''javascript
var styles = [
    //...
    'src/js/somerandom.css' // <-- added
    'src/js/app.css'
];
'''


TODO

Houston we have a problem - how to use <t4 media path tags in this setup?
