import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/classifyExactMatches': Operation<
    '/dataClassification/classifyExactMatches',
    'post'
  >;
}

/**
 * `POST /dataClassification/classifyExactMatches`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/classifyExactMatches']['body'],
  params?: IEndpoints['POST /dataClassification/classifyExactMatches']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/classifyExactMatches']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/classifyExactMatches',
    paramDefs: [],
    params,
    body,
  };
}
