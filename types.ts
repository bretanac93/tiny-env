export type ConfigMap = {
  [key: string]: string;
};

export type ConfigParams = {
  safe: boolean; // throw exception if config parameter is undefined
  dotEnvPath?: string;
};
