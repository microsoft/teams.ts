import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'delete'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'get'
  >;
  'PATCH /security/threatIntelligence/hosts/{host-id}/reputation': Operation<
    '/security/threatIntelligence/hosts/{host-id}/reputation',
    'patch'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hosts/{host-id}/reputation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hosts/{host-id}/reputation']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hosts/{host-id}/reputation',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/reputation`
 *
 * Get the properties and relationships of a hostReputation object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/reputation']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/reputation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hosts/{host-id}/reputation`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hosts/{host-id}/reputation']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hosts/{host-id}/reputation',
    paramDefs: [{ name: 'host-id', in: 'path' }],
    params,
    body,
  };
}
