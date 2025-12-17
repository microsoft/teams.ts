export * as resources from './resources';
export * as submissions from './submissions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments': Operation<
    '/education/classes/{educationClass-id}/assignments',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments': Operation<
    '/education/classes/{educationClass-id}/assignments',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme',
    'get'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish',
    'post'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
    'patch'
  >;
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
    'delete'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Delete an existing assignment. Only teachers within a class can delete assignments.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationClass-id', 'educationAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments`
 *
 * Retrieve a list of educationAssignment objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application executing with application permissions can see all assignment objects for the class. Students can only see assignments that are assigned to them.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments',
    paramDefs: {
      path: ['educationClass-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Get the properties and relationships of an assignment. Only teachers, students, and applications with application permissions can perform this operation. Students can only see assignments assigned to them; teachers and applications with application permissions can see all assignments in a class. You can use the Prefer header in your request to get the inactive status in case the assignment is deactivated; otherwise, the response value for the status property is unknownFutureValue.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}`
 *
 * Update an educationAssignment object.  Only teachers in the class can do this. You can&#x27;t use a PATCH request to change the status of an assignment. Use the publish action to change the assignment status.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationClass-id', 'educationAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments`
 *
 * Create a new assignment. Only teachers in a class can create an assignment. Assignments start in draft status, which means that students can&#x27;t see the assignment until it&#x27;s published.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments',
    paramDefs: {
      path: ['educationClass-id'],
    },
    params,
    body,
  };
}

export const activate = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate`
   *
   * Activate an inactive educationAssignment to signal that the assignment has further action items for teachers or students. This action can only be performed by a teacher on currently inactive assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const categories = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories`
   *
   * List all categories for an assignment. Only teachers, students, and applications with application permissions can perform this operation.
   */
  list: function list(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories`
   *
   * Add one or more existing educationCategory objects to this educationAssignment. Only teachers and students can perform this operation.
   */
  create: function create(
    body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['body'],
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate`
   *
   * Mark an assigned educationAssignment as inactive to signal that the assignment has no further action items for teachers and students. This action can only be performed by a teacher on assigned assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/deactivate',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingCategory = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory`
   *
   * When set, enables users to weight assignments differently when computing a class average grade.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingScheme = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme`
   *
   * When set, enables users to configure custom string grades based on the percentage of total points earned on this assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/gradingScheme',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const publish = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish`
   *
   * Change the status of an educationAssignment from its original draft status to the published status.  You can change the status from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student&#x27;s list. The status of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment. To update the properties of a published assignment, see update an assignment.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/publish',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const rubric = {
  /**
   * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric`
   *
   * Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.
   */
  get: function get(
    params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric`
   *
   * Attach an existing educationRubric object to an educationAssignment. Only teachers can perform this operation.
   */
  update: function update(
    body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['body'],
    params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric`
   *
   * Delete an educationRubric from an educationAssignment. This method doesn&#x27;t delete the rubric itself and can only be performed by teachers.
   */
  del: function del(
    params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpFeedbackResourcesFolder = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
   *
   * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpResourcesFolder = {
  /**
   * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder`
   *
   * Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment&#x27;s folder.
   */
  create: function create(
    params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationClass-id', 'educationAssignment-id'],
      },
      params,
    };
  },
};
