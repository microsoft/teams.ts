import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'delete'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings',
    'get'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'patch'
  >;
  'POST /copilot/users/{aiUser-id}/onlineMeetings': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings',
    'post'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    'get'
  >;
  'POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
    'post'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'patch'
  >;
  'DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
    'delete'
  >;
}

/**
 * `DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['aiUser-id', 'aiOnlineMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings',
    paramDefs: {
      path: ['aiUser-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: {
      path: ['aiUser-id', 'aiOnlineMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: {
      path: ['aiUser-id', 'aiOnlineMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /copilot/users/{aiUser-id}/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['body'],
  params?: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/users/{aiUser-id}/onlineMeetings',
    paramDefs: {
      path: ['aiUser-id'],
    },
    params,
    body,
  };
}

export const aiInsights = {
  /**
   * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['aiUser-id', 'aiOnlineMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights`
   *
   */
  create: function create(
    body: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['body'],
    params?: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights',
      paramDefs: {
        path: ['aiUser-id', 'aiOnlineMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['aiUser-id', 'aiOnlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['body'],
    params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        path: ['aiUser-id', 'aiOnlineMeeting-id', 'callAiInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}/aiInsights/{callAiInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['aiUser-id', 'aiOnlineMeeting-id', 'callAiInsight-id'],
      },
      params,
    };
  },
};
