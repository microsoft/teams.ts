import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /privilegedSignupStatus/completeSetup': Operation<
    '/privilegedSignupStatus/completeSetup',
    'post'
  >;
}

/**
 * `POST /privilegedSignupStatus/completeSetup`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedSignupStatus/completeSetup']['body'],
  params?: IEndpoints['POST /privilegedSignupStatus/completeSetup']['parameters']
): EndpointRequest<IEndpoints['POST /privilegedSignupStatus/completeSetup']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedSignupStatus/completeSetup',
    paramDefs: [],
    params,
    body,
  };
}
