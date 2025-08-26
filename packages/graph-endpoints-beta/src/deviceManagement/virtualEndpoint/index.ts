export * as auditEvents from './auditEvents';
export * as bulkActions from './bulkActions';
export * as cloudApps from './cloudApps';
export * as cloudPCs from './cloudPCs';
export * as crossCloudGovernmentOrganizationMapping from './crossCloudGovernmentOrganizationMapping';
export * as deviceImages from './deviceImages';
export * as externalPartnerSettings from './externalPartnerSettings';
export * as frontLineServicePlans from './frontLineServicePlans';
export * as galleryImages from './galleryImages';
export * as onPremisesConnections from './onPremisesConnections';
export * as organizationSettings from './organizationSettings';
export * as provisioningPolicies from './provisioningPolicies';
export * as reports from './reports';
export * as servicePlans from './servicePlans';
export * as snapshots from './snapshots';
export * as supportedRegions from './supportedRegions';
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
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: [],
    params,
    body,
  };
}
