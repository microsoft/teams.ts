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
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventTownhall-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls`
 *
 * Read the properties and relationships of a virtualEventTownhall object. All roles can get the details of a townhall event.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/townhalls']['response']> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls',
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
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Read the properties and relationships of a virtualEventTownhall object. All roles can get the details of a townhall event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}`
 *
 * Update the properties of a virtualEventTownhall object. Only the Organizer and Co-organizer can make changes to a townhall event.
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}',
    paramDefs: [{ name: 'virtualEventTownhall-id', in: 'path' }],
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
  body: IEndpoints['POST /solutions/virtualEvents/townhalls']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/townhalls']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/townhalls']['response']> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/townhalls',
    paramDefs: [],
    params,
    body,
  };
}
