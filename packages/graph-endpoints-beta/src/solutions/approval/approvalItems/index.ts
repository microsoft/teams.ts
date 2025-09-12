import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'delete'
  >;
  'GET /solutions/approval/approvalItems': Operation<'/solutions/approval/approvalItems', 'get'>;
  'GET /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}',
    'patch'
  >;
  'POST /solutions/approval/approvalItems': Operation<'/solutions/approval/approvalItems', 'post'>;
  'POST /solutions/approval/approvalItems/{approvalItem-id}/cancel': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/cancel',
    'post'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/requests': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    'get'
  >;
  'POST /solutions/approval/approvalItems/{approvalItem-id}/requests': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests',
    'post'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'patch'
  >;
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
    'delete'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/responses': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses',
    'get'
  >;
  'POST /solutions/approval/approvalItems/{approvalItem-id}/responses': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses',
    'post'
  >;
  'GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'get'
  >;
  'PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'patch'
  >;
  'DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}': Operation<
    '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
    'delete'
  >;
}

/**
 * `DELETE /solutions/approval/approvalItems/{approvalItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approvalItem-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems`
 *
 * Get a list of the approvalItem objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/approval/approvalItems']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/approval/approvalItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/approval/approvalItems/{approvalItem-id}`
 *
 * Read the properties and relationships of an approvalItem object.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: {
      path: ['approvalItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/approval/approvalItems/{approvalItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['body'],
  params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval/approvalItems/{approvalItem-id}',
    paramDefs: {
      path: ['approvalItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/approval/approvalItems`
 *
 * Create a new approvalItem object.
 */
export function create(
  body: IEndpoints['POST /solutions/approval/approvalItems']['body']
): EndpointRequest<IEndpoints['POST /solutions/approval/approvalItems']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/approval/approvalItems',
    body,
  };
}

export const cancel = {
  /**
   * `POST /solutions/approval/approvalItems/{approvalItem-id}/cancel`
   *
   * Cancel the approval item. The owner of the approval is the only user who can trigger this endpoint.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/cancel',
      paramDefs: {
        path: ['approvalItem-id'],
      },
      params,
    };
  },
};

export const requests = {
  /**
   * `GET /solutions/approval/approvalItems/{approvalItem-id}/requests`
   *
   * Get a list of approvalItemRequest objects.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/requests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approvalItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/approval/approvalItems/{approvalItem-id}/requests`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['body'],
    params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/requests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/requests',
      paramDefs: {
        path: ['approvalItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
   *
   * Read the properties and relationships of an approvalItemRequest object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approvalItem-id', 'approvalItemRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['body'],
    params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
      paramDefs: {
        path: ['approvalItem-id', 'approvalItemRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/requests/{approvalItemRequest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approvalItem-id', 'approvalItemRequest-id'],
      },
      params,
    };
  },
};

export const responses = {
  /**
   * `GET /solutions/approval/approvalItems/{approvalItem-id}/responses`
   *
   * Get a list of approvalItemResponse objects.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/responses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approvalItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/approval/approvalItems/{approvalItem-id}/responses`
   *
   * Create a new approvalItemResponse object.
   */
  create: function create(
    body: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['body'],
    params?: IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/approval/approvalItems/{approvalItem-id}/responses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/responses',
      paramDefs: {
        path: ['approvalItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
   *
   * Read the properties and relationships of an approvalItemResponse object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approvalItem-id', 'approvalItemResponse-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['body'],
    params?: IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
      paramDefs: {
        path: ['approvalItem-id', 'approvalItemResponse-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/approval/approvalItems/{approvalItem-id}/responses/{approvalItemResponse-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approvalItem-id', 'approvalItemResponse-id'],
      },
      params,
    };
  },
};
