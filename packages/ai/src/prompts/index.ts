import { IAudioPrompt } from './audio';
import { IChatPrompt } from './chat';

export type Prompt = IChatPrompt | IAudioPrompt;

export * from './chat';
export * from './audio';
