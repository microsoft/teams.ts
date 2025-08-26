import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /admin/serviceAnnouncement/messages/archive': Operation<
    '/admin/serviceAnnouncement/messages/archive',
    'post'
  >;
}

/**
 * `POST /admin/serviceAnnouncement/messages/archive`
 *
 * Archive a list of serviceUpdateMessages for the signed in user.
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/archive']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/archive']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/archive']['response']> {
  return {
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/archive',
    paramDefs: [],
    params,
    body,
  };
}
