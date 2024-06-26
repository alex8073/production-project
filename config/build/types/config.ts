export type IBuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface IBuildOptions {
  mode: IBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "frontend" | "storybook" | "jest";
}

export interface IBuildEnv {
  mode: IBuildMode;
  port: number;
  apiUrl: string;
}
