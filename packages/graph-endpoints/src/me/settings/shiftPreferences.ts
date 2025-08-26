import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'delete'>;
  'GET /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'get'>;
  'PATCH /me/settings/shiftPreferences': Operation<'/me/settings/shiftPreferences', 'patch'>;
}

/**
 * `DELETE /me/settings/shiftPreferences`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/shiftPreferences']['response']> {
  return {
    method: 'delete',
    path: '/me/settings/shiftPreferences',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/settings/shiftPreferences`
 *
 */
export function list(
  params?: IEndpoints['GET /me/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/shiftPreferences']['response']> {
  return {
    method: 'get',
    path: '/me/settings/shiftPreferences',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/shiftPreferences`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/shiftPreferences']['body'],
  params?: IEndpoints['PATCH /me/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/shiftPreferences']['response']> {
  return {
    method: 'patch',
    path: '/me/settings/shiftPreferences',
    paramDefs: [],
    params,
    body,
  };
}
