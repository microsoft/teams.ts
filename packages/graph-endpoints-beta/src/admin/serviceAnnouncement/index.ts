export * as healthOverviews from './healthOverviews';
export * as issues from './issues';
export * as messages from './messages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'delete'>;
  'GET /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'get'>;
  'PATCH /admin/serviceAnnouncement': Operation<'/admin/serviceAnnouncement', 'patch'>;
}

/**
 * `DELETE /admin/serviceAnnouncement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/serviceAnnouncement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement`
 *
 * A container for service communications resources. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/serviceAnnouncement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement',
    paramDefs: [],
    params,
    body,
  };
}
