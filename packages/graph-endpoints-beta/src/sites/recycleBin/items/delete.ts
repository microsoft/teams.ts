import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/recycleBin/items/delete': Operation<
    '/sites/{site-id}/recycleBin/items/delete',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/recycleBin/items/delete`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['body'],
  params?: IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items/delete']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/recycleBin/items/delete',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
