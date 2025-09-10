import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'delete'
  >;
  'GET /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkSettings': Operation<
    '/deviceManagement/androidForWorkSettings',
    'patch'
  >;
  'POST /deviceManagement/androidForWorkSettings/completeSignup': Operation<
    '/deviceManagement/androidForWorkSettings/completeSignup',
    'post'
  >;
  'POST /deviceManagement/androidForWorkSettings/requestSignupUrl': Operation<
    '/deviceManagement/androidForWorkSettings/requestSignupUrl',
    'post'
  >;
  'POST /deviceManagement/androidForWorkSettings/syncApps': Operation<
    '/deviceManagement/androidForWorkSettings/syncApps',
    'post'
  >;
  'POST /deviceManagement/androidForWorkSettings/unbind': Operation<
    '/deviceManagement/androidForWorkSettings/unbind',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidForWorkSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidForWorkSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidForWorkSettings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkSettings`
 *
 * The singleton Android for Work settings entity.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidForWorkSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkSettings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidForWorkSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidForWorkSettings']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/androidForWorkSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidForWorkSettings',
    body,
  };
}

export const completeSignup = {
  /**
   * `POST /deviceManagement/androidForWorkSettings/completeSignup`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidForWorkSettings/completeSignup']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkSettings/completeSignup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkSettings/completeSignup',
      body,
    };
  },
};

export const requestSignupUrl = {
  /**
   * `POST /deviceManagement/androidForWorkSettings/requestSignupUrl`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidForWorkSettings/requestSignupUrl']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkSettings/requestSignupUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkSettings/requestSignupUrl',
      body,
    };
  },
};

export const syncApps = {
  /**
   * `POST /deviceManagement/androidForWorkSettings/syncApps`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkSettings/syncApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkSettings/syncApps',
    };
  },
};

export const unbind = {
  /**
   * `POST /deviceManagement/androidForWorkSettings/unbind`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkSettings/unbind']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkSettings/unbind',
    };
  },
};
