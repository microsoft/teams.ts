import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate',
    'post'
  >;
}

/**
 * `POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate']['body'],
  params?: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfDeactivate',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}
