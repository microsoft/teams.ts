import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
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
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
 *
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}`
  *
  * Update an open extension (openTypeExtension object) on a supported resource type.
- If a property in the request body matches the name of an existing property in the extension, the data in the extension is updated.
- Otherwise, that property and its data are added to the extension.  The data in an extension can be primitive types or arrays of primitive types. The operation behaves differently for resources that are directory objects vs other resources. For the list of resources that support open extensions, see the table in the Permissions section.
  */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/extensions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
