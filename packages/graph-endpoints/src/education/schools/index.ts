import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'delete'
  >;
  'GET /education/schools': Operation<'/education/schools', 'get'>;
  'GET /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'get'
  >;
  'PATCH /education/schools/{educationSchool-id}': Operation<
    '/education/schools/{educationSchool-id}',
    'patch'
  >;
  'POST /education/schools': Operation<'/education/schools', 'post'>;
  'GET /education/schools/{educationSchool-id}/administrativeUnit': Operation<
    '/education/schools/{educationSchool-id}/administrativeUnit',
    'get'
  >;
  'PATCH /education/schools/{educationSchool-id}/administrativeUnit': Operation<
    '/education/schools/{educationSchool-id}/administrativeUnit',
    'patch'
  >;
  'GET /education/schools/{educationSchool-id}/classes': Operation<
    '/education/schools/{educationSchool-id}/classes',
    'get'
  >;
  'GET /education/schools/{educationSchool-id}/users': Operation<
    '/education/schools/{educationSchool-id}/users',
    'get'
  >;
}

/**
 * `DELETE /education/schools/{educationSchool-id}`
 *
 * Delete a school.
 */
export function del(
  params?: IEndpoints['DELETE /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'delete',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationSchool-id'],
    },
    params,
  };
}

/**
 * `GET /education/schools`
 *
 * Get a list of the educationSchool objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /education/schools']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools']['response']> {
  return {
    method: 'get',
    path: '/education/schools',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/schools/{educationSchool-id}`
 *
 * Read the properties and relationships of an educationSchool object.
 */
export function get(
  params?: IEndpoints['GET /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'get',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: {
      path: ['educationSchool-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/schools/{educationSchool-id}`
 *
 * Update the properties of an educationSchool object.
 */
export function update(
  body: IEndpoints['PATCH /education/schools/{educationSchool-id}']['body'],
  params?: IEndpoints['PATCH /education/schools/{educationSchool-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/schools/{educationSchool-id}']['response']> {
  return {
    method: 'patch',
    path: '/education/schools/{educationSchool-id}',
    paramDefs: {
      path: ['educationSchool-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/schools`
 *
 * Create a new educationSchool object.
 */
export function create(
  body: IEndpoints['POST /education/schools']['body']
): EndpointRequest<IEndpoints['POST /education/schools']['response']> {
  return {
    method: 'post',
    path: '/education/schools',
    body,
  };
}

export const administrativeUnit = {
  /**
   * `GET /education/schools/{educationSchool-id}/administrativeUnit`
   *
   * The underlying administrativeUnit for this school.
   */
  get: function get(
    params?: IEndpoints['GET /education/schools/{educationSchool-id}/administrativeUnit']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/schools/{educationSchool-id}/administrativeUnit']['response']
  > {
    return {
      method: 'get',
      path: '/education/schools/{educationSchool-id}/administrativeUnit',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationSchool-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/schools/{educationSchool-id}/administrativeUnit`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['body'],
    params?: IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/schools/{educationSchool-id}/administrativeUnit']['response']
  > {
    return {
      method: 'patch',
      path: '/education/schools/{educationSchool-id}/administrativeUnit',
      paramDefs: {
        path: ['educationSchool-id'],
      },
      params,
      body,
    };
  },
};

export const classes = {
  /**
   * `GET /education/schools/{educationSchool-id}/classes`
   *
   * Get the educationClass resources owned by an educationSchool.
   */
  list: function list(
    params?: IEndpoints['GET /education/schools/{educationSchool-id}/classes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/schools/{educationSchool-id}/classes']['response']
  > {
    return {
      method: 'get',
      path: '/education/schools/{educationSchool-id}/classes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationSchool-id'],
      },
      params,
    };
  },
};

export const users = {
  /**
   * `GET /education/schools/{educationSchool-id}/users`
   *
   * Get the educationUser resources associated with an educationSchool.
   */
  list: function list(
    params?: IEndpoints['GET /education/schools/{educationSchool-id}/users']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/schools/{educationSchool-id}/users']['response']> {
    return {
      method: 'get',
      path: '/education/schools/{educationSchool-id}/users',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationSchool-id'],
      },
      params,
    };
  },
};
