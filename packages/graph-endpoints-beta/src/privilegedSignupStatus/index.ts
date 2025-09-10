import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'delete'
  >;
  'GET /privilegedSignupStatus': Operation<'/privilegedSignupStatus', 'get'>;
  'GET /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'get'
  >;
  'PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}': Operation<
    '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    'patch'
  >;
  'POST /privilegedSignupStatus': Operation<'/privilegedSignupStatus', 'post'>;
  'POST /privilegedSignupStatus/completeSetup': Operation<
    '/privilegedSignupStatus/completeSetup',
    'post'
  >;
  'POST /privilegedSignupStatus/signUp': Operation<'/privilegedSignupStatus/signUp', 'post'>;
}

/**
 * `DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedSignupStatus-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedSignupStatus`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedSignupStatus']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedSignupStatus']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedSignupStatus',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: {
      path: ['privilegedSignupStatus-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['body'],
  params?: IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedSignupStatus/{privilegedSignupStatus-id}',
    paramDefs: {
      path: ['privilegedSignupStatus-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedSignupStatus`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedSignupStatus']['body']
): EndpointRequest<IEndpoints['POST /privilegedSignupStatus']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedSignupStatus',
    body,
  };
}

export const completeSetup = {
  /**
   * `POST /privilegedSignupStatus/completeSetup`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedSignupStatus/completeSetup']['body']
  ): EndpointRequest<IEndpoints['POST /privilegedSignupStatus/completeSetup']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedSignupStatus/completeSetup',
      body,
    };
  },
};

export const signUp = {
  /**
   * `POST /privilegedSignupStatus/signUp`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /privilegedSignupStatus/signUp']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedSignupStatus/signUp',
    };
  },
};
