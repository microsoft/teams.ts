import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'delete'>;
  'GET /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'get'>;
  'PATCH /teamwork/teamsAppSettings': Operation<'/teamwork/teamsAppSettings', 'patch'>;
}

/**
 * `DELETE /teamwork/teamsAppSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamsAppSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/teamsAppSettings']['response']> {
  return {
    method: 'delete',
    path: '/teamwork/teamsAppSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /teamwork/teamsAppSettings`
 *
 * Get the tenant-wide teamsAppSettings for all Teams apps in the tenant.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamsAppSettings']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/teamsAppSettings']['response']> {
  return {
    method: 'get',
    path: '/teamwork/teamsAppSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/teamsAppSettings`
 *
 * Update the tenant-wide teamsAppSettings for all Teams apps in the tenant.
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamsAppSettings']['body'],
  params?: IEndpoints['PATCH /teamwork/teamsAppSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/teamsAppSettings']['response']> {
  return {
    method: 'patch',
    path: '/teamwork/teamsAppSettings',
    paramDefs: [],
    params,
    body,
  };
}
