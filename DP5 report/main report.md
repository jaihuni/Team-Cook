# Team Cook

## Written Protocol

#### Instructions for preparation and setting up the testing environment

Before we start, you need to use Zoom for sharing screen, and we recommend to use Chrome. If Chrome is not available, you can use any web browser you want. When the browser is ready, please open the prototype URL : https://jaihuni.github.io/Team-Cook/

#### Introduction

This is a part of a project for the Human-Computer Interaction class in KAIST. This project made a new recipe web for self-boarding students who are novice cookers. Thank you for agreeing to test our team’s prototype. Please find and tell lot of things as you find as possible.

#### Informed consent

We will record your shared screen and voice. This will only be used to improve our product, and not revealed to anybody outside our team. May we have your consent?

(after the participant agrees) If you want to stop for whatever reason, please tell us. Also if you have any question, you are always free to ask. If it cannot be answered during the test, we will answer after the test is over.

#### Tasks

Currently you have bacon, onion, garlic, tomato sauce in your refrigerator. In your cupboard, you have spaghetti noodle, salt, olive oil, canola oil.

You are hungry and have about an hour before you have to leave. Also, you are tired of eating ordered food.

Then, you come up with our web page, which suggests recipes based on the ingredients and helps you modify the recipe.

Now, you will go through the 3 tasks. 

Task 1, the goal of the task 1 is receiving suggested recipe based on your ingredient input.

(If the user is stuck)
Go to the recipe suggestion page. Then, input the ingredients you want, and click the suggested recipe.

Task 2, the goal of the task 2 is receiving optimized amount of ingredients based on your current having.

(If the user is stuck)
Go to the recipe optimization page. First, select the number of people that you want to serve. Next, input the amount of ingredients as you have, then receive optimized amount. 

Task 3, the goal of the task 3 is receiving an optimized recipe steps based on your input. 

(If the user is stuck)
First, exclude the steps that you do not want to do. Next, input the time that you want to spend on the cooking, then receive an optimized recipe steps.

#### Recording strategy

We will record our participants’ screen and voice during the usability test. Observers will also take written notes. 

JoonYoung Keum will be the facilitator, and Mingi Shin, Jaehun Kim, and Nayeon Lee will be the observers.

#### Interview questions

1. Were there any UI problems that you faced?
2. Was each UI’s role clear? If not, which parts did you find confusing?
3. Are there any functions you’d like added?
4. Have you ever lived alone? If so, for how long?
5. How often do you cook?

   (If the answer to question 5 isn’t “never”)

6. What is the usual(or average) amount of food you cook? (unit: for ? person(s))
7. Would you call yourself a novice cooker?
8. When do you use recipes? (never / when trying something new or unfamiliar / when cooking for someone else /almost always)
9. How strictly do you follow recipes on a scale of 1 to 5? 
(just the basic ingredients) 1 2 3 4 5 (word-for-word)

#### Debriefing

The test is over. Thanks again for your time.

Again, this test was about usability of our project prototype, new recipe site for the self-boarding students.

Your interview would be very helpful to us to find improvements from it.

Is there any question, or anything you want to say?

I want to notify that the recording of this session will be used only for finding improvements among the team members, not sharing with others.

Some findings from the session could be shared with the CS374 class.

Is it okay?

Okay. I’m ending the recording here. Now you can leave the session.

Thank you and have a nice day!




## Session Observations

#### Participants

| **P1**<img src="\img\P1.jpg" width="400" height="400"> | - KNU student, 3rd year<br>- Not living alone but usually cooking for himself<br>- Novice cooker<br>- Usually cooks servings for 1 person<br>- Almost always uses recipes<br>- Follows recipes word-for-word |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| **P2**<img src="/img/P2.png" width="400" height="400"> | **- Non-KAIST student, 1st year<br>- Living alone from this year<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Follows recipes word-for-word(4/5)** |
| **P3**![](img/P3.jpg)                                  | **- KAIST student, 4th year<br>- Living alone for 4 months<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Likely to follow recipes word-for-word(4/5)** |
| **P4**<img src="/img/P4.jpg" width="400" height="400"> | **- Non-KAIST student, 2nd year<br>- Has never lived alone<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Follows recipes word-for-word** |

#### Session Summaries

##### P1

- Sometimes he didn't understand the recipe steps.
- Mean of "Modify amount" button is confused.
- In small window, some UIs are overlaped.
- The purpose of gray checkboxes in steps cell is not obvious. 
- Going to previous page key is not working.
- If there is more ingredients in suggestion page, there may exist unknown ingredients.
- It is hard to notice what recipe I see.
- In recipe suggestion, other recipe list is unclear what it means.

##### P2

- Two Recipe Suggestion button(up and middle) is confusing
- Function of Add Set button is not clear(thought that check ingredients than click the button)
- Could not recognize a difference between suggested recipes and other recipe list in the right side
- Hard to input the exact amount of ingredients user has
- Function of Modify Amount button is not clear(time lag between finishing input amount and clicking Modify Amount button)
- A difference between necessary/optional steps is not clear(user clicked both one even though there was a color difference between them)

[Interview Questions]

- Design of the other recipe list is bothering
- Better to make header button to go back home

##### P3

- It's uncertain in which way the user can get "Recipe Optimizing"? (e.g. Ingredients, budgets, allergic, ...)
- Two "Recipe Suggestion" buttons are unnecessary
- It's not sure what is the benefit of having "Set" feature
- The purpose of "Modify Amount" button is not obvious
- The user would not know exact amount of ingredients in grams
- The purpose of gray checkboxes is not obvious. They bother users and the necessary steps are not emphasized.
- It would be better if the important ingredients are colored or emphasized in the steps.
- Better if the recipe is more detailed, for novice cookers.
- Better if the steps involving the non-necessary ingredients go out from the recipe, in the case the user typed 0 for those ingredients.
- Better if the steps are categorized based on the way of cooking
- Tried to go back by pressing the header, but couldn't

[Interview Questions]

- How about adding Personal Preference feature?

##### P4

- Had trouble using the Recipe Optimizing page, and was given task2 and task3 instructions by the facilitator.

- In the recipe suggestion page, thought the search meant "search for recipes" and typed 'spaghetti' in the search input. Realized it meant searching for ingredients when 'spaghetti' appeared in the ingredient list.

- Tried manipulating the amount of ingredients(spaghetti noodles) and then clicking the Modify Amount button. The spaghetti noodle reverted back to its original amount (250).

- Faced other usability problems including not realizing the cooking time bar could be moved. (Listed in the Usability lessons)

  [Interview Questions]

- Wanted to know why there were checkboxes next to the necessary instructions, and wanted explanations about the checkboxes.

- As a novice cooker, often wants "good enough to eat" recipes. Occasionally watches and imitates Youtube cooking videos.

- Liked the recipe modifying function; found it a nice improvement to the Youtube recipes that often provided vague explanations, especially regarding (overall) cooking time and necessary/optional cooking steps.



## Usability Lessons

#### Usability Problems

##### Overall UI

- The meaning of 'Recipe Suggestion' is ambiguous. (P3)
- Two identical 'Recipe Suggestion' button confuse user. (P3)
- Going to Home or previous page does not work as user's intention (P3)

##### Recipe Suggestion page

- Thought the 'Recipe Finding' title above the Search input meant that the user should search for recipes, instead of ingredients. (P4)
- Didn't notice the Add Set function. (P4)

##### Recipe Optimizing page

- Didn't realize the Cooking Time bar could be moved. (P4)
- Didn't notice the numbers on either side of the Cooking Time bar (26, 36) meant the maximum and minimum cooking time. (P4)
- Initially thought the numbers next to the ingredients meant calories, i.e., took time to notice the ingredient units. (P4)
- Was initially confused by the checkboxes; didn't know the why there were checks instead of bullets or numbers to the left of the individual instructions. (P3, P4)

#### High-level Reflections

Users frequently go ahead of the guidance, or fall behind of it while not knowing what to do.

## Studio Reflections



## Plans for Iteration

(1) Recipe Suggestion page

- Delete the Add Set function; it seems useless.
- 

(2) Recipe Optimizing page

- Put the ingredient units on the right side of the boxes(?) (ex) Spaghetti Noodle |250| (g)
- For the necessary instructions, put cubes without the checkmark(?)