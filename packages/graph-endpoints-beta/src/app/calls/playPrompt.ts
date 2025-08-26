import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/playPrompt': Operation<'/app/calls/{call-id}/playPrompt', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/playPrompt`
 *
 * Play a prompt in the call. For more information about how to handle operations, see commsOperation
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/playPrompt']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/playPrompt']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/playPrompt']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/playPrompt',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
