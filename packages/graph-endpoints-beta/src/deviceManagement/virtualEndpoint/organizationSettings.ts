import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/organizationSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/organizationSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/organizationSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/organizationSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/organizationSettings`
 *
 * Read the properties and relationships of the cloudPcOrganizationSettings from the current tenant. A tenant has only one cloudPcOrganizationSettings object.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/organizationSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/organizationSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/organizationSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/organizationSettings`
 *
 * Update the properties of the cloudPcOrganizationSettings object in a tenant.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/organizationSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/organizationSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/organizationSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/organizationSettings',
    paramDefs: [],
    params,
    body,
  };
}
