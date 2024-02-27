# Getting started

Hello there, you are a new recruit in our frontend team at Les Echos, et your first task is to implement our newsletter page.

You can find the design on our figma: [Link]

# Disclaimer

Our evaluation focuses on your problem-solving approach and mindset, observing how you tackle challenges and prioritize tasks.

During the interview, explain your decisions and how you'd approach unfinished tasks with you had more time.

It's your thought process and strategy, rather than completion, that we're interested in.

# What is your mission ?

## Styling

Regardless of point 1 and 2, the page should be responsive.

1. Implement the styling using what you like to use (chakra-ui, material-ui or something else)
2. Implement the styling yourself, using the library of your choice (we are using styled-components and pandaCSS for instance)

## Features

The current user will be representated by 3 different mock, you can find these at `src/mocks/user.ts`.
What you need to look at is the `subscriptions` key, it represent the subscriptions that the user currently have active.

## Implement a list of newsletters, grouped by site.

You can find mocks of the items in `src/mocks/newsletters.ts`, you have to display the list of all the newsletters, but grouped by the `site` key.

## The CTA must be different regarding the user's status

In every newsletter object, you have a key `subcriptions`, which is an array of strings, it represents the right needed to access this newsletter.

If the field is an empty array, it means the newsletter can be accessed by everyone, otherwise, the user should have at least of the right listed in the array.

## Everything should be typed

Everything has to be typed with typescript, show us what you can do !

# Time

Take around 4 to 8 hours to do this test, we respect your time and don't want you to spend days on this.

# Final word

Good luck and please do this as you were already an developer in our team.
