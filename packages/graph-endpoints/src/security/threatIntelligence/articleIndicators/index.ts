import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/articleIndicators': Operation<
    '/security/threatIntelligence/articleIndicators',
    'get'
  >;
  'GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/articleIndicators': Operation<
    '/security/threatIntelligence/articleIndicators',
    'post'
  >;
  'GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['articleIndicator-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/articleIndicators`
 *
 * Read the properties and relationships of an articleIndicator object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/articleIndicators']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/articleIndicators']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articleIndicators',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 * Read the properties and relationships of an articleIndicator object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: {
      path: ['articleIndicator-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: {
      path: ['articleIndicator-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/articleIndicators`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/articleIndicators']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/articleIndicators']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/articleIndicators',
    body,
  };
}

export const artifact = {
  /**
   * `GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact`
   *
   * The artifact related to this indicator.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}/artifact',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['articleIndicator-id'],
      },
      params,
    };
  },
};
