import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/contentTypes/addCopy': Operation<
    '/drives/{drive-id}/list/contentTypes/addCopy',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/addCopy`
 *
 * Add a copy of a content type from a site to a list.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/list/contentTypes/addCopy']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/addCopy',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
