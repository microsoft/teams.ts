import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses`
 *
 * Revoke licenses associated with a specific appleVolumePurchaseProgramToken
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses',
    paramDefs: [{ name: 'vppToken-id', in: 'path' }],
    params,
    body,
  };
}
