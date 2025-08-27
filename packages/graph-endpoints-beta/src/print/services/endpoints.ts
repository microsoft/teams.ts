import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'delete'
  >;
  'GET /print/services/{printService-id}/endpoints': Operation<
    '/print/services/{printService-id}/endpoints',
    'get'
  >;
  'GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'get'
  >;
  'PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'patch'
  >;
  'POST /print/services/{printService-id}/endpoints': Operation<
    '/print/services/{printService-id}/endpoints',
    'post'
  >;
}

/**
 * `DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printService-id', in: 'path' },
      { name: 'printServiceEndpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/services/{printService-id}/endpoints`
 *
 * Retrieve a list of endpoints exposed by a print service.
 */
export function list(
  params?: IEndpoints['GET /print/services/{printService-id}/endpoints']['parameters']
): EndpointRequest<IEndpoints['GET /print/services/{printService-id}/endpoints']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/services/{printService-id}/endpoints',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
 *
 * Retrieve the properties and relationships of a print service endpoint.
 */
export function get(
  params?: IEndpoints['GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printService-id', in: 'path' },
      { name: 'printServiceEndpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['body'],
  params?: IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    paramDefs: [
      { name: 'printService-id', in: 'path' },
      { name: 'printServiceEndpoint-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/services/{printService-id}/endpoints`
 *
 */
export function create(
  body: IEndpoints['POST /print/services/{printService-id}/endpoints']['body'],
  params?: IEndpoints['POST /print/services/{printService-id}/endpoints']['parameters']
): EndpointRequest<IEndpoints['POST /print/services/{printService-id}/endpoints']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/services/{printService-id}/endpoints',
    paramDefs: [{ name: 'printService-id', in: 'path' }],
    params,
    body,
  };
}
