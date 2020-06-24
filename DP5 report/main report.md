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

Again, this test was about usability of our project prototype, new recipe site for the self-boarding students. Your interview would be very helpful to us to find improvements from it.

Is there any question, or anything you want to say?

I want to notify that the recording of this session will be used only for finding improvements among the team members, not sharing with others. Some findings from the session could be shared with the CS374 class. Is it okay?

Okay. I’m ending the recording here. Now you can leave the session. Thank you and have a nice day!


## Session Observations

#### Participants

| **P1**<br><img src="\img\P1.jpg" width="400" height="400"> | **- KNU student, 3rd year<br>- Not living alone but usually cooking for himself<br>- Novice cooker<br>- Usually cooks servings for 1 person<br>- Almost always uses recipes<br>- Follows recipes word-for-word** |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| **P2**<br><img src="/img/P2.png" width="400" height="400"> | **- Non-KAIST student, 1st year<br>- Living alone from this year<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Follows recipes word-for-word(4/5)** |
| **P3**<br><img src="/img/P3.jpg" width="400" height="400"> | **- KAIST student, 4th year<br>- Living alone for 4 months<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Likely to follow recipes word-for-word(4/5)** |
| **P4**<br><img src="/img/P4.jpg" width="400" height="400"> | **- Non-KAIST student, 2nd year<br>- Has never lived alone<br>- Novice cooker<br>- Usually cooks servings for 1~2 people<br>- Almost always uses recipes<br>- Follows recipes word-for-word(5/5)** |

#### Session Summaries

##### P1

- Sometimes the user did not understand the recipe steps.
- Mean of "Modify amount" button is confusing.
- In small window, some UIs are overlapped.
- The purpose of gray checkboxes in the steps is not obvious.
- Going to previous page key is not working.
- If there are more ingredients in suggestion page, there may exist unknown ingredients.
- It is hard to notice what recipe the user is watching.
- In recipe suggestion, purpose of the other recipe list is unclear.

##### P2

- Two Recipe Suggestion button(up and middle) is confusing.
- Function of Add Set button is not clear(thought that check ingredients than click the button).
- Could not recognize a difference between suggested recipes and other recipe list in the right side.
- Hard to input the exact amount of ingredients user has.
- Function of Modify Amount button is not clear(time lag between finishing input amount and clicking Modify Amount button).
- A difference between necessary/optional steps is not clear(user clicked both one even though there was a color difference between them).

[Interview Questions]

- Design of the other recipe list is bothering.
- Better to make header button to go back home.

##### P3

- It's uncertain in which way the user can get "Recipe Optimizing"? (e.g. Ingredients, budgets, allergic, ...)
- Two "Recipe Suggestion" buttons are unnecessary.
- It's not sure what is the benefit of having "Set" feature.
- The purpose of "Modify Amount" button is not obvious.
- The user would not know exact amount of ingredients in grams.
- The purpose of gray checkboxes is not obvious. They bother users and the necessary steps are not emphasized.
- It would be better if the important ingredients are colored or emphasized in the steps.
- Better if the recipe is more detailed, for novice cookers.
- Better if the steps involving the non-necessary ingredients go out from the recipe, in the case the user typed 0 for those ingredients.
- Better if the steps are categorized based on the way of cooking.
- Tried to go back by pressing the header, but couldn't.

[Interview Questions]

- How about adding Personal Preference feature?

##### P4

- Had trouble using the Recipe Optimizing page, and was given task2 and task3 instructions by the facilitator.

- In the recipe suggestion page, thought the search meant "search for recipes" and typed 'spaghetti' in the search input. Realized it meant searching for ingredients when 'spaghetti' appeared in the ingredient list.

- Tried manipulating the amount of ingredients(spaghetti noodles) and then clicking the Modify Amount button. The spaghetti noodle reverted back to its original amount (250).

- Faced other usability problems including not realizing the cooking time bar could be moved (Listed in the Usability lessons).

[Interview Questions]

- Wanted to know why there were checkboxes next to the necessary instructions, and wanted explanations about the checkboxes.

- As a novice cooker, often wants "good enough to eat" recipes. Occasionally watches and imitates Youtube cooking videos.
- Liked the recipe modifying function; found it a nice improvement to the Youtube recipes that often provided vague explanations, especially regarding (overall) cooking time and necessary/optional cooking steps.


## Usability Lessons

#### Usability Problems

##### Overall UI

- In small window, some UIs are overlapped. (P1 / Low)
- The meaning of 'Recipe Suggestion' is ambiguous. (P3 / Low)
- Two 'Recipe Suggestion' button confuse user. (P2, P3 / Medium)
- Going Home or previous page does not work as user's intention. (P1, P2, P3 / **High**)
- It is hard to notice what recipe the user is watching currently. (P1 / Medium)

##### Recipe Suggestion Page

- The title 'Recipe Finding' confused user in terms of the purpose. (P4 / Low)
- It is hard to notice the role of 'Add Set' button. (P2, P3, P4 / **High**)
- Purpose of 'Other Recipe List' is unclear. (P1, P2 / Low)

##### Recipe Optimizing Page

- The title 'Recipe Optimizing' confuse user in terms of the purpose. (P3 / Low)
- It is hard to notice the role of 'Modify Amount' button. (P1, P2, P3 / **High**)
- Not enough explanation of the amount optimization. (P4 / Medium)
- It is hard to notice that 'Cooking Time' bar could be manipulated. (P4 /Low)
- Meaning of the numbers on either side of the 'Cooking Time' bar is unclear. (P4 / Low)
- Meaning of the numbers next to the ingredients is unclear. (P4 / Medium)
- Purpose of the checkbox is unclear, and it is hard to notice a difference between gray/blue checkbox. (P1, P2, P3, P4 / **High**)

#### High-level Reflections

- Users frequently go ahead of the guidance, or fall behind of it while not knowing what to do.
- Our purpose of UIs could be misunderstood by users. With developer's sight, we could not understand why users do not understand our intention, but users are always right. For better result, it might helpful to think in user's viewpoint and do user tests from earlier stage.
- Providing users too many ways to reach the same destination could confuse the user, or lead to some options being completely ignored, making the interface inefficient.


## Studio Reflections

#### Feedback

[TA/Eunyoung] It is good that you prepared many questionnaires on usability. It’d be great to ask about their experience overall -- not just on the usability dimension but on general, say, uploading/input task or the refinement task+ Getting feedback on potential improvement direction can be helpful as well.

[TA/Eunyoung] Providing a detailed instruction is good to guide users but might reduce the opportunity of user to explore the system. It’d be great if you can prepare a less detailed instruction and provide it first, and if the user is not sure what to do after some time, you can provide a detailed one! 

[First Pilot Testing Peer]

- In task 2 (in recipe optimizing page), it is hard to recognize role of 'Modify Amount' button and table.
- It is hard to go back previous page.

[Second Pilot Testing Peer]

- In task 3 (in recipe optimizing page), it is hard to recognize mean of numbers next to the bar. After few minutes, tester recognized the meaning herself.
- It is hard to go back previous page.
- It is better to assume a specific situation before running a test, so that user can behave as an actual user. 

#### Improvement

Considering the feedbacks from studio, we improved our written protocol.

During the user test, we first described a hypothetic user situation. Then, gave them goal of each task rather than instruct detailed steps. When the user was stuck - for example, P4 did not realize that 'Cooking Time' bar could be manipulated - we gave them detailed instructions that are written above.

After each participant was finished, we asked them what they liked and found confusing about the UI. We also asked for advice on improving the interface.

About feedbacks for UI, we will address it in the next part.


## Plan for Iteration

(1) Overall UI

- Add a function to go home or previous page.
  - A lot of users complained that there is no button to go home or previous page. We realized that user wants to actively move page, not staying at same page. Therefore, adding the function will provide user more satisfied experience.

(2) Recipe Suggestion Page

- Delete the 'Add Set' function; it seems useless.
  - The 'Add Set' button is efficient when adding many types of materials, but few types of materials were added during actual testing. When we decide to add the button again later, it will be better to not expose at first. When the user selects more than a certain number of types of materials, it can be displayed as a recommended function.

(3) Recipe Optimizing Page

- Place a text "Amount" above the amount input boxes.
  - Some users thought that the amount input boxes are displaying other information as calories. Also, currently it is hard for users to recognize what they have to do at a glance. Placing a text "Amount" will provide a user better confidence with their action.
- Place 'Modify Amount' button at bottom, and add some visual effect when a user enter a number in the input boxes.
  - 'Modify Amount' button placed at top is not noticeable when a user finish input. It must be better to place at bottom so that a user can easily notice the button. Also, visual effect could lead a user to click the button. These will provide a user better learnability.
- Beside the necessary steps, place a colored square without a checkmark instead of a checkbox. 
  - Currently, purpose of the checkbox is unclear and user has a trouble with noticing a difference between necessary/optional steps. Rather than placing a checkmark beside every step, placing only beside the optional steps will make user easier to notice that the user can manipulate steps with a checkmark. This will provide a user better learnability.
