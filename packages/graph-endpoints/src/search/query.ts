import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /search/query': Operation<'/search/query', 'post'>;
}

/**
 * `POST /search/query`
 *
 * Runs the query specified in the request body. Search results are provided in the response.
 */
export function create(
  body: IEndpoints['POST /search/query']['body'],
  params?: IEndpoints['POST /search/query']['parameters']
): EndpointRequest<IEndpoints['POST /search/query']['response']> {
  return {
    method: 'post',
    path: '/search/query',
    paramDefs: [],
    params,
    body,
  };
}
