import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate`
 *
 * Specifies a unique alpha-numeric identifier for an organization’s retention schedule.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/filePlanReferenceTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
