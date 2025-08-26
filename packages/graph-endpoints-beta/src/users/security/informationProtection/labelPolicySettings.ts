import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection/labelPolicySettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection/labelPolicySettings`
 *
 * Read the properties and relationships of an informationProtectionPolicySetting object. The settings exposed by this API should be used in applications to populate the moreInfoUrl property for Microsoft Purview Information Protection help, and indicate whether labeling is mandatory for the user and whether justification must be provided on downgrade.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security/informationProtection/labelPolicySettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
