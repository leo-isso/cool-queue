# Cool Queue App

Demo: [Cool App](https://cool-queue.vercel.app/)

## What is Cool Queue App?

Cool Queue is a Queue manager that allows you to:

- See the pending, in progress, and completed (finished and canceled) items

- Add new items to the queue

- Remove pending items

- Remove in progress items

## How does it work?

When you add a new item to queue, if the queue is empty and there's no item in progress, it automatically starts working with the added item, otherwise the item is added to the queue.

Whenever the item finished its job, it's added to the completed state with the "finished" status.

If you want, you can cancel an item in progress, and it'll also be added to the completed list, but as "canceled". The same works for item in queue, you can remove them as you need.

## What happens when the item is "working"

There's a setInterval, that keeps looping every second, until the timer is equal or higher to the item's set time.

There's also an injected worker, named "spy", that keeps updating the application state with the current progress, and it is also resposible to call the action that finishes the item, and if the item is canceled, it stops the interval. (Done as experimental feature)

## How to run the project

This project was bootstraped with `create-react-app` to spare some time of setup and configuration.

You can simply start the project by using the following commands:

```sh
yarn install
yarn start
```

If you prefer, you can build and locally serve the application by using any NodeJS web server.

`create-react-app` recommends the simple `serve`.

To build and serve the project, run:

```sh
npm install -g serve
serve -s build
```
