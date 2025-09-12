import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/androidForWorkEnrollmentProfiles': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/androidForWorkEnrollmentProfiles': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles',
    'post'
  >;
  'POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken',
    'post'
  >;
  'POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['androidForWorkEnrollmentProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkEnrollmentProfiles`
 *
 * Android for Work enrollment profile entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 * Android for Work enrollment profile entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: {
      path: ['androidForWorkEnrollmentProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: {
      path: ['androidForWorkEnrollmentProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidForWorkEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles',
    body,
  };
}

export const createToken = {
  /**
   * `POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['body'],
    params?: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken',
      paramDefs: {
        path: ['androidForWorkEnrollmentProfile-id'],
      },
      params,
      body,
    };
  },
};

export const revokeToken = {
  /**
   * `POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken',
      paramDefs: {
        path: ['androidForWorkEnrollmentProfile-id'],
      },
      params,
    };
  },
};
