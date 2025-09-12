import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/protectionPolicies': Operation<
    '/solutions/backupRestore/protectionPolicies',
    'get'
  >;
  'GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/protectionPolicies': Operation<
    '/solutions/backupRestore/protectionPolicies',
    'post'
  >;
  'POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate',
    'post'
  >;
  'POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate': Operation<
    '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 * Delete a protection policy. Read the properties and relationships of a protectionPolicyBase object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['protectionPolicyBase-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/protectionPolicies`
 *
 * List of protection policies in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/protectionPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/protectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 * List of protection policies in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: {
      path: ['protectionPolicyBase-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}',
    paramDefs: {
      path: ['protectionPolicyBase-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/protectionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/protectionPolicies']['body']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/protectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/protectionPolicies',
    body,
  };
}

export const activate = {
  /**
   * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate`
   *
   * Activate a protectionPolicyBase. Currently, only one active backup policy per underlying service is supported (that is, one for OneDrive accounts, one for SharePoint sites, and one for Exchange Online users). You can add or remove artifacts (sites or user accounts) to or from each active policy.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/activate',
      paramDefs: {
        path: ['protectionPolicyBase-id'],
      },
      params,
    };
  },
};

export const deactivate = {
  /**
   * `POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate`
   *
   * Deactivate a protectionPolicyBase.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/backupRestore/protectionPolicies/{protectionPolicyBase-id}/deactivate',
      paramDefs: {
        path: ['protectionPolicyBase-id'],
      },
      params,
    };
  },
};
