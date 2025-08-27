import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/recycleBin/items/restore': Operation<
    '/sites/{site-id}/recycleBin/items/restore',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/recycleBin/items/restore`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['body'],
  params?: IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/recycleBin/items/restore']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/recycleBin/items/restore',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
