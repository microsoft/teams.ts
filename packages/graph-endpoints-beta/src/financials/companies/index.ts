export * as companyInformation from './companyInformation';
export * as customerPaymentJournals from './customerPaymentJournals';
export * as customerPayments from './customerPayments';
export * as customers from './customers';
export * as dimensions from './dimensions';
export * as employees from './employees';
export * as generalLedgerEntries from './generalLedgerEntries';
export * as items from './items';
export * as journalLines from './journalLines';
export * as journals from './journals';
export * as picture from './picture';
export * as purchaseInvoiceLines from './purchaseInvoiceLines';
export * as purchaseInvoices from './purchaseInvoices';
export * as salesCreditMemoLines from './salesCreditMemoLines';
export * as salesCreditMemos from './salesCreditMemos';
export * as salesInvoiceLines from './salesInvoiceLines';
export * as salesInvoices from './salesInvoices';
export * as salesOrderLines from './salesOrderLines';
export * as salesOrders from './salesOrders';
export * as salesQuoteLines from './salesQuoteLines';
export * as salesQuotes from './salesQuotes';
export * as vendors from './vendors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies': Operation<'/financials/companies', 'get'>;
  'GET /financials/companies/{company-id}': Operation<'/financials/companies/{company-id}', 'get'>;
  'GET /financials/companies/{company-id}/accounts': Operation<
    '/financials/companies/{company-id}/accounts',
    'get'
  >;
  'GET /financials/companies/{company-id}/accounts/{account-id}': Operation<
    '/financials/companies/{company-id}/accounts/{account-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsPayable': Operation<
    '/financials/companies/{company-id}/agedAccountsPayable',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}': Operation<
    '/financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsReceivable': Operation<
    '/financials/companies/{company-id}/agedAccountsReceivable',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}': Operation<
    '/financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/countriesRegions': Operation<
    '/financials/companies/{company-id}/countriesRegions',
    'get'
  >;
  'POST /financials/companies/{company-id}/countriesRegions': Operation<
    '/financials/companies/{company-id}/countriesRegions',
    'post'
  >;
  'GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/currencies': Operation<
    '/financials/companies/{company-id}/currencies',
    'get'
  >;
  'POST /financials/companies/{company-id}/currencies': Operation<
    '/financials/companies/{company-id}/currencies',
    'post'
  >;
  'GET /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/dimensionValues': Operation<
    '/financials/companies/{company-id}/dimensionValues',
    'get'
  >;
  'GET /financials/companies/{company-id}/dimensionValues/{dimensionValue-id}': Operation<
    '/financials/companies/{company-id}/dimensionValues/{dimensionValue-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/itemCategories': Operation<
    '/financials/companies/{company-id}/itemCategories',
    'get'
  >;
  'POST /financials/companies/{company-id}/itemCategories': Operation<
    '/financials/companies/{company-id}/itemCategories',
    'post'
  >;
  'GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/paymentMethods': Operation<
    '/financials/companies/{company-id}/paymentMethods',
    'get'
  >;
  'POST /financials/companies/{company-id}/paymentMethods': Operation<
    '/financials/companies/{company-id}/paymentMethods',
    'post'
  >;
  'GET /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}': Operation<
    '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}': Operation<
    '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}': Operation<
    '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/paymentTerms': Operation<
    '/financials/companies/{company-id}/paymentTerms',
    'get'
  >;
  'POST /financials/companies/{company-id}/paymentTerms': Operation<
    '/financials/companies/{company-id}/paymentTerms',
    'post'
  >;
  'GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/shipmentMethods': Operation<
    '/financials/companies/{company-id}/shipmentMethods',
    'get'
  >;
  'POST /financials/companies/{company-id}/shipmentMethods': Operation<
    '/financials/companies/{company-id}/shipmentMethods',
    'post'
  >;
  'GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/taxAreas': Operation<
    '/financials/companies/{company-id}/taxAreas',
    'get'
  >;
  'POST /financials/companies/{company-id}/taxAreas': Operation<
    '/financials/companies/{company-id}/taxAreas',
    'post'
  >;
  'GET /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/taxGroups': Operation<
    '/financials/companies/{company-id}/taxGroups',
    'get'
  >;
  'POST /financials/companies/{company-id}/taxGroups': Operation<
    '/financials/companies/{company-id}/taxGroups',
    'post'
  >;
  'GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/unitsOfMeasure': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure',
    'get'
  >;
  'POST /financials/companies/{company-id}/unitsOfMeasure': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure',
    'post'
  >;
  'GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'delete'
  >;
}

/**
 * `GET /financials/companies`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}',
    paramDefs: {
      path: ['company-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const accounts = {
  /**
   * `GET /financials/companies/{company-id}/accounts`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/accounts']['parameters']
  ): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/accounts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/accounts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/accounts/{account-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/accounts/{account-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/accounts/{account-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/accounts/{account-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'account-id'],
      },
      params,
    };
  },
};

export const agedAccountsPayable = {
  /**
   * `GET /financials/companies/{company-id}/agedAccountsPayable`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/agedAccountsPayable',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'agedAccountsPayable-id'],
      },
      params,
    };
  },
};

export const agedAccountsReceivable = {
  /**
   * `GET /financials/companies/{company-id}/agedAccountsReceivable`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/agedAccountsReceivable',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'agedAccountsReceivable-id'],
      },
      params,
    };
  },
};

export const countriesRegions = {
  /**
   * `GET /financials/companies/{company-id}/countriesRegions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/countriesRegions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/countriesRegions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/countriesRegions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/countriesRegions`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/countriesRegions',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'countryRegion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
      paramDefs: {
        path: ['company-id', 'countryRegion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'countryRegion-id'],
      },
      params,
    };
  },
};

export const currencies = {
  /**
   * `GET /financials/companies/{company-id}/currencies`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/currencies']['parameters']
  ): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/currencies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/currencies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/currencies`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/currencies']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/currencies']['parameters']
  ): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/currencies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/currencies',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/currencies/{currency-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/currencies/{currency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/currencies/{currency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'currency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/currencies/{currency-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/currencies/{currency-id}',
      paramDefs: {
        path: ['company-id', 'currency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/currencies/{currency-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/currencies/{currency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/currencies/{currency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'currency-id'],
      },
      params,
    };
  },
};

export const dimensionValues = {
  /**
   * `GET /financials/companies/{company-id}/dimensionValues`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/dimensionValues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/dimensionValues']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/dimensionValues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/dimensionValues/{dimensionValue-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/dimensionValues/{dimensionValue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/dimensionValues/{dimensionValue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/dimensionValues/{dimensionValue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'dimensionValue-id'],
      },
      params,
    };
  },
};

export const itemCategories = {
  /**
   * `GET /financials/companies/{company-id}/itemCategories`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/itemCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/itemCategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/itemCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/itemCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/itemCategories']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/itemCategories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/itemCategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/itemCategories',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'itemCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
      paramDefs: {
        path: ['company-id', 'itemCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'itemCategory-id'],
      },
      params,
    };
  },
};

export const paymentMethods = {
  /**
   * `GET /financials/companies/{company-id}/paymentMethods`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/paymentMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/paymentMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/paymentMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/paymentMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/paymentMethods']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/paymentMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/paymentMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/paymentMethods',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'paymentMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
      paramDefs: {
        path: ['company-id', 'paymentMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/paymentMethods/{paymentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/paymentMethods/{paymentMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'paymentMethod-id'],
      },
      params,
    };
  },
};

export const paymentTerms = {
  /**
   * `GET /financials/companies/{company-id}/paymentTerms`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/paymentTerms']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/paymentTerms']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/paymentTerms',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/paymentTerms`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/paymentTerms',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'paymentTerm-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
      paramDefs: {
        path: ['company-id', 'paymentTerm-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'paymentTerm-id'],
      },
      params,
    };
  },
};

export const shipmentMethods = {
  /**
   * `GET /financials/companies/{company-id}/shipmentMethods`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/shipmentMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/shipmentMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/shipmentMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/shipmentMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/shipmentMethods',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'shipmentMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
      paramDefs: {
        path: ['company-id', 'shipmentMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'shipmentMethod-id'],
      },
      params,
    };
  },
};

export const taxAreas = {
  /**
   * `GET /financials/companies/{company-id}/taxAreas`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/taxAreas']['parameters']
  ): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/taxAreas']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/taxAreas',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/taxAreas`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/taxAreas']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/taxAreas']['parameters']
  ): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/taxAreas']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/taxAreas',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/taxAreas/{taxArea-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'taxArea-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
      paramDefs: {
        path: ['company-id', 'taxArea-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'taxArea-id'],
      },
      params,
    };
  },
};

export const taxGroups = {
  /**
   * `GET /financials/companies/{company-id}/taxGroups`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/taxGroups']['parameters']
  ): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/taxGroups']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/taxGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/taxGroups`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/taxGroups']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/taxGroups']['parameters']
  ): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/taxGroups']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/taxGroups',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'taxGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
      paramDefs: {
        path: ['company-id', 'taxGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'taxGroup-id'],
      },
      params,
    };
  },
};

export const unitsOfMeasure = {
  /**
   * `GET /financials/companies/{company-id}/unitsOfMeasure`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/unitsOfMeasure',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id'],
      },
      params,
    };
  },
  /**
   * `POST /financials/companies/{company-id}/unitsOfMeasure`
   *
   */
  create: function create(
    body: IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['body'],
    params?: IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/unitsOfMeasure',
      paramDefs: {
        path: ['company-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'unitOfMeasure-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
      paramDefs: {
        path: ['company-id', 'unitOfMeasure-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'unitOfMeasure-id'],
      },
      params,
    };
  },
};
