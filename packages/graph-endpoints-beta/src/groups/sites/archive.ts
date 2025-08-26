import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/archive': Operation<
    '/groups/{group-id}/sites/{site-id}/archive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/archive`
 *
 * Archive an active SharePoint site.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/archive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/archive']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/archive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/archive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
