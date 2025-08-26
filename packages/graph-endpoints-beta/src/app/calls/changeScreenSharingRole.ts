import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/changeScreenSharingRole': Operation<
    '/app/calls/{call-id}/changeScreenSharingRole',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/changeScreenSharingRole`
 *
 * Allow applications to share screen content with the participants of a group call.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/changeScreenSharingRole']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/changeScreenSharingRole',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
