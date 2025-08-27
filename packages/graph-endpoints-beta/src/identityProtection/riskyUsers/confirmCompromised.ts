import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identityProtection/riskyUsers/confirmCompromised': Operation<
    '/identityProtection/riskyUsers/confirmCompromised',
    'post'
  >;
}

/**
 * `POST /identityProtection/riskyUsers/confirmCompromised`
 *
 * Confirm one or more riskyUser objects as compromised. This action sets the targeted user&#x27;s risk level to high.
 */
export function create(
  body: IEndpoints['POST /identityProtection/riskyUsers/confirmCompromised']['body'],
  params?: IEndpoints['POST /identityProtection/riskyUsers/confirmCompromised']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityProtection/riskyUsers/confirmCompromised']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProtection/riskyUsers/confirmCompromised',
    paramDefs: [],
    params,
    body,
  };
}
