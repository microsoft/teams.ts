import { AxiosRequestConfig } from 'axios';

export interface StringLike {
  toString(): string;
}

export type TokenFactory = (
  config: AxiosRequestConfig
) => string | StringLike | undefined | Promise<string | StringLike | undefined>;

export type Token = string | StringLike | TokenFactory;
