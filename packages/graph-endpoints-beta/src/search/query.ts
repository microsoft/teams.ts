import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /search/query': Operation<'/search/query', 'post'>;
}

/**
 * `POST /search/query`
 *
 * Run a specified search query. Search results are provided in the response.
 */
export function create(
  body: IEndpoints['POST /search/query']['body'],
  params?: IEndpoints['POST /search/query']['parameters']
): EndpointRequest<IEndpoints['POST /search/query']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/search/query',
    paramDefs: [],
    params,
    body,
  };
}
