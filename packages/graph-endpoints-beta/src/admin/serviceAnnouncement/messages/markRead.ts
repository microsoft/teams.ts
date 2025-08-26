import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/markRead': Operation<
    '/admin/serviceAnnouncement/messages/markRead',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/markRead`
 *
 * Mark a list of serviceUpdateMessages as read for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/markRead']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/markRead']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/markRead']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/markRead',
    paramDefs: [],
    params,
    body,
  };
}
