import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags`
 *
 * Get a list of child tag objects associated with a tag.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}`
 *
 * Returns the tags that are a child of a tag.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'tag-id', in: 'path' },
      { name: 'tag-id1', in: 'path' },
    ],
    params,
  };
}
