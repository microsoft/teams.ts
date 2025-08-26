export * as controls from './controls';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /programs/{program-id}': Operation<'/programs/{program-id}', 'delete'>;
  'GET /programs': Operation<'/programs', 'get'>;
  'GET /programs/{program-id}': Operation<'/programs/{program-id}', 'get'>;
  'PATCH /programs/{program-id}': Operation<'/programs/{program-id}', 'patch'>;
  'POST /programs': Operation<'/programs', 'post'>;
}

/**
 * `DELETE /programs/{program-id}`
 *
 * In the Microsoft Entra access reviews feature, delete a program object. Do not delete a program which still has programControl linked to it, those access reviews should first be deleted or unlinked from the program and linked to a different program.  Also, please note that the built-in default program cannot be deleted.
 */
export function del(
  params?: IEndpoints['DELETE /programs/{program-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /programs/{program-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programs/{program-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'program-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /programs`
 *
 * In the Microsoft Entra access reviews feature, list all the program objects.
 */
export function list(
  params?: IEndpoints['GET /programs']['parameters']
): EndpointRequest<IEndpoints['GET /programs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /programs/{program-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /programs/{program-id}']['parameters']
): EndpointRequest<IEndpoints['GET /programs/{program-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programs/{program-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'program-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /programs/{program-id}`
 *
 * In the Microsoft Entra access reviews feature, update an existing program object.
 */
export function update(
  body: IEndpoints['PATCH /programs/{program-id}']['body'],
  params?: IEndpoints['PATCH /programs/{program-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /programs/{program-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programs/{program-id}',
    paramDefs: [{ name: 'program-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /programs`
 *
 * In the Microsoft Entra access reviews feature, create a new program object.
 */
export function create(
  body: IEndpoints['POST /programs']['body'],
  params?: IEndpoints['POST /programs']['parameters']
): EndpointRequest<IEndpoints['POST /programs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programs',
    paramDefs: [],
    params,
    body,
  };
}
