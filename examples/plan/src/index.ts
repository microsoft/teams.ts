import { setTimeout as sleep } from 'node:timers/promises';

import { Step } from '@microsoft/teams.api';
import { App, Plan, PlanOptions } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const logger = new ConsoleLogger('@examples/plan');

export const app = new App({ logger });
const proactiveTasks = new Set<Promise<void>>();

function lookupStep(): Step {
  return {
    id: 'lookup', version: 1, status: 'active', title: 'Checking sources',
    description: 'Looking for relevant information in the Teams SDK documentation.',
  };
}

async function prepareAnswer(plan: Plan, readyDescription: string) {
  await plan.start([
    lookupStep(),
    {
      id: 'answer', version: 1, status: 'proposed', title: 'Draft answer',
      description: 'Summarize the findings once the sources have been checked.',
    },
  ]);
  await sleep(2000);
  await plan.update([{
    id: 'lookup', version: 2, status: 'blocked', title: 'Waiting for source response',
    description: 'The source has not responded yet; waiting before continuing.',
  }]);
  await sleep(2000);
  await plan.update([
    {
      id: 'lookup', version: 3, status: 'completed', title: 'Sources checked',
      description: 'Found the relevant Teams SDK documentation for the answer.',
      sources: [{ title: 'Teams SDK docs', url: 'https://microsoft.github.io/teams-sdk/', icon: 'Text' }],
    },
    {
      id: 'answer', version: 2, status: 'active', title: 'Drafting answer',
      description: 'Turning the source information into a concise response.',
    },
  ]);
  await sleep(2000);
  await plan.update([{
    id: 'answer', version: 3, status: 'completed', title: 'Answer ready',
    description: readyDescription,
  }]);
  await sleep(2000);
}

async function sendProactivePlan(options: PlanOptions) {
  await sleep(10000);
  const plan = new Plan(options);
  await plan.update([
    {
      id: 'report', version: 2, status: 'completed', title: 'Report ready',
      description: 'The background work is complete and the report is ready to send.',
    },
    {
      id: 'deliver', version: 1, status: 'active', title: 'Delivering report',
      description: 'Finalizing delivery of the completed report back to the user.',
    },
  ]);
  await sleep(2000);
  await plan.update([{
    id: 'deliver', version: 2, status: 'completed', title: 'Delivered report',
    description: 'Finalized delivery of the completed report back to the user.',
  }]);
  await sleep(10000);
  await plan.complete('Your background report is ready.');
}

app.on('message', async (ctx) => {
  const command = ctx.activity.stripMentionsText().text.trim().toLowerCase();
  const plan = ctx.plan();
  switch (command) {
    case 'complete':
      await prepareAnswer(plan, 'The response is ready to send.');
      await plan.complete('Here is the answer based on the sources.');
      break;
    case 'complete-stream':
      await prepareAnswer(plan, 'The response is ready to stream.');
      for (const chunk of ['Here is ', 'the answer ', 'based on the sources.']) {
        ctx.stream.emit(chunk);
        await sleep(500);
      }
      ctx.stream.emit(plan.completion());
      await ctx.stream.close();
      break;
    case 'stop':
      await plan.start([lookupStep()]);
      await sleep(5000);
      await plan.stop();
      break;
    case 'error':
      await plan.start([lookupStep()]);
      await sleep(2000);
      await plan.update([{
        id: 'lookup', version: 2, status: 'error', title: 'Source lookup failed',
        description: 'The source could not be retrieved, so the lookup cannot continue.',
      }]);
      await sleep(2000);
      await plan.error();
      break;
    case 'proactive': {
      await plan.start([{
        id: 'report', version: 1, status: 'active', title: 'Preparing background report',
        description: 'This report continues in the background after the handler returns.',
      }]);
      const options: PlanOptions = { ...plan.toJSON(), apiClient: ctx.api };
      const task = sendProactivePlan(options);
      proactiveTasks.add(task);
      void task.catch((error) => logger.error('Proactive Plan failed', error))
        .finally(() => proactiveTasks.delete(task));
      break;
    }
    default:
      await ctx.send('Send `complete`, `complete-stream`, `stop`, `error`, or `proactive` to run a Plan lifecycle demo.');
  }
});

if (require.main === module) {
  app.start().catch((error) => logger.error(error));
}
