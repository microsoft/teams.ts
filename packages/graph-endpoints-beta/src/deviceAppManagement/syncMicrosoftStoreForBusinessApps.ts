import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps': Operation<
    '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps`
 *
 * Syncs Intune account with Microsoft Store For Business
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    paramDefs: [],
    params,
    body,
  };
}
