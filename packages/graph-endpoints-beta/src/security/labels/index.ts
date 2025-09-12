export * as categories from './categories';
export * as retentionLabels from './retentionLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels': Operation<'/security/labels', 'delete'>;
  'GET /security/labels': Operation<'/security/labels', 'get'>;
  'PATCH /security/labels': Operation<'/security/labels', 'patch'>;
  'GET /security/labels/authorities': Operation<'/security/labels/authorities', 'get'>;
  'POST /security/labels/authorities': Operation<'/security/labels/authorities', 'post'>;
  'GET /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'patch'
  >;
  'DELETE /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'delete'
  >;
  'GET /security/labels/citations': Operation<'/security/labels/citations', 'get'>;
  'POST /security/labels/citations': Operation<'/security/labels/citations', 'post'>;
  'GET /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'patch'
  >;
  'DELETE /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'delete'
  >;
  'GET /security/labels/departments': Operation<'/security/labels/departments', 'get'>;
  'POST /security/labels/departments': Operation<'/security/labels/departments', 'post'>;
  'GET /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'patch'
  >;
  'DELETE /security/labels/departments/{departmentTemplate-id}': Operation<
    '/security/labels/departments/{departmentTemplate-id}',
    'delete'
  >;
  'GET /security/labels/filePlanReferences': Operation<
    '/security/labels/filePlanReferences',
    'get'
  >;
  'POST /security/labels/filePlanReferences': Operation<
    '/security/labels/filePlanReferences',
    'post'
  >;
  'GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'patch'
  >;
  'DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/labels`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/labels`
 *
 */
export function list(
  params?: IEndpoints['GET /security/labels']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/labels`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels']['body']
): EndpointRequest<IEndpoints['PATCH /security/labels']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels',
    body,
  };
}

export const authorities = {
  /**
   * `GET /security/labels/authorities`
   *
   * Get a list of the authorityTemplate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/authorities']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/labels/authorities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/authorities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/authorities`
   *
   * Create a new authorityTemplate object.
   */
  create: function create(
    body: IEndpoints['POST /security/labels/authorities']['body']
  ): EndpointRequest<IEndpoints['POST /security/labels/authorities']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/authorities',
      body,
    };
  },
  /**
   * `GET /security/labels/authorities/{authorityTemplate-id}`
   *
   * Read the properties and relationships of a authorityTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/authorities/{authorityTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/authorities/{authorityTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/authorities/{authorityTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authorityTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/authorities/{authorityTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['body'],
    params?: IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/authorities/{authorityTemplate-id}',
      paramDefs: {
        path: ['authorityTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/authorities/{authorityTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/authorities/{authorityTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/authorities/{authorityTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/authorities/{authorityTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['authorityTemplate-id'],
      },
      params,
    };
  },
};

export const citations = {
  /**
   * `GET /security/labels/citations`
   *
   * Get a list of the citationTemplate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/citations']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/labels/citations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/citations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/citations`
   *
   * Create a new citationTemplate object.
   */
  create: function create(
    body: IEndpoints['POST /security/labels/citations']['body']
  ): EndpointRequest<IEndpoints['POST /security/labels/citations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/citations',
      body,
    };
  },
  /**
   * `GET /security/labels/citations/{citationTemplate-id}`
   *
   * Read the properties and relationships of a citationTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/citations/{citationTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/citations/{citationTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/citations/{citationTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['citationTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/citations/{citationTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['body'],
    params?: IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/citations/{citationTemplate-id}',
      paramDefs: {
        path: ['citationTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/citations/{citationTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/citations/{citationTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/citations/{citationTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/citations/{citationTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['citationTemplate-id'],
      },
      params,
    };
  },
};

export const departments = {
  /**
   * `GET /security/labels/departments`
   *
   * Get a list of the departmentTemplate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/departments']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/labels/departments']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/departments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/departments`
   *
   * Create a new departmentTemplate object.
   */
  create: function create(
    body: IEndpoints['POST /security/labels/departments']['body']
  ): EndpointRequest<IEndpoints['POST /security/labels/departments']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/departments',
      body,
    };
  },
  /**
   * `GET /security/labels/departments/{departmentTemplate-id}`
   *
   * Read the properties and relationships of a departmentTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/departments/{departmentTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/departments/{departmentTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/departments/{departmentTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['departmentTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/departments/{departmentTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['body'],
    params?: IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/departments/{departmentTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/departments/{departmentTemplate-id}',
      paramDefs: {
        path: ['departmentTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/departments/{departmentTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/departments/{departmentTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/departments/{departmentTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/departments/{departmentTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['departmentTemplate-id'],
      },
      params,
    };
  },
};

export const filePlanReferences = {
  /**
   * `GET /security/labels/filePlanReferences`
   *
   * Get a list of the filePlanReferenceTemplate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/filePlanReferences']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/labels/filePlanReferences']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/filePlanReferences',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/filePlanReferences`
   *
   * Create a new filePlanReferenceTemplate object.
   */
  create: function create(
    body: IEndpoints['POST /security/labels/filePlanReferences']['body']
  ): EndpointRequest<IEndpoints['POST /security/labels/filePlanReferences']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/filePlanReferences',
      body,
    };
  },
  /**
   * `GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
   *
   * Read the properties and relationships of a filePlanReferenceTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['filePlanReferenceTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['body'],
    params?: IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
      paramDefs: {
        path: ['filePlanReferenceTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['filePlanReferenceTemplate-id'],
      },
      params,
    };
  },
};
