import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /riskyUsers/confirmCompromised': Operation<'/riskyUsers/confirmCompromised', 'post'>;
}

/**
 * `POST /riskyUsers/confirmCompromised`
 *
 * Confirm one or more riskyUser objects as compromised. This action sets the targeted user&#x27;s risk level to high.
 */
export function create(
  body: IEndpoints['POST /riskyUsers/confirmCompromised']['body'],
  params?: IEndpoints['POST /riskyUsers/confirmCompromised']['parameters']
): EndpointRequest<IEndpoints['POST /riskyUsers/confirmCompromised']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers/confirmCompromised',
    paramDefs: [],
    params,
    body,
  };
}
