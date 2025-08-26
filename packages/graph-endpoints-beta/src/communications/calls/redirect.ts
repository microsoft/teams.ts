import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/redirect': Operation<
    '/communications/calls/{call-id}/redirect',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/redirect`
 *
 * Redirect an incoming call that wasn&#x27;t answered or rejected yet. The terms &#x27;redirecting&#x27; and &#x27;forwarding&#x27; a call are used interchangeably. The bot is expected to redirect the call before the call times out. The current timeout value is 15 seconds.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/redirect']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/redirect']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/redirect']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/redirect',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
