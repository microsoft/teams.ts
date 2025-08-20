import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'delete'
  >;
  'GET /security/attackSimulation/loginPages': Operation<
    '/security/attackSimulation/loginPages',
    'get'
  >;
  'GET /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/loginPages/{loginPage-id}': Operation<
    '/security/attackSimulation/loginPages/{loginPage-id}',
    'patch'
  >;
  'POST /security/attackSimulation/loginPages': Operation<
    '/security/attackSimulation/loginPages',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/loginPages/{loginPage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/loginPages/{loginPage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/attackSimulation/loginPages/{loginPage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'loginPage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/loginPages`
 *
 * Get a list of the loginPage objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/loginPages']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/loginPages']['response']> {
  return {
    method: 'get',
    path: '/security/attackSimulation/loginPages',
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
 * `GET /security/attackSimulation/loginPages/{loginPage-id}`
 *
 * Get a loginPage associated with an attack simulation campaign for a tenant. Login pages are shown to users in attack simulations that use credential harvest and link in attachment social engineering techniques.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/loginPages/{loginPage-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/attackSimulation/loginPages/{loginPage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'loginPage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/loginPages/{loginPage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/loginPages/{loginPage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/attackSimulation/loginPages/{loginPage-id}',
    paramDefs: [{ name: 'loginPage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/loginPages`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/loginPages']['body'],
  params?: IEndpoints['POST /security/attackSimulation/loginPages']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/loginPages']['response']> {
  return {
    method: 'post',
    path: '/security/attackSimulation/loginPages',
    paramDefs: [],
    params,
    body,
  };
}
