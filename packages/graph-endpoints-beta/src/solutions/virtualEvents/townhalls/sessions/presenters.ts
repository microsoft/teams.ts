import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}',
    'get'
  >;
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/presenters/{virtualEventPresenter-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
      { name: 'virtualEventPresenter-id', in: 'path' },
    ],
    params,
  };
}
