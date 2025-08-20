import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
    body,
  };
}
