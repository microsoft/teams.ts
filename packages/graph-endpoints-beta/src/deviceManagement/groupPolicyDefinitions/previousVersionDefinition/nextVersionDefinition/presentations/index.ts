import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations',
    'post'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyDefinition-id', 'groupPolicyPresentation-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations`
 *
 * The group policy presentations associated with the definition.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}`
 *
 * The group policy presentations associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    paramDefs: {
      path: ['groupPolicyDefinition-id', 'groupPolicyPresentation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}',
    paramDefs: {
      path: ['groupPolicyDefinition-id', 'groupPolicyPresentation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition`
   *
   * The group policy definition associated with the presentation.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/presentations/{groupPolicyPresentation-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyDefinition-id', 'groupPolicyPresentation-id'],
      },
      params,
    };
  },
};
