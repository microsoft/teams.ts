import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/dataSecurityAndGovernance/processContent': Operation<
    '/me/dataSecurityAndGovernance/processContent',
    'post'
  >;
}

/**
 * `POST /me/dataSecurityAndGovernance/processContent`
 *
 * Process content against data protection policies in the context of the current, or specified, user.
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/processContent']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/processContent']['parameters']
): EndpointRequest<IEndpoints['POST /me/dataSecurityAndGovernance/processContent']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/dataSecurityAndGovernance/processContent',
    paramDefs: [],
    params,
    body,
  };
}
