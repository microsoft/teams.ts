export * as itemInsights from './itemInsights';
export * as shiftPreferences from './shiftPreferences';
export * as storage from './storage';
export * as windows from './windows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings': Operation<'/me/settings', 'delete'>;
  'GET /me/settings': Operation<'/me/settings', 'get'>;
  'PATCH /me/settings': Operation<'/me/settings', 'patch'>;
}

/**
 * `DELETE /me/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings']['response']> {
  return {
    method: 'delete',
    path: '/me/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
  * `GET /me/settings`
  *
  * Read the user and organization userSettings object.
To learn how to update the properties of the userSettings object, see update user settings.
  */
export function list(
  params?: IEndpoints['GET /me/settings']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings']['response']> {
  return {
    method: 'get',
    path: '/me/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `PATCH /me/settings`
  *
  * Update the properties of the userSettings object. 
Users in the same organization can have different settings based on their preference or on the organization policies. 
To get the user current settings, see current user settings. 
  */
export function update(
  body: IEndpoints['PATCH /me/settings']['body'],
  params?: IEndpoints['PATCH /me/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings']['response']> {
  return {
    method: 'patch',
    path: '/me/settings',
    paramDefs: [],
    params,
    body,
  };
}
