export * as details from './details';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'delete'
  >;
  'GET /security/attackSimulation/landingPages': Operation<
    '/security/attackSimulation/landingPages',
    'get'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/landingPages/{landingPage-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}',
    'patch'
  >;
  'POST /security/attackSimulation/landingPages': Operation<
    '/security/attackSimulation/landingPages',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/landingPages/{landingPage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'landingPage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/landingPages`
 *
 * Get a list of the landingPage objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/landingPages']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/landingPages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages',
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
 * `GET /security/attackSimulation/landingPages/{landingPage-id}`
 *
 * Represents an attack simulation training landing page.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'landingPage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/landingPages/{landingPage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/landingPages/{landingPage-id}',
    paramDefs: [{ name: 'landingPage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/landingPages`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/landingPages']['body'],
  params?: IEndpoints['POST /security/attackSimulation/landingPages']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/landingPages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/landingPages',
    paramDefs: [],
    params,
    body,
  };
}
