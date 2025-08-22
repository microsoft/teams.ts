import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession`
 *
 * Create an upload session to iteratively upload ranges of a file as an attachment to a todoTask. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. The request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows the transfer to be resumed, in case the network connection is dropped during the upload. The following are the steps to attach a file to a Microsoft To Do task using an upload session: For an example that describes the end-to-end attachment process, see attach files to a To Do task.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['response']
> {
  return {
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
