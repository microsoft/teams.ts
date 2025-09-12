import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'delete'
  >;
  'GET /directory/inboundSharedUserProfiles': Operation<
    '/directory/inboundSharedUserProfiles',
    'get'
  >;
  'GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'get'
  >;
  'PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'patch'
  >;
  'POST /directory/inboundSharedUserProfiles': Operation<
    '/directory/inboundSharedUserProfiles',
    'post'
  >;
  'POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData',
    'post'
  >;
  'POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData',
    'post'
  >;
}

/**
 * `DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['inboundSharedUserProfile-userId'],
    },
    params,
  };
}

/**
 * `GET /directory/inboundSharedUserProfiles`
 *
 * Retrieve the properties of all inboundSharedUserProfiles.
 */
export function list(
  params?: IEndpoints['GET /directory/inboundSharedUserProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /directory/inboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/inboundSharedUserProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 * Read the properties of an inboundSharedUserProfile.
 */
export function get(
  params?: IEndpoints['GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: {
      path: ['inboundSharedUserProfile-userId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['body'],
  params?: IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: {
      path: ['inboundSharedUserProfile-userId'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/inboundSharedUserProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /directory/inboundSharedUserProfiles']['body']
): EndpointRequest<IEndpoints['POST /directory/inboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/inboundSharedUserProfiles',
    body,
  };
}

export const exportPersonalData = {
  /**
   * `POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData`
   *
   * Create a request to export the personal data for an inboundSharedUserProfile.
   */
  create: function create(
    body: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['body'],
    params?: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/exportPersonalData',
      paramDefs: {
        path: ['inboundSharedUserProfile-userId'],
      },
      params,
      body,
    };
  },
};

export const removePersonalData = {
  /**
   * `POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData`
   *
   * Create a request to remove the personal data for an inboundSharedUserProfile.
   */
  create: function create(
    params?: IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}/removePersonalData',
      paramDefs: {
        path: ['inboundSharedUserProfile-userId'],
      },
      params,
    };
  },
};
