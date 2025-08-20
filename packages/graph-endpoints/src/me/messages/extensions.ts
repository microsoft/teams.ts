import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/messages/{message-id}/extensions': Operation<
    '/me/messages/{message-id}/extensions',
    'get'
  >;
  'GET /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/messages/{message-id}/extensions/{extension-id}': Operation<
    '/me/messages/{message-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/messages/{message-id}/extensions': Operation<
    '/me/messages/{message-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/messages/{message-id}/extensions/{extension-id}`
 *
 * Delete an open extension (openTypeExtension object) from the specified instance of a resource.  For the list of resources that support open extensions, see the table in the Permissions section.
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/extensions`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function list(
  params?: IEndpoints['GET /me/messages/{message-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/extensions']['response']> {
  return {
    method: 'get',
    path: '/me/messages/{message-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/extensions/{extension-id}`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/messages/{message-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/messages/{message-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/messages/{message-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'message-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/messages/{message-id}/extensions`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/extensions']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/extensions']['response']> {
  return {
    method: 'post',
    path: '/me/messages/{message-id}/extensions',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
