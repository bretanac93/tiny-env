import { ConfigMap } from './types.ts';

export default (filePath: string) => {
  const rawContent = Deno.readTextFileSync(filePath);

  const result: ConfigMap = {};
  rawContent.split('\n').forEach((item) => {
    if (!item.trim().startsWith('#')) {
      const [key, value] = item.split('=');
      result[key] = value;
    }
  });

  return result;
};
