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
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
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
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
    'patch'
  >;
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
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
 * Get a collection of bookingBusiness objects that has been created for the tenant. This operation returns only the id and displayName of each Microsoft Bookings business in the collection. For performance considerations, it does not return other properties. You can get the other properties of a Bookings business by specifying its id in a GET operation.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/bookingBusinesses']['response']> {
  return {
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
 * Get the properties and relationships of a bookingBusiness object.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
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
 * Update the properties of a bookingBusiness object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
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
 * Create a new Microsoft Bookings business in a tenant. This is the first step in setting up a Bookings business where you must specify the business display name. You can include other information such as business address, web site address, and scheduling policy, or set that information later by updating the bookingBusiness.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses']['body']
): EndpointRequest<IEndpoints['POST /solutions/bookingBusinesses']['response']> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses',
    body,
  };
}

export const customQuestions = {
  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * Get the bookingCustomQuestion resources associated with a bookingBusiness.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
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
   * Create a new bookingCustomQuestion object.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
  > {
    return {
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
   * Read the properties and relationships of a bookingCustomQuestion object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
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
   * Update the properties of a bookingCustomQuestion object.
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
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
   * Delete a bookingCustomQuestion object.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
  > {
    return {
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
   * Get a list of bookingCustomer objects of a business.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
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
   * Create a new bookingCustomer object.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
  > {
    return {
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
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Get the properties and relationships of a bookingCustomer object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingCustomerBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Update the properties of a bookingCustomer object.
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingCustomerBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Delete the specified bookingCustomer object.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingCustomerBase-id'],
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
   * Make the scheduling page of a business available to external customers. Set the isPublished property to true, and the publicUrl property to the URL of the scheduling page.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/publish']['response']
  > {
    return {
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
   * Get a list of bookingService objects in the specified bookingBusiness.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
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
   * Create a new bookingService for the specified bookingBusiness.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
  > {
    return {
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
   * Get the properties and relationships of a bookingService object in the specified bookingBusiness.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
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
  * Update the properties of a bookingService object in the specified bookingBusiness. The following are some examples you can customize for a service:
- Price
- Typical length of an appointment
- Reminders
- Any time buffer to set up before or finish up after the service
- Scheduling policy parameters, such as minimum notice to book or cancel, and whether customers can select specific staff members for an appointment.
  */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
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
   * Delete a bookingService object in the specified bookingBusiness.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
  > {
    return {
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
   * Get a list of bookingStaffMember objects in the specified bookingBusiness.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
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
   * Create a new bookingStaffMember in the specified bookingBusiness.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers']['response']
  > {
    return {
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
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
   *
   * Get the properties and relationships of a bookingStaffMember in the specified bookingBusiness.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['bookingBusiness-id', 'bookingStaffMemberBase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
   *
   * Update the properties of a bookingStaffMember in the specified bookingBusiness.
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['body'],
    params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingStaffMemberBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}`
   *
   * Delete a bookingStaffMember in the specified bookingBusiness.
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers/{bookingStaffMemberBase-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['bookingBusiness-id', 'bookingStaffMemberBase-id'],
      },
      params,
    };
  },
};

export const unpublish = {
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish`
   *
   * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and the publicUrl property to null.
   */
  create: function create(
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
      paramDefs: {
        path: ['bookingBusiness-id'],
      },
      params,
    };
  },
};
