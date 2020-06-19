import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import load from './load.ts';

Deno.test('Should load env variables from .env to app env', () => {
  load();
  const appName = Deno.env.get('APP_NAME');

  assertEquals(appName, 'app');
});

Deno.test('Should not override app env variables', () => {
  Deno.env.set('APP_PORT', '8085');
  load();

  assertEquals(Deno.env.get('APP_PORT'), '8085');
});
