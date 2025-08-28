import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete`
 *
 * Complete an Outlook task which sets the completedDateTime property to the current date, and the status property to completed. If you are completing a task in a recurring series, in the response, the task collection will contain the completed task in the series, and the next task in the series. The completedDateTime property represents the date when the task is finished. The time portion of completedDateTime is set to midnight UTC by default. By default, this operation (and the POST, GET, and PATCH task operations) returns date-related properties in UTC. You can use the Prefer: outlook.timezone header to have all the date-related properties in the response represented in a time zone different than UTC.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/complete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
