import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    'get'
  >;
  'PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'networkAccessTraffic-transactionId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    paramDefs: [{ name: 'networkAccessTraffic-transactionId', in: 'path' }],
    params,
    body,
  };
}
