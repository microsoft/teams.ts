export * as agentGroups from './agentGroups';
export * as agents from './agents';
export * as connectorGroups from './connectorGroups';
export * as connectors from './connectors';
export * as publishedResources from './publishedResources';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'delete'
  >;
  'GET /onPremisesPublishingProfiles': Operation<'/onPremisesPublishingProfiles', 'get'>;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    'patch'
  >;
  'POST /onPremisesPublishingProfiles': Operation<'/onPremisesPublishingProfiles', 'post'>;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}',
    'get'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors',
    'get'
  >;
  'POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors',
    'post'
  >;
  'GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
    'get'
  >;
  'PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
    'patch'
  >;
  'DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}': Operation<
    '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
    'delete'
  >;
}

/**
 * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onPremisesPublishingProfile-id'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles`
 *
 */
export function list(
  params?: IEndpoints['GET /onPremisesPublishingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /onPremisesPublishingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['body'],
  params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}',
    paramDefs: {
      path: ['onPremisesPublishingProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /onPremisesPublishingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /onPremisesPublishingProfiles']['body']
): EndpointRequest<IEndpoints['POST /onPremisesPublishingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/onPremisesPublishingProfiles',
    body,
  };
}

export const applicationSegments = {
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments`
   *
   * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
   */
  list: function list(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onPremisesPublishingProfile-id'],
      },
      params,
    };
  },
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}`
   *
   * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
   */
  get: function get(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/applicationSegments/{ipApplicationSegment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onPremisesPublishingProfile-id', 'ipApplicationSegment-id'],
      },
      params,
    };
  },
};

export const sensors = {
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors`
   *
   */
  list: function list(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onPremisesPublishingProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors`
   *
   */
  create: function create(
    body: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors']['body'],
    params?: IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors',
      paramDefs: {
        path: ['onPremisesPublishingProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onPremisesPublishingProfile-id', 'privateAccessSensor-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['body'],
    params?: IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
      paramDefs: {
        path: ['onPremisesPublishingProfile-id', 'privateAccessSensor-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/sensors/{privateAccessSensor-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onPremisesPublishingProfile-id', 'privateAccessSensor-id'],
      },
      params,
    };
  },
};
