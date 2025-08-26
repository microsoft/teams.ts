export * as program from './program';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'delete'
  >;
  'GET /programs/{program-id}/controls': Operation<'/programs/{program-id}/controls', 'get'>;
  'GET /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'get'
  >;
  'PATCH /programs/{program-id}/controls/{programControl-id}': Operation<
    '/programs/{program-id}/controls/{programControl-id}',
    'patch'
  >;
  'POST /programs/{program-id}/controls': Operation<'/programs/{program-id}/controls', 'post'>;
}

/**
 * `DELETE /programs/{program-id}/controls/{programControl-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programs/{program-id}/controls`
 *
 * In the Microsoft Entra access reviews feature, list all the programControl objects, linked to a particular program.
 */
export function list(
  params?: IEndpoints['GET /programs/{program-id}/controls']['parameters']
): EndpointRequest<IEndpoints['GET /programs/{program-id}/controls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}/controls',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'program-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programs/{program-id}/controls/{programControl-id}`
 *
 * Controls associated with the program.
 */
export function get(
  params?: IEndpoints['GET /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programs/{program-id}/controls/{programControl-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['body'],
  params?: IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /programs/{program-id}/controls/{programControl-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programs/{program-id}/controls/{programControl-id}',
    paramDefs: [
      { name: 'program-id', in: 'path' },
      { name: 'programControl-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /programs/{program-id}/controls`
 *
 */
export function create(
  body: IEndpoints['POST /programs/{program-id}/controls']['body'],
  params?: IEndpoints['POST /programs/{program-id}/controls']['parameters']
): EndpointRequest<IEndpoints['POST /programs/{program-id}/controls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programs/{program-id}/controls',
    paramDefs: [{ name: 'program-id', in: 'path' }],
    params,
    body,
  };
}
