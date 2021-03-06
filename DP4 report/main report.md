# Team Cook

## POV

> **Self-boarding students who have trouble following conventional recipes** need to **refine existing recipes** because **beginners find it hard to apply recipes to their situations due to lack of time, money, or experience.**



## Target Users

Self-boarding students who have trouble following conventional recipes.



## Tasks

1. Input the ingredients that user has or wants to add, then receive suggested recipes.
2. For a chosen recipe, input the amount of ingredients (required for the recipe) that user has or wants to add, then receive a modified recipe.
3. Input time that user can spend in cooking, then receive a modified recipe.



## Implementation Notes

### URL of prototype

​	https://jaihuni.github.io/Team-Cook/index.html

### URL of Git repository

​	https://github.com/jaihuni/Team-Cook

### Libraries and frameworks

​	jquery : https://jqueryui.com/

​	semantic UI : https://semantic-ui.com/

### Representative screenshots

​	Task 1. Below screenshot represents about recipe suggestion. Recipe suggestion page can fill ingredients table with ingredients by click ingredients checkbox, search and enter, or click Add set button(This action can add several ingredients at once). After you fill ingredients table, you can be suggested possible menus when you click suggest recipe.

<img style="float: left" src="/img/1.png" width="600" height="250">

​	Task 2 and 3 are can execute in recipe optimizing page.	

​	Task 2. Below screenshots represent about Ingredients optimizing. first image's table is filled randomized values to be determined by user.

<img style="float: left" src="/img/2-1.png" width="600" height="500">

​	If, user click "Modify Amount", The table's value is adjusted to max serving's ingredients which can make to input value.

<img style="float: left" src="/img/2-2.png" width="600" height="500">

Task 3. Below screenshot represents about Step optimizing. It looks like normal recipes, but some steps can be deleted. User can distinguish delete-able step with its checkbox theme. Also, It suggest automatic time reduced recipe when user adjust cooking time by using slider. 

<img style="float: left" src="/img/3.png" width="600" height="800">





## Individual Reflections

#### Mingi Shin
I mainly worked on supporting task 3, I implemented mechanisms, ui elements for the recipe step management.

- Slider ui represents: the minimum and maximum cooking time, estimated cooking time, input for user
- Algorithm to support dynamic recipe, that include/exclude steps according to user's wanted time.
- Algorithm to change the ui displaying estimated time, corresponding to the editted recipe.
- Added hover animation and checkboxes to steps, to help user noticing that the recipe is customizable.
- Keeping the estimated time on the screen.

And also, we did some discussions on the overall menu/the structure of pages together.

One major difficulty was that, we have to make sure that user notices that they can remove and restore the steps, not pass by the feature. To do so, I added some checkboxes. But the function of checkboxes can be vague to the users, so I added hover animation that draws a strike-out on the steps, to let the users know that clicking on them excludes the step from the recipe.

I learned to utilize an animation(not only with js, but also using css transition) that can draw user's attention. The simple transition helped me a lot on testing various ways to notify the (possible) changes to user.

#### JoonYoung Keum
Contributed to UI of the task 2, ingredients amount management.

- Table of the ingredients and input box for each.
- Select box for "Serving for n-people".
- Button for modify confirmation.
- Alert for user input exception.

It was hard to place each element in appropriate position. Also, displaying default value while input is available was hard to design.

One useful implementation skill I learned is making margins and paddings in balance with other elements.
 

#### Jaehun Kim

I implemented the overall design, macroscopic design like layout and home design. Also, I make other recipe list to fill margin and help user to be easy to move other recipe as user want. I drew the overall design, macroscopic design like layout and home design. And, I implement other recipe list to fill margin and help user to be easy to move other recipe as user want.

- main blue title and lightgray framed template which use all page
- homepage's(mainpage's) recipe suggestion and optimizing button
- other recipe list
- layout of all page (block dividing)

There is some hard like unifing theme, or protrusion ui problem.

But main hard point is fit UI depending on window size. I thought it is important to adjust UI to window size because our prototype consists of vertical boxes, so if not add adjusting size function it may cause a lot of margin.  But it is hard to implement because it need a lot of calculate to make layout. sometime it need to pixel scale margin, sometime it need percent scale margin.

While I implement, I learned about semantic-UI newly. Also, I comprehended div and other components of html and css.

#### Nayeon Lee
Implemented the mechanisms of the Recipe Suggestion page and worked on its basic design (task 1).

Deciding where to put the 'Add Set' button was more difficult than I expected. It was part of the Ingredients list in the Low-Fi prototype, but received feedback that it was hard to notice. 

Regarding code, making a function for deleting individual ingredients was quite complicated (in part because there were multiple ways to add ingredients). In the end I decided on making a clear button, since I couldn't decide which method(checkbox, search, add set) could be deleted without sacrificing functionality. The search function seemed like a must since even the most basic recipes need about 10 ingredients, and without it checkboxes would clutter the screen. The checkboxes were not only a way of adding ingredients but also a clue for the novice cooker; a blank screen wouldn't help him/her remember what is in the refrigerator. Perhaps the add set could be removed, but it was a way to reduce time and I wanted to see if the change in design would be helpful. 

As for implementation, I learned how to make modals while making functions related to the 'Add Set' and 'Suggest Recipe' buttons.


## Studio Reflections

#### Feedback

- Recipe Suggestion

  (Self-Chef/Youngjae) More descriptions for the options in the recipe finding page. The layout of the searchbox, buttons, checkboxes, and list is quite confusing.

  (Beagles/Woojin) I wish there are more images (e.g. cartoon-like ingredient image? icon? beside each ingredient) 

  (Adil/Heat) I wish the ingredients page was less complicated, although I am not sure how to do that without sacrificing functionality here

  (Self-Chef/Hyjein) It looks a bit complicated since the ‘set’ is used to add the ingredients. What if you add the clues so that the users will easily learn your way to add the ingredients

- Recipe Optimizing

  (Self-Chef/Sangwoo) I wish the “checkbox vs strike-through” is clearer. I couldn’t understand the difference between them (ex. what is unchecked & striked-through?)

  (Self-Chef/Youngjae) I wish you to change the place of current recipe name in Recipe optimzing page -> The title changes to the each recipe name, confusing to notice what kind of recipe reading now

- Overall

  (Self-Chef/ Hyejin) I wish for a ‘simpler’ service, since you have so many functions and it makes it hard for me to understand all the functionalities..

  (Self-Chef/Hyejin) What if you put more margin in the boxes.. just for design purpose

  (Beagles/Mohamed) What if you used some of the whitespace or reduced it..



#### Improvement Ideas

- Recipe Suggestion

  (1) Give user more detailed guidance on measurements. (e.g. 1 tablespoon = [photo of a spoon] = 3 teaspoons, spaghetti noodles for 1 person is approximately the amount you can wrap your thumb and forefinger around)

  (2) Provide information on the SETs option in the recipe suggestion page. (e.g. using ⓘ icon) 

  (3) Provide images of ingredients in the recipe suggestion page, preferably on the right side of ingredient names.

  (4) Provide images of ingredients in the recipe optimization page, so user can easily recognize the ingredients.

- Recipe Optimizing

  Keep the checkbox color consistent for both the 'Necessary' and 'Unnecessary' instructions (the gray-colored checkboxes of the 'Necessary' instructions may have confused some users), and remove the hover color-changing option for the 'Necessary' instructions (for additional differentiation). However, we are not sure if this would be less confusing than what we currently have; user testing would be helpful to compare them.

- Overall

  Recipe optimizing page is also better to display image in their ingredients and cooking steps.  When cooking steps are have image, it is needed to hide deleted step's image to rescue user from reading too long recipes.

  Collapse the Other Recipe list in the Recipe Optimizing page (reduce one function that a user is less likely to immediately use).

  Put more space between the checkbox part and the 'Ingredients' list in the Recipe Suggestion page.

