# Team Cook

## POV

> **Self-boarding students who have trouble following conventional recipes** need to **refine existing recipes** because **beginners find it hard to apply recipes to their situations**.



## Tasks

1. Input the ingredients that user has or wants to add and receive suggested recipes.
2. For a chosen recipe, input the amount of ingredients (required for the recipe) that user has and receive a modified recipe.
3. Input time that user can spend in cooking and receive a modified recipe.




## Prototype

### Link to the Prototype
https://www.figma.com/proto/k70trkAKj1chJ7dkJi9vQv/CS374-DP3?node-id=23%3A61&scaling=min-zoom

### Prototyping Tool
We chose to use ***Figma*** for the prototyping tool. ***Figma*** is simple but powerful tool for collaborative interface design. We could easily gather the design idea in the tool, but some complex interactions like calculation with the input are hard to work with the tool.

### Design Choices
We chose NOT to implement
1. Algorithms for recipe suggestion and amount calculation, because Wizard-of-Oz can replace it.
2. Text Input of amount, because it is hard to implement in the prototyping tool.


### Representative Screenshots
<img src="./img/screenshot1.png" width="600" height="400">
User can check ingredients that user wants and get suggestion from the selection.

<img src="./img/screenshot2.png" width="300" height="300">
Also there are some pre-made sets for convenience.

<img src="./img/screenshot3.png" width="600" height="400">
Recipes have Ingredients part and Steps part.

<img src="./img/screenshot4.png" width="300" height="200">
User can input the amounts of ingredients that user wants to use.

<img src="./img/screenshot5.png" width="600" height="200">
The amount of ingredients of the recipe is changed with proper ratio of ingredients based by user's input. Also, the food amount is changed from 2 people to 4 people.

<img src="./img/screenshot6.png" width="600" height="400">
By dragging the slide button of estimated time, user can control the time required for cooking. With the time, recipe is simplified by skipping or combining some steps.



## Observations

### Participants


## Studio Reflections

(TA/Eunyoung) Be prepared to the question on the ‘data’ and ‘algorithm’ part which are necessary to your system. You dont’ have to get/implement that but you should be able to explain why you assume something or use something. 
(TA/Eunyoung) How much modification of a recipe is allowed? For example, it is possible that I say I want to make a pizza in 10 minutes? → So it’s basically a question about how the system communicate w/ user on what is possible or not, and what is the consequence of the modification.
(Self-Chef/ Hyejin) Actually, there are already some services which suggest possible recipes using specific ingredients, so It’d be better if you make more ‘special points’ in your service! For example, you can refer to this page (https://haemukja.com/refrigerator) or some apps! <-wow
(Beagles/Jungwon) What if you include tools?(Oven, Wok, etc) for cooking when providing recipe recommendation? not only the ingredients.
(NYTM/Yoonjeong) What if make user can add or revise the recipes and ingredients?
(Beagles/Woojin) What if difficulties of recipes are also provided?



   - Solution



