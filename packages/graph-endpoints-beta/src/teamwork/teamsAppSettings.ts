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
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamsAppSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /teamwork/teamsAppSettings`
 *
 * Read the properties and relationships of a teamsAppSettings object.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamsAppSettings']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/teamsAppSettings']['response']> {
  return {
    ver: 'beta',
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
 * Update the properties of a teamsAppSettings object.
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamsAppSettings']['body'],
  params?: IEndpoints['PATCH /teamwork/teamsAppSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/teamsAppSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamsAppSettings',
    paramDefs: [],
    params,
    body,
  };
}
