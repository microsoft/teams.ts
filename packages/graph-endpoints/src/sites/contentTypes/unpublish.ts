import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish`
 *
 * Unpublish a contentType from a content type hub site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/unpublish']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/unpublish',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
