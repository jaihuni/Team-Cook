# Team Cook

## POV

> **Self-boarding students who have trouble following conventional recipes** need to **refine existing recipes** because **beginners find it hard to apply recipes to their situations**.



## Target Users

Self-boarding students who have trouble following conventional recipes because they don't have enough time or money to try commercial recipes, and are novice cookers.



## Tasks

1. Input the ingredients that user has or wants to add and receive suggested recipes.
2. For a chosen recipe, input the amount of ingredients (required for the recipe) that user has and receive a modified recipe.
3. Input time that user can spend in cooking and receive a modified recipe.



## Implementation Notes

### URL of prototype

​	https://jaihuni.github.io/Team-Cook/index.html

### URL of Git repository

​	https://github.com/jaihuni/Team-Cook

### Libraries and frameworks

​	jquery : https://jqueryui.com/

​	semantic UI : https://semantic-ui.com/

### Representative screenshots

![img](https://lh5.googleusercontent.com/JawdFr6xDAqKh_5GbL6H5qvUZZ7jLHIlquSd9fnTaOxNdBuWf2n8EisiDu66Fop0QCPygfpM7DjTwS8ZI-onb8ze36mXFBfc-vLIUK-p79Uat6lcBSOyHbc2DSXv0WnIXJYz2pY48c4)

![img](https://lh6.googleusercontent.com/F7JQT5fm04-FkdSwgEx7CidQ0ulLOvEoyFIay-nEFSIq-R4lG-Sguvg5WBjXi-piQlQ_PBMgU4DdaRVtiLgATJPm6X3STstvTwIQ7B4cNiKQyv2fm5NYeAuOt8lg2Jn5hU6JS3CWhyE)



![img](https://lh6.googleusercontent.com/dd06wyMMovK_roCReqZ3OlmAKPWs6Nz1nYZXhooDBKSaSb5wjcMPv7bDMg7LEHX7isIDgNMNXxY5486liBhtyZfl2O9dtCstPbfOT5WthVM5cWDgoQvnQntxWAZjbuDhTsC23VLRke0)



![img](https://lh6.googleusercontent.com/dvD0IJe7Rma9m-D2jgO5Ik_a-jscJN6IaaoFBJ6epCHksGRuloUyzxhspzpFLTuDUrN2ctWkTfuob1KXwsFxJr6K0gnCyyWlRVJsgsSw-0U85BvACarriSuixvm7-wZa_AeHT1hT5_w)



<img src="https://lh6.googleusercontent.com/1dE8PqPpfdQZ-VtMEk_aJ1soc00ZVpWzIi-TIHsIsIg_818IbrEJgF54clf8qzFX_T6N_a2BqoRJEPABXaLgvkU-r4whD_OTJ_r-5azGH2UfoxSNVz6BnXF989OP6jkF-DMY8dpy0dw" alt="img" style="zoom:50%;" />



<img src="https://lh6.googleusercontent.com/-choe9fsrrHdnnTNSHlYLvmEUxnSWUqsyXmzp4LmY_JQ2VhtJ1hLxUDwZmUw7n-dqqJThjaualENK0gdazddnMgL_4JDIdQWagh2IZcaC7aFdmYtpKDkyDlzjUwjxmb9NI0HvESaJ-E" alt="img" style="zoom:50%;" />



<img src="https://lh4.googleusercontent.com/fWszvf5CURtTWPdztb--PEFcluJUKR4OeGe2rDvtMkSNTy7wR7hf-pXKvWeKzLnFLnqaWq01npn6F41By0tWZtGRIe3mxjJrGTcz7rCpWlxkm7U-uDqGrLOWB_QTtHsPXP9u_8hwmC8" alt="img" style="zoom:50%;" />



<img src="https://lh3.googleusercontent.com/jYSMtgd-ba9y5U36tzbvnfNQlpODGzikbY1p0wYem682NBm09qByGLuVxAVtzpV9APoQx_rNMeHoQ_GEy0XGbalLN38behgMf6iwCfrnYkMJZLnybkYqq9V757iG0RulJqxjJjUo1bw" alt="img" style="zoom:50%;" />


##


## Individual Reflections

#### Nayeon Lee
I implemented the mechanisms of the Recipe Suggestion page and worked on its basic design. Deciding where to put the 'Add Set' button was more difficult than I expected. It was part of the Ingredients list in the Low-Fi prototype, but received feedback that it was hard to notice. Regarding code, making a function for deleting individual ingredients was quite complicated (in part because there were multiple ways to add ingredients). In the end I decided on making a clear button, since I couldn't decide which method(checkbox, search, add set) could be deleted without sacrificing functionality. The search function seemed like a must since even the most basic recipes need about 10 ingredients, and without it checkboxes would clutter the screen. The checkboxes were not only a way of adding ingredients but also a clue for the novice cooker; a blank screen wouldn't help him/her remember what is in the refrigerator. Perhaps the add set could be removed, but it was a way to reduce time and I wanted to see if the change in design would be helpful. As for implementation, I learned how to make modals while making functions related to the 'Add Set' and 'Suggest Recipe' buttons.

#### Mingi Shin
Implemented mechanisms, ui elemnets for the recipe step management.

- Slider ui represents: the minimum and maximum cooking time, estimated cooking time, input for user
- Algorithm to include/exclude steps according to user's wanted time.
- Algorithm to reflect the changed estimated time, corresponding to the editted recipe.
- Added hover animation and checkboxes to steps, to help user noticing that the recipe is customizable.
- Keeping the estimated time on the screen.

And also, we did some discussions on the overall menu together.


## Studio Reflections

#### Comments

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



#### Solution Ideas

- Recipe Suggestion

(1) Give the user more guidance on measurements. (ex) 1 tablespoon = [photo of a spoon] = 3 teaspoons, spaghetti noodles for 1 person is approximately the amount you can wrap your thumb and forefinger around)

(2) Provide information on the SETs option in the recipe suggestion page. (using ⓘ icon) Or  

(3) Provide images of ingredients in the recipe suggestion page, preferably on the right side of ingredient names.

(Recipe Optimizing 페이지에도 재료 사진이 지원되는 것이 나을까요?)



- Recipe Optimizing

(idea) Keep the checkbox color consistent for both the 'Necessary' and 'Unnecessary' instructions (the gray-colored checkboxes of the 'Necessary' instructions may have confused some users), and remove the hover color-changing option for the 'Necessary' instructions (for additional differentiation). --> but I'm not sure if this would be less confusing than what we currently have; a user test would be nice

- Overall

(idea) collapse the Other Recipe list in the Recipe Optimizing page (reduce one function that a user is less likely to immediately use)

(idea) Put more space between the checkbox part and the 'Ingredients' list in the Recipe Suggestion page.

