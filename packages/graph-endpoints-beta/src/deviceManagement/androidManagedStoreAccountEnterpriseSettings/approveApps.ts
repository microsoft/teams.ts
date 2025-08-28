import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps']['body'],
  params?: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/approveApps',
    paramDefs: [],
    params,
    body,
  };
}
