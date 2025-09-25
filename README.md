
# Github Actions testing for Angular deployment

This project was made to learn github actions. The final website is just the base Angular template.


## How it works

First, we need to push changes on the "local" branch. Then, we can make a pull request to merge the changes with the main branch. When doing that, the [first workflow](https://github.com/TrappyMadz/MadzAngularWebsiteDeploymentTest/blob/main/.github/workflows/build-angular.yml) executes : with github actions, the project is tested with eslint and is built. If everything is ok, we can then validate the pull request. When merging, or if we want to directly push to main, the project [is built and deployed](https://github.com/TrappyMadz/MadzAngularWebsiteDeploymentTest/blob/main/.github/workflows/deploy.yml) on another branch (gh-pages). When something is deployed there, github automatically update the associated github pages (set up via project settings). </br>
You can see the result [here](https://trappymadz.github.io/MadzAngularWebsiteDeploymentTest/).

