import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/managedAppRegistrations': Operation<
    '/users/{user-id}/managedAppRegistrations',
    'get'
  >;
  'GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}': Operation<
    '/users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/managedAppRegistrations`
 *
 * Zero or more managed app registrations that belong to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedAppRegistrations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/managedAppRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedAppRegistrations',
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
 * `GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}`
 *
 * Zero or more managed app registrations that belong to the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedAppRegistrations/{managedAppRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}
