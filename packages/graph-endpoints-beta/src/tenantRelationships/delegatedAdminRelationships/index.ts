import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships': Operation<
    '/tenantRelationships/delegatedAdminRelationships',
    'get'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    'patch'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships': Operation<
    '/tenantRelationships/delegatedAdminRelationships',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
    'get'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
    'get'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
    'delete'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    'get'
  >;
  'POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
    'post'
  >;
  'GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'get'
  >;
  'PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'patch'
  >;
  'DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}': Operation<
    '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
    'delete'
  >;
}

/**
 * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
 *
 * Delete a delegatedAdminRelationship object. A relationship can only be deleted if it&#x27;s in the &#x27;created&#x27; status.
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['delegatedAdminRelationship-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships`
 *
 * Get a list of the delegatedAdminRelationship objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/delegatedAdminRelationships']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
 *
 * Read the properties of a delegatedAdminRelationship object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: {
      path: ['delegatedAdminRelationship-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}`
  *
  * Update the properties of a delegatedAdminRelationship object.  The following restrictions apply:
- You can update this relationship when its status property is created.
- You can update the autoExtendDuration property when status is either created or active.
- You can only remove the Microsoft Entra Global Administrator role when the status property is active, which indicates a long-running operation.
  */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}',
    paramDefs: {
      path: ['delegatedAdminRelationship-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/delegatedAdminRelationships`
 *
 * Create a new delegatedAdminRelationship object.
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/delegatedAdminRelationships']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/delegatedAdminRelationships',
    body,
  };
}

export const accessAssignments = {
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments`
   *
   * Get a list of the delegatedAdminAccessAssignment objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['delegatedAdminRelationship-id'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments`
   *
   * Create a new delegatedAdminAccessAssignment object.
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['body'],
    params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments',
      paramDefs: {
        path: ['delegatedAdminRelationship-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
   *
   * Read the properties of a delegatedAdminAccessAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminAccessAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
   *
   * Update the properties of a delegatedAdminAccessAssignment object.
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
      paramDefs: {
        path: ['delegatedAdminRelationship-id', 'delegatedAdminAccessAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}`
   *
   * Delete a delegatedAdminAccessAssignment object.
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/accessAssignments/{delegatedAdminAccessAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminAccessAssignment-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations`
   *
   * Get a list of the delegatedAdminRelationshipOperation objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['delegatedAdminRelationship-id'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['body'],
    params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations',
      paramDefs: {
        path: ['delegatedAdminRelationship-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
   *
   * Read the properties of a delegatedAdminRelationshipOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
      paramDefs: {
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/operations/{delegatedAdminRelationshipOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipOperation-id'],
      },
      params,
    };
  },
};

export const requests = {
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests`
   *
   * Get a list of the delegatedAdminRelationshipRequest objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['delegatedAdminRelationship-id'],
      },
      params,
    };
  },
  /**
   * `POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests`
   *
   * Create a new delegatedAdminRelationshipRequest object.
   */
  create: function create(
    body: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['body'],
    params?: IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests',
      paramDefs: {
        path: ['delegatedAdminRelationship-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
   *
   * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['body'],
    params?: IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
      paramDefs: {
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship-id}/requests/{delegatedAdminRelationshipRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['delegatedAdminRelationship-id', 'delegatedAdminRelationshipRequest-id'],
      },
      params,
    };
  },
};
