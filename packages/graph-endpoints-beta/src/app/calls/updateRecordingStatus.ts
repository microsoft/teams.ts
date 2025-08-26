import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/updateRecordingStatus': Operation<
    '/app/calls/{call-id}/updateRecordingStatus',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/updateRecordingStatus`
 *
 * Update the application&#x27;s recording status associated with a call. This requires the use of the Teams policy-based recording solution.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/updateRecordingStatus']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/updateRecordingStatus',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
