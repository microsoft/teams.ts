import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
    'get'
  >;
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry`
 *
 * Catalog entry for the update or content.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}/catalogEntry',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}
