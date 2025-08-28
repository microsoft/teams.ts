import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journals/{journal-id}/journalLines/{journalLine-id}/account',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'journal-id', in: 'path' },
      { name: 'journalLine-id', in: 'path' },
    ],
    params,
  };
}
