import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /riskyUsers/dismiss': Operation<'/riskyUsers/dismiss', 'post'>;
}

/**
 * `POST /riskyUsers/dismiss`
 *
 * Dismiss the risk of one or more riskyUser objects. This action sets the targeted user&#x27;s risk level to none. The maximum count of users to dismiss in one call is 60.
 */
export function create(
  body: IEndpoints['POST /riskyUsers/dismiss']['body'],
  params?: IEndpoints['POST /riskyUsers/dismiss']['parameters']
): EndpointRequest<IEndpoints['POST /riskyUsers/dismiss']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers/dismiss',
    paramDefs: [],
    params,
    body,
  };
}
