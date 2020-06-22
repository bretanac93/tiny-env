import { assertEquals, assertThrows, assert } from 'https://deno.land/std/testing/asserts.ts';
import parse from './parse.ts';

Deno.test('Should show the content of the .env', async () => {
  const config = parse('./.env');
  assertEquals(config['APP_PORT'], '8000');
});

Deno.test('Should throw an exception when file does not exists', () => {
  assertThrows(() => parse('./.env.bull'));
});

Deno.test('Should ignore comments in .env file', () => {
  const config = parse('./.env');
  assert(!Object.keys(config).includes('COMMENT_TEST'));
})
