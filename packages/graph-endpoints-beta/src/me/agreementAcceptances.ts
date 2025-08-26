import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/agreementAcceptances': Operation<'/me/agreementAcceptances', 'get'>;
  'GET /me/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/me/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
}

/**
 * `GET /me/agreementAcceptances`
 *
 * Allows the signed-in user to retrieve their agreementAcceptance objects.
 */
export function list(
  params?: IEndpoints['GET /me/agreementAcceptances']['parameters']
): EndpointRequest<IEndpoints['GET /me/agreementAcceptances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/agreementAcceptances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/agreementAcceptances/{agreementAcceptance-id}`
 *
 * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/agreementAcceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/agreementAcceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/agreementAcceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}
