export * as mailboxes from './mailboxes';
export * as messageTraces from './messageTraces';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/exchange': Operation<'/admin/exchange', 'delete'>;
  'GET /admin/exchange': Operation<'/admin/exchange', 'get'>;
  'PATCH /admin/exchange': Operation<'/admin/exchange', 'patch'>;
}

/**
 * `DELETE /admin/exchange`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /admin/exchange']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/exchange',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/exchange`
 *
 * A container for the Exchange admin functionality. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /admin/exchange']['parameters']
): EndpointRequest<IEndpoints['GET /admin/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/exchange',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/exchange`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange']['body']
): EndpointRequest<IEndpoints['PATCH /admin/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange',
    body,
  };
}
