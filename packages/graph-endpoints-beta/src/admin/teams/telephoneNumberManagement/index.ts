import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams/telephoneNumberManagement': Operation<
    '/admin/teams/telephoneNumberManagement',
    'delete'
  >;
  'GET /admin/teams/telephoneNumberManagement': Operation<
    '/admin/teams/telephoneNumberManagement',
    'get'
  >;
  'PATCH /admin/teams/telephoneNumberManagement': Operation<
    '/admin/teams/telephoneNumberManagement',
    'patch'
  >;
  'GET /admin/teams/telephoneNumberManagement/numberAssignments': Operation<
    '/admin/teams/telephoneNumberManagement/numberAssignments',
    'get'
  >;
  'POST /admin/teams/telephoneNumberManagement/numberAssignments': Operation<
    '/admin/teams/telephoneNumberManagement/numberAssignments',
    'post'
  >;
  'GET /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}': Operation<
    '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
    'get'
  >;
  'PATCH /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}': Operation<
    '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
    'patch'
  >;
  'DELETE /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}': Operation<
    '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
    'delete'
  >;
  'GET /admin/teams/telephoneNumberManagement/operations': Operation<
    '/admin/teams/telephoneNumberManagement/operations',
    'get'
  >;
  'POST /admin/teams/telephoneNumberManagement/operations': Operation<
    '/admin/teams/telephoneNumberManagement/operations',
    'post'
  >;
  'GET /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}': Operation<
    '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
    'get'
  >;
  'PATCH /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}': Operation<
    '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}': Operation<
    '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/teams/telephoneNumberManagement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams/telephoneNumberManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams/telephoneNumberManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams/telephoneNumberManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/teams/telephoneNumberManagement`
 *
 * Represents a collection of available telephone number management operations.
 */
export function get(
  params?: IEndpoints['GET /admin/teams/telephoneNumberManagement']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams/telephoneNumberManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/telephoneNumberManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/teams/telephoneNumberManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams/telephoneNumberManagement']['body']
): EndpointRequest<IEndpoints['PATCH /admin/teams/telephoneNumberManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams/telephoneNumberManagement',
    body,
  };
}

export const numberAssignments = {
  /**
   * `GET /admin/teams/telephoneNumberManagement/numberAssignments`
   *
   * Read the properties and relationships of microsoft.graph.teamsAdministration.numberAssignment object.
   */
  list: function list(
    params?: IEndpoints['GET /admin/teams/telephoneNumberManagement/numberAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/telephoneNumberManagement/numberAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/telephoneNumberManagement/numberAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/teams/telephoneNumberManagement/numberAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/teams/telephoneNumberManagement/numberAssignments']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/teams/telephoneNumberManagement/numberAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/teams/telephoneNumberManagement/numberAssignments',
      body,
    };
  },
  /**
   * `GET /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}`
   *
   * Represents a collection of synchronous telephone number management operations.
   */
  get: function get(
    params?: IEndpoints['GET /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['numberAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['body'],
    params?: IEndpoints['PATCH /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
      paramDefs: {
        path: ['numberAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/teams/telephoneNumberManagement/numberAssignments/{numberAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['numberAssignment-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /admin/teams/telephoneNumberManagement/operations`
   *
   * Read the properties and relationships of microsoft.graph.teamsAdministration.telephoneNumberLongRunningOperation object. This method is used to query the status of an assign or unassign number action using Graph API. This link is returned in the Location response header found in assign or unassign operation result.
   */
  list: function list(
    params?: IEndpoints['GET /admin/teams/telephoneNumberManagement/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/telephoneNumberManagement/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/telephoneNumberManagement/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /admin/teams/telephoneNumberManagement/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/teams/telephoneNumberManagement/operations']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/teams/telephoneNumberManagement/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/teams/telephoneNumberManagement/operations',
      body,
    };
  },
  /**
   * `GET /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}`
   *
   * Read the properties and relationships of microsoft.graph.teamsAdministration.telephoneNumberLongRunningOperation object. This method is used to query the status of an assign or unassign number action using Graph API. This link is returned in the Location response header found in assign or unassign operation result.
   */
  get: function get(
    params?: IEndpoints['GET /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['telephoneNumberLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
      paramDefs: {
        path: ['telephoneNumberLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/teams/telephoneNumberManagement/operations/{telephoneNumberLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['telephoneNumberLongRunningOperation-id'],
      },
      params,
    };
  },
};
