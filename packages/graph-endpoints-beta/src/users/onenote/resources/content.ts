import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
  'GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function set(
  body: IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['body'],
  params?: IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
