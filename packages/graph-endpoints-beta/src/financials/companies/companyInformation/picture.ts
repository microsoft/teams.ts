import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'delete'
  >;
  'GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'get'
  >;
  'PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'put'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'companyInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'companyInformation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
 *
 */
export function set(
  body: IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['body'],
  params?: IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
): EndpointRequest<
  IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'companyInformation-id', in: 'path' },
    ],
    params,
    body,
  };
}
