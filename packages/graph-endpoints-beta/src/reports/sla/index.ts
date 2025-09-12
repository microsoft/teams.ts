import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/sla': Operation<'/reports/sla', 'delete'>;
  'GET /reports/sla': Operation<'/reports/sla', 'get'>;
  'PATCH /reports/sla': Operation<'/reports/sla', 'patch'>;
  'GET /reports/sla/azureADAuthentication': Operation<'/reports/sla/azureADAuthentication', 'get'>;
  'PATCH /reports/sla/azureADAuthentication': Operation<
    '/reports/sla/azureADAuthentication',
    'patch'
  >;
  'DELETE /reports/sla/azureADAuthentication': Operation<
    '/reports/sla/azureADAuthentication',
    'delete'
  >;
}

/**
 * `DELETE /reports/sla`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/sla']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/sla',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/sla`
 *
 * Reports that relate to tenant-level Microsoft Entra Health SLA attainment.
 */
export function get(
  params?: IEndpoints['GET /reports/sla']['parameters']
): EndpointRequest<IEndpoints['GET /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/sla',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/sla`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/sla']['body']
): EndpointRequest<IEndpoints['PATCH /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/sla',
    body,
  };
}

export const azureADAuthentication = {
  /**
   * `GET /reports/sla/azureADAuthentication`
   *
   * Read the properties and relationships of an azureADAuthentication object to find the level of Microsoft Entra authentication availability for your tenant. The Microsoft Entra service Level Agreement (SLA) commits to at least 99.99% authentication availability, as described in Microsoft Entra SLA performance. This object provides you with your tenant&#x27;s actual performance against this commitment.
   */
  get: function get(
    params?: IEndpoints['GET /reports/sla/azureADAuthentication']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/sla/azureADAuthentication']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/sla/azureADAuthentication',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/sla/azureADAuthentication`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/sla/azureADAuthentication']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/sla/azureADAuthentication']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/sla/azureADAuthentication',
      body,
    };
  },
  /**
   * `DELETE /reports/sla/azureADAuthentication`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/sla/azureADAuthentication']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/sla/azureADAuthentication']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/sla/azureADAuthentication',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
