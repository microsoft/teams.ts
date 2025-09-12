export * as bitlocker from './bitlocker';
export * as dataLossPreventionPolicies from './dataLossPreventionPolicies';
export * as policy from './policy';
export * as sensitivityLabels from './sensitivityLabels';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection': Operation<
    '/sites/{site-id}/informationProtection',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/decryptBuffer': Operation<
    '/sites/{site-id}/informationProtection/decryptBuffer',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/encryptBuffer': Operation<
    '/sites/{site-id}/informationProtection/encryptBuffer',
    'post'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'patch'
  >;
  'DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings': Operation<
    '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
    'delete'
  >;
  'POST /sites/{site-id}/informationProtection/signDigest': Operation<
    '/sites/{site-id}/informationProtection/signDigest',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/verifySignature': Operation<
    '/sites/{site-id}/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const decryptBuffer = {
  /**
   * `POST /sites/{site-id}/informationProtection/decryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/decryptBuffer',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const encryptBuffer = {
  /**
   * `POST /sites/{site-id}/informationProtection/encryptBuffer`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/encryptBuffer',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const sensitivityPolicySettings = {
  /**
   * `GET /sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/sites/{site-id}/informationProtection/sensitivityPolicySettings',
      paramDefs: {
        header: ['If-Match'],
        path: ['site-id'],
      },
      params,
    };
  },
};

export const signDigest = {
  /**
   * `POST /sites/{site-id}/informationProtection/signDigest`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/signDigest',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const verifySignature = {
  /**
   * `POST /sites/{site-id}/informationProtection/verifySignature`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/verifySignature',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};
