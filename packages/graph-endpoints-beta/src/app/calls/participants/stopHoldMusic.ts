import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic': Operation<
    '/app/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
 *
 * Reincorporate a participant previously put on hold to the call.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}
