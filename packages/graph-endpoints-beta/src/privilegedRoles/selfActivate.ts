import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedRoles/{privilegedRole-id}/selfActivate': Operation<
    '/privilegedRoles/{privilegedRole-id}/selfActivate',
    'post'
  >;
}

/**
 * `POST /privilegedRoles/{privilegedRole-id}/selfActivate`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['body'],
  params?: IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedRoles/{privilegedRole-id}/selfActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoles/{privilegedRole-id}/selfActivate',
    paramDefs: [{ name: 'privilegedRole-id', in: 'path' }],
    params,
    body,
  };
}
