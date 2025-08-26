export * as itemCategory from './itemCategory';
export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesOrderLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesOrderLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/item',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesOrderLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
