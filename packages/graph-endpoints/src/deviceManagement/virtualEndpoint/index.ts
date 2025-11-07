export * as cloudPCs from './cloudPCs';
export * as onPremisesConnections from './onPremisesConnections';
export * as provisioningPolicies from './provisioningPolicies';
export * as userSettings from './userSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint': Operation<'/deviceManagement/virtualEndpoint', 'get'>;
  'PATCH /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'patch'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/deviceImages': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/deviceImages': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/virtualEndpoint']['response']> {
  return {
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint',
    body,
  };
}

export const auditEvents = {
  /**
   * `GET /deviceManagement/virtualEndpoint/auditEvents`
   *
   * List all the cloudPcAuditEvent objects for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/auditEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/auditEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/auditEvents',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   * Read the properties and relationships of a cloudPcAuditEvent object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcAuditEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        path: ['cloudPcAuditEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcAuditEvent-id'],
      },
      params,
    };
  },
};

export const deviceImages = {
  /**
   * `GET /deviceManagement/virtualEndpoint/deviceImages`
   *
   * List the properties and relationships of cloudPcDeviceImage objects (operating system images) uploaded to Cloud PC.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages']['response']> {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/deviceImages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/deviceImages`
   *
   * Create a new cloudPcDeviceImage object. Upload a custom OS image that you can later provision on Cloud PCs.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/deviceImages']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/deviceImages',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
   *
   * Read the properties and relationships of a specific cloudPcDeviceImage object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcDeviceImage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
      paramDefs: {
        path: ['cloudPcDeviceImage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}`
   *
   * Delete a cloudPcDeviceImage object.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/deviceImages/{cloudPcDeviceImage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcDeviceImage-id'],
      },
      params,
    };
  },
};

export const galleryImages = {
  /**
   * `GET /deviceManagement/virtualEndpoint/galleryImages`
   *
   * List the properties and relationships of cloudPcGalleryImage objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/galleryImages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/galleryImages`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/galleryImages',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   * Read the properties and relationships of a specific cloudPcGalleryImage object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcGalleryImage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        path: ['cloudPcGalleryImage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcGalleryImage-id'],
      },
      params,
    };
  },
};
