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
  'GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'get'
  >;
  'PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'put'
  >;
  'DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture': Operation<
    '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
    'delete'
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
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'companyInformation-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'companyInformation-id'],
    },
    params,
    body,
  };
}

export const picture = {
  /**
   * `GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
      paramDefs: {
        path: ['company-id', 'companyInformation-id'],
      },
      params,
    };
  },
  /**
   * `PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
   *
   */
  set: function set(
    body: IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['body'],
    params?: IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
      paramDefs: {
        path: ['company-id', 'companyInformation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/companyInformation/{companyInformation-id}/picture',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'companyInformation-id'],
      },
      params,
    };
  },
};
