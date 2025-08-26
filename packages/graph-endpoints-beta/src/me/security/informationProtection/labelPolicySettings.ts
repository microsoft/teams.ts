import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'delete'
  >;
  'GET /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /me/security/informationProtection/labelPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection/labelPolicySettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/security/informationProtection/labelPolicySettings`
 *
 * Read the Microsoft Purview Information Protection policy settings for the user or organization.
 */
export function list(
  params?: IEndpoints['GET /me/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/labelPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection/labelPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection/labelPolicySettings']['body'],
  params?: IEndpoints['PATCH /me/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection/labelPolicySettings',
    paramDefs: [],
    params,
    body,
  };
}
