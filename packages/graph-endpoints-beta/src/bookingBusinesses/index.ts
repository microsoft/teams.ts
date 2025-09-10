export * as appointments from './appointments';
export * as calendarView from './calendarView';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'delete'
  >;
  'GET /bookingBusinesses': Operation<'/bookingBusinesses', 'get'>;
  'GET /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'patch'
  >;
  'POST /bookingBusinesses': Operation<'/bookingBusinesses', 'post'>;
  'GET /bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'get'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'post'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'patch'
  >;
  'DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers',
    'get'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers',
    'post'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'patch'
  >;
  'DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'delete'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    'post'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/publish': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/publish',
    'post'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services',
    'get'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services',
    'post'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'patch'
  >;
  'DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'get'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'post'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'patch'
  >;
  'DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'delete'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/unpublish': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['bookingBusiness-id'],
    },
    params,
  };
}

/**
 * `GET /bookingBusinesses`
 *
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}`
 *
 * Represents a Microsoft Bookings Business.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      path: ['bookingBusiness-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      path: ['bookingBusiness-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses']['body']
): EndpointRequest<IEndpoints['POST /bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses',
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * All custom questions of this business.
   */
  list: function list(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   * All custom questions of this business.
   */
  get: function get(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingCustomQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
    params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingCustomQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingCustomQuestion-id'],
      },
      params,
    };
  },
};

export const customers = {
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/customers`
   *
   * All the customers of this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/customers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/customers`
   *
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/customers',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   * All the customers of this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingCustomer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['body'],
    params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingCustomer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingCustomer-id'],
      },
      params,
    };
  },
};

export const getStaffAvailability = {
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
   *
   * Get the availability information of staff members of a Microsoft Bookings calendar.
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
};

export const publish = {
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/publish`
   *
   * Make the scheduling page of this business available to external customers. Set the isPublished property to true, and publicUrl property to the URL of the scheduling page.
   */
  create: function create(
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/publish',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
};

export const services = {
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/services`
   *
   * All the services offered by this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/services',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/services`
   *
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/services',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   * All the services offered by this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingService-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
    params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingService-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingService-id'],
      },
      params,
    };
  },
};

export const staffMembers = {
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/staffMembers`
   *
   * All the staff members that provide services in this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/staffMembers`
   *
   */
  create: function create(
    body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   * All the staff members that provide services in this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingStaffMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['body'],
    params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingStaffMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingStaffMember-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /bookingBusinesses/{bookingBusiness-id}/unpublish`
   *
   * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and publicUrl property to null.
   */
  create: function create(
    params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/bookingBusinesses/{bookingBusiness-id}/unpublish',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
};
