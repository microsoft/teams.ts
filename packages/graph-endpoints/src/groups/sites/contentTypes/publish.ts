import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish`
 *
 * Publishes a contentType present in the content type hub site.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
