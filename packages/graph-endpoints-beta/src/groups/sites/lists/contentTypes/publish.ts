import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
