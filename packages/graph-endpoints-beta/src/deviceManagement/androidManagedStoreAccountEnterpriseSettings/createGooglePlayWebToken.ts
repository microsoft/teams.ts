import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken`
 *
 * Generates a web token that is used in an embeddable component.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken']['body'],
  params?: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/createGooglePlayWebToken',
    paramDefs: [],
    params,
    body,
  };
}
