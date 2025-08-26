import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/tiIndicators/updateTiIndicators': Operation<
    '/security/tiIndicators/updateTiIndicators',
    'post'
  >;
}

/**
 * `POST /security/tiIndicators/updateTiIndicators`
 *
 * Update multiple threat intelligence (TI) indicators in one request instead of multiple requests.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators/updateTiIndicators']['body'],
  params?: IEndpoints['POST /security/tiIndicators/updateTiIndicators']['parameters']
): EndpointRequest<IEndpoints['POST /security/tiIndicators/updateTiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators/updateTiIndicators',
    paramDefs: [],
    params,
    body,
  };
}
