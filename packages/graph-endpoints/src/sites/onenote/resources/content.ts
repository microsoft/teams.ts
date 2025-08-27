import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content stream
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content stream
 */
export function set(
  body: IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['body'],
  params?: IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
