import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'delete'>;
  'GET /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'get'>;
  'PATCH /admin/microsoft365Apps': Operation<'/admin/microsoft365Apps', 'patch'>;
  'GET /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'get'
  >;
  'PATCH /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'patch'
  >;
  'DELETE /admin/microsoft365Apps/installationOptions': Operation<
    '/admin/microsoft365Apps/installationOptions',
    'delete'
  >;
}

/**
 * `DELETE /admin/microsoft365Apps`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/microsoft365Apps']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/microsoft365Apps',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/microsoft365Apps`
 *
 * A container for the Microsoft 365 apps admin functionality.
 */
export function list(
  params?: IEndpoints['GET /admin/microsoft365Apps']['parameters']
): EndpointRequest<IEndpoints['GET /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/microsoft365Apps',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/microsoft365Apps`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/microsoft365Apps']['body']
): EndpointRequest<IEndpoints['PATCH /admin/microsoft365Apps']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/microsoft365Apps',
    body,
  };
}

export const installationOptions = {
  /**
   * `GET /admin/microsoft365Apps/installationOptions`
   *
   * Read the properties and relationships of an m365AppsInstallationOptions object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/microsoft365Apps/installationOptions']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/microsoft365Apps/installationOptions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/microsoft365Apps/installationOptions',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/microsoft365Apps/installationOptions`
   *
   * Update the properties of an m365AppsInstallationOptions object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/microsoft365Apps/installationOptions']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/microsoft365Apps/installationOptions']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/microsoft365Apps/installationOptions',
      body,
    };
  },
  /**
   * `DELETE /admin/microsoft365Apps/installationOptions`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/microsoft365Apps/installationOptions']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/microsoft365Apps/installationOptions']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/microsoft365Apps/installationOptions',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
