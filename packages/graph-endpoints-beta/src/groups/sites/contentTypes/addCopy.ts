import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/addCopy',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopy']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/addCopy',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
