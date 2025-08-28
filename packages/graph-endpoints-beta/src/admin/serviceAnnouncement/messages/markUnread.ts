import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/markUnread': Operation<
    '/admin/serviceAnnouncement/messages/markUnread',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/markUnread`
 *
 * Mark a list of serviceUpdateMessages as unread for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/markUnread']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/markUnread']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/markUnread']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/markUnread',
    paramDefs: [],
    params,
    body,
  };
}
