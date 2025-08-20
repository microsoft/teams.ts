import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containerTypes': Operation<
    '/storage/fileStorage/containerTypes',
    'get'
  >;
  'GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}': Operation<
    '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containerTypes': Operation<
    '/storage/fileStorage/containerTypes',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
 *
 * Delete a fileStorageContainerType object from the tenant. A fileStorageContainerType can only be deleted if no registrations are associated with it in any tenant.
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainerType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containerTypes`
 *
 * Get a list of the fileStorageContainerType objects and their properties for the current tenant.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containerTypes']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/containerTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypes',
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
 * `GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
 *
 * Get a fileStorageContainerType using its ID.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainerType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}`
 *
 * Update the properties of a fileStorageContainerType object. The properties updated are reflected in each registered fileStorageContainerTypeRegistration in a maximum of 24 hours. Settings overridden in a tenant aren&#x27;t updated. ETag is used for optimistic concurrency control. It must match the value from Create, Get or the previous Update.
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containerTypes/{fileStorageContainerType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containerTypes/{fileStorageContainerType-id}',
    paramDefs: [{ name: 'fileStorageContainerType-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containerTypes`
 *
 * Create a new fileStorageContainerType in the owning tenant. The number of container types in a tenant is limited.
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containerTypes']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containerTypes']['parameters']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/containerTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containerTypes',
    paramDefs: [],
    params,
    body,
  };
}
