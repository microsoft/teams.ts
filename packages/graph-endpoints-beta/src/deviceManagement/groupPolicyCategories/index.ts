import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyCategories': Operation<
    '/deviceManagement/groupPolicyCategories',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyCategories': Operation<
    '/deviceManagement/groupPolicyCategories',
    'post'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyCategory-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyCategories`
 *
 * The available group policy categories for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 * The available group policy categories for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: {
      path: ['groupPolicyCategory-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}',
    paramDefs: {
      path: ['groupPolicyCategory-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyCategories']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyCategories',
    body,
  };
}

export const children = {
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children`
   *
   * The children categories
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyCategory-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}`
   *
   * The children categories
   */
  get$1: function get$1(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyCategory-id', 'groupPolicyCategory-id1'],
      },
      params,
    };
  },
};

export const definitionFile = {
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile`
   *
   * The id of the definition file the category came from
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyCategory-id'],
      },
      params,
    };
  },
};

export const definitions = {
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions`
   *
   * The immediate GroupPolicyDefinition children of the category
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['groupPolicyCategory-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}`
   *
   * The immediate GroupPolicyDefinition children of the category
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyCategory-id', 'groupPolicyDefinition-id'],
      },
      params,
    };
  },
};

export const parent = {
  /**
   * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent`
   *
   * The parent category
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyCategory-id'],
      },
      params,
    };
  },
};
