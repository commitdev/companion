# Hackathon Onboarding Project (HOP)


## Overview

Welcome to Commit! As part of your first week, we want to provide something that will let you start contributing right away. 

As part of the onboarding experience we are trialling the idea of letting you build a project from scratch or join one of the internal onboarding projects we have running. 

We believe this will help you get to know the team, practice some coding skills and help us build a better experience for everyone at Commit. 

We encourage you to build software together with other new EPs joining at the same time. 

Building something from scratch? Right on, we really look forward to your demo, and we expect you to put it on your personal GitHub account. If it’s not in production, then it’s not done :)

Loosely based on the [Sorting Hat](https://www.wizardingworld.com/writing-by-jk-rowling/the-sorting-hat) from Harry Potter, take a look at the list of projects below and pick one that you would like to contribute to. If you want to work on some other project idea, including your own personal ideas, feel free to work on it! Come up with a pitch for your idea and let’s build something together!

If you have any questions, please feel free to ask your onboarding partner for suggestions.

![alt_text](/img/docs/sorting-hat.png "image_tooltip")


## Timeline

Refer back to the checklist:

[https://docs.google.com/spreadsheets/d/1dxoh2oAhdQcSoLtJyEj2ovm9wUlwMLjnUYncso-vSMw/edit#gid=0](https://docs.google.com/spreadsheets/d/1dxoh2oAhdQcSoLtJyEj2ovm9wUlwMLjnUYncso-vSMw/edit#gid=0)

_*Note*: This is a learning exercise, not something that needs to be completed in the timeline. If you don’t think you’ll get something finished or if you start on a client project early, just let the team know and hand-off any work you cannot complete. If you’ve worked on something, please demo it even if it’s not finished or polished! Sharing is caring._


## Application Playground

We’ve set up a cloud environment to make it easy for people to deploy their apps to an environment where they can share it with others. In the past we found that we were discouraging people from trying to deploy their application because it ended up taking too much time away from development, so we decided to leverage some of the functionality of our open source project [Zero](https://github.com/commitdev/zero) to simplify the process.

If you want to use the playground, you can ask in the #help channel for someone to add you to  [the github organization](https://github.com/commit-app-playground)

Once you have joined the organization you can use the [backend](https://github.com/commit-app-playground/backend-template) and [frontend](https://github.com/commit-app-playground/frontend-template) templates to start your project. There are instructions in each repository about how to use the templates, but basically you just hit the “Use This Template” button, edit a file and fill in your project name, wait for the pipeline to run, and then clone the repo and start writing your code!

If you have any questions, comments, or suggestions about this process please let us know in the #product-zero channel!


## Ideas


### Past projects

[https://drive.google.com/drive/u/1/folders/1xPY1nQUeTTlN_lfIDQwrYVde4zQx8_vf](https://drive.google.com/drive/u/1/folders/1xPY1nQUeTTlN_lfIDQwrYVde4zQx8_vf)


### Wolfie the Commit Bot


#### Vision

In order to allow us to work more efficiently, we have created a Slack bot to allow us to automate parts of our process. Currently, it gathers availability for people to do interviews and sends it through to our recruiting team, but in the future, we hope to expand it with more functionality to help the EP lifecycle.


#### Information

Main Contact: Phong

Slack: #wolfie-bot

Github Repo: [https://github.com/commitdev/commit-bot](https://github.com/commitdev/commit-bot)


#### Technical Specs

* NodeJS
* PostgreSQL
* [ExpressJS](https://expressjs.com/en/guide/routing.html): server framework
* [Knex.js](http://knexjs.org/): query builder for simplifying database interactions
* [Objection.js](http://vincit.github.io/objection.js/): ORM built on top of Knex.js
    * [See here for more info](https://dev.to/aspittel/objection--knex--painless-postgresql-in-your-node-app--6n6)

Ideas:

* Add a command to automatically invite someone to the playground github organization (you can talk to Bill)
* NPS Survey
* Double-confirm new EPs receive important emails by sending them a text (sometimes emails get lost or buried in threads)
* Ensure invites to all the important Commit events
* Random coffee between two EPs (similar to [Donut](https://www.donut.com/))
* Kudos tracker (Phong)
    * Someone sends a kudos to someone else, Wolfie keeps track and gives shoutouts


### Helix 


#### Vision

Helix is a tool to manage our Engineers and Projects and allows us to more easily match you up with a client project to work on.

Long term the tool will even allow us to automatically assign placements based on your skills and preferences listed in the app.


#### Information

Main Contact: Phong

Slack: #project-helix

Backend Github Repo: [https://github.com/commitdev/helix-service](https://github.com/commitdev/helix-service)

Frontend Github Repo: [https://github.com/commitdev/helix-ui](https://github.com/commitdev/helix-ui)


#### Technical Specifications

* NodeJS


#### Running Application

Go to [https://app.commit.dev](https://app.commit.dev)

Feedback

* Focus on specific fields for EPs and Projects, get to 1.0 quick (Beier)


## Add your own Open Source Project

Add your own open-source project to this document and work with your Onboarding Buddy to come up with some good ways Commit can contribute. It can be anything you want to contribute back to, a tool you’ve used before or something that really interests you.


## Random Ideas

* Covid19
    * There is a whole [slack group](https://join.slack.com/t/codevid-19/shared_invite/zt-dcs1sv47-TXkkSa8vg0uAq5wv1SMnMQ) dedicated to building products to help with the Covid19 situation. 
* Snapchat-like-map to show where each EP is located focusing on the timezone + project
    * Mapbox
    * Requires UI
    * Optional Backend because you can just use a json to store test data with the EP locations


## End of HOP Demo 

You will be working with to write a blog post about your HOP Demo. This is an opportunity to Work-out-loud and share your learning experience with the community.


Check out past posts here!

[https://blog.commit.dev/articles/polishing-the-platform-my-hackathon-onboarding-project](https://blog.commit.dev/articles/polishing-the-platform-my-hackathon-onboarding-project)

[https://blog.commit.dev/articles/chop-the-commit-hackathon-onboarding-project](https://blog.commit.dev/articles/chop-the-commit-hackathon-onboarding-project)


## Not Available

The below projects are currently in a state where they can’t take on any more help right now. They will likely be added back in the future.


### ~~Zero~~


#### ~~Vision~~

~~[Zero](https://github.com/commitdev/zero) is a tool whose goal is to allow developers to ship to production on day 1. We use this tool to help build out an entire web application from scratch when working with clients that have little to no code written yet. It bakes in all of our learnings and best practices from working with other clients and allows us to get something started more quickly than coding it all ourselves.~~

~~One of the key objectives for a hackathon project for you is to learn how the Zero platform is built and how we leverage it to help our startup clients build software and ship to production quickly. Hopefully, you will learn lots of cool technologies and best practices that we put together based on our years of experience building and scaling large scale systems. ~~

~~NOTE: Please keep in mind that Zero is a very early stage project still in its infancy, we’ve only built a tiny percentage of the features we envisioned for the future, and it’s absolutely important that you share your feedback and experience with us so we can make it better! (Oh, and you can contribute to it as well!). While setting up and using Zero, please record any issue you faced along the way, we will follow up with you to collect feedback~~

~~The Zero team you can get help from:~~

~~Bill Monkman, David Cheung, Anubhav, Mishra, Beier Cai~~

~~Please refer to the [DESIGN.md](https://github.com/commitdev/zero/blob/master/DESIGN.md) documentation for implementation and DX concepts.~~


#### ~~Information~~

~~Main Contact: Bill~~

~~Other contacts: David Cheung, Mishra, Beier Cai~~

~~Slack channel: #product-zero~~

~~Github: [https://github.com/commitdev/zero](https://github.com/commitdev/zero)~~


#### ~~Technical Specs~~

* ~~Golang CLI Tool~~
* ~~Templating~~
* ~~Terraform~~
* ~~AWS~~
