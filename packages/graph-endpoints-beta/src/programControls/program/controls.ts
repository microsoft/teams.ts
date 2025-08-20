import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'delete'
  >;
  'GET /programControls/{programControl-id}/program/controls': Operation<
    '/programControls/{programControl-id}/program/controls',
    'get'
  >;
  'GET /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'get'
  >;
  'PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}': Operation<
    '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    'patch'
  >;
  'POST /programControls/{programControl-id}/program/controls': Operation<
    '/programControls/{programControl-id}/program/controls',
    'post'
  >;
}

/**
 * `DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'programControl-id', in: 'path' },
      { name: 'programControl-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programControls/{programControl-id}/program/controls`
 *
 * Controls associated with the program.
 */
export function list(
  params?: IEndpoints['GET /programControls/{programControl-id}/program/controls']['parameters']
): EndpointRequest<
  IEndpoints['GET /programControls/{programControl-id}/program/controls']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls/{programControl-id}/program/controls',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programControls/{programControl-id}/program/controls/{programControl-id1}`
 *
 * Controls associated with the program.
 */
export function get(
  params?: IEndpoints['GET /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'programControl-id', in: 'path' },
      { name: 'programControl-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['body'],
  params?: IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programControls/{programControl-id}/program/controls/{programControl-id1}',
    paramDefs: [
      { name: 'programControl-id', in: 'path' },
      { name: 'programControl-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /programControls/{programControl-id}/program/controls`
 *
 */
export function create(
  body: IEndpoints['POST /programControls/{programControl-id}/program/controls']['body'],
  params?: IEndpoints['POST /programControls/{programControl-id}/program/controls']['parameters']
): EndpointRequest<
  IEndpoints['POST /programControls/{programControl-id}/program/controls']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programControls/{programControl-id}/program/controls',
    paramDefs: [{ name: 'programControl-id', in: 'path' }],
    params,
    body,
  };
}
