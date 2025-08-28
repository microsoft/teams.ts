import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/appsAndServices': Operation<'/admin/appsAndServices', 'delete'>;
  'GET /admin/appsAndServices': Operation<'/admin/appsAndServices', 'get'>;
  'PATCH /admin/appsAndServices': Operation<'/admin/appsAndServices', 'patch'>;
}

/**
 * `DELETE /admin/appsAndServices`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/appsAndServices']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/appsAndServices']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/appsAndServices',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/appsAndServices`
 *
 * Read the properties and relationships of a adminAppsAndServices object.
 */
export function list(
  params?: IEndpoints['GET /admin/appsAndServices']['parameters']
): EndpointRequest<IEndpoints['GET /admin/appsAndServices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/appsAndServices',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/appsAndServices`
 *
 * Update the properties of a adminAppsAndServices object.
 */
export function update(
  body: IEndpoints['PATCH /admin/appsAndServices']['body'],
  params?: IEndpoints['PATCH /admin/appsAndServices']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/appsAndServices']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/appsAndServices',
    paramDefs: [],
    params,
    body,
  };
}
