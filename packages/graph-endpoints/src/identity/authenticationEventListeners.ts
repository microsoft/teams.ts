import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'delete'
  >;
  'GET /identity/authenticationEventListeners': Operation<
    '/identity/authenticationEventListeners',
    'get'
  >;
  'GET /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'get'
  >;
  'PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}': Operation<
    '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    'patch'
  >;
  'POST /identity/authenticationEventListeners': Operation<
    '/identity/authenticationEventListeners',
    'post'
  >;
}

/**
 * `DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}`
 *
 * Delete an authenticationEventListener object. The following derived types are currently supported.
 */
export function del(
  params?: IEndpoints['DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationEventListener-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/authenticationEventListeners`
 *
 * Get a list of the authenticationEventListener objects and their properties. The following derived types are supported:
 */
export function list(
  params?: IEndpoints['GET /identity/authenticationEventListeners']['parameters']
): EndpointRequest<IEndpoints['GET /identity/authenticationEventListeners']['response']> {
  return {
    method: 'get',
    path: '/identity/authenticationEventListeners',
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
 * `GET /identity/authenticationEventListeners/{authenticationEventListener-id}`
 *
 * Read the properties and relationships of an authenticationEventListener object. The @odata.type property in the response object indicates the type of the authenticationEventListener object. The following derived types are currently supported.
 */
export function get(
  params?: IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationEventListener-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}`
 *
 * Update the properties of an authenticationEventListener object. You must specify the @odata.type property and the value of the authenticationEventListener object type to update. The following derived types are currently supported.
 */
export function update(
  body: IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['body'],
  params?: IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/authenticationEventListeners/{authenticationEventListener-id}',
    paramDefs: [{ name: 'authenticationEventListener-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/authenticationEventListeners`
 *
 * Create a new authenticationEventListener object. You can create one of the following subtypes that are derived from authenticationEventListener.
 */
export function create(
  body: IEndpoints['POST /identity/authenticationEventListeners']['body'],
  params?: IEndpoints['POST /identity/authenticationEventListeners']['parameters']
): EndpointRequest<IEndpoints['POST /identity/authenticationEventListeners']['response']> {
  return {
    method: 'post',
    path: '/identity/authenticationEventListeners',
    paramDefs: [],
    params,
    body,
  };
}
