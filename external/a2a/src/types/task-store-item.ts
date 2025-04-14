import { Message, Task } from '../schema';

export type TaskStoreItem = {
  task: Task;
  history: Message[];
};
