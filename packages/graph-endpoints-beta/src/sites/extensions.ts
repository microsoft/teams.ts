import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /sites/{site-id}/extensions': Operation<'/sites/{site-id}/extensions', 'get'>;
  'GET /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/extensions/{extension-id}': Operation<
    '/sites/{site-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /sites/{site-id}/extensions': Operation<'/sites/{site-id}/extensions', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/extensions/{extension-id}`
 *
 * Delete an open extension (openTypeExtension object) from the specified instance of a resource.  For the list of resources that support open extensions, see the table in the Permissions section.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/extensions/{extension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/extensions`
 *
 * The collection of open extensions defined for this site. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for this site. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/extensions/{extension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /sites/{site-id}/extensions/{extension-id}`
  *
  * Update an open extension (openTypeExtension object) on a supported resource type.
- If a property in the request body matches the name of an existing property in the extension, the data in the extension is updated.
- Otherwise, that property and its data are added to the extension.  The data in an extension can be primitive types or arrays of primitive types. The operation behaves differently for resources that are directory objects vs other resources. For the list of resources that support open extensions, see the table in the Permissions section.
  */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/extensions/{extension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/extensions`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/extensions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/extensions',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
