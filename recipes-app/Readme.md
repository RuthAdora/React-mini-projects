- instructions.js

Here, we’ve created a new component called Instructions. We’ll pass the title of the instructions and the steps to this component. This way, we can reuse this component for “Cooking Instructions,” “Baking Instructions,” “Prep Instructions,” or a “Pre-cook Checklist”—anything that has steps.

- ingredients.js

Here, we assume each ingredient has an amount, a measurement, and a name. We destructure those values from our props object and display them each in independent classed span elements.

- ingredientsList.js

In this file, we first import the Ingredient component because we’re going to use it for each ingredient. The ingredients are passed to this component as an array in a property called list. Each ingredient in the list array will be mapped to the Ingre dient component. The JSX spread operator is used to pass all the data to the Ingredi ent component as props.

- Recipes.js

First, we import the components we’re going to use: IngredientsList and Instruc tions. Now we can use them to create the Recipe component. Instead of a bunch of complicated code building out the entire recipe in one place, we’ve expressed our recipe more declaratively by composing smaller components. Not only is the code nice and simple, but it also reads well. This shows us that a recipe should display the name of the recipe, a list of ingredients, and some cooking instructions. We’ve abstracted away what it means to display ingredients and instructions into smaller, simple components.

- menu.js

In a modular approach, the Menu component would look pretty similar. The key dif‐ ference is that it would live in its own file, import the modules it needs to use, and export itself:

- index.js

The first four statements import the necessary modules for our app to work. Instead of loading react and react-dom via the script tag, we import them so webpack can add them to our bundle. We also need the Menu component and a sample data array that has been moved to a separate module. It still contains two recipes: Baked Salmon and Fish Tacos.
All of our imported variables are local to the index.js file. When we render the Menu component, we pass the array of recipe data to this component as a property.

- Recipes.json

Now that we’ve pulled our code apart into separate modules and files, let’s create a build process with webpack that will put everything back together into a single file. You may be thinking, “Wait, we just did all of that work to break everything apart, and now we’re going to use a tool to put it back together? Why on Earth...?” Splitting projects into separate files typically makes larger projects easier to manage because team members can work on separate components without overlap. It also means that files can be easier to test.

- The starting file for our Recipes app is index.js. It imports React, ReactDOM, and the Menu.js file. This is what we want to run in the browser first. Wherever webpack finds an import statement, it will find the associated module in the filesystem and include it in the bundle. index.js imports Menu.js, Menu.js imports Recipe.js, Recipe.js imports Instructions.js and IngredientsList.js, and IngredientsList.js imports Ingredi‐ ent.js. Webpack will follow this import tree and include all of these necessary modules in our bundle. Traversal through all these files creates what’s called a dependency graph. A dependency is just something our app needs, like a component file, a library file like React, or an image. Picture each file we need as a circle on the graph, with webpack drawing all the lines between the circles to create the graph. That graph is the bundle.

* webpack.config.js

First, we tell webpack that our client entry file is ./src/index.js. It will automatically build the dependency graph based on import statements starting in that file. Next, we specify that we want to output a bundled JavaScript file to ./dist/bundle.js. This is where webpack will place the final packaged JavaScript.
