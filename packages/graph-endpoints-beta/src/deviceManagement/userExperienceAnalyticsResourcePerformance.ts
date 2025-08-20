import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsResourcePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsResourcePerformance': Operation<
    '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsResourcePerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsResourcePerformance`
 *
 * User experience analytics resource performance
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
 *
 * User experience analytics resource performance
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsResourcePerformance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsResourcePerformance/{userExperienceAnalyticsResourcePerformance-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsResourcePerformance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsResourcePerformance`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsResourcePerformance']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsResourcePerformance']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsResourcePerformance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsResourcePerformance',
    paramDefs: [],
    params,
    body,
  };
}
