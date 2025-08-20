import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/webParts/{webPart-id}/getPositionOfWebPart',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
    body,
  };
}
