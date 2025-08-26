import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcGalleryImage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/galleryImages`
 *
 * List the properties and relationships of the cloudPcGalleryImage objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/galleryImages',
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
 * `GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
 *
 * Read the properties and relationships of a specific cloudPcGalleryImage object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcGalleryImage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    paramDefs: [{ name: 'cloudPcGalleryImage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/galleryImages`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/galleryImages',
    paramDefs: [],
    params,
    body,
  };
}
