import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload',
    'post'
  >;
}

/**
 * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload`
 *
 * Append additional certificate authority details to a certificateBasedAuthPki resource. Only one operation can run at a time and this operation can take up to 30 minutes to complete. To know whether another upload is in progress, call the Get certificateBasedAuthPki. The status property will have the value running.
 */
export function create(
  body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['body'],
  params?: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload',
    paramDefs: [{ name: 'certificateBasedAuthPki-id', in: 'path' }],
    params,
    body,
  };
}
