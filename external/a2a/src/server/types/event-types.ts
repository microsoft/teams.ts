import * as schema from '../../common/schema';

import { TaskContext, TaskUpdate } from './a2a-types';

export type Respond = (taskUpdate: TaskUpdate | string) => Promise<void>;
export type AccumulateArtifacts = (artifact: schema.Artifact | schema.Artifact[]) => Promise<void>;

export type A2AEvents = {
    'a2a:message': {
        /**
         * The context of the task
         */
        taskContext: TaskContext;
        /**
         * Function to respond to the task.
         * This function must be called once to indicate
         * that the task is handled.
         */
        respond: Respond;
        /**
         * Function to accumulate artifacts.
         * This function can be called multiple times to accumulate
         * artifacts.
         */
        accumulateArtifacts: AccumulateArtifacts;
    }
};