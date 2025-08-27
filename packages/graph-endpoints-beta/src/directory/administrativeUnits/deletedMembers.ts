import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers',
    'get'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers`
 *
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
