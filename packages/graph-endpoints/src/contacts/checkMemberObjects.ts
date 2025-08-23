import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/{orgContact-id}/checkMemberObjects': Operation<
    '/contacts/{orgContact-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /contacts/{orgContact-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/checkMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/contacts/{orgContact-id}/checkMemberObjects',
    paramDefs: [{ name: 'orgContact-id', in: 'path' }],
    params,
    body,
  };
}
