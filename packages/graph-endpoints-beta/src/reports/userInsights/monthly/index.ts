import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'delete'>;
  'GET /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'get'>;
  'PATCH /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'patch'>;
  'GET /reports/userInsights/monthly/activeUsers': Operation<
    '/reports/userInsights/monthly/activeUsers',
    'get'
  >;
  'GET /reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}': Operation<
    '/reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/authentications': Operation<
    '/reports/userInsights/monthly/authentications',
    'get'
  >;
  'GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}': Operation<
    '/reports/userInsights/monthly/authentications/{authenticationsMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsers': Operation<
    '/reports/userInsights/monthly/inactiveUsers',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}': Operation<
    '/reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsersByApplication': Operation<
    '/reports/userInsights/monthly/inactiveUsersByApplication',
    'get'
  >;
  'GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}': Operation<
    '/reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/mfaCompletions': Operation<
    '/reports/userInsights/monthly/mfaCompletions',
    'get'
  >;
  'GET /reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/mfaRegisteredUsers': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers',
    'get'
  >;
  'POST /reports/userInsights/monthly/mfaRegisteredUsers': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers',
    'post'
  >;
  'GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'get'
  >;
  'PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'patch'
  >;
  'DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'delete'
  >;
  'GET /reports/userInsights/monthly/requests': Operation<
    '/reports/userInsights/monthly/requests',
    'get'
  >;
  'GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}': Operation<
    '/reports/userInsights/monthly/requests/{userRequestsMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/signUps': Operation<
    '/reports/userInsights/monthly/signUps',
    'get'
  >;
  'GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}': Operation<
    '/reports/userInsights/monthly/signUps/{userSignUpMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/monthly/summary': Operation<
    '/reports/userInsights/monthly/summary',
    'get'
  >;
  'GET /reports/userInsights/monthly/summary/{insightSummary-id}': Operation<
    '/reports/userInsights/monthly/summary/{insightSummary-id}',
    'get'
  >;
}

/**
 * `DELETE /reports/userInsights/monthly`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/monthly']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/monthly',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/userInsights/monthly`
 *
 * Summaries of monthly user activities on apps registered in your tenant that is configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/userInsights/monthly`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/monthly']['body']
): EndpointRequest<IEndpoints['PATCH /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/monthly',
    body,
  };
}

export const activeUsers = {
  /**
   * `GET /reports/userInsights/monthly/activeUsers`
   *
   * Get a list of monthly active users on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/activeUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/activeUsers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/activeUsers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}`
   *
   * Insights for active users on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/activeUsers/{activeUsersMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['activeUsersMetric-id'],
      },
      params,
    };
  },
};

export const authentications = {
  /**
   * `GET /reports/userInsights/monthly/authentications`
   *
   * Get a list of monthly authentications on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/authentications']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/authentications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/authentications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}`
   *
   * Insights for authentications on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/authentications/{authenticationsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/authentications/{authenticationsMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationsMetric-id'],
      },
      params,
    };
  },
};

export const inactiveUsers = {
  /**
   * `GET /reports/userInsights/monthly/inactiveUsers`
   *
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/inactiveUsers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/inactiveUsers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/inactiveUsers/{monthlyInactiveUsersMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['monthlyInactiveUsersMetric-id'],
      },
      params,
    };
  },
};

export const inactiveUsersByApplication = {
  /**
   * `GET /reports/userInsights/monthly/inactiveUsersByApplication`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/inactiveUsersByApplication',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/inactiveUsersByApplication/{monthlyInactiveUsersByApplicationMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['monthlyInactiveUsersByApplicationMetric-id'],
      },
      params,
    };
  },
};

export const mfaCompletions = {
  /**
   * `GET /reports/userInsights/monthly/mfaCompletions`
   *
   * Get a list of monthly MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/mfaCompletions']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/mfaCompletions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/mfaCompletions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}`
   *
   * Insights for MFA usage on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mfaCompletionMetric-id'],
      },
      params,
    };
  },
};

export const mfaRegisteredUsers = {
  /**
   * `GET /reports/userInsights/monthly/mfaRegisteredUsers`
   *
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/mfaRegisteredUsers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/userInsights/monthly/mfaRegisteredUsers`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/userInsights/monthly/mfaRegisteredUsers']['body']
  ): EndpointRequest<
    IEndpoints['POST /reports/userInsights/monthly/mfaRegisteredUsers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/userInsights/monthly/mfaRegisteredUsers',
      body,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mfaUserCountMetric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['body'],
    params?: IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
      paramDefs: {
        path: ['mfaUserCountMetric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mfaUserCountMetric-id'],
      },
      params,
    };
  },
};

export const requests = {
  /**
   * `GET /reports/userInsights/monthly/requests`
   *
   * Get a list of monthly user requests on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/requests']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/requests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/requests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}`
   *
   * Insights for all user requests on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/requests/{userRequestsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/requests/{userRequestsMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userRequestsMetric-id'],
      },
      params,
    };
  },
};

export const signUps = {
  /**
   * `GET /reports/userInsights/monthly/signUps`
   *
   * Get a list of monthly user sign-ups on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/monthly/signUps']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/signUps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/signUps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}`
   *
   * Total sign-ups on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/signUps/{userSignUpMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/signUps/{userSignUpMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userSignUpMetric-id'],
      },
      params,
    };
  },
};

export const summary = {
  /**
   * `GET /reports/userInsights/monthly/summary`
   *
   * Get a list of monthly  insightSummary objects on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/monthly/summary']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/summary']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/summary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/monthly/summary/{insightSummary-id}`
   *
   * Summary of all usage insights on apps registered in the tenant for a specified period.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/monthly/summary/{insightSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/monthly/summary/{insightSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/monthly/summary/{insightSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['insightSummary-id'],
      },
      params,
    };
  },
};
