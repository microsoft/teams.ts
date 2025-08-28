import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/vppTokens/syncLicenseCounts': Operation<
    '/deviceAppManagement/vppTokens/syncLicenseCounts',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/vppTokens/syncLicenseCounts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/vppTokens/syncLicenseCounts']['body'],
  params?: IEndpoints['POST /deviceAppManagement/vppTokens/syncLicenseCounts']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/vppTokens/syncLicenseCounts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/vppTokens/syncLicenseCounts',
    paramDefs: [],
    params,
    body,
  };
}
