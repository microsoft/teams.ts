import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/updateRecordingStatus': Operation<
    '/communications/calls/{call-id}/updateRecordingStatus',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/updateRecordingStatus`
 *
 * Update the application&#x27;s recording status associated with a call. This requires the use of the Teams policy-based recording solution.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/updateRecordingStatus',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
