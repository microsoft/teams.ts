import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic`
 *
 * Put a participant on hold and play music in the background.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/startHoldMusic']['response']
> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}
