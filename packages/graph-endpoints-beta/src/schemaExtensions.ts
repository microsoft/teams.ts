import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'delete'
  >;
  'GET /schemaExtensions': Operation<'/schemaExtensions', 'get'>;
  'GET /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'get'
  >;
  'PATCH /schemaExtensions/{schemaExtension-id}': Operation<
    '/schemaExtensions/{schemaExtension-id}',
    'patch'
  >;
  'POST /schemaExtensions': Operation<'/schemaExtensions', 'post'>;
}

/**
 * `DELETE /schemaExtensions/{schemaExtension-id}`
 *
 * Delete the definition of a schema extension. In app-only scenarios, only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the InDevelopment state. In delegated scenarios, the owner of the owner app can delete the schema extension definition, and only when the extension is in the InDevelopment state.  Deleting a schema extension definition before deleting the data associated with the extension in the target resources makes the data inaccessible. To recover the data, you can recreate the schema extension definition with the same configuration, but only if you used the verified domain for the schema extension id.
 */
export function del(
  params?: IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /schemaExtensions/{schemaExtension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/schemaExtensions/{schemaExtension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'schemaExtension-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /schemaExtensions`
  *
  * Get a list of schemaExtension objects in your tenant. The schema extensions can be InDevelopment, Available, or Deprecated and includes schema extensions:
+ Created by any apps you own in the current tenant.
+ Owned by other apps that are marked as Available.
+ Created by other developers from other tenants and marked as Available. This is different from other APIs that only return tenant-specific data. Extension data created based on schema extension definitions is tenant-specific and can only be accessed by apps explicitly granted permission. 
  */
export function list(
  params?: IEndpoints['GET /schemaExtensions']['parameters']
): EndpointRequest<IEndpoints['GET /schemaExtensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/schemaExtensions',
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
 * `GET /schemaExtensions/{schemaExtension-id}`
 *
 * Get the properties of the specified schemaExtension definition.
 */
export function get(
  params?: IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['parameters']
): EndpointRequest<IEndpoints['GET /schemaExtensions/{schemaExtension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/schemaExtensions/{schemaExtension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'schemaExtension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /schemaExtensions/{schemaExtension-id}`
 *
 * Update properties in the definition of the specified schemaExtension. Additive updates to the extension can only be made when the extension is in the InDevelopment or Available status. This means custom properties or target resource types cannot be removed from the definition, but new custom properties can be added and the description of the extension changed. The update applies to all the resources that are included in the targetTypes property of the extension. These resources are among the supporting resource types. For delegated flows, the signed-in user can update a schema extension as long as the owner property of the extension is set to the appId of an application the signed-in user owns. That application can be the one that initially created the extension, or some other application owned by the signed-in user.  This criteria for the owner property allows a signed-in user to make updates through other applications they don&#x27;t own, such as Microsoft Graph Explorer. When using Graph Explorer to update a schemaExtension resource, include the owner property in the PATCH request body.
 */
export function update(
  body: IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['body'],
  params?: IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /schemaExtensions/{schemaExtension-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/schemaExtensions/{schemaExtension-id}',
    paramDefs: [{ name: 'schemaExtension-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /schemaExtensions`
  *
  * Create a new schemaExtension definition and its associated schema extension property to extend a supporting resource type. Schema extensions let you add strongly-typed custom data to a resource. The app that creates a schema extension is the owner app. Depending on the 
state of the extension, the owner app, and only the owner app, may update or delete the extension.  See examples of how to define a schema extension that describes a training course, 
use the schema extension definition to create a new group with training course data, and 
add training course data to an existing group.
  */
export function create(
  body: IEndpoints['POST /schemaExtensions']['body'],
  params?: IEndpoints['POST /schemaExtensions']['parameters']
): EndpointRequest<IEndpoints['POST /schemaExtensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/schemaExtensions',
    paramDefs: [],
    params,
    body,
  };
}
