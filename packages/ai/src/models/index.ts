import { AudioModel } from './audio';
import { ImageModel } from './image';
import { ChatModel } from './chat';

export type Model = ChatModel | AudioModel | ImageModel;

export * from './chat';
export * from './audio';
export * from './image';
