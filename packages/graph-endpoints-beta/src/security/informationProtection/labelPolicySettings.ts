import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'delete'
  >;
  'GET /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /security/informationProtection/labelPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/informationProtection/labelPolicySettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/informationProtection/labelPolicySettings`
 *
 * Read the Microsoft Purview Information Protection policy settings for the user or organization.
 */
export function list(
  params?: IEndpoints['GET /security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection/labelPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/informationProtection/labelPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/informationProtection/labelPolicySettings']['body'],
  params?: IEndpoints['PATCH /security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/informationProtection/labelPolicySettings',
    paramDefs: [],
    params,
    body,
  };
}
