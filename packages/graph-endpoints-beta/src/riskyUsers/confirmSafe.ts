import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /riskyUsers/confirmSafe': Operation<'/riskyUsers/confirmSafe', 'post'>;
}

/**
 * `POST /riskyUsers/confirmSafe`
 *
 * Confirm one or more riskyUser objects as safe. This action sets the targeted user&#x27;s risk level to none.
 */
export function create(
  body: IEndpoints['POST /riskyUsers/confirmSafe']['body'],
  params?: IEndpoints['POST /riskyUsers/confirmSafe']['parameters']
): EndpointRequest<IEndpoints['POST /riskyUsers/confirmSafe']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers/confirmSafe',
    paramDefs: [],
    params,
    body,
  };
}
