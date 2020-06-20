# Team Cook

| P1   | P2                                                           |
| ---- | ------------------------------------------------------------ |
|      |                                                              |
| P3   | P4                                                           |
|      | - Non-KAIST student, 2nd year<br/>- Has never lived alone<br/>- Novice cooker<br/>- Almost always uses recipes, and follows them word-for-word |



## Written protocol

##### Introduction:

This is a part of a project for the Human-Computer Interaction class in KAIST. This project made a new recipe web for self-boarding students who are novice cookers. Thank you for agreeing to test our team’s prototype. Please find and tell lot of things as you find as possible.

##### Informed consent:

We will record your shared screen and voice. This will only be used to improve our product, and not revealed to anybody outside our team. May we have your consent?

(after the participant agrees) If you want to stop for whatever reason, please tell us. Also if you have any question, you are always free to ask. If it cannot be answered during the test, we will answer after the test is over.

##### Task: 

Currently you have bacon, onion, garlic, tomato sauce, etc. in your refrigerator. In your cupboard you have spaghetti noodles, salt, olive oil, canola oil, etc..

You're hungry, and have about an hour before you have to leave. And you're tired of eating ordered food.

So this program, which suggests recipes based on the ingredients and then helps you modify the recipe, comes to mind.



(If the user is stuck)

task 1: Go to the recipe suggestion page. Assume that you have spaghetti noodle, bacon, onion, and garlic. Then, input the ingredients you want, and click the suggested recipe.

task 2: The goal of the task 2 is receiving optimized amount of ingredients based on the user input. Go to the recipe optimization page. First, select the number of people that you want to serve. Next, input the amount of ingredients as you want, then receive optimized amount. 

task 3: The goal of the task 3 is receiving an optimized recipe based on the user input. Assume that you want to reduce time spending on the cooking. First, exclude the steps that you do not want to do. Next, input the time that you want to spend on the cooking, then receive an optimized recipe.



##### Interview questions:

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



##### Debriefing:

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

| **P1** |                                                              |
| ------ | ------------------------------------------------------------ |
| **P2** |                                                              |
| **P3** |                                                              |
| **P4** | - Non-KAIST student, 2nd year<br/>- Has never lived alone<br/>- Novice cooker<br/>- Usually cooks servings for 1~2 people<br/>- Almost always uses recipes<br/>- Follows recipes word-for-word |

(어느 쪽이 더 좋을지 몰라서 둘 다 만들어봤습니다)

| P1     | P2                                                           |
| ------ | ------------------------------------------------------------ |
|        |                                                              |
| **P3** | **P4**                                                       |
|        | - Non-KAIST student, 2nd year<br/>- Has never lived alone<br/>- Novice cooker<br/>- Usually cooks servings for 1~2 people<br/>- Almost always uses recipes<br/>- Follows recipes word-for-word |



#### Session Summaries

P1

P2

P3

##### P4

- Had trouble using the Recipe Optimizing page, and was given task2 and task3 instructions by the facilitator.

- In the recipe suggestion page, thought the search meant "search for recipes" and typed 'spaghetti' in the search input. Realized it meant searching for ingredients when 'spaghetti' appeared in the ingredient list.

- Tried manipulating the amount of ingredients(spaghetti noodles) and then clicking the Modify Amount button. The spaghetti noodle reverted back to its original amount (250).

- Faced other usability problems including not realizing the cooking time bar could be moved. (Listed in the Usability lessons)

  [Interview Questions]

- Wanted to know why there were checkboxes next to the necessary instructions, and wanted explanations about the checkboxes.

- As a novice cooker, often wants "good enough to eat" recipes. Occasionally watches and imitates Youtube cooking videos.

- Liked the recipe modifying function; found it a nice improvement to the Youtube recipes that often provided vague explanations, especially regarding (overall) cooking time and necessary/optional cooking steps.



## Usability lessons

#### Usability Problems

- Thought the 'Recipe Finding' title above the Search input meant that the user should search for recipes, instead of ingredients. (Recipe Suggestion page) (P4)
- Didn't notice the Add Set function. (Recipe Suggestion page) (P4)
- Initially thought the numbers next to the ingredients meant calories, i.e., took time to notice the ingredient units. (Recipe Optimizing page) (P4)
- Didn't realize the Cooking Time bar could be moved. (Recipe Optimizing page) (P4)
- Didn't notice the numbers on either side of the Cooking Time bar (26, 36) meant the maximum and minimum cooking time. (Recipe Optimizing page) (P4)
- Was initially confused by the checkboxes; didn't know the why there were checks instead of bullets or numbers to the left of the individual instructions. (Recipe Optimizing page) (P4)



#### High-level Reflections



## Studio Reflections



## Plans for Iteration

(1) Recipe Suggestion page

- Delete the Add Set function; it seems useless.
- 

(2) Recipe Optimizing page

- Put the ingredient units on the right side of the boxes(?) (ex) Spaghetti Noodle |250| (g)
- For the necessary instructions, put cubes without the checkmark(?)