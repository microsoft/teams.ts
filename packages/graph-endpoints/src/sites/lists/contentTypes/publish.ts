import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish`
 *
 * Publishes a contentType present in the content type hub site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/publish',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
