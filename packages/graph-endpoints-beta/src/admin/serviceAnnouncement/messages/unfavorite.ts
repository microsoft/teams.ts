import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/unfavorite': Operation<
    '/admin/serviceAnnouncement/messages/unfavorite',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/unfavorite`
 *
 * Remove the favorite status of serviceUpdateMessages for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/unfavorite']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/unfavorite']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/unfavorite']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/unfavorite',
    paramDefs: [],
    params,
    body,
  };
}
