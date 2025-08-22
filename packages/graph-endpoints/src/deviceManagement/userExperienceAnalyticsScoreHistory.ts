import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsScoreHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsScoreHistory': Operation<
    '/deviceManagement/userExperienceAnalyticsScoreHistory',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsScoreHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsScoreHistory`
 *
 * User experience analytics device Startup Score History
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsScoreHistory',
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
 * `GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
 *
 * User experience analytics device Startup Score History
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsScoreHistory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsScoreHistory/{userExperienceAnalyticsScoreHistory-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsScoreHistory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsScoreHistory`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsScoreHistory']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsScoreHistory']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsScoreHistory']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsScoreHistory',
    paramDefs: [],
    params,
    body,
  };
}
