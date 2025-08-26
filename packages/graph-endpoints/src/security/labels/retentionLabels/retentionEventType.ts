import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType': Operation<
    '/security/labels/retentionLabels/{retentionLabel-id}/retentionEventType',
    'get'
  >;
}

/**
 * `GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType`
 *
 * Represents the type associated with a retention event.
 */
export function get(
  params?: IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/retentionLabels/{retentionLabel-id}/retentionEventType']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/retentionLabels/{retentionLabel-id}/retentionEventType',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionLabel-id', in: 'path' },
    ],
    params,
  };
}
