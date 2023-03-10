import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    displayName: 'e2e',
    rootDir: '.',
    preset: 'ts-jest',
    globalSetup: '<rootDir>/jest-e2e.global-setup.ts',
  };
};
