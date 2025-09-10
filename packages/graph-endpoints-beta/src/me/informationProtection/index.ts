export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection': Operation<'/me/informationProtection', 'delete'>;
  'GET /me/informationProtection': Operation<'/me/informationProtection', 'get'>;
  'PATCH /me/informationProtection': Operation<'/me/informationProtection', 'patch'>;
  'POST /me/informationProtection/decryptBuffer': Operation<
    '/me/informationProtection/decryptBuffer',
    'post'
  >;
  'POST /me/informationProtection/encryptBuffer': Operation<
    '/me/informationProtection/encryptBuffer',
    'post'
  >;
  'GET /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
  'DELETE /me/informationProtection/sensitivityPolicySettings': Operation<
    '/me/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'POST /me/informationProtection/signDigest': Operation<
    '/me/informationProtection/signDigest',
    'post'
  >;
  'POST /me/informationProtection/verifySignature': Operation<
    '/me/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection']['body']
): EndpointRequest<IEndpoints['PATCH /me/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection',
    body,
  };
}

export const decryptBuffer = {
  /**
   * `POST /me/informationProtection/decryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/decryptBuffer']['body']
  ): EndpointRequest<IEndpoints['POST /me/informationProtection/decryptBuffer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/decryptBuffer',
      body,
    };
  },
};

export const encryptBuffer = {
  /**
   * `POST /me/informationProtection/encryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/encryptBuffer']['body']
  ): EndpointRequest<IEndpoints['POST /me/informationProtection/encryptBuffer']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/encryptBuffer',
      body,
    };
  },
};

export const sensitivityPolicySettings = {
  /**
   * `GET /me/informationProtection/sensitivityPolicySettings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/informationProtection/sensitivityPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/informationProtection/sensitivityPolicySettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /me/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/informationProtection/sensitivityPolicySettings',
      body,
    };
  },
  /**
   * `DELETE /me/informationProtection/sensitivityPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const signDigest = {
  /**
   * `POST /me/informationProtection/signDigest`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/signDigest']['body']
  ): EndpointRequest<IEndpoints['POST /me/informationProtection/signDigest']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/signDigest',
      body,
    };
  },
};

export const verifySignature = {
  /**
   * `POST /me/informationProtection/verifySignature`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/verifySignature']['body']
  ): EndpointRequest<IEndpoints['POST /me/informationProtection/verifySignature']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/verifySignature',
      body,
    };
  },
};
