export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/companyInformation': Operation<
    '/financials/companies/{company-id}/companyInformation',
    'get'
  >;
  'GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/companyInformation/{companyInformation-id}': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/companyInformation`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/companyInformation']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/companyInformation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/companyInformation',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'companyInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/companyInformation/{companyInformation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/companyInformation/{companyInformation-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/companyInformation/{companyInformation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/companyInformation/{companyInformation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'companyInformation-id', in: 'path' },
    ],
    params,
    body,
  };
}
