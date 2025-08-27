import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'delete'
  >;
  'GET /organization/{organization-id}/certificateBasedAuthConfiguration': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration',
    'get'
  >;
  'GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    'get'
  >;
  'POST /organization/{organization-id}/certificateBasedAuthConfiguration': Operation<
    '/organization/{organization-id}/certificateBasedAuthConfiguration',
    'post'
  >;
}

/**
 * `DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
 *
 * Delete a certificateBasedAuthConfiguration object.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'certificateBasedAuthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/certificateBasedAuthConfiguration`
 *
 * Get a list of certificateBasedAuthConfiguration objects.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/certificateBasedAuthConfiguration',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}`
 *
 * Get the properties of a certificateBasedAuthConfiguration object.
 */
export function get$1(
  params?: IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
      { name: 'certificateBasedAuthConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /organization/{organization-id}/certificateBasedAuthConfiguration`
 *
 * Create a new certificateBasedAuthConfiguration object.
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/certificateBasedAuthConfiguration']['response']
> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/certificateBasedAuthConfiguration',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
