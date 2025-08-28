import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup',
    'post'
  >;
}

/**
 * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/lookup',
    paramDefs: [{ name: 'exactMatchDataStore-id', in: 'path' }],
    params,
    body,
  };
}
