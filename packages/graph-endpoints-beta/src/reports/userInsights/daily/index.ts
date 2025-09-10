import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'delete'>;
  'GET /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'get'>;
  'PATCH /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'patch'>;
  'GET /reports/userInsights/daily/activeUsers': Operation<
    '/reports/userInsights/daily/activeUsers',
    'get'
  >;
  'GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}': Operation<
    '/reports/userInsights/daily/activeUsers/{activeUsersMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/authentications': Operation<
    '/reports/userInsights/daily/authentications',
    'get'
  >;
  'GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}': Operation<
    '/reports/userInsights/daily/authentications/{authenticationsMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsers': Operation<
    '/reports/userInsights/daily/inactiveUsers',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}': Operation<
    '/reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsersByApplication': Operation<
    '/reports/userInsights/daily/inactiveUsersByApplication',
    'get'
  >;
  'GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}': Operation<
    '/reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/mfaCompletions': Operation<
    '/reports/userInsights/daily/mfaCompletions',
    'get'
  >;
  'GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}': Operation<
    '/reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/mfaTelecomFraud': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud',
    'get'
  >;
  'POST /reports/userInsights/daily/mfaTelecomFraud': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud',
    'post'
  >;
  'GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'get'
  >;
  'PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'patch'
  >;
  'DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'delete'
  >;
  'GET /reports/userInsights/daily/signUps': Operation<
    '/reports/userInsights/daily/signUps',
    'get'
  >;
  'GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}': Operation<
    '/reports/userInsights/daily/signUps/{userSignUpMetric-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/summary': Operation<
    '/reports/userInsights/daily/summary',
    'get'
  >;
  'GET /reports/userInsights/daily/summary/{insightSummary-id}': Operation<
    '/reports/userInsights/daily/summary/{insightSummary-id}',
    'get'
  >;
  'GET /reports/userInsights/daily/userCount': Operation<
    '/reports/userInsights/daily/userCount',
    'get'
  >;
  'GET /reports/userInsights/daily/userCount/{userCountMetric-id}': Operation<
    '/reports/userInsights/daily/userCount/{userCountMetric-id}',
    'get'
  >;
}

/**
 * `DELETE /reports/userInsights/daily`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/daily']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/daily',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/userInsights/daily`
 *
 * Summaries of daily user activities on apps registered in your tenant that is configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/userInsights/daily`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/daily']['body']
): EndpointRequest<IEndpoints['PATCH /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/daily',
    body,
  };
}

export const activeUsers = {
  /**
   * `GET /reports/userInsights/daily/activeUsers`
   *
   * Get a list of daily active users on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/daily/activeUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/activeUsers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/activeUsers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}`
   *
   * Insights for active users on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/activeUsers/{activeUsersMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/activeUsers/{activeUsersMetric-id}',
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
   * `GET /reports/userInsights/daily/authentications`
   *
   * Get a list of daily authentications on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/daily/authentications']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/authentications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/authentications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}`
   *
   * Insights for authentications on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/authentications/{authenticationsMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/authentications/{authenticationsMetric-id}',
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
   * `GET /reports/userInsights/daily/inactiveUsers`
   *
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/inactiveUsers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/inactiveUsers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/inactiveUsers/{dailyInactiveUsersMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['dailyInactiveUsersMetric-id'],
      },
      params,
    };
  },
};

export const inactiveUsersByApplication = {
  /**
   * `GET /reports/userInsights/daily/inactiveUsersByApplication`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/inactiveUsersByApplication',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/inactiveUsersByApplication/{dailyInactiveUsersByApplicationMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['dailyInactiveUsersByApplicationMetric-id'],
      },
      params,
    };
  },
};

export const mfaCompletions = {
  /**
   * `GET /reports/userInsights/daily/mfaCompletions`
   *
   * Get a list of daily MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/daily/mfaCompletions']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/mfaCompletions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/mfaCompletions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}`
   *
   * Insights for MFA usage on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/mfaCompletions/{mfaCompletionMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mfaCompletionMetric-id'],
      },
      params,
    };
  },
};

export const mfaTelecomFraud = {
  /**
   * `GET /reports/userInsights/daily/mfaTelecomFraud`
   *
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/mfaTelecomFraud',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/userInsights/daily/mfaTelecomFraud`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/userInsights/daily/mfaTelecomFraud']['body']
  ): EndpointRequest<IEndpoints['POST /reports/userInsights/daily/mfaTelecomFraud']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/userInsights/daily/mfaTelecomFraud',
      body,
    };
  },
  /**
   * `GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mfaTelecomFraudMetric-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['body'],
    params?: IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
      paramDefs: {
        path: ['mfaTelecomFraudMetric-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mfaTelecomFraudMetric-id'],
      },
      params,
    };
  },
};

export const signUps = {
  /**
   * `GET /reports/userInsights/daily/signUps`
   *
   * Get a list of daily user sign-ups on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  list: function list(
    params?: IEndpoints['GET /reports/userInsights/daily/signUps']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/signUps']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/signUps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}`
   *
   * Total sign-ups on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/signUps/{userSignUpMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/signUps/{userSignUpMetric-id}',
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
   * `GET /reports/userInsights/daily/summary`
   *
   * Summary of all usage insights on apps registered in the tenant for a specified period.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/summary']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/summary']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/summary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/summary/{insightSummary-id}`
   *
   * Summary of all usage insights on apps registered in the tenant for a specified period.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/daily/summary/{insightSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/summary/{insightSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/summary/{insightSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['insightSummary-id'],
      },
      params,
    };
  },
};

export const userCount = {
  /**
   * `GET /reports/userInsights/daily/userCount`
   *
   * Get a list of daily user count on apps registered in your tenant configured for Microsoft Entra External ID for customers.
   */
  get: function get(
    params?: IEndpoints['GET /reports/userInsights/daily/userCount']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/userCount']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/userCount',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /reports/userInsights/daily/userCount/{userCountMetric-id}`
   *
   * Insights for total users on apps registered in the tenant for a specified period.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/userInsights/daily/userCount/{userCountMetric-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userInsights/daily/userCount/{userCountMetric-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userInsights/daily/userCount/{userCountMetric-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userCountMetric-id'],
      },
      params,
    };
  },
};
