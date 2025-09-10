import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggerTypes': Operation<'/security/triggerTypes', 'delete'>;
  'GET /security/triggerTypes': Operation<'/security/triggerTypes', 'get'>;
  'PATCH /security/triggerTypes': Operation<'/security/triggerTypes', 'patch'>;
  'GET /security/triggerTypes/retentionEventTypes': Operation<
    '/security/triggerTypes/retentionEventTypes',
    'get'
  >;
  'POST /security/triggerTypes/retentionEventTypes': Operation<
    '/security/triggerTypes/retentionEventTypes',
    'post'
  >;
  'GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'get'
  >;
  'PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'patch'
  >;
  'DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/triggerTypes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/triggerTypes']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/triggerTypes']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/triggerTypes',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/triggerTypes`
 *
 */
export function list(
  params?: IEndpoints['GET /security/triggerTypes']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggerTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/triggerTypes',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/triggerTypes`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggerTypes']['body']
): EndpointRequest<IEndpoints['PATCH /security/triggerTypes']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/triggerTypes',
    body,
  };
}

export const retentionEventTypes = {
  /**
   * `GET /security/triggerTypes/retentionEventTypes`
   *
   * Get a list of the retentionEventType objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/triggerTypes/retentionEventTypes']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/triggerTypes/retentionEventTypes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/triggerTypes/retentionEventTypes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/triggerTypes/retentionEventTypes`
   *
   * Create a new retentionEventType object.
   */
  create: function create(
    body: IEndpoints['POST /security/triggerTypes/retentionEventTypes']['body']
  ): EndpointRequest<IEndpoints['POST /security/triggerTypes/retentionEventTypes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/triggerTypes/retentionEventTypes',
      body,
    };
  },
  /**
   * `GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
   *
   * Read the properties and relationships of a retentionEventType object.
   */
  get: function get(
    params?: IEndpoints['GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['retentionEventType-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['body'],
    params?: IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
      paramDefs: {
        path: ['retentionEventType-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
   *
   * Delete a retentionEventType object.
   */
  del: function del(
    params?: IEndpoints['DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['retentionEventType-id'],
      },
      params,
    };
  },
};
