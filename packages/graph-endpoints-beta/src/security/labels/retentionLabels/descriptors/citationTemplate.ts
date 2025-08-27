import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate`
 *
 * The specific rule or regulation created by a jurisdiction used to determine whether certain labels and content should be retained or deleted.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/citationTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
