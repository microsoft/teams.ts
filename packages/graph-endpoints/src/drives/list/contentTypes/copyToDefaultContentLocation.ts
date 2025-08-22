import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation`
 *
 * Copy a file to a default content location in a content type. The file can then be added as a default file or template via a POST operation.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/copyToDefaultContentLocation',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
