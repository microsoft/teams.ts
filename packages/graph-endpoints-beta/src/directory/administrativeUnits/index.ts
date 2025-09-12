import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'delete'
  >;
  'GET /directory/administrativeUnits': Operation<'/directory/administrativeUnits', 'get'>;
  'GET /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'patch'
  >;
  'POST /directory/administrativeUnits': Operation<'/directory/administrativeUnits', 'post'>;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers',
    'get'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
    'get'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    'get'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/extensions': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
    'post'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/members',
    'get'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/members': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/members',
    'post'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'get'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'post'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'patch'
  >;
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'delete'
  >;
}

/**
 * `DELETE /directory/administrativeUnits/{administrativeUnit-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['administrativeUnit-id'],
    },
    params,
  };
}

/**
 * `GET /directory/administrativeUnits`
 *
 * Conceptual container for user and group directory objects.
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['GET /directory/administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/administrativeUnits',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}`
 *
 * Conceptual container for user and group directory objects.
 */
export function get(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      path: ['administrativeUnit-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/administrativeUnits/{administrativeUnit-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['body'],
  params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: {
      path: ['administrativeUnit-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/administrativeUnits`
 *
 */
export function create(
  body: IEndpoints['POST /directory/administrativeUnits']['body']
): EndpointRequest<IEndpoints['POST /directory/administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/administrativeUnits',
    body,
  };
}

export const deletedMembers = {
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers`
   *
   */
  list: function list(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/deletedMembers/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/extensions`
   *
   * The collection of open extensions defined for this administrative unit. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/administrativeUnits/{administrativeUnit-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['body'],
    params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for this administrative unit. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['administrativeUnit-id', 'extension-id'],
      },
      params,
    };
  },
};

export const members = {
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/members`
   *
   * Users and groups that are members of this administrative unit. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/members',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/administrativeUnits/{administrativeUnit-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['body'],
    params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/members',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
};

export const scopedRoleMembers = {
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
   *
   * Scoped-role members of this administrative unit.
   */
  list: function list(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['administrativeUnit-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
   *
   */
  create: function create(
    body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['body'],
    params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
      paramDefs: {
        path: ['administrativeUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   * Scoped-role members of this administrative unit.
   */
  get: function get(
    params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['body'],
    params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['administrativeUnit-id', 'scopedRoleMembership-id'],
      },
      params,
    };
  },
};
