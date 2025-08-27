import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType',
    'get'
  >;
}

/**
 * `GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType`
 *
 * Specifies the event that will start the retention period for labels that use this event type when an event is created.
 */
export function get(
  params?: IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionEvent-id', in: 'path' },
    ],
    params,
  };
}
