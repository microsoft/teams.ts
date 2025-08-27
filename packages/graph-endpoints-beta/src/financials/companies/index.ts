export * as accounts from './accounts';
export * as agedAccountsPayable from './agedAccountsPayable';
export * as agedAccountsReceivable from './agedAccountsReceivable';
export * as companyInformation from './companyInformation';
export * as countriesRegions from './countriesRegions';
export * as currencies from './currencies';
export * as customerPaymentJournals from './customerPaymentJournals';
export * as customerPayments from './customerPayments';
export * as customers from './customers';
export * as dimensionValues from './dimensionValues';
export * as dimensions from './dimensions';
export * as employees from './employees';
export * as generalLedgerEntries from './generalLedgerEntries';
export * as itemCategories from './itemCategories';
export * as items from './items';
export * as journalLines from './journalLines';
export * as journals from './journals';
export * as paymentMethods from './paymentMethods';
export * as paymentTerms from './paymentTerms';
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
export * as shipmentMethods from './shipmentMethods';
export * as taxAreas from './taxAreas';
export * as taxGroups from './taxGroups';
export * as unitsOfMeasure from './unitsOfMeasure';
export * as vendors from './vendors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies': Operation<'/financials/companies', 'get'>;
  'GET /financials/companies/{company-id}': Operation<'/financials/companies/{company-id}', 'get'>;
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
    ],
    params,
  };
}
