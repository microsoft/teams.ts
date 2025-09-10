export * as userStateSummary from './userStateSummary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks': Operation<'/deviceAppManagement/managedEBooks', 'get'>;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks': Operation<
    '/deviceAppManagement/managedEBooks',
    'post'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
    'get'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
    'post'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Deletes a iosVppEBook.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedEBook-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks`
 *
 * List properties and relationships of the managedEBook objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedEBooks']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Read properties and relationships of the managedEBook object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: {
      path: ['managedEBook-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Update the properties of a iosVppEBook object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: {
      path: ['managedEBook-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks`
 *
 * Create a new iosVppEBook object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedEBooks']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedEBooks',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign`
   *
   * Not yet documented
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assign',
      paramDefs: {
        path: ['managedEBook-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments`
   *
   * List properties and relationships of the managedEBookAssignment objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedEBook-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments`
   *
   * Create a new iosVppEBookAssignment object.
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
      paramDefs: {
        path: ['managedEBook-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
   *
   * Read properties and relationships of the managedEBookAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedEBook-id', 'managedEBookAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
   *
   * Update the properties of a iosVppEBookAssignment object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
      paramDefs: {
        path: ['managedEBook-id', 'managedEBookAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
   *
   * Deletes a managedEBookAssignment.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedEBook-id', 'managedEBookAssignment-id'],
      },
      params,
    };
  },
};

export const deviceStates = {
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates`
   *
   * List properties and relationships of the deviceInstallState objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedEBook-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates`
   *
   * Create a new deviceInstallState object.
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
      paramDefs: {
        path: ['managedEBook-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
   *
   * Read properties and relationships of the deviceInstallState object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedEBook-id', 'deviceInstallState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
   *
   * Update the properties of a deviceInstallState object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        path: ['managedEBook-id', 'deviceInstallState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
   *
   * Deletes a deviceInstallState.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedEBook-id', 'deviceInstallState-id'],
      },
      params,
    };
  },
};

export const installSummary = {
  /**
   * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary`
   *
   * Read properties and relationships of the eBookInstallSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedEBook-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary`
   *
   * Update the properties of a eBookInstallSummary object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
      paramDefs: {
        path: ['managedEBook-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/installSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedEBook-id'],
      },
      params,
    };
  },
};
