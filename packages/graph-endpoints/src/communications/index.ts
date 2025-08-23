export * as callRecords from './callRecords';
export * as calls from './calls';
export * as getPresencesByUserId from './getPresencesByUserId';
export * as onlineMeetings from './onlineMeetings';
export * as presences from './presences';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /communications': Operation<'/communications', 'get'>;
  'PATCH /communications': Operation<'/communications', 'patch'>;
}

/**
 * `GET /communications`
 *
 */
export function list(
  params?: IEndpoints['GET /communications']['parameters']
): EndpointRequest<IEndpoints['GET /communications']['response']> {
  return {
    method: 'get',
    path: '/communications',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /communications`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications']['body'],
  params?: IEndpoints['PATCH /communications']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications']['response']> {
  return {
    method: 'patch',
    path: '/communications',
    paramDefs: [],
    params,
    body,
  };
}
