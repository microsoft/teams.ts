import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub`
 *
 * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see contentType: getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/addCopyFromContentTypeHub',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
