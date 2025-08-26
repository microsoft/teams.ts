import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/enableLegacyPcManagement': Operation<
    '/deviceManagement/enableLegacyPcManagement',
    'post'
  >;
}

/**
 * `POST /deviceManagement/enableLegacyPcManagement`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/enableLegacyPcManagement']['body'],
  params?: IEndpoints['POST /deviceManagement/enableLegacyPcManagement']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/enableLegacyPcManagement']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/enableLegacyPcManagement',
    paramDefs: [],
    params,
    body,
  };
}
