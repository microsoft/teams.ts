import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/determineIfInteractionIsAllowed': Operation<
    '/teamwork/determineIfInteractionIsAllowed',
    'post'
  >;
}

/**
 * `POST /teamwork/determineIfInteractionIsAllowed`
 *
 * Determine if a specified Microsoft Teams interaction is allowed between the signed-in user and specified users.
 */
export function create(
  body: IEndpoints['POST /teamwork/determineIfInteractionIsAllowed']['body'],
  params?: IEndpoints['POST /teamwork/determineIfInteractionIsAllowed']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/determineIfInteractionIsAllowed']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/determineIfInteractionIsAllowed',
    paramDefs: [],
    params,
    body,
  };
}
