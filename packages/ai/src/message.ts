import { FunctionCall } from './function';

export type Message = UserMessage | ModelMessage | SystemMessage | FunctionMessage;

export interface UserMessage {
  role: 'user';
  content: string | ContentPart[];
}

export interface ModelMessage {
  role: 'model';
  content?: string;
  function_calls?: FunctionCall[];
}

export interface SystemMessage {
  role: 'system';
  content: string;
}

export interface FunctionMessage {
  role: 'function';
  content?: string;
  function_id: string;
}

export type ContentPart = TextContentPart | ImageContentPart;

export interface TextContentPart {
  type: 'text';
  text: string;
}

export interface ImageContentPart {
  type: 'image_url';
  image_url: string;
}
