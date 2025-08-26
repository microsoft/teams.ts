import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identityProtection/riskyUsers/dismiss': Operation<
    '/identityProtection/riskyUsers/dismiss',
    'post'
  >;
}

/**
 * `POST /identityProtection/riskyUsers/dismiss`
 *
 * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user&#x27;s risk level to none.
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers/dismiss']['body'],
  params?: IEndpoints['POST /identityProtection/riskyUsers/dismiss']['parameters']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers/dismiss']['response']> {
  return {
    method: 'post',
    path: '/identityProtection/riskyUsers/dismiss',
    paramDefs: [],
    params,
    body,
  };
}
