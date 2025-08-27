import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identity/conditionalAccess/evaluate': Operation<
    '/identity/conditionalAccess/evaluate',
    'post'
  >;
}

/**
 * `POST /identity/conditionalAccess/evaluate`
 *
 * Evaluates the applicability of Conditional Access Policies in your tenant based on the provided sign-in properties.
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/evaluate']['body'],
  params?: IEndpoints['POST /identity/conditionalAccess/evaluate']['parameters']
): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/evaluate']['response']> {
  return {
    method: 'post',
    path: '/identity/conditionalAccess/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
