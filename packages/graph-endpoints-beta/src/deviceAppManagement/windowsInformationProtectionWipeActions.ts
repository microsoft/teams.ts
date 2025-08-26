import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionWipeActions': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionWipeActions': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionWipeAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionWipeActions`
 *
 * Windows information protection wipe actions.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionWipeActions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
 *
 * Windows information protection wipe actions.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionWipeAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    paramDefs: [{ name: 'windowsInformationProtectionWipeAction-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionWipeActions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionWipeActions']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionWipeActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionWipeActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionWipeActions',
    paramDefs: [],
    params,
    body,
  };
}
