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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/exchange`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /admin/exchange']['body'],
  params?: IEndpoints['PATCH /admin/exchange']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/exchange']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/exchange',
    paramDefs: [],
    params,
    body,
  };
}
