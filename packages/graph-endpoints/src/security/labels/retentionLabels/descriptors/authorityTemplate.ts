import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate`
 *
 * Specifies the underlying authority that describes the type of content to be retained and its retention schedule.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/authorityTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
