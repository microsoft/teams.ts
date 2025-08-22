import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/{orgContact-id}/retryServiceProvisioning': Operation<
    '/contacts/{orgContact-id}/retryServiceProvisioning',
    'post'
  >;
}

/**
 * `POST /contacts/{orgContact-id}/retryServiceProvisioning`
 *
 */
export function create(
  body: IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['body'],
  params?: IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['parameters']
): EndpointRequest<
  IEndpoints['POST /contacts/{orgContact-id}/retryServiceProvisioning']['response']
> {
  return {
    method: 'post',
    path: '/contacts/{orgContact-id}/retryServiceProvisioning',
    paramDefs: [{ name: 'orgContact-id', in: 'path' }],
    params,
    body,
  };
}
