import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/unarchive': Operation<
    '/groups/{group-id}/sites/{site-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/unarchive`
 *
 * Unarchive an archived SharePoint site.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/unarchive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/unarchive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
