import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'delete'
  >;
  'GET /applications/{application-id}/extensionProperties': Operation<
    '/applications/{application-id}/extensionProperties',
    'get'
  >;
  'GET /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}': Operation<
    '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    'patch'
  >;
  'POST /applications/{application-id}/extensionProperties': Operation<
    '/applications/{application-id}/extensionProperties',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}`
 *
 * Delete a directory extension definition represented by an extensionProperty object. You can delete only directory extensions that aren&#x27;t synced from on-premises active directory (AD).
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'extensionProperty-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/extensionProperties`
 *
 * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/extensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/extensionProperties']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/extensionProperties',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/extensionProperties/{extensionProperty-id}`
 *
 * Read a directory extension definition represented by an extensionProperty object.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'extensionProperty-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/extensionProperties/{extensionProperty-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/applications/{application-id}/extensionProperties/{extensionProperty-id}',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'extensionProperty-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/extensionProperties`
 *
 * Create a new directory extension definition, represented by an extensionProperty object.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/extensionProperties']['body'],
  params?: IEndpoints['POST /applications/{application-id}/extensionProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/extensionProperties']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/extensionProperties',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
