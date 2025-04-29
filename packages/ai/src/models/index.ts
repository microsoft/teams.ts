import { IAudioModel } from './audio';
import { IChatModel } from './chat';
import { IImageModel } from './image';

export type Model = IChatModel | IAudioModel | IImageModel;

export * from './chat';
export * from './audio';
export * from './image';
