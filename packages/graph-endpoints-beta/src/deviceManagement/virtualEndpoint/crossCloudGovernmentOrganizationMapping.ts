import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
 *
 * Read the properties and relationships of a cloudPcCrossCloudGovernmentOrganizationMapping object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    paramDefs: [],
    params,
    body,
  };
}
