import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileApps': Operation<'/deviceAppManagement/mobileApps', 'get'>;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileApps': Operation<'/deviceAppManagement/mobileApps', 'post'>;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/categories',
    'get'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}',
    'get'
  >;
  'POST /deviceAppManagement/mobileApps/hasPayloadLinks': Operation<
    '/deviceAppManagement/mobileApps/hasPayloadLinks',
    'post'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
    'get'
  >;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
    'post'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
    'delete'
  >;
  'POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships',
    'post'
  >;
  'POST /deviceAppManagement/mobileApps/validateXml': Operation<
    '/deviceAppManagement/mobileApps/validateXml',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mobileApp-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps`
 *
 * The mobile apps.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 * The mobile apps.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: {
      path: ['mobileApp-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: {
      path: ['mobileApp-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileApps',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assign',
      paramDefs: {
        path: ['mobileApp-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments`
   *
   * The list of group assignments for this mobile app.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobileApp-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments',
      paramDefs: {
        path: ['mobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
   *
   * The list of group assignments for this mobile app.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileApp-id', 'mobileAppAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
      paramDefs: {
        path: ['mobileApp-id', 'mobileAppAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/assignments/{mobileAppAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileApp-id', 'mobileAppAssignment-id'],
      },
      params,
    };
  },
};

export const categories = {
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories`
   *
   * The list of categories for this app.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/categories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobileApp-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}`
   *
   * The list of categories for this app.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileApp-id', 'mobileAppCategory-id'],
      },
      params,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /deviceAppManagement/mobileApps/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileApps/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/hasPayloadLinks',
      body,
    };
  },
};

export const relationships = {
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships`
   *
   * The set of direct relationships for this app.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobileApp-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/relationships']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships',
      paramDefs: {
        path: ['mobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
   *
   * The set of direct relationships for this app.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileApp-id', 'mobileAppRelationship-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
      paramDefs: {
        path: ['mobileApp-id', 'mobileAppRelationship-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/relationships/{mobileAppRelationship-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileApp-id', 'mobileAppRelationship-id'],
      },
      params,
    };
  },
};

export const updateRelationships = {
  /**
   * `POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['body'],
    params?: IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/{mobileApp-id}/updateRelationships',
      paramDefs: {
        path: ['mobileApp-id'],
      },
      params,
      body,
    };
  },
};

export const validateXml = {
  /**
   * `POST /deviceAppManagement/mobileApps/validateXml`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileApps/validateXml']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileApps/validateXml']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileApps/validateXml',
      body,
    };
  },
};
