import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/checkMemberObjects': Operation<'/me/checkMemberObjects', 'post'>;
}

/**
  * `POST /me/checkMemberObjects`
  *
  * Check for membership in a list of group IDs, administrative unit IDs, or directory role IDs, for the IDs of the specified 
- user
- group
- service principal
- organizational contact
- device
- directory object. This method is transitive.
  */
export function create(
  body: IEndpoints['POST /me/checkMemberObjects']['body'],
  params?: IEndpoints['POST /me/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /me/checkMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/checkMemberObjects',
    paramDefs: [],
    params,
    body,
  };
}
