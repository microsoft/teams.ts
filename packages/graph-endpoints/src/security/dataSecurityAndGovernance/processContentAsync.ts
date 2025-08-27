import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/dataSecurityAndGovernance/processContentAsync': Operation<
    '/security/dataSecurityAndGovernance/processContentAsync',
    'post'
  >;
}

/**
 * `POST /security/dataSecurityAndGovernance/processContentAsync`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/processContentAsync',
    paramDefs: [],
    params,
    body,
  };
}
