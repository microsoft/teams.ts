import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'delete'
  >;
  'GET /deviceManagement/userExperienceAnalyticsModelScores': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores',
    'get'
  >;
  'GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'get'
  >;
  'PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    'patch'
  >;
  'POST /deviceManagement/userExperienceAnalyticsModelScores': Operation<
    '/deviceManagement/userExperienceAnalyticsModelScores',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userExperienceAnalyticsModelScores-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userExperienceAnalyticsModelScores`
 *
 * User experience analytics model scores
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsModelScores',
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
 * `GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
 *
 * User experience analytics model scores
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userExperienceAnalyticsModelScores-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores-id}',
    paramDefs: [{ name: 'userExperienceAnalyticsModelScores-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userExperienceAnalyticsModelScores`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userExperienceAnalyticsModelScores']['body'],
  params?: IEndpoints['POST /deviceManagement/userExperienceAnalyticsModelScores']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/userExperienceAnalyticsModelScores']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/userExperienceAnalyticsModelScores',
    paramDefs: [],
    params,
    body,
  };
}
