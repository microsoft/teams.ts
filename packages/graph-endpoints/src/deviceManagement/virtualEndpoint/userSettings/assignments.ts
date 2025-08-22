import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcUserSetting-id', in: 'path' },
      { name: 'cloudPcUserSettingAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments`
 *
 * Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSetting.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcUserSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
 *
 * Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have cloudPCUserSetting assigned. Returned only on $expand. For an example, see Get cloudPcUserSetting.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcUserSetting-id', in: 'path' },
      { name: 'cloudPcUserSettingAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments/{cloudPcUserSettingAssignment-id}',
    paramDefs: [
      { name: 'cloudPcUserSetting-id', in: 'path' },
      { name: 'cloudPcUserSettingAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}/assignments',
    paramDefs: [{ name: 'cloudPcUserSetting-id', in: 'path' }],
    params,
    body,
  };
}
