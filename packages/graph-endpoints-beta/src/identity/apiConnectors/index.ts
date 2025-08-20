export * as uploadClientCertificate from './uploadClientCertificate';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'delete'
  >;
  'GET /identity/apiConnectors': Operation<'/identity/apiConnectors', 'get'>;
  'GET /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'get'
  >;
  'PATCH /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'patch'
  >;
  'POST /identity/apiConnectors': Operation<'/identity/apiConnectors', 'post'>;
}

/**
 * `DELETE /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Deletes an identityApiConnector object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityApiConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/apiConnectors`
 *
 * Read the properties of an identityApiConnector object.
 */
export function list(
  params?: IEndpoints['GET /identity/apiConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /identity/apiConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/apiConnectors',
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
 * `GET /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Read the properties of an identityApiConnector object.
 */
export function get(
  params?: IEndpoints['GET /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityApiConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Update the properties of an identityApiConnector object.
 */
export function update(
  body: IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['body'],
  params?: IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: [{ name: 'identityApiConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/apiConnectors`
 *
 * Create a new identityApiConnector object.
 */
export function create(
  body: IEndpoints['POST /identity/apiConnectors']['body'],
  params?: IEndpoints['POST /identity/apiConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /identity/apiConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/apiConnectors',
    paramDefs: [],
    params,
    body,
  };
}
