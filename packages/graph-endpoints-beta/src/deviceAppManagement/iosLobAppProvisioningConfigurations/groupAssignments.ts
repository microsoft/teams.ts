import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    'get'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'mobileAppProvisioningConfigGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments`
 *
 * The associated group assignments.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
 *
 * The associated group assignments.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'mobileAppProvisioningConfigGroupAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments/{mobileAppProvisioningConfigGroupAssignment-id}',
    paramDefs: [
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'mobileAppProvisioningConfigGroupAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/groupAssignments',
    paramDefs: [{ name: 'iosLobAppProvisioningConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
