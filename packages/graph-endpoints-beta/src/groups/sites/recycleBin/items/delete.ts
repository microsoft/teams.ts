import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/delete',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/delete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/delete',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
