import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/favorite': Operation<
    '/admin/serviceAnnouncement/messages/favorite',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/favorite`
 *
 * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/favorite']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/favorite']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/favorite']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/favorite',
    paramDefs: [],
    params,
    body,
  };
}
