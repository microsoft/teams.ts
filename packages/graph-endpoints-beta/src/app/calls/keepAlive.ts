import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/keepAlive': Operation<'/app/calls/{call-id}/keepAlive', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/keepAlive`
 *
 * Make a request to this API every 15 to 45 minutes to ensure that an ongoing call remains active. A call that doesn&#x27;t receive this request within 45 minutes is considered inactive and ends. At least one successful request must be made within 45 minutes of the previous request, or the start of the call. We recommend that you send a request in shorter time intervals (every 15 minutes). Make sure that these requests are successful to prevent the call from timing out and ending. Attempting to send a request to a call that ended results in a 404 Not Found error. The resources related to the call should be cleaned up on the application side.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/keepAlive']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/keepAlive']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/keepAlive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/keepAlive',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
