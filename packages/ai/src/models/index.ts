import { IAudioModel } from './audio';
import { IImageModel } from './image';
import { IChatModel } from './chat';

export type Model = IChatModel | IAudioModel | IImageModel;

export * from './chat';
export * from './audio';
export * from './image';
