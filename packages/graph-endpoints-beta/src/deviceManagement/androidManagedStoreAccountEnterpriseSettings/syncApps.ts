import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps': Operation<
    '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps']['body'],
  params?: IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidManagedStoreAccountEnterpriseSettings/syncApps',
    paramDefs: [],
    params,
    body,
  };
}
