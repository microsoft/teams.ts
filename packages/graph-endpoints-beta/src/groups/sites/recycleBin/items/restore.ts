import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/restore',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/recycleBin/items/restore']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/restore',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
