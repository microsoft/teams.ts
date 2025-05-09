import * as schema from '../schema';
import { TaskContext, TaskUpdate } from './a2a-types';

export type Respond = (taskUpdate: TaskUpdate | string) => Promise<void>;
export type AccumulateArtifacts = (artifact: schema.Artifact | schema.Artifact[]) => Promise<void>;

export interface A2AEvents {
    'a2a:receive': {
        taskContext: TaskContext;
        respond: Respond;
        accumulateArtifacts: AccumulateArtifacts;
    }
}