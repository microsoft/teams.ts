export * as callRecords from './callRecords';
export * as calls from './calls';
export * as onlineMeetingConversations from './onlineMeetingConversations';
export * as onlineMeetings from './onlineMeetings';
export * as presences from './presences';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /communications': Operation<'/communications', 'get'>;
  'PATCH /communications': Operation<'/communications', 'patch'>;
  'POST /communications/getPresencesByUserId': Operation<
    '/communications/getPresencesByUserId',
    'post'
  >;
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications']['body']
): EndpointRequest<IEndpoints['PATCH /communications']['response']> {
  return {
    method: 'patch',
    path: '/communications',
    body,
  };
}

export const getPresencesByUserId = {
  /**
   * `POST /communications/getPresencesByUserId`
   *
   * Get the presence information for multiple users.
   */
  create: function create(
    body: IEndpoints['POST /communications/getPresencesByUserId']['body']
  ): EndpointRequest<IEndpoints['POST /communications/getPresencesByUserId']['response']> {
    return {
      method: 'post',
      path: '/communications/getPresencesByUserId',
      body,
    };
  },
};
