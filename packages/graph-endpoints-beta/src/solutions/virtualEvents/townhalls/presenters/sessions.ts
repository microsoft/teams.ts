import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions',
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
      { name: 'virtualEventPresenter-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventPresenter-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}
