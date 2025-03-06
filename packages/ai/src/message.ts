import { FunctionCall } from './function';

export type Message = UserMessage | ModelMessage | SystemMessage | FunctionMessage;

export type UserMessage = {
  role: 'user';
  content: string | ContentPart[];
};

export type ModelMessage = {
  role: 'model';
  content?: string;
  function_calls?: FunctionCall[];
};

export type SystemMessage = {
  role: 'system';
  content: string;
};

export type FunctionMessage = {
  role: 'function';
  content?: string;
  function_id: string;
};

export type ContentPart = TextContentPart | ImageContentPart;

export type TextContentPart = {
  type: 'text';
  text: string;
};

export type ImageContentPart = {
  type: 'image_url';
  image_url: string;
};
