export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/signDigest',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/verifySignature': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const decryptBuffer = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/decryptBuffer',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const encryptBuffer = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/encryptBuffer',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const sensitivityPolicySettings = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};

export const signDigest = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/signDigest',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const verifySignature = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/verifySignature`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/verifySignature']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/verifySignature']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/verifySignature']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/verifySignature',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};
