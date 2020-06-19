# Tiny env

Tiny env injects the configuration held by your `.env` file to the Deno environment.

## Usage

At the top of your project, call the `load()` function included in the module as it shows below.

```typescript

import { load } from 'https://github.com/bretanac93/tiny-env/mod.ts'
load();

```

After that, the environment variables inside of the `.env` file at the root of your project will be put into the Deno environment and accessible in the standard way (check the example below).

```typescript
Deno.env.get('APP_NAME')
```

## Configuration

If you have your `.env` somewhere else, you can define a custom path at the moment of loading it as the example below:

```typescript

import { load } from 'https://github.com/bretanac93/tiny-env/mod.ts'
load({
  dotEnvPath: '/custom/path/to/dotenv/file'
});

```

## Run

In order to make this work, the module needs access to the filesystem and the environment, please run your project with `--allow-read` and `--allow-env` flags to allow this.
