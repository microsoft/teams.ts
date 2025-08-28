import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate': Operation<
    '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate',
    'post'
  >;
}

/**
 * `POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['body'],
  params?: IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedApproval/{privilegedApproval-id}/roleInfo/selfActivate',
    paramDefs: [{ name: 'privilegedApproval-id', in: 'path' }],
    params,
    body,
  };
}
