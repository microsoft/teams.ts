import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /security/tiIndicators/deleteTiIndicatorsByExternalId': Operation<
    '/security/tiIndicators/deleteTiIndicatorsByExternalId',
    'post'
  >;
}

/**
 * `POST /security/tiIndicators/deleteTiIndicatorsByExternalId`
 *
 * Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests, when the request contains external IDs instead of IDs.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators/deleteTiIndicatorsByExternalId']['body'],
  params?: IEndpoints['POST /security/tiIndicators/deleteTiIndicatorsByExternalId']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/tiIndicators/deleteTiIndicatorsByExternalId']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators/deleteTiIndicatorsByExternalId',
    paramDefs: [],
    params,
    body,
  };
}
