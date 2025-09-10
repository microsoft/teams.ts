export * as presenters from './presenters';
export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/townhalls': Operation<'/solutions/virtualEvents/townhalls', 'get'>;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/townhalls': Operation<
    '/solutions/virtualEvents/townhalls',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventTownhall-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls`
 *
 * Read the properties and relationships of a virtualEventTownhall object.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/townhalls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Read the properties and relationships of a virtualEventTownhall object.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Update the properties of a virtualEventTownhall object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/townhalls`
 *
 * Create a new virtualEventTownhall object in draft mode.
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/townhalls']['body']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/townhalls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/townhalls',
    body,
  };
}
