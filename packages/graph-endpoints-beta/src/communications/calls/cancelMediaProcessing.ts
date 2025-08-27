import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/cancelMediaProcessing': Operation<
    '/communications/calls/{call-id}/cancelMediaProcessing',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/cancelMediaProcessing`
 *
 * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The cancelMediaProcessing method cancels any operation that is in-process as well as operations that are queued. For example, this API can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a ubscribeToTone operation because it operates independent of any operation queue.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/cancelMediaProcessing']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/cancelMediaProcessing',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
