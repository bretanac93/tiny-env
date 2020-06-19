# Tiny env

Tiny env is a small deno package for demonstrative purposes, however, it's production ready and open for PRs.

## Installation

Import the package in your project using the repo url.

## Usage

At the top of your project, call the `load()` function included in the package as it shows below.

```typescript

import { load } from 'https://github.com/bretanac93/tiny-env/mod.ts'
load();

```

After that, the environment variables inside of the `.env` file at the root of the project will be put into the Deno environment and accessible in the standard way.

## Configuration

If you have your `.env` somewhere else, you can define a custom path at the moment of loading it as the example below:

```typescript

import { load } from 'https://github.com/bretanac93/tiny-env/mod.ts'
load({
  dotEnvPath: '/custom/path/to/dotenv/file'
});

```

## Run

In order to make this work, the package needs access to the filesystem, run the project with `--allow-read` and `--allow-env` flags.