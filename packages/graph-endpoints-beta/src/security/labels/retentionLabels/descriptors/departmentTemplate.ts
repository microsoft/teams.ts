import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate`
 *
 * Specifies the  department or business unit of an organization to which a label belongs.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/descriptors/departmentTemplate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
