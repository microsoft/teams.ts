import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /groups/{group-id}/events/{event-id}/extensions': Operation<
    '/groups/{group-id}/events/{event-id}/extensions',
    'get'
  >;
  'GET /groups/{group-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /groups/{group-id}/events/{event-id}/extensions': Operation<
    '/groups/{group-id}/events/{event-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/events/{event-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/events/{event-id}/extensions`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/events/{event-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/events/{event-id}/extensions']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/events/{event-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/events/{event-id}/extensions/{extension-id}`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/events/{event-id}/extensions`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/events/{event-id}/extensions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/events/{event-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/events/{event-id}/extensions']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/events/{event-id}/extensions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
