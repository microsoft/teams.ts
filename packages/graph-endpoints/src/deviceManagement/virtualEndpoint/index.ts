export * as auditEvents from './auditEvents';
export * as cloudPCs from './cloudPCs';
export * as deviceImages from './deviceImages';
export * as galleryImages from './galleryImages';
export * as onPremisesConnections from './onPremisesConnections';
export * as provisioningPolicies from './provisioningPolicies';
export * as userSettings from './userSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint': Operation<'/deviceManagement/virtualEndpoint', 'get'>;
  'PATCH /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint`
 *
 * Virtual endpoint
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: [],
    params,
    body,
  };
}
