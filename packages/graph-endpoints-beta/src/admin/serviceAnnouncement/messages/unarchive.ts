import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/unarchive': Operation<
    '/admin/serviceAnnouncement/messages/unarchive',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/unarchive`
 *
 * Unarchive a list of serviceUpdateMessages for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/unarchive']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/unarchive',
    paramDefs: [],
    params,
    body,
  };
}
