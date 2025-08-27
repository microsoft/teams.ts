import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['body'],
  params?: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
    paramDefs: [
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
      { name: 'appLogCollectionRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
