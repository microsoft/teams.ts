import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/{orgContact-id}/getMemberObjects': Operation<
    '/contacts/{orgContact-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /contacts/{orgContact-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contacts/{orgContact-id}/getMemberObjects',
    paramDefs: [{ name: 'orgContact-id', in: 'path' }],
    params,
    body,
  };
}
