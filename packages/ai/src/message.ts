import { IFunctionCall } from './function';

export type Message = IUserMessage | IModelMessage | ISystemMessage | IFunctionMessage;

export interface IUserMessage {
  role: 'user';
  content: string | ContentPart[];
}

export interface IModelMessage {
  role: 'model';
  content?: string;
  function_calls?: IFunctionCall[];
}

export interface ISystemMessage {
  role: 'system';
  content: string;
}

export interface IFunctionMessage {
  role: 'function';
  content?: string;
  function_id: string;
}

export type ContentPart = ITextContentPart | IImageContentPart;

export interface ITextContentPart {
  type: 'text';
  text: string;
}

export interface IImageContentPart {
  type: 'image_url';
  image_url: string;
}
