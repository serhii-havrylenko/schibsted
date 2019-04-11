# Schibsted challenge

## Pre-requirements

This application is written in TypeScript + babel7 and should be started by NodeJS and Yarn:

| App/Lib    | Version     |
| ---------- | ----------- |
| NodeJs     | LTS (10.15) |
| Yarn       | >= 1.10.0   |
| TypeScript | >= 3.4.0    |

## How to start

Simply clone this repository with `git clone` or other preferable way and follow next steps:

- install dependencies

```bash
yarn
```

- start the app

```bash
yarn start
```

Wait until application starts (usually it takes around 10-20 seconds on first start) and it will be available on `http://localhost:9000`. Graphql playground is available on `http://localhost:9000/api/graphql`

## Storybook

This repository contains `storybook` for developing/presenting components. To run it just hit

```bash
yarn storybook
```

Wait for it and it will be opened automatically in the new tab (in case of need it's available on `http://localhost:9001`)

## Testing

To test whole application just run

```bash
yarn jest
```

It will run `jest` and print the output to the standard output.

To run jest in watch mode with notification about each run enabled (for TDD), run

```bash
yarn tdd
```
