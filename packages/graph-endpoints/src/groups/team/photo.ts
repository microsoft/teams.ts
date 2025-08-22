import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/photo': Operation<'/groups/{group-id}/team/photo', 'get'>;
  'PATCH /groups/{group-id}/team/photo': Operation<'/groups/{group-id}/team/photo', 'patch'>;
}

/**
 * `GET /groups/{group-id}/team/photo`
 *
 * The profile photo for the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/photo']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/photo']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/photo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/photo`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/photo']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/photo']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/photo']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/photo',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
