import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/policySets/{policySet-id}/update': Operation<
    '/deviceAppManagement/policySets/{policySet-id}/update',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/policySets/{policySet-id}/update`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['body'],
  params?: IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/policySets/{policySet-id}/update']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/policySets/{policySet-id}/update',
    paramDefs: [{ name: 'policySet-id', in: 'path' }],
    params,
    body,
  };
}
