import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/manager': Operation<'/contacts/{orgContact-id}/manager', 'get'>;
}

/**
 * `GET /contacts/{orgContact-id}/manager`
 *
 * Get this organizational contact&#x27;s manager.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}/manager']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/manager']['response']> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/manager',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}
