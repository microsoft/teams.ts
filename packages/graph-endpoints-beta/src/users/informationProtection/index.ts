export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection': Operation<
    '/users/{user-id}/informationProtection',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/decryptBuffer': Operation<
    '/users/{user-id}/informationProtection/decryptBuffer',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/encryptBuffer': Operation<
    '/users/{user-id}/informationProtection/encryptBuffer',
    'post'
  >;
  'GET /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
  'DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/users/{user-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'POST /users/{user-id}/informationProtection/signDigest': Operation<
    '/users/{user-id}/informationProtection/signDigest',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/verifySignature': Operation<
    '/users/{user-id}/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const decryptBuffer = {
  /**
   * `POST /users/{user-id}/informationProtection/decryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/decryptBuffer',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const encryptBuffer = {
  /**
   * `POST /users/{user-id}/informationProtection/encryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/encryptBuffer',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const sensitivityPolicySettings = {
  /**
   * `GET /users/{user-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const signDigest = {
  /**
   * `POST /users/{user-id}/informationProtection/signDigest`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/signDigest',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const verifySignature = {
  /**
   * `POST /users/{user-id}/informationProtection/verifySignature`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/verifySignature',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
