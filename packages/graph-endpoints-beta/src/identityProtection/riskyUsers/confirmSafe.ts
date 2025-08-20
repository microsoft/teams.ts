import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identityProtection/riskyUsers/confirmSafe': Operation<
    '/identityProtection/riskyUsers/confirmSafe',
    'post'
  >;
}

/**
 * `POST /identityProtection/riskyUsers/confirmSafe`
 *
 * Confirm one or more riskyUser objects as safe. This action sets the targeted user&#x27;s risk level to none.
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers/confirmSafe']['body'],
  params?: IEndpoints['POST /identityProtection/riskyUsers/confirmSafe']['parameters']
): EndpointRequest<IEndpoints['POST /identityProtection/riskyUsers/confirmSafe']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyUsers/confirmSafe',
    paramDefs: [],
    params,
    body,
  };
}
