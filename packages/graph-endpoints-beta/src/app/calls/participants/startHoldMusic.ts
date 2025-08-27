import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic': Operation<
    '/app/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic`
 *
 * Put a participant on hold and play music in the background.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/startHoldMusic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants/{participant-id}/startHoldMusic',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}
