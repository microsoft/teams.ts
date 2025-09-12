import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'delete'
  >;
  'GET /deviceAppManagement/policySets': Operation<'/deviceAppManagement/policySets', 'get'>;
  'GET /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}',
    'patch'
  >;
  'POST /deviceAppManagement/policySets': Operation<'/deviceAppManagement/policySets', 'post'>;
  'GET /deviceAppManagement/policySets/{policySet-id}/assignments': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/policySets/{policySet-id}/assignments': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
    'delete'
  >;
  'POST /deviceAppManagement/policySets/getPolicySets': Operation<
    '/deviceAppManagement/policySets/getPolicySets',
    'post'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/items': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items',
    'get'
  >;
  'POST /deviceAppManagement/policySets/{policySet-id}/items': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items',
    'post'
  >;
  'GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
    'delete'
  >;
  'POST /deviceAppManagement/policySets/{policySet-id}/update': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/update',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/policySets/{policySet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['policySet-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets`
 *
 * The PolicySet of Policies and Applications
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/policySets']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/policySets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/policySets/{policySet-id}`
 *
 * The PolicySet of Policies and Applications
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: {
      path: ['policySet-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/policySets/{policySet-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/policySets/{policySet-id}',
    paramDefs: {
      path: ['policySet-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/policySets`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/policySets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets',
    body,
  };
}

export const assignments = {
  /**
   * `GET /deviceAppManagement/policySets/{policySet-id}/assignments`
   *
   * Assignments of the PolicySet.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/policySets/{policySet-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['policySet-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/policySets/{policySet-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/policySets/{policySet-id}/assignments',
      paramDefs: {
        path: ['policySet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
   *
   * Assignments of the PolicySet.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['policySet-id', 'policySetAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
      paramDefs: {
        path: ['policySet-id', 'policySetAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/policySets/{policySet-id}/assignments/{policySetAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['policySet-id', 'policySetAssignment-id'],
      },
      params,
    };
  },
};

export const getPolicySets = {
  /**
   * `POST /deviceAppManagement/policySets/getPolicySets`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/policySets/getPolicySets']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/policySets/getPolicySets']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/policySets/getPolicySets',
      body,
    };
  },
};

export const items = {
  /**
   * `GET /deviceAppManagement/policySets/{policySet-id}/items`
   *
   * Items of the PolicySet with maximum count 100.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/policySets/{policySet-id}/items',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['policySet-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/policySets/{policySet-id}/items`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['body'],
    params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/items']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/policySets/{policySet-id}/items',
      paramDefs: {
        path: ['policySet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
   *
   * Items of the PolicySet with maximum count 100.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['policySet-id', 'policySetItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
      paramDefs: {
        path: ['policySet-id', 'policySetItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/policySets/{policySet-id}/items/{policySetItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['policySet-id', 'policySetItem-id'],
      },
      params,
    };
  },
};

export const doUpdate = {
  /**
   * `POST /deviceAppManagement/policySets/{policySet-id}/update`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['body'],
    params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/policySets/{policySet-id}/update',
      paramDefs: {
        path: ['policySet-id'],
      },
      params,
      body,
    };
  },
};
