import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'pageTemplate-id', 'webPart-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 * The set of web parts in this section.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: {
      path: ['group-id', 'site-id', 'pageTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 * The set of web parts in this section.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'pageTemplate-id', 'webPart-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'pageTemplate-id', 'webPart-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: {
      path: ['group-id', 'site-id', 'pageTemplate-id'],
    },
    params,
    body,
  };
}

export const getPositionOfWebPart = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart`
   *
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}/getPositionOfWebPart',
      paramDefs: {
        path: ['group-id', 'site-id', 'pageTemplate-id', 'webPart-id'],
      },
      params,
    };
  },
};
