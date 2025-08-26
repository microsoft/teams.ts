import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'delete'
  >;
  'GET /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'get'
  >;
  'PATCH /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'patch'
  >;
}

/**
 * `DELETE /admin/microsoft365Apps/installationOptions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/microsoft365Apps/installationOptions']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/microsoft365Apps/installationOptions']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/microsoft365Apps/installationOptions',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/microsoft365Apps/installationOptions`
 *
 * Read the properties and relationships of an m365AppsInstallationOptions object.
 */
export function list(
  params?: IEndpoints['GET /admin/microsoft365Apps/installationOptions']['parameters']
): EndpointRequest<IEndpoints['GET /admin/microsoft365Apps/installationOptions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/microsoft365Apps/installationOptions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/microsoft365Apps/installationOptions`
 *
 * Update the properties of an m365AppsInstallationOptions object.
 */
export function update(
  body: IEndpoints['PATCH /admin/microsoft365Apps/installationOptions']['body'],
  params?: IEndpoints['PATCH /admin/microsoft365Apps/installationOptions']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/microsoft365Apps/installationOptions']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/microsoft365Apps/installationOptions',
    paramDefs: [],
    params,
    body,
  };
}
