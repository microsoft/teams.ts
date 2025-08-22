import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses`
 *
 * Syncs licenses associated with a specific appleVolumePurchaseProgramToken
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses',
    paramDefs: [{ name: 'vppToken-id', in: 'path' }],
    params,
    body,
  };
}
