import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'delete'
  >;
  'GET /print/connectors': Operation<'/print/connectors', 'get'>;
  'GET /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'get'
  >;
  'PATCH /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'patch'
  >;
  'POST /print/connectors': Operation<'/print/connectors', 'post'>;
}

/**
 * `DELETE /print/connectors/{printConnector-id}`
 *
 * Delete (unregister) a printConnector.
 */
export function del(
  params?: IEndpoints['DELETE /print/connectors/{printConnector-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/connectors/{printConnector-id}']['response']> {
  return {
    method: 'delete',
    path: '/print/connectors/{printConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/connectors`
 *
 * Retrieve a list of print connectors.
 */
export function list(
  params?: IEndpoints['GET /print/connectors']['parameters']
): EndpointRequest<IEndpoints['GET /print/connectors']['response']> {
  return {
    method: 'get',
    path: '/print/connectors',
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
 * `GET /print/connectors/{printConnector-id}`
 *
 * Retrieve the properties and relationships of a printConnector object.
 */
export function get(
  params?: IEndpoints['GET /print/connectors/{printConnector-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/connectors/{printConnector-id}']['response']> {
  return {
    method: 'get',
    path: '/print/connectors/{printConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/connectors/{printConnector-id}`
 *
 * Update the properties of a printConnector object.
 */
export function update(
  body: IEndpoints['PATCH /print/connectors/{printConnector-id}']['body'],
  params?: IEndpoints['PATCH /print/connectors/{printConnector-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/connectors/{printConnector-id}']['response']> {
  return {
    method: 'patch',
    path: '/print/connectors/{printConnector-id}',
    paramDefs: [{ name: 'printConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/connectors`
 *
 */
export function create(
  body: IEndpoints['POST /print/connectors']['body'],
  params?: IEndpoints['POST /print/connectors']['parameters']
): EndpointRequest<IEndpoints['POST /print/connectors']['response']> {
  return {
    method: 'post',
    path: '/print/connectors',
    paramDefs: [],
    params,
    body,
  };
}
