import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub`
 *
 * Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a &#x27;push everywhere&#x27; to &#x27;pull as needed&#x27; approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/addCopyFromContentTypeHub',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
