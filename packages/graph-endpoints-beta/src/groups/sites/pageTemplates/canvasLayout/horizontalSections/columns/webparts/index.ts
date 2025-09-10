import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'group-id',
        'site-id',
        'pageTemplate-id',
        'horizontalSection-id',
        'horizontalSectionColumn-id',
        'webPart-id',
      ],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts`
 *
 * The collection of WebParts in this column.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'pageTemplate-id',
        'horizontalSection-id',
        'horizontalSectionColumn-id',
      ],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 * The collection of WebParts in this column.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'pageTemplate-id',
        'horizontalSection-id',
        'horizontalSectionColumn-id',
        'webPart-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'pageTemplate-id',
        'horizontalSection-id',
        'horizontalSectionColumn-id',
        'webPart-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    paramDefs: {
      path: [
        'group-id',
        'site-id',
        'pageTemplate-id',
        'horizontalSection-id',
        'horizontalSectionColumn-id',
      ],
    },
    params,
    body,
  };
}

export const getPositionOfWebPart = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/getPositionOfWebPart',
      paramDefs: {
        path: [
          'group-id',
          'site-id',
          'pageTemplate-id',
          'horizontalSection-id',
          'horizontalSectionColumn-id',
          'webPart-id',
        ],
      },
      params,
    };
  },
};
