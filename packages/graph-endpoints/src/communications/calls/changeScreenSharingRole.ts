import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/changeScreenSharingRole': Operation<
    '/communications/calls/{call-id}/changeScreenSharingRole',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/changeScreenSharingRole`
 *
 * Allow applications to share screen content with the participants of a group call.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['response']
> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/changeScreenSharingRole',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
