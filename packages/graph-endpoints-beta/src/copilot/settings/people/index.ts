export * as enhancedPersonalization from './enhancedPersonalization';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/settings/people': Operation<'/copilot/settings/people', 'delete'>;
  'GET /copilot/settings/people': Operation<'/copilot/settings/people', 'get'>;
  'PATCH /copilot/settings/people': Operation<'/copilot/settings/people', 'patch'>;
}

/**
 * `DELETE /copilot/settings/people`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/settings/people']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/settings/people',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /copilot/settings/people`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/settings/people']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/settings/people',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/settings/people`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/settings/people']['body'],
  params?: IEndpoints['PATCH /copilot/settings/people']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/settings/people']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/settings/people',
    paramDefs: [],
    params,
    body,
  };
}
