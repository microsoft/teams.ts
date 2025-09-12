import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/intelProfiles': Operation<
    '/security/threatIntelligence/intelProfiles',
    'get'
  >;
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/intelProfiles': Operation<
    '/security/threatIntelligence/intelProfiles',
    'post'
  >;
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators',
    'get'
  >;
  'GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['intelligenceProfile-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelProfiles`
 *
 * Get a list of the intelligenceProfile objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/intelProfiles']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 * Read the properties and relationships of a intelligenceProfile object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: {
      path: ['intelligenceProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}',
    paramDefs: {
      path: ['intelligenceProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/intelProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/intelProfiles']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/intelProfiles']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/intelProfiles',
    body,
  };
}

export const indicators = {
  /**
   * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators`
   *
   * Get the intelligenceProfileIndicator resources from the indicators navigation property of an intelligenceProfile.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['intelligenceProfile-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}`
   *
   * Includes an assemblage of high-fidelity network indicators of compromise.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/intelProfiles/{intelligenceProfile-id}/indicators/{intelligenceProfileIndicator-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['intelligenceProfile-id', 'intelligenceProfileIndicator-id'],
      },
      params,
    };
  },
};
