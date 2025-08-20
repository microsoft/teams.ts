export * as classifyExactMatches from './classifyExactMatches';
export * as classifyFile from './classifyFile';
export * as classifyFileJobs from './classifyFileJobs';
export * as classifyTextJobs from './classifyTextJobs';
export * as evaluateDlpPoliciesJobs from './evaluateDlpPoliciesJobs';
export * as evaluateLabelJobs from './evaluateLabelJobs';
export * as exactMatchDataStores from './exactMatchDataStores';
export * as exactMatchUploadAgents from './exactMatchUploadAgents';
export * as jobs from './jobs';
export * as sensitiveTypes from './sensitiveTypes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /dataClassification': Operation<'/dataClassification', 'get'>;
  'PATCH /dataClassification': Operation<'/dataClassification', 'patch'>;
}

/**
 * `GET /dataClassification`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification']['body'],
  params?: IEndpoints['PATCH /dataClassification']['parameters']
): EndpointRequest<IEndpoints['PATCH /dataClassification']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification',
    paramDefs: [],
    params,
    body,
  };
}
