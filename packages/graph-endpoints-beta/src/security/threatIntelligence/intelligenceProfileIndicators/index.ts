import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/intelligenceProfileIndicators': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators',
    'get'
  >;
  'GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/intelligenceProfileIndicators': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators',
    'post'
  >;
  'GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['intelligenceProfileIndicator-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelligenceProfileIndicators`
 *
 * Read the properties and relationships of a intelligenceProfileIndicator object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/intelligenceProfileIndicators',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 * Read the properties and relationships of a intelligenceProfileIndicator object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: {
      path: ['intelligenceProfileIndicator-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: {
      path: ['intelligenceProfileIndicator-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/intelligenceProfileIndicators`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/intelligenceProfileIndicators']['body']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/intelligenceProfileIndicators']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/intelligenceProfileIndicators',
    body,
  };
}

export const artifact = {
  /**
   * `GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact`
   *
   * The artifact related to this indicator.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}/artifact',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['intelligenceProfileIndicator-id'],
      },
      params,
    };
  },
};
