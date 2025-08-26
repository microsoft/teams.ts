import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'delete'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}/details': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details',
    'get'
  >;
  'GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    'patch'
  >;
  'POST /security/attackSimulation/landingPages/{landingPage-id}/details': Operation<
    '/security/attackSimulation/landingPages/{landingPage-id}/details',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'landingPage-id', in: 'path' },
      { name: 'landingPageDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/landingPages/{landingPage-id}/details`
 *
 * The detail information for a landing page associated with a simulation during its creation.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages/{landingPage-id}/details',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'landingPage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
 *
 * The detail information for a landing page associated with a simulation during its creation.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'landingPage-id', in: 'path' },
      { name: 'landingPageDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/landingPages/{landingPage-id}/details/{landingPageDetail-id}',
    paramDefs: [
      { name: 'landingPage-id', in: 'path' },
      { name: 'landingPageDetail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/landingPages/{landingPage-id}/details`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['body'],
  params?: IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/landingPages/{landingPage-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/landingPages/{landingPage-id}/details',
    paramDefs: [{ name: 'landingPage-id', in: 'path' }],
    params,
    body,
  };
}
