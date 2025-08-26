import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedSignupStatus/signUp': Operation<'/privilegedSignupStatus/signUp', 'post'>;
}

/**
 * `POST /privilegedSignupStatus/signUp`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedSignupStatus/signUp']['body'],
  params?: IEndpoints['POST /privilegedSignupStatus/signUp']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedSignupStatus/signUp']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedSignupStatus/signUp',
    paramDefs: [],
    params,
    body,
  };
}
