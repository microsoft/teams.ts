import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'delete'
  >;
  'GET /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'get'
  >;
  'PATCH /networkAccess/settings/forwardingOptions': Operation<
    '/networkAccess/settings/forwardingOptions',
    'patch'
  >;
}

/**
 * `DELETE /networkAccess/settings/forwardingOptions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/settings/forwardingOptions']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/forwardingOptions']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/settings/forwardingOptions',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/settings/forwardingOptions`
 *
 * Retrieve the forwarding options for the tenant, with a specific focus on the &#x27;skipDnsLookupState&#x27; flag. This flag determines whether DNS lookup will be skipped, allowing Microsoft 365 traffic to be forwarded directly to the Front Door using the client-resolved destination.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/settings/forwardingOptions']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/settings/forwardingOptions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/settings/forwardingOptions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/settings/forwardingOptions`
 *
 * the forwarding options for the tenant, with a specific focus on the skipDnsLookupState flag. This flag determines whether DNS lookup will be skipped, allowing Microsoft 365 traffic to be forwarded directly to the Front Door using the client-resolved destination.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/settings/forwardingOptions']['body'],
  params?: IEndpoints['PATCH /networkAccess/settings/forwardingOptions']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/forwardingOptions']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/settings/forwardingOptions',
    paramDefs: [],
    params,
    body,
  };
}
