export * as readingAssignmentSubmissions from './readingAssignmentSubmissions';
export * as reflectCheckInResponses from './reflectCheckInResponses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports': Operation<'/education/reports', 'delete'>;
  'GET /education/reports': Operation<'/education/reports', 'get'>;
  'PATCH /education/reports': Operation<'/education/reports', 'patch'>;
}

/**
 * `DELETE /education/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/reports']['response']> {
  return {
    method: 'delete',
    path: '/education/reports',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /education/reports`
 *
 */
export function list(
  params?: IEndpoints['GET /education/reports']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports']['response']> {
  return {
    method: 'get',
    path: '/education/reports',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /education/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports']['body'],
  params?: IEndpoints['PATCH /education/reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/reports']['response']> {
  return {
    method: 'patch',
    path: '/education/reports',
    paramDefs: [],
    params,
    body,
  };
}
