import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/classifyFile': Operation<'/dataClassification/classifyFile', 'post'>;
}

/**
 * `POST /dataClassification/classifyFile`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/classifyFile']['body'],
  params?: IEndpoints['POST /dataClassification/classifyFile']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/classifyFile']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/classifyFile',
    paramDefs: [],
    params,
    body,
  };
}
