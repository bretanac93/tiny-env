import parse from './parse.ts';
import { ConfigParams } from './types.ts';

const defaultConf: ConfigParams = {
  dotEnvPath: `${Deno.cwd()}/.env`,
};

export function load(params: ConfigParams = defaultConf) {
  const config = parse(params.dotEnvPath as string);
  Object.keys(config).forEach((configKey) => {
    if (!Deno.env.get(configKey)) {
      Deno.env.set(configKey, config[configKey]);
    }
  });
};
