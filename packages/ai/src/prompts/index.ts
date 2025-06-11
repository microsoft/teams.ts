import { IAudioPrompt } from './audio';
import { IChatPrompt } from './chat-types';

export type Prompt = IChatPrompt | IAudioPrompt;

export * from './audio';
export * from './chat';
export * from './chat-types';

