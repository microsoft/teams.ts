import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/dataSecurityAndGovernance/processContent': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/processContent',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/processContent`
 *
 * Process content against data protection policies in the context of the current, or specified, user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/processContent',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
