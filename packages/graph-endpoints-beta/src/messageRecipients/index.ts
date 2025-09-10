import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'delete'
  >;
  'GET /messageRecipients': Operation<'/messageRecipients', 'get'>;
  'GET /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'get'
  >;
  'PATCH /messageRecipients/{messageRecipient-id}': Operation<
    '/messageRecipients/{messageRecipient-id}',
    'patch'
  >;
  'POST /messageRecipients': Operation<'/messageRecipients', 'post'>;
  'GET /messageRecipients/{messageRecipient-id}/events': Operation<
    '/messageRecipients/{messageRecipient-id}/events',
    'get'
  >;
  'POST /messageRecipients/{messageRecipient-id}/events': Operation<
    '/messageRecipients/{messageRecipient-id}/events',
    'post'
  >;
  'GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'get'
  >;
  'PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'patch'
  >;
  'DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}': Operation<
    '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
    'delete'
  >;
}

/**
 * `DELETE /messageRecipients/{messageRecipient-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['messageRecipient-id'],
    },
    params,
  };
}

/**
 * `GET /messageRecipients`
 *
 */
export function list(
  params?: IEndpoints['GET /messageRecipients']['parameters']
): EndpointRequest<IEndpoints['GET /messageRecipients']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /messageRecipients/{messageRecipient-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['GET /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageRecipient-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /messageRecipients/{messageRecipient-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['body'],
  params?: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /messageRecipients/{messageRecipient-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/messageRecipients/{messageRecipient-id}',
    paramDefs: {
      path: ['messageRecipient-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /messageRecipients`
 *
 */
export function create(
  body: IEndpoints['POST /messageRecipients']['body']
): EndpointRequest<IEndpoints['POST /messageRecipients']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/messageRecipients',
    body,
  };
}

export const events = {
  /**
   * `GET /messageRecipients/{messageRecipient-id}/events`
   *
   */
  list: function list(
    params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /messageRecipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageRecipients/{messageRecipient-id}/events',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['messageRecipient-id'],
      },
      params,
    };
  },
  /**
   * `POST /messageRecipients/{messageRecipient-id}/events`
   *
   */
  create: function create(
    body: IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['body'],
    params?: IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /messageRecipients/{messageRecipient-id}/events']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/messageRecipients/{messageRecipient-id}/events',
      paramDefs: {
        path: ['messageRecipient-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['body'],
    params?: IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        path: ['messageRecipient-id', 'messageEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/messageRecipients/{messageRecipient-id}/events/{messageEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['messageRecipient-id', 'messageEvent-id'],
      },
      params,
    };
  },
};
