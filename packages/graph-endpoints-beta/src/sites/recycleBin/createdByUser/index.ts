import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/recycleBin/createdByUser': Operation<
    '/sites/{site-id}/recycleBin/createdByUser',
    'get'
  >;
  'GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors': Operation<
    '/sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/recycleBin/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/recycleBin/createdByUser',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/recycleBin/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/recycleBin/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/recycleBin/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
};
