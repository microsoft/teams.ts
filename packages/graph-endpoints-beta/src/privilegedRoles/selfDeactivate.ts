import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoles/{privilegedRole-id}/selfDeactivate': Operation<
    '/privilegedRoles/{privilegedRole-id}/selfDeactivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoles/{privilegedRole-id}/selfDeactivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfDeactivate']['body'],
  params?: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfDeactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfDeactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoles/{privilegedRole-id}/selfDeactivate',
    paramDefs: [{ name: 'privilegedRole-id', in: 'path' }],
    params,
    body,
  };
}
