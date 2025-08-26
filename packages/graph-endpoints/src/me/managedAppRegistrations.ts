import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/managedAppRegistrations': Operation<'/me/managedAppRegistrations', 'get'>;
  'GET /me/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/me/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
}

/**
 * `GET /me/managedAppRegistrations`
 *
 * Zero or more managed app registrations that belong to the user.
 */
export function list(
  params?: IEndpoints['GET /me/managedAppRegistrations']['parameters']
): EndpointRequest<IEndpoints['GET /me/managedAppRegistrations']['response']> {
  return {
    method: 'get',
    path: '/me/managedAppRegistrations',
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
 * `GET /me/managedAppRegistrations/{managedAppRegistration-id}`
 *
 * Zero or more managed app registrations that belong to the user.
 */
export function get(
  params?: IEndpoints['GET /me/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}
