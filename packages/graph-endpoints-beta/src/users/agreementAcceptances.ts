import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/agreementAcceptances': Operation<
    '/users/{user-id}/agreementAcceptances',
    'get'
  >;
  'GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/users/{user-id}/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/agreementAcceptances`
 *
 * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/agreementAcceptances']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/agreementAcceptances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/agreementAcceptances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}`
 *
 * The user&#x27;s terms of use acceptance statuses. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/agreementAcceptances/{agreementAcceptance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/agreementAcceptances/{agreementAcceptance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'agreementAcceptance-id', in: 'path' },
    ],
    params,
  };
}
