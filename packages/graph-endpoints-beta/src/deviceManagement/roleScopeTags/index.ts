import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'delete'
  >;
  'GET /deviceManagement/roleScopeTags': Operation<'/deviceManagement/roleScopeTags', 'get'>;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'patch'
  >;
  'POST /deviceManagement/roleScopeTags': Operation<'/deviceManagement/roleScopeTags', 'post'>;
  'POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assign',
    'post'
  >;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/roleScopeTags/getRoleScopeTagsById': Operation<
    '/deviceManagement/roleScopeTags/getRoleScopeTagsById',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['roleScopeTag-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleScopeTags`
 *
 * The Role Scope Tags.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleScopeTags']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 * The Role Scope Tags.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: {
      path: ['roleScopeTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: {
      path: ['roleScopeTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleScopeTags`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleScopeTags']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleScopeTags']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleScopeTags',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assign',
      paramDefs: {
        path: ['roleScopeTag-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments`
   *
   * The list of assignments for this Role Scope Tag.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['roleScopeTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
      paramDefs: {
        path: ['roleScopeTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
   *
   * The list of assignments for this Role Scope Tag.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['roleScopeTag-id', 'roleScopeTagAutoAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
      paramDefs: {
        path: ['roleScopeTag-id', 'roleScopeTagAutoAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['roleScopeTag-id', 'roleScopeTagAutoAssignment-id'],
      },
      params,
    };
  },
};

export const getRoleScopeTagsById = {
  /**
   * `POST /deviceManagement/roleScopeTags/getRoleScopeTagsById`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/roleScopeTags/getRoleScopeTagsById']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/roleScopeTags/getRoleScopeTagsById']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/roleScopeTags/getRoleScopeTagsById',
      body,
    };
  },
};
