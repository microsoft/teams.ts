import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/tiIndicators/submitTiIndicators': Operation<
    '/security/tiIndicators/submitTiIndicators',
    'post'
  >;
}

/**
 * `POST /security/tiIndicators/submitTiIndicators`
 *
 * Upload multiple threat intelligence (TI) indicators in one request instead of multiple requests.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators/submitTiIndicators']['body'],
  params?: IEndpoints['POST /security/tiIndicators/submitTiIndicators']['parameters']
): EndpointRequest<IEndpoints['POST /security/tiIndicators/submitTiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators/submitTiIndicators',
    paramDefs: [],
    params,
    body,
  };
}
