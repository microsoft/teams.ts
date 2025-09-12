export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection': Operation<'/informationProtection', 'get'>;
  'PATCH /informationProtection': Operation<'/informationProtection', 'patch'>;
  'POST /informationProtection/decryptBuffer': Operation<
    '/informationProtection/decryptBuffer',
    'post'
  >;
  'POST /informationProtection/encryptBuffer': Operation<
    '/informationProtection/encryptBuffer',
    'post'
  >;
  'GET /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
  'DELETE /informationProtection/sensitivityPolicySettings': Operation<
    '/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'POST /informationProtection/signDigest': Operation<'/informationProtection/signDigest', 'post'>;
  'POST /informationProtection/verifySignature': Operation<
    '/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `GET /informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection']['body']
): EndpointRequest<IEndpoints['PATCH /informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection',
    body,
  };
}

export const decryptBuffer = {
  /**
   * `POST /informationProtection/decryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/decryptBuffer']['body']
  ): EndpointRequest<IEndpoints['POST /informationProtection/decryptBuffer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/decryptBuffer',
      body,
    };
  },
};

export const encryptBuffer = {
  /**
   * `POST /informationProtection/encryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/encryptBuffer']['body']
  ): EndpointRequest<IEndpoints['POST /informationProtection/encryptBuffer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/encryptBuffer',
      body,
    };
  },
};

export const sensitivityPolicySettings = {
  /**
   * `GET /informationProtection/sensitivityPolicySettings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /informationProtection/sensitivityPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /informationProtection/sensitivityPolicySettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/informationProtection/sensitivityPolicySettings',
      body,
    };
  },
  /**
   * `DELETE /informationProtection/sensitivityPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const signDigest = {
  /**
   * `POST /informationProtection/signDigest`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/signDigest']['body']
  ): EndpointRequest<IEndpoints['POST /informationProtection/signDigest']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/signDigest',
      body,
    };
  },
};

export const verifySignature = {
  /**
   * `POST /informationProtection/verifySignature`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/verifySignature']['body']
  ): EndpointRequest<IEndpoints['POST /informationProtection/verifySignature']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/verifySignature',
      body,
    };
  },
};
