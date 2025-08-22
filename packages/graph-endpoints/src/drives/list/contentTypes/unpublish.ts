import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish`
 *
 * Unpublish a contentType from a content type hub site.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/unpublish',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
