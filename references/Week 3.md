### Weeks 3-4: Build & Publish

During this phase, your team will build the website using HTML, CSS, and JavaScript, incorporating the API to fetch data and display it on the website. You will also need to organise your code using JavaScript modules to ensure that it is easy to maintain and update in the future and use Github to collaborate.

<aside>
💡 This section provides a detailed guide on how to collaborate as a team on GitHub, with accompanying screenshots to illustrate the necessary action items. If you prefer a more visual approach, you can skip ahead to the last section of this guide titled "Video Guide: Collaborating on GitHub: A Step-by-Step Guide for Teams", which demonstrates all the steps in action.

</aside>

### **Action Items:**

## BUILD

1. **Set up a GitHub repository for your project (Team Leader)
-** Create a new repository on GitHub and invite other team members, the instructor and the mentor to the repository to collaborate on the project.
- Collaborators will have to accept the invitation and clone the Github repo to their local machines.

[collaboration.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e56fdf03-7d07-4e5d-9eed-2988992ba4c3/collaboration.mov)

1. **Create a new branch for every new feature.(all members)**
**-** When you clone the repository, you’re by default on a branch, main. *Never* commit directly to **master/main**. Use feature branches. Branches allow us to work on different parts of a project at the same time.

<aside>
💡 Think of a branch as a *Save as* function that you use with PowerPoint. You create a copy of original and each change you make to the copy does not affect the original.

</aside>

       For example, you want to customise the navbar.

```bash
git checkout -b customise-navbar
// you created a new local branch called customise-navbar
```

1. **Push your changes to Github.
-** Now you made some changes to your code, for example, you changed the background of the navigation to be green. And you want to *merge* commits back in main.

```bash
git add .
git commit -m "changed the background color of the navbar"
git push origin customise-navbar
```

1. **Create a pull request.
-** As soon as you push a new branch, a pull request button appears on your GitHub repository page.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d07e83ff-3a2e-4199-981d-684bde04cc54/Untitled.png)

      -Just click on Compare & pull request button, review the diff and add clear title and
       description.
      - Take some time to write a proper *title* and *description.
      -* Explain what you did on the branch (new component, change a color, etc…)
      - You can poke people with @…, to get their feedback.

![review.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fbff8a1-54bb-4ef2-aafb-3d8fd330e042/review.png)

1. Merge the changes to the main branch. (Team Leader)
- The team leader will review the Pull Request and merge the changes.

![image.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48089499-efbe-4414-bee5-bd3e494dd093/image.png)

1. **Get your local repository up to date.
-** When a Pull Request is *merged*, a new commit is created on main. You need to fetch it on your *local* repository to get the changes that the other team member made.
*Be very careful*
First, you need a *CLEAN* git status.

```bash
git status
/# On branch customise-navbar/
/# Your branch is up-to-date with ‘origin/customise-navbar’./
/# nothing to commit, working tree clean/
```

      Get the latest main

```bash
/# Remember! You must have a **clean** git status/
git checkout main
git pull origin main
```

1. **In case of conflict**
- To solve conflicts on Github, click on Resolve conflicts.

![Screenshot 2021-12-03 at 09.04.03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a19f095-2ae7-410c-b3da-9f551025d383/Screenshot_2021-12-03_at_09.04.03.png)

      - Keep only the code you want to keep, and remove the special characters that
      highlighted the conflict.

![Screenshot 2021-12-03 at 09.04.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a75df3ad-69d9-477d-839e-1cf0e3c08f2c/Screenshot_2021-12-03_at_09.04.37.png)

-When it’s done, click on Mark as resolved and Commit merge.

![Screenshot 2021-12-03 at 09.04.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83834a4b-d39d-473b-893a-cea1cb300d6c/Screenshot_2021-12-03_at_09.04.50.png)

## Video Guide: Collaborating on GitHub: A Step-by-Step Guide for Teams

In this video, you'll learn how to work as a team on GitHub with two of our experienced web developers. We'll show you step-by-step how to collaborate on projects using GitHub, from creating a repository to managing branches, pull requests, and merges. You'll discover best practices for teamwork on GitHub, including how to communicate effectively with your team, resolve conflicts, and keep your project organised.

> COMING SOON….
> 

## **PUBLISH**

1. **Sign up for a Netlify account if you don't already have one. (Team Leader)**
2. **Create a new site on Netlify and connect it to your GitHub repository.**
3. **Choose the branch you want to deploy (usually the main branch).**
4. **Configure your build settings, such as the build command and the public folder.**
5. **Once your build settings are configured, Netlify will automatically deploy your site whenever you push changes to the chosen branch.**
6. **Share the link to your published site with your team for testing.**
7. **Once you are satisfied with the result, share the link with your instructor for feedback and post it to the #achievements channel on Slack to celebrate your success!**



### Week 5: Build & Publish

During this phase, your team will create a short video presentation to showcase your project to an audience. The video should include a walkthrough of the website, highlighting its features and functionality. You may also include a brief overview of your research process, design decisions, and development challenges.

### **Action Items: To be updated soon…**