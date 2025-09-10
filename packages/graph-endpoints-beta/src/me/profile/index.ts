import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile': Operation<'/me/profile', 'delete'>;
  'GET /me/profile': Operation<'/me/profile', 'get'>;
  'PATCH /me/profile': Operation<'/me/profile', 'patch'>;
  'GET /me/profile/account': Operation<'/me/profile/account', 'get'>;
  'POST /me/profile/account': Operation<'/me/profile/account', 'post'>;
  'GET /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'get'
  >;
  'PATCH /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'patch'
  >;
  'DELETE /me/profile/account/{userAccountInformation-id}': Operation<
    '/me/profile/account/{userAccountInformation-id}',
    'delete'
  >;
  'GET /me/profile/addresses': Operation<'/me/profile/addresses', 'get'>;
  'POST /me/profile/addresses': Operation<'/me/profile/addresses', 'post'>;
  'GET /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'get'
  >;
  'PATCH /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'patch'
  >;
  'DELETE /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'delete'
  >;
  'GET /me/profile/anniversaries': Operation<'/me/profile/anniversaries', 'get'>;
  'POST /me/profile/anniversaries': Operation<'/me/profile/anniversaries', 'post'>;
  'GET /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'get'
  >;
  'PATCH /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'patch'
  >;
  'DELETE /me/profile/anniversaries/{personAnnualEvent-id}': Operation<
    '/me/profile/anniversaries/{personAnnualEvent-id}',
    'delete'
  >;
  'GET /me/profile/awards': Operation<'/me/profile/awards', 'get'>;
  'POST /me/profile/awards': Operation<'/me/profile/awards', 'post'>;
  'GET /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'get'
  >;
  'PATCH /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'patch'
  >;
  'DELETE /me/profile/awards/{personAward-id}': Operation<
    '/me/profile/awards/{personAward-id}',
    'delete'
  >;
  'GET /me/profile/certifications': Operation<'/me/profile/certifications', 'get'>;
  'POST /me/profile/certifications': Operation<'/me/profile/certifications', 'post'>;
  'GET /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'get'
  >;
  'PATCH /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'patch'
  >;
  'DELETE /me/profile/certifications/{personCertification-id}': Operation<
    '/me/profile/certifications/{personCertification-id}',
    'delete'
  >;
  'GET /me/profile/educationalActivities': Operation<'/me/profile/educationalActivities', 'get'>;
  'POST /me/profile/educationalActivities': Operation<'/me/profile/educationalActivities', 'post'>;
  'GET /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'get'
  >;
  'PATCH /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'patch'
  >;
  'DELETE /me/profile/educationalActivities/{educationalActivity-id}': Operation<
    '/me/profile/educationalActivities/{educationalActivity-id}',
    'delete'
  >;
  'GET /me/profile/emails': Operation<'/me/profile/emails', 'get'>;
  'POST /me/profile/emails': Operation<'/me/profile/emails', 'post'>;
  'GET /me/profile/emails/{itemEmail-id}': Operation<'/me/profile/emails/{itemEmail-id}', 'get'>;
  'PATCH /me/profile/emails/{itemEmail-id}': Operation<
    '/me/profile/emails/{itemEmail-id}',
    'patch'
  >;
  'DELETE /me/profile/emails/{itemEmail-id}': Operation<
    '/me/profile/emails/{itemEmail-id}',
    'delete'
  >;
  'GET /me/profile/interests': Operation<'/me/profile/interests', 'get'>;
  'POST /me/profile/interests': Operation<'/me/profile/interests', 'post'>;
  'GET /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'get'
  >;
  'PATCH /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'patch'
  >;
  'DELETE /me/profile/interests/{personInterest-id}': Operation<
    '/me/profile/interests/{personInterest-id}',
    'delete'
  >;
  'GET /me/profile/languages': Operation<'/me/profile/languages', 'get'>;
  'POST /me/profile/languages': Operation<'/me/profile/languages', 'post'>;
  'GET /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'get'
  >;
  'PATCH /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'patch'
  >;
  'DELETE /me/profile/languages/{languageProficiency-id}': Operation<
    '/me/profile/languages/{languageProficiency-id}',
    'delete'
  >;
  'GET /me/profile/names': Operation<'/me/profile/names', 'get'>;
  'POST /me/profile/names': Operation<'/me/profile/names', 'post'>;
  'GET /me/profile/names/{personName-id}': Operation<'/me/profile/names/{personName-id}', 'get'>;
  'PATCH /me/profile/names/{personName-id}': Operation<
    '/me/profile/names/{personName-id}',
    'patch'
  >;
  'DELETE /me/profile/names/{personName-id}': Operation<
    '/me/profile/names/{personName-id}',
    'delete'
  >;
  'GET /me/profile/notes': Operation<'/me/profile/notes', 'get'>;
  'POST /me/profile/notes': Operation<'/me/profile/notes', 'post'>;
  'GET /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'get'
  >;
  'PATCH /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'patch'
  >;
  'DELETE /me/profile/notes/{personAnnotation-id}': Operation<
    '/me/profile/notes/{personAnnotation-id}',
    'delete'
  >;
  'GET /me/profile/patents': Operation<'/me/profile/patents', 'get'>;
  'POST /me/profile/patents': Operation<'/me/profile/patents', 'post'>;
  'GET /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'get'
  >;
  'PATCH /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'patch'
  >;
  'DELETE /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'delete'
  >;
  'GET /me/profile/phones': Operation<'/me/profile/phones', 'get'>;
  'POST /me/profile/phones': Operation<'/me/profile/phones', 'post'>;
  'GET /me/profile/phones/{itemPhone-id}': Operation<'/me/profile/phones/{itemPhone-id}', 'get'>;
  'PATCH /me/profile/phones/{itemPhone-id}': Operation<
    '/me/profile/phones/{itemPhone-id}',
    'patch'
  >;
  'DELETE /me/profile/phones/{itemPhone-id}': Operation<
    '/me/profile/phones/{itemPhone-id}',
    'delete'
  >;
  'GET /me/profile/positions': Operation<'/me/profile/positions', 'get'>;
  'POST /me/profile/positions': Operation<'/me/profile/positions', 'post'>;
  'GET /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'get'
  >;
  'PATCH /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'patch'
  >;
  'DELETE /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'delete'
  >;
  'GET /me/profile/projects': Operation<'/me/profile/projects', 'get'>;
  'POST /me/profile/projects': Operation<'/me/profile/projects', 'post'>;
  'GET /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'get'
  >;
  'PATCH /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'patch'
  >;
  'DELETE /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'delete'
  >;
  'GET /me/profile/publications': Operation<'/me/profile/publications', 'get'>;
  'POST /me/profile/publications': Operation<'/me/profile/publications', 'post'>;
  'GET /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'get'
  >;
  'PATCH /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'patch'
  >;
  'DELETE /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'delete'
  >;
  'GET /me/profile/skills': Operation<'/me/profile/skills', 'get'>;
  'POST /me/profile/skills': Operation<'/me/profile/skills', 'post'>;
  'GET /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'get'
  >;
  'PATCH /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'patch'
  >;
  'DELETE /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'delete'
  >;
  'GET /me/profile/webAccounts': Operation<'/me/profile/webAccounts', 'get'>;
  'POST /me/profile/webAccounts': Operation<'/me/profile/webAccounts', 'post'>;
  'GET /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'get'
  >;
  'PATCH /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'patch'
  >;
  'DELETE /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'delete'
  >;
  'GET /me/profile/websites': Operation<'/me/profile/websites', 'get'>;
  'POST /me/profile/websites': Operation<'/me/profile/websites', 'post'>;
  'GET /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'get'
  >;
  'PATCH /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'patch'
  >;
  'DELETE /me/profile/websites/{personWebsite-id}': Operation<
    '/me/profile/websites/{personWebsite-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/profile`
 *
 * Delete a profile object from a user&#x27;s account.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/profile`
 *
 * Retrieve the properties and relationships of a profile object for a given user. The profile resource exposes various rich properties that are descriptive of the user as relationships, for example, anniversaries and education activities. To get one of these navigation properties, use the corresponding GET method on that property. See the methods exposed by profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/profile`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile']['body']
): EndpointRequest<IEndpoints['PATCH /me/profile']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile',
    body,
  };
}

export const account = {
  /**
   * `GET /me/profile/account`
   *
   * Retrieves properties related to the user&#x27;s accounts from the profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/account']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/account']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/account',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/account`
   *
   * Create a new userAccountInformation object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/account']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/account']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/account',
      body,
    };
  },
  /**
   * `GET /me/profile/account/{userAccountInformation-id}`
   *
   * Retrieve the properties and relationships of an userAccountInformation object in a user&#x27;s profile.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/account/{userAccountInformation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userAccountInformation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/account/{userAccountInformation-id}`
   *
   * Update the properties of an userAccountInformation object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/account/{userAccountInformation-id}',
      paramDefs: {
        path: ['userAccountInformation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/account/{userAccountInformation-id}`
   *
   * Delete an userAccountInformation object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/account/{userAccountInformation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/account/{userAccountInformation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/account/{userAccountInformation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userAccountInformation-id'],
      },
      params,
    };
  },
};

export const addresses = {
  /**
   * `GET /me/profile/addresses`
   *
   * Get the itemAddress resources from the addresses navigation property.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/addresses']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/addresses']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/addresses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/addresses`
   *
   * Create a new itemAddress object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/addresses']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/addresses']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/addresses',
      body,
    };
  },
  /**
   * `GET /me/profile/addresses/{itemAddress-id}`
   *
   * Read the properties and relationships of an itemAddress object.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/addresses/{itemAddress-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/addresses/{itemAddress-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['itemAddress-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/addresses/{itemAddress-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/addresses/{itemAddress-id}',
      paramDefs: {
        path: ['itemAddress-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/addresses/{itemAddress-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/addresses/{itemAddress-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/addresses/{itemAddress-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/addresses/{itemAddress-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['itemAddress-id'],
      },
      params,
    };
  },
};

export const anniversaries = {
  /**
   * `GET /me/profile/anniversaries`
   *
   * Retrieve a list of personAnniversary objects for the given user from their profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/anniversaries']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/anniversaries']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/anniversaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/anniversaries`
   *
   * Use this API to create a new personAnniversary object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/anniversaries']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/anniversaries']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/anniversaries',
      body,
    };
  },
  /**
   * `GET /me/profile/anniversaries/{personAnnualEvent-id}`
   *
   * Retrieve the properties and relationships of a personAnniversary object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personAnnualEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/anniversaries/{personAnnualEvent-id}`
   *
   * Update the properties of a personAnniversary object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        path: ['personAnnualEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/anniversaries/{personAnnualEvent-id}`
   *
   * Delete a personAnniversary object from the user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/anniversaries/{personAnnualEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/anniversaries/{personAnnualEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/anniversaries/{personAnnualEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personAnnualEvent-id'],
      },
      params,
    };
  },
};

export const awards = {
  /**
   * `GET /me/profile/awards`
   *
   * Retrieve a list of personAward objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/awards']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/awards']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/awards',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/awards`
   *
   * Create a new personAward object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/awards']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/awards']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/awards',
      body,
    };
  },
  /**
   * `GET /me/profile/awards/{personAward-id}`
   *
   * Read the properties and relationships of a personAward object from a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/awards/{personAward-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/awards/{personAward-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personAward-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/awards/{personAward-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/awards/{personAward-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/awards/{personAward-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/awards/{personAward-id}',
      paramDefs: {
        path: ['personAward-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/awards/{personAward-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/awards/{personAward-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/awards/{personAward-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/awards/{personAward-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personAward-id'],
      },
      params,
    };
  },
};

export const certifications = {
  /**
   * `GET /me/profile/certifications`
   *
   * Retrieve a list of personCertification objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/certifications']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/certifications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/certifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/certifications`
   *
   * Create a new personCertification object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/certifications']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/certifications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/certifications',
      body,
    };
  },
  /**
   * `GET /me/profile/certifications/{personCertification-id}`
   *
   * Read the properties and relationships of a personCertification object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/certifications/{personCertification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personCertification-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/certifications/{personCertification-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/certifications/{personCertification-id}',
      paramDefs: {
        path: ['personCertification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/certifications/{personCertification-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/certifications/{personCertification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/certifications/{personCertification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/certifications/{personCertification-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personCertification-id'],
      },
      params,
    };
  },
};

export const educationalActivities = {
  /**
   * `GET /me/profile/educationalActivities`
   *
   * Retrieve a list of educationalActivity objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/educationalActivities']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/educationalActivities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/educationalActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/educationalActivities`
   *
   * Create a new educationalActivity in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/educationalActivities']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/educationalActivities']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/educationalActivities',
      body,
    };
  },
  /**
   * `GET /me/profile/educationalActivities/{educationalActivity-id}`
   *
   * Retrieve the properties and relationships of an educationalActivity object from a users profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationalActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/educationalActivities/{educationalActivity-id}`
   *
   * Update the properties of an educationalActivity object within a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        path: ['educationalActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/educationalActivities/{educationalActivity-id}`
   *
   * Delete an educationalActivity object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/educationalActivities/{educationalActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/educationalActivities/{educationalActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/educationalActivities/{educationalActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationalActivity-id'],
      },
      params,
    };
  },
};

export const emails = {
  /**
   * `GET /me/profile/emails`
   *
   * Retrieve a list of itemEmail objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/emails']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/emails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/emails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/emails`
   *
   * Create a new itemEmail object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/emails']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/emails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/emails',
      body,
    };
  },
  /**
   * `GET /me/profile/emails/{itemEmail-id}`
   *
   * Represents detailed information about email addresses associated with the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/emails/{itemEmail-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/emails/{itemEmail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['itemEmail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/emails/{itemEmail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/emails/{itemEmail-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/emails/{itemEmail-id}',
      paramDefs: {
        path: ['itemEmail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/emails/{itemEmail-id}`
   *
   * Delete an itemEmail object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/emails/{itemEmail-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/emails/{itemEmail-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/emails/{itemEmail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['itemEmail-id'],
      },
      params,
    };
  },
};

export const interests = {
  /**
   * `GET /me/profile/interests`
   *
   * Retrieve a list of personInterest objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/interests']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/interests']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/interests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/interests`
   *
   * Create a new personInterest.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/interests']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/interests']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/interests',
      body,
    };
  },
  /**
   * `GET /me/profile/interests/{personInterest-id}`
   *
   * Retrieve the properties and relationships of a personInterest object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/interests/{personInterest-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/interests/{personInterest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personInterest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/interests/{personInterest-id}`
   *
   * Update the properties of a personInterest object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/interests/{personInterest-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/interests/{personInterest-id}',
      paramDefs: {
        path: ['personInterest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/interests/{personInterest-id}`
   *
   * Deletes a personInterest object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/interests/{personInterest-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/interests/{personInterest-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/interests/{personInterest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personInterest-id'],
      },
      params,
    };
  },
};

export const languages = {
  /**
   * `GET /me/profile/languages`
   *
   * Retrieve a list of languageProficiency objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/languages']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/languages']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/languages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/languages`
   *
   * Use this API to create a new languageProficiency object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/languages']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/languages']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/languages',
      body,
    };
  },
  /**
   * `GET /me/profile/languages/{languageProficiency-id}`
   *
   * Retrieve the properties and relationships of a languageProficiency object within a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/languages/{languageProficiency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/languages/{languageProficiency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['languageProficiency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/languages/{languageProficiency-id}`
   *
   * Update the properties of a languageProficiency object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/languages/{languageProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/languages/{languageProficiency-id}',
      paramDefs: {
        path: ['languageProficiency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/languages/{languageProficiency-id}`
   *
   * Delete a languageProficiency object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/languages/{languageProficiency-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/languages/{languageProficiency-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/languages/{languageProficiency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['languageProficiency-id'],
      },
      params,
    };
  },
};

export const names = {
  /**
   * `GET /me/profile/names`
   *
   * Retrieve a list of personName objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/names']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/names']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/names',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/names`
   *
   * Use this API to create a new personName object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/names']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/names']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/names',
      body,
    };
  },
  /**
   * `GET /me/profile/names/{personName-id}`
   *
   * Retrieve the properties and relationships of a personName object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/names/{personName-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/names/{personName-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personName-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/names/{personName-id}`
   *
   * Update the properties of a personName object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/names/{personName-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/names/{personName-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/names/{personName-id}',
      paramDefs: {
        path: ['personName-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/names/{personName-id}`
   *
   * Delete a personName object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/names/{personName-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/names/{personName-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/names/{personName-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personName-id'],
      },
      params,
    };
  },
};

export const notes = {
  /**
   * `GET /me/profile/notes`
   *
   * Retrieve a list of personAnnotation objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/notes']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/notes']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/notes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/notes`
   *
   * Create a new personAnnotation object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/notes']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/notes']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/notes',
      body,
    };
  },
  /**
   * `GET /me/profile/notes/{personAnnotation-id}`
   *
   * Read the properties and relationships of a personAnnotation object from a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/notes/{personAnnotation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/notes/{personAnnotation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personAnnotation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/notes/{personAnnotation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/notes/{personAnnotation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/notes/{personAnnotation-id}',
      paramDefs: {
        path: ['personAnnotation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/notes/{personAnnotation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/notes/{personAnnotation-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/notes/{personAnnotation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/notes/{personAnnotation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personAnnotation-id'],
      },
      params,
    };
  },
};

export const patents = {
  /**
   * `GET /me/profile/patents`
   *
   * Retrieve a list of itemPatent objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/patents']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/patents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/patents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/patents`
   *
   * Create a new itemPatent object within a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/patents']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/patents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/patents',
      body,
    };
  },
  /**
   * `GET /me/profile/patents/{itemPatent-id}`
   *
   * Read the properties and relationships of an itemPatent object.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/patents/{itemPatent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/patents/{itemPatent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['itemPatent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/patents/{itemPatent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/patents/{itemPatent-id}',
      paramDefs: {
        path: ['itemPatent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/patents/{itemPatent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/patents/{itemPatent-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/patents/{itemPatent-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/patents/{itemPatent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['itemPatent-id'],
      },
      params,
    };
  },
};

export const phones = {
  /**
   * `GET /me/profile/phones`
   *
   * Retrieve a list of itemPhone objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/phones']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/phones']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/phones',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/phones`
   *
   * Use this API to create a new itemPhone object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/phones']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/phones']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/phones',
      body,
    };
  },
  /**
   * `GET /me/profile/phones/{itemPhone-id}`
   *
   * Retrieve the properties and relationships of an itemPhone object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/phones/{itemPhone-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/phones/{itemPhone-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['itemPhone-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/phones/{itemPhone-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/phones/{itemPhone-id}',
      paramDefs: {
        path: ['itemPhone-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/phones/{itemPhone-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/phones/{itemPhone-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/phones/{itemPhone-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/phones/{itemPhone-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['itemPhone-id'],
      },
      params,
    };
  },
};

export const positions = {
  /**
   * `GET /me/profile/positions`
   *
   * Retrieve a list of workPosition objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/positions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/positions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/positions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/positions`
   *
   * Use this API to create a new workPosition in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/positions']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/positions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/positions',
      body,
    };
  },
  /**
   * `GET /me/profile/positions/{workPosition-id}`
   *
   * Retrieve the properties and relationships of a workPosition object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/positions/{workPosition-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/positions/{workPosition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workPosition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/positions/{workPosition-id}`
   *
   * Update the properties of a workPosition object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/positions/{workPosition-id}',
      paramDefs: {
        path: ['workPosition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/positions/{workPosition-id}`
   *
   * Delete a specific workPosition object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/positions/{workPosition-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/positions/{workPosition-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/positions/{workPosition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['workPosition-id'],
      },
      params,
    };
  },
};

export const projects = {
  /**
   * `GET /me/profile/projects`
   *
   * Retrieve a list of projectParticipation objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/projects']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/projects']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/projects',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/projects`
   *
   * Use this API to create a new projectParticipation object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/projects']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/projects']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/projects',
      body,
    };
  },
  /**
   * `GET /me/profile/projects/{projectParticipation-id}`
   *
   * Retrieve the properties and relationships of a projectParticipation object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/projects/{projectParticipation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/projects/{projectParticipation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['projectParticipation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/projects/{projectParticipation-id}`
   *
   * Update the properties of a projectParticipation object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/projects/{projectParticipation-id}',
      paramDefs: {
        path: ['projectParticipation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/projects/{projectParticipation-id}`
   *
   * Delete a projectParticipation object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/projects/{projectParticipation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/projects/{projectParticipation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/projects/{projectParticipation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['projectParticipation-id'],
      },
      params,
    };
  },
};

export const publications = {
  /**
   * `GET /me/profile/publications`
   *
   * Retrieve a list of itemPublication objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/publications']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/publications']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/publications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/publications`
   *
   * Create a new itemPublication object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/publications']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/publications']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/publications',
      body,
    };
  },
  /**
   * `GET /me/profile/publications/{itemPublication-id}`
   *
   * Read the properties and relationships of an itemPublication object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/publications/{itemPublication-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/publications/{itemPublication-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['itemPublication-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/publications/{itemPublication-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/publications/{itemPublication-id}',
      paramDefs: {
        path: ['itemPublication-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/publications/{itemPublication-id}`
   *
   * Delete an itemPublication object.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/publications/{itemPublication-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/profile/publications/{itemPublication-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/publications/{itemPublication-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['itemPublication-id'],
      },
      params,
    };
  },
};

export const skills = {
  /**
   * `GET /me/profile/skills`
   *
   * Retrieve a list of skillProficiency objects in a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/skills']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/skills']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/skills',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/skills`
   *
   * Use this API to create a new skillProficiency object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/skills']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/skills']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/skills',
      body,
    };
  },
  /**
   * `GET /me/profile/skills/{skillProficiency-id}`
   *
   * Retrieve the properties and relationships of a skillproficiency object in a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/skills/{skillProficiency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/skills/{skillProficiency-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['skillProficiency-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/skills/{skillProficiency-id}`
   *
   * Update the properties of a skillProficiency object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/skills/{skillProficiency-id}',
      paramDefs: {
        path: ['skillProficiency-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/skills/{skillProficiency-id}`
   *
   * Delete a skillProficiency object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/skills/{skillProficiency-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/skills/{skillProficiency-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/skills/{skillProficiency-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['skillProficiency-id'],
      },
      params,
    };
  },
};

export const webAccounts = {
  /**
   * `GET /me/profile/webAccounts`
   *
   * Retrieve a list of webAccounts objects from the user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/webAccounts']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/webAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/webAccounts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/webAccounts`
   *
   * Create a new webAccount object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/webAccounts']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/webAccounts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/webAccounts',
      body,
    };
  },
  /**
   * `GET /me/profile/webAccounts/{webAccount-id}`
   *
   * Retrieve the properties and relationships of a webAccount object from a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/webAccounts/{webAccount-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['webAccount-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/webAccounts/{webAccount-id}`
   *
   * Update the properties of a webAccount object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        path: ['webAccount-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/webAccounts/{webAccount-id}`
   *
   * Delete a webAccount object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/webAccounts/{webAccount-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/webAccounts/{webAccount-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/webAccounts/{webAccount-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['webAccount-id'],
      },
      params,
    };
  },
};

export const websites = {
  /**
   * `GET /me/profile/websites`
   *
   * Retrieve a list of personWebsite objects from a user&#x27;s profile.
   */
  list: function list(
    params?: IEndpoints['GET /me/profile/websites']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/websites']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/websites',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/profile/websites`
   *
   * Create a new personWebsite object in a user&#x27;s profile.
   */
  create: function create(
    body: IEndpoints['POST /me/profile/websites']['body']
  ): EndpointRequest<IEndpoints['POST /me/profile/websites']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/profile/websites',
      body,
    };
  },
  /**
   * `GET /me/profile/websites/{personWebsite-id}`
   *
   * Retrieve the properties and relationships of a personWebsite object from a user&#x27;s profile.
   */
  get: function get(
    params?: IEndpoints['GET /me/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/profile/websites/{personWebsite-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/profile/websites/{personWebsite-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['personWebsite-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/profile/websites/{personWebsite-id}`
   *
   * Update the properties of personWebsite object in a user&#x27;s profile.
   */
  update: function update(
    body: IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['body'],
    params?: IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/profile/websites/{personWebsite-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/profile/websites/{personWebsite-id}',
      paramDefs: {
        path: ['personWebsite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/profile/websites/{personWebsite-id}`
   *
   * Deletes a personWebsite object from a user&#x27;s profile.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/profile/websites/{personWebsite-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/profile/websites/{personWebsite-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/profile/websites/{personWebsite-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['personWebsite-id'],
      },
      params,
    };
  },
};
