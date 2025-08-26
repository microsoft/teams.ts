import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/memberOf': Operation<'/contacts/{orgContact-id}/memberOf', 'get'>;
  'GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /contacts/{orgContact-id}/memberOf`
 *
 * List the groups that this organizational contact is a member of.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/memberOf']['response']> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/memberOf',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}`
 *
 * Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/memberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
