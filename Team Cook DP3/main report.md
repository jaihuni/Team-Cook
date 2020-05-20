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
1. Algorithms for the recipe suggestion, the amount calculation, and editing the recipe. Response is hard-coded and always same. We provided a fixed suggestion and recipe based on the user scenario, and give testers the scenario instead of there real needs.
2. Text input of amount, because it is hard to implement in the prototyping tool.

### Representative Screenshots

#### Task 1

<img src="/img/Screenshot1.PNG" width="600" height="350">
User can check ingredients that user wants and get suggestion from the selection.

<img src="/img/Screenshot2.PNG" width="400" height="300">
Also there are some pre-made sets for convenience.



#### Task 2

<img src="/img/Screenshot3.PNG" width="600" height="400">
Recipes have Ingredients part and Steps part.

<img src="/img/Screenshot4.PNG" width="400" height="200">
User can input the amounts of ingredients that user wants to use.

<img src="/img/Screenshot5.PNG" width="700" height="200">
The amount of ingredients of the recipe is changed with proper ratio of ingredients based by user's input. Also, the food amount is changed from 2 people to 4 people.

#### Task 3

<img src="/img/Screenshot6.PNG" width="800" height="400">
By dragging the slide button of estimated time, user can control the time required for cooking. With the time, recipe is simplified by skipping or combining some steps.

## Observations

### Participants

| **P1** | **P2** |
| :----- | :----- |
| - KAIST student, 3rd year <br />- Began living alone this semester <br />- Novice cooker <br />- Frequently tries new recipes <br />- Friend of a teammate | - Non-KAIST student, 3rd year<br />- Began living alone one semester ago<br />- Novice cooker<br />- Usually cooks soup with ingredients in moderation |
| **P3** | **P4** |
| - Non-KAIST student, 1st year<br />- Began living alone this year<br />- Rarely cooks at all<br />- Friend of a teammate | - Non-KAIST student, 3rd year<br />- Lived alone for one semester last year<br />- Experienced cooker<br />- Friend of a teammate |



### Lessons from Lo-Fi Prototyping

#### Recipe Suggestion

1. **Couldn't identify the ingredient names at a glance.** (P1) (High, efficient)
2. **Had trouble identifying the cuisine from the recipe name.** (P2, P3) (High, efficient)
3. Unsure what to do before reading the instruction. (P1, P4) (Medium, learnability)
4. Checkboxes in the Ingredients column confused the user. (P2, P4) (Medium, learnability)
5. Unchanged checkboxes made the user uncertain about whether or not they chose correctly. (P1) (Low, safety)

#### Recipe Amount Control

1. Unclear to user if one can edit the ingredient amount. (P1) (Medium, learnability)
2. Wanted a recipe for certain number of people. (P1, P4) (Medium, efficient)
3. Meaning of the "Modify amount" button was vague. (P1, P2) (Low, learnability)
4. Found the writing in small layout difficult while changing the amount of ingredients one already had. (P2) (Low, efficient)
5. Some ingredient amounts were hard for the user to estimate; the units of the ingredients were unfamiliar. (P3) (Low, efficient)

#### Editing Recipe Steps

1. **Unsure about what the checkboxes left of the instructions do.** (P1, P2) (High, learnability)
2. **Unsure if the user can move the "Estimated time" tab.** (P4) (High, learnability)
3. Cannot categorize steps into important and unimportant, active and passive. (P3) (Medium, efficient)



### Improvement Ideas

#### Highly Critical Problems

1. Couldn't identify the ingredient names at a glance.
   - Add icons or pictures of ingredients.
   - Categorize the ingredients by usage. (ex) fruits, vegetables, meat, sauce, ...)
2. Had trouble identifying the cuisine from the recipe name.
   - Add pictures of recipes.
3. Unsure about what the checkboxes left of the instructions do.
   - Redesign the checkbox to provide better learnability.
   - Make the default appearance an unchecked checkbox (and the consequent light gray instructions) instead of a checked one.
   - Use a strikethrough for unchecked instructions, in addition to the light gray letters. (to make it easier to understand that the instructions can be skipped)
4. Unsure if the user can move the "Estimated time" tab.
   - Add a minimum estimated time (and value) to the left of the "Estimated time" bar.



#### Medium Critical Problems

1. Unsure what to do before reading the instruction.
   - Add some brief text in the "Home" screen about the program's function, such as: "find and revise your recipe."
2. Checkboxes in the Ingredients column confused the user.
   - Redesign the checkbox to provide better learnability. Make it resemble a button so that the user is encouraged to press it.
3. Unclear to user if one can edit the ingredient amount.
   - In the "Input the Amount" popup that is triggered by pressing the "Modify amount" button, put boxes around the numbers next to the ingredient names with a focus on the top left box.
4. Wanted a recipe for certain number of people.
   - Add this information in brackets next to the "Input the Amount" popup's title.
5. Cannot categorize steps into important and unimportant, active and passive.
   - Add tag about unimportant or passive.



#### Low Critical Problems

1. Unchanged checkboxes made the user uncertain about whether or not they chose correctly. 
   - This was an image loading problem. Loading could be improved by using Unicode character, or SVG image.
2. Meaning of the "Modify amount" button was vague.
   - Revise the "Input the Amount" popup screen. (Improvement idea for Medium Critical Problems 3)
3. Found the writing in small layout difficult while changing the amount of ingredients one already had.
   - Provide a font-size change function.
4. Some ingredient amounts were hard for the user to estimate; the units of the ingredients were unfamiliar.
   - Add approximation popups next to the ingredient units. For example, when "bacon 220g" is clicked, pop up a picture of a 220g bacon set sold in supermarkets. Or for "spaghetti noodle 500g," add "enough for you to stuff between with your thumb and index finger."



## Studio Reflections

### Advice

(TA/Eunyoung) Be prepared to the question on the ‘data’ and ‘algorithm’ part which are necessary to your system. You dont’ have to get/implement that but you should be able to explain why you assume something or use something. 



### Question or Suggestion

(TA/Eunyoung) How much modification of a recipe is allowed? For example, it is possible that I say I want to make a pizza in 10 minutes? → So it’s basically a question about how the system communicate w/ user on what is possible or not, and what is the consequence of the modification.

(Self-Chef/ Hyejin) Actually, there are already some services which suggest possible recipes using specific ingredients, so It’d be better if you make more ‘special points’ in your service! For example, you can refer to this page (https://haemukja.com/refrigerator) or some apps! <-wow

(Beagles/Jungwon) What if you include tools?(Oven, Wok, etc) for cooking when providing recipe recommendation? not only the ingredients.

(NYTM/Yoonjeong) What if make user can add or revise the recipes and ingredients?

(Beagles/Woojin) What if difficulties of recipes are also provided?



   - Solution or Opinion

(TA/Eunyoung)  - Minimum estimated time mentioned in the improvement ideas could solve the problem.

(Self-Chef/ Hyejin) - Yes, the service is similar with our service in terms of recommending meals from ingredients. However, it is just suggesting recipes depending on kinds of ingredients and meals. Our service suggest recipe depending on not only kinds, but also amount of ingredients.  In addition, the point that our recipe is fluid about ingredients or steps is another difference, too.

(Beagles/Jungwon) - Good idea; We could provide the necessary tools above the recipe.

(NYTM/Yoonjeong) - We could add a rewrite function, and save that to the user's data and add a "favorite recipe" slot as well so users can store recipes. Providing a way for users to share their revisions or contribute to the central database would also be a good idea, but I don't think it's something we should initially focus on; it's far from the key function.

(Beagles/Woojin) - Good idea; We could provide a difficulty scale next to the recipe title.



#### Memos from Tuesday's studio

- (student's question) add user's preference --> I think letting the user put in the ingredients they want will mostly solve the problem; aren't they trying to make food that they want to eat?

- (TA's question) why do self-boarding students have trouble following conventional recipes? --> Time, cooking tools, ingredients (they can't put much effort into cooking - a friend of one of team said that lectures and assignments are the biggest hazards to cooking)

- (student's question) source of the recipes --> top of google search site. This is answer about source of recipes which used in lo-fi prototype.

- (student's question) how do you find which steps/ingredients can be removed? --> Input multiple recipes' ingredients and find the stuff that do not overlap? (need a lot of data)
  - how to implement the important/unimportant step division: One of method to divide step division is growable recipe suggestion algorithm. At first, the algorithm can distinguish clearly unimportant step like decoration steps such as put parsley.  However, user can review about the recipe and check step that user think it important when cook is finished. If a considerable amount of data is collected, then the recipe can suggest about removing another unimportant steps the algorithm think.




##### Other discussion topic

- provide the importance(necessary/may skip or revise) of each step along with the recipe?

- for non-necessary ingredients, could we remove the ingredient modify function, and just show the "recipe" amount  in proportion to the necessary ingredient amount? (Because mushrooms/bacon/etc. in pasta is really about putting as much as you want, especially when you're eating alone. I think it would make the algorithm simpler and confuse the user less with fewer numbers to consider putting in.)
- Plus could we add a '±' image to some ingredients like salt? (To indicate that you can change it to your preference) Or would it increase confusion?
- And a slot for alternatives to common ingredients/cooking tools could help. 
