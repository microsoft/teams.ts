import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
 *
 * Reincorporate a participant previously put on hold to the call.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}
