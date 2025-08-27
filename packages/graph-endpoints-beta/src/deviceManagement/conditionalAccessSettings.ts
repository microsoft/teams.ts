import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'delete'
  >;
  'GET /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/conditionalAccessSettings': Operation<
    '/deviceManagement/conditionalAccessSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/conditionalAccessSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/conditionalAccessSettings`
 *
 * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/conditionalAccessSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/conditionalAccessSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/conditionalAccessSettings',
    paramDefs: [],
    params,
    body,
  };
}
