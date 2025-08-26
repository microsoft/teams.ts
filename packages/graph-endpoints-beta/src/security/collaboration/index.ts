export * as analyzedEmails from './analyzedEmails';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/collaboration': Operation<'/security/collaboration', 'delete'>;
  'GET /security/collaboration': Operation<'/security/collaboration', 'get'>;
  'PATCH /security/collaboration': Operation<'/security/collaboration', 'patch'>;
}

/**
 * `DELETE /security/collaboration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/collaboration']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/collaboration',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/collaboration`
 *
 * Enables read and other actions on collaborative entities in Microsoft Defender.
 */
export function get(
  params?: IEndpoints['GET /security/collaboration']['parameters']
): EndpointRequest<IEndpoints['GET /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/collaboration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/collaboration`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/collaboration']['body'],
  params?: IEndpoints['PATCH /security/collaboration']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/collaboration']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/collaboration',
    paramDefs: [],
    params,
    body,
  };
}
