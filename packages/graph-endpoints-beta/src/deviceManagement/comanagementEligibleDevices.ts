import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagementEligibleDevices': Operation<
    '/deviceManagement/comanagementEligibleDevices',
    'get'
  >;
  'GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}': Operation<
    '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    'patch'
  >;
  'POST /deviceManagement/comanagementEligibleDevices': Operation<
    '/deviceManagement/comanagementEligibleDevices',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'comanagementEligibleDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagementEligibleDevices`
 *
 * The list of co-management eligible devices report
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagementEligibleDevices']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/comanagementEligibleDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagementEligibleDevices',
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
 * `GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
 *
 * The list of co-management eligible devices report
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'comanagementEligibleDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}',
    paramDefs: [{ name: 'comanagementEligibleDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagementEligibleDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagementEligibleDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagementEligibleDevices']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/comanagementEligibleDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagementEligibleDevices',
    paramDefs: [],
    params,
    body,
  };
}
