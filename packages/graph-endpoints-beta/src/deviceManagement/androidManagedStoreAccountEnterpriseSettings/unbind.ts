import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind']['body'],
  params?: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/unbind',
    paramDefs: [],
    params,
    body,
  };
}
