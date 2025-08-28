export * as completeSignup from './completeSignup';
export * as requestSignupUrl from './requestSignupUrl';
export * as syncApps from './syncApps';
export * as unbind from './unbind';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'delete'
  >;
  'GET /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/androidForWorkSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidForWorkSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidForWorkSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkSettings`
 *
 * The singleton Android for Work settings entity.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidForWorkSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidForWorkSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidForWorkSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidForWorkSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidForWorkSettings',
    paramDefs: [],
    params,
    body,
  };
}
