export * as appointments from './appointments';
export * as calendarView from './calendarView';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses': Operation<'/solutions/bookingBusinesses', 'get'>;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses': Operation<'/solutions/bookingBusinesses', 'post'>;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'get'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
    'post'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
    'get'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
    'post'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'delete'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
    'post'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/publish',
    'post'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
    'get'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
    'post'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'get'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
    'post'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
    'delete'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 * Delete a bookingBusiness object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['bookingBusiness-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses`
 *
 * A collection of businesses in Microsoft Bookings. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 * A collection of businesses in Microsoft Bookings. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      path: ['bookingBusiness-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: {
      path: ['bookingBusiness-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses']['body']
): EndpointRequest<IEndpoints['POST /solutions/bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses',
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * All custom questions of this business.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   * All custom questions of this business.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingCustomQuestion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingCustomQuestion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
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
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers`
   *
   * All the customers of this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   * All the customers of this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingCustomer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingCustomer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
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
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
   *
   * Get the availability information of staff members of a Microsoft Bookings calendar.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
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
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish`
   *
   * Make the scheduling page of this business available to external customers. Set the isPublished property to true, and publicUrl property to the URL of the scheduling page.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/publish',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
};

export const services = {
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services`
   *
   * All the services offered by this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/services`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   * All the services offered by this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingService-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingService-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
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
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
   *
   * All the staff members that provide services in this business. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   * All the staff members that provide services in this business. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingStaffMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingStaffMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMember-id}',
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
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish`
   *
   * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and publicUrl property to null.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
};
