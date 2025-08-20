import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate`
 *
 * Specifies a group of similar types of content in a particular department.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/categoryTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
