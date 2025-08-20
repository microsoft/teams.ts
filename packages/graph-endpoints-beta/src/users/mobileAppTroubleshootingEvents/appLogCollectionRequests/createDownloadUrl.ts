import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['body'],
  params?: IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}/createDownloadUrl',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
      { name: 'appLogCollectionRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
