import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement/windowsManagementApp': Operation<
    '/deviceAppManagement/windowsManagementApp',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement/windowsManagementApp`
 *
 * Windows management app.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagementApp']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/windowsManagementApp']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagementApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
