import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation',
    'post'
  >;
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/setExternalEventInformation',
    paramDefs: [{ name: 'virtualEvent-id', in: 'path' }],
    params,
    body,
  };
}
