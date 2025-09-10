import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/tags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent': Operation<
    '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent',
    'get'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Delete a tag object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'tag-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags`
 *
 * Retrieve a list of tag objects from an eDiscovery case.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Read the properties and relationships of a tag object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: {
      path: ['case-id', 'tag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}`
 *
 * Update the properties of a tag object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/tags/{tag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}',
    paramDefs: {
      path: ['case-id', 'tag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/tags`
 *
 * Create a new tag for the specified case.  The tags are used in review sets while reviewing content.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /compliance/ediscovery/cases/{case-id}/tags']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/tags',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const childTags = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags`
   *
   * Get a list of child tag objects associated with a tag.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'tag-id'],
      },
      params,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}`
   *
   * Returns the tags that are a child of a tag.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/childTags/{tag-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'tag-id', 'tag-id1'],
      },
      params,
    };
  },
};

export const parent = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent`
   *
   * Returns the parent tag of the specified tag.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/tags/{tag-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'tag-id'],
      },
      params,
    };
  },
};
