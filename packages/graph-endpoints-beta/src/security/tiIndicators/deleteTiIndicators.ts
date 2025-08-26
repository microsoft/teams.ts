import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/tiIndicators/deleteTiIndicators': Operation<
    '/security/tiIndicators/deleteTiIndicators',
    'post'
  >;
}

/**
 * `POST /security/tiIndicators/deleteTiIndicators`
 *
 * Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators/deleteTiIndicators']['body'],
  params?: IEndpoints['POST /security/tiIndicators/deleteTiIndicators']['parameters']
): EndpointRequest<IEndpoints['POST /security/tiIndicators/deleteTiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators/deleteTiIndicators',
    paramDefs: [],
    params,
    body,
  };
}
