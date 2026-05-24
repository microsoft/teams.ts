import type { IAudioModel } from './audio';
import type { IChatModel } from './chat';
import type { IImageModel } from './image';

export type Model = IChatModel | IAudioModel | IImageModel;

export * from './chat';
export * from './audio';
export * from './image';
