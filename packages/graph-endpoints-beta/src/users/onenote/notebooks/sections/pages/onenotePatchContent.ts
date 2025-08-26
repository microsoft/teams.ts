import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'notebook-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}
