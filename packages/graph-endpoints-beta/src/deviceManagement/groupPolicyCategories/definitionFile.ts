import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile`
 *
 * The id of the definition file the category came from
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitionFile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
    ],
    params,
  };
}
