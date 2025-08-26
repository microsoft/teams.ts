import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
    'delete'
  >;
  'GET /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
    'get'
  >;
  'PATCH /deviceManagement/remoteAssistanceSettings': Operation<
    '/deviceManagement/remoteAssistanceSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/remoteAssistanceSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/remoteAssistanceSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/remoteAssistanceSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/remoteAssistanceSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/remoteAssistanceSettings`
 *
 * The remote assistance settings singleton
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/remoteAssistanceSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/remoteAssistanceSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/remoteAssistanceSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/remoteAssistanceSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/remoteAssistanceSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/remoteAssistanceSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/remoteAssistanceSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/remoteAssistanceSettings',
    paramDefs: [],
    params,
    body,
  };
}
