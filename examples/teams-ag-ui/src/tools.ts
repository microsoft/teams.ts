import { type Tool } from '@ag-ui/client';

import { APPROVAL_METADATA_KEY } from './interrupts/middleware';

/**
 * Demo tools the agent may call. These are *declared* to the model but not
 * executed by us — for `sendEmail` the InterruptMiddleware suspends the
 * run and asks the user. For `getTime` we let LangChain return the empty
 * tool body (which is fine — the model rarely needs it for this demo).
 */
export const demoTools: Tool[] = [
  {
    name: 'sendEmail',
    description:
      'Send an email. Requires explicit user approval before being executed.',
    parameters: {
      type: 'object',
      properties: {
        to: { type: 'string', description: 'Recipient email' },
        subject: { type: 'string' },
        body: { type: 'string' },
      },
      required: ['to', 'subject', 'body'],
    },
    metadata: { [APPROVAL_METADATA_KEY]: true },
  },
  {
    name: 'getTime',
    description: 'Get the current server time as an ISO-8601 string.',
    parameters: { type: 'object', properties: {} },
  },
];
