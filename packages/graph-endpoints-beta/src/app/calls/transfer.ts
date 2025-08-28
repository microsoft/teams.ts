import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/transfer': Operation<'/app/calls/{call-id}/transfer', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/transfer`
 *
 * Transfer an active peer-to-peer call or group call. A consultative transfer means that the transferor can inform the person they want to transfer the call to (the transferee), before the transfer is made. This is opposed to transfering the call directly.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/transfer']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/transfer']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/transfer']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/transfer',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
