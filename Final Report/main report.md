# Team Cook

## Video URL

https://youtu.be/ME8bDYcSEes

## Final Interface

#### Representative screenshots

<img style="float: left" src="/img/1.png" width="600" height="250">

<img style="float: left" src="/img/2-1.png" width="600" height="500">

<img style="float: left" src="/img/2-2.png" width="600" height="500">

<img style="float: left" src="/img/3.png" width="600" height="800">

#### Quality arguments

Most novice cookers do not seek to complete a perfect dish; they want a meal that tastes 'good.' Our interface provides that function, and also informs users which ingredients are essential to producing a dish's signature taste. This allows them to leave out ingredients that are undesired or currently nonexistent. As one of our user test participants commented, one wants to remodel recipes to suit their taste but doesn't know how. In addition the tradeoff between simplicity and quality can be adjusted to fit the cook's taste, instead of only providing two options.

The cooking time function was also highly praised during our user test(s); it was commented as an improvement over YouTube videos that do not inform viewers of the total time required.

## Iteration 

Our goal was to improve the learnability of the prototype. To do so, we resolved 3 ciritical usability problems found from the user testing.

- Placed a text "Amount" above the amount input boxes.
  - Some users thought that the amount input boxes are displaying other information as calories. Also, it was hard for users to recognize what they have to do at a glance. For better learnability, we placed a text "Amount" above the input boxes so that a user can have confidence with their action.
- Placed 'Modify Amount' button at bottom.
  - 'Modify Amount' button placed at top was not noticeable when a user finished input. Thus, we placed 'Modify Amount' button at bottom so that a user can easily notice the button.
- Removed checkboxes beside the necessary steps.
  - Purpose of the checkboxes were unclear and a user had a trouble with noticing a difference between necessary/optional steps. Rather than placing a checkmark beside every step, we removed checkboxes beside the necessary steps and placed it only beside the optional steps. This could make a user easier to notice that the user can only manipulate optional steps.

From the iteration, we learned that continuous effort for improvement is important.

## Individual Reflection

#### Mingi Shin

I mainly worked on supporting task 3, modifying the recipe steps. I implemented mechanisms, ui elements for the recipe step management.

- Implement slider ui that represents: the minimum and maximum cooking time, estimated cooking time, and time input for user at the same time.
- Algorithm to support dynamic recipe, that include/exclude steps according to user's wanted time.
- Algorithm to change the ui displaying estimated time, corresponding to the editted recipe.
- Added hover animation and checkboxes to steps, to help user noticing that the recipe is customizable.
- Keeping the estimated time on the screen, even if user scroll down to see the recipe steps.

And also, we did some discussions on the overall menu/the structure of pages together.

After the final presentation, we discussed together how can we fix the usability problems that appeared while testing. After that, I modified some terms to keep consistency, and make them represent their function better.

Our team haven't got any major conflict. Our team members' works were distributed almost equally, and they finished the job at time. But since that, I think our work seems more like conservative than innovative. We lacked a larger view to the problem and how our final outcome will look, so we tend to concentrate on solving the partial problem individually and merging the solution into one page. I think it is mainly because it is hard to share such idea using the remote meeting. But it could be overcome by using online sketch board, or more active discussion. And also, the team need someone(or everyone) that suggests overall idea or the quality goal, rather than everyone doing their given job passively. Some idea that we thought everyone is sharing, can turn out to be different in the middle. We've passed such minor conflicts and gone with the flow, because arguing and changing the design can hold us back and someone's contribution would be thrown away. But actually, it could be better if we stopped and check what do we have in common in our mind, and what do we misunderstood.

Before the class, I thought the developer can judge the usability of the design and predict the user behavior. But through the project, I've learned that we cannot find every usability problems, and even the usability issues that testers found can be different from others'. Also, naming things can be very hard since the developers cannot really think from the user's perspective.

For web-based GUI implementation, I've learned to distinguish static elements and dynamic elements. Something can be changed and something can derive change, should look different from the static elements and pop out from the entire screen. To do so, I added color on buttons and a slider. I also used hovering animation to transfer the meaning that this element can be clicked. And without animation, it was hard to notice the sudden change of the ui element. I learned that the animation is the one of the most effective way to attract user's attention.

#### Joonyoung Keum

Contributed to UI of the task 2, ingredients amount optimization.

- Table of the ingredients and input box for each.
- Select box for "Serving for n-people".
- Button for modify confirmation.
- Alert for user input exception.

Due to the COVID-19 outbreak, our team had team meetings on online via Zoom. This was very fresh but unfamiliar experience, and it leads us to bad work efficiency at first. However, unnecessary times as transportation was gone by getting used to online meeting. Consequently, we could reduce a lot of unnecessary times and have efficient work.

In terms of teamwork, I think our team had a problem in communication. While implementing a prototype, we experienced a situation that couple of members are on the same part. After that, we tried to clarify which part each is doing. The lesson which I learned from the experience is that clarifying each one's role and having an active communication during the work is important.

From the entire design project experience, I learned that user testing in a prototype stage is significant. User's expectation on UI is sometimes completely different from developer's expectation. We cannot gather enough feedbacks from peer evaluation, there must be a feedback from users. By doing so, a lot of times which could be spent in developing unnecessary features can be saved.

#### Jaehun Kim

I contributed to overall UI, especially background common UI.

- Background layout (main_page)
- Main page link button
- Other recipe list which is beside in other page
- Small change some other UI to semantic UI form
- Layout in recipe optimizing (cell dividing)

When developing, different parts were implemented, so the quality will be different for each individual skill. Therefore, when developing the overall layout, my biggest goal was to develop a system that would collect as much of each fragment as possible. Therefore, when developing, when expressing the implementations of each one, I made the layer to be loaded in the large layout I made.

But here comes the user problem. The problem is that undo doesn't work because all elements are loaded on one page. Because of the nature of the page, I didn't need undo, so it was difficult to know this during development. This has become one of the problems many people point out during user tests. This experience made me realize that systems created for the convenience of developers can sometimes be inconvenient for users.

Both lo-fi prototype and hi-fi prototype were responsible for implementing the background. There was no big problem in teamwork, but there was some inconvenience. It was my job to create a background for the team to create their own elements, and to coordinate so that each element could be harmonized. Therefore, I was in charge of the early and late stages of the overall work. When we coordinated our development, we tried to ask for comments if possible. However, since it is not always possible to ask such a question, It's a shame some factors have been changed at will without considering the intention.

#### Nayeon Lee

I contributed to the UI of task1, getting suggested recipes from input ingredients.

- All functions of the Recipe Suggestion page (suggest.js)
- Layout (initial design) of Recipe Suggestion page

Since our team couldn't meet in person, we faced the hurdles of online meetings. They tended to drag on since people just stopped talking when they ran out of ideas. Initially those prolonged silences were really awkward, but later they actually helped with brainstorming as I was free to look over materials without being self-conscious.

Minor difficulties arose from differences in desired working time due to our different schedules. They were mostly solved through the use of GitHub and more frequent communication through Kakao Talk.

Throughout the project I learned that communication, both between developers and between the user and developer was important. A misunderstanding that arose while discussing ideas on design or functions could lead to extra time spent on clarification. Without a person to lead the conversation everybody could just give up on talking.

Also when first making the implementation, I thought that keeping a user's options open, i.e., giving the user more ways to accomplish a certain task, would be more user-friendly. The user testing proved me wrong. Limiting the number of ways to accomplish a task, such as adding ingredients to a list, could actually reduce confusion from users and make the implementation less complex.