import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
  'GET /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
}

/**
 * `DELETE /me/onenote/resources/{onenoteResource-id}/content`
 *
 * The content stream
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    method: 'delete',
    path: '/me/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/resources/{onenoteResource-id}/content`
 *
 * Retrieve the binary data of a file or image resource object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [{ name: 'onenoteResource-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onenote/resources/{onenoteResource-id}/content`
 *
 * The content stream
 */
export function set(
  body: IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['body'],
  params?: IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/me/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [{ name: 'onenoteResource-id', in: 'path' }],
    params,
    body,
  };
}
