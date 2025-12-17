import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations': Operation<
    '/organization/{organization-id}/branding/localizations',
    'get'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'get'
  >;
  'PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    'patch'
  >;
  'POST /organization/{organization-id}/branding/localizations': Operation<
    '/organization/{organization-id}/branding/localizations',
    'post'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
    'delete'
  >;
  'GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'get'
  >;
  'PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'put'
  >;
  'DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark': Operation<
    '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
    'delete'
  >;
}

/**
 * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Delete a localized branding object. To delete the organizationalBrandingLocalization object, all images (Stream types) must first be removed from the object.
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    method: 'delete',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['organization-id', 'organizationalBrandingLocalization-id'],
    },
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations`
 *
 * Retrieve all localization branding objects, including the default branding.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations',
    paramDefs: {
      path: ['organization-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Read the properties and relationships of an organizationalBrandingLocalization object. To retrieve a localization branding object, specify the value of id in the URL.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    method: 'get',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: {
      path: ['organization-id', 'organizationalBrandingLocalization-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}`
 *
 * Update the properties of an organizationalBrandingLocalization object for a specific localization.
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}']['response']
> {
  return {
    method: 'patch',
    path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}',
    paramDefs: {
      path: ['organization-id', 'organizationalBrandingLocalization-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /organization/{organization-id}/branding/localizations`
 *
 * Create a new organizationalBrandingLocalization object. This creates a localized branding and at the same time, the default branding if it doesn&#x27;t exist. The default branding is created only once. It&#x27;s loaded when a localized branding isn&#x27;t configured for the user&#x27;s browser language. To retrieve the default branding, see Get branding.
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/branding/localizations']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/branding/localizations']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/branding/localizations']['response']
> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/branding/localizations',
    paramDefs: {
      path: ['organization-id'],
    },
    params,
    body,
  };
}

export const backgroundImage = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage`
   *
   * Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image reduces bandwidth requirements and make the page load faster.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/backgroundImage',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const bannerLogo = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
   *
   * Retrieve the default organizational branding object, if the Accept-Language header is set to 0 or default. If no default organizational branding object exists, this method returns a 404 Not Found error. If the Accept-Language header is set to an existing locale identified by the value of its id, this method retrieves the branding for the specified locale. This method retrieves only non-Stream properties, for example, usernameHintText and signInPageText. To retrieve Stream types of the default branding, for example, bannerLogo and backgroundImage, use the GET organizationalBrandingLocalization method.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
   *
   * Update the properties of an organizationalBrandingLocalization object for a specific localization.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo`
   *
   * A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/bannerLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const customCSS = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS`
   *
   * CSS styling that appears on the sign-in page. The allowed format is .css format only and not larger than 25 KB.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/customCSS',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const favicon = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon`
   *
   * A custom icon (favicon) to replace a default Microsoft product favicon on a Microsoft Entra tenant.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/favicon',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const headerLogo = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo`
   *
   * A company logo that appears in the header of the sign-in page. The allowed types are PNG or JPEG not larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/headerLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const squareLogo = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo`
   *
   * A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogo',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};

export const squareLogoDark = {
  /**
   * `GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  get: function get(
    params?: IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
  > {
    return {
      method: 'get',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
  /**
   * `PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  set: function set(
    body: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['body'],
    params?: IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
  > {
    return {
      method: 'put',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
      paramDefs: {
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark`
   *
   * A square dark version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG not larger than 240 x 240 pixels and not more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
   */
  del: function del(
    params?: IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark']['response']
  > {
    return {
      method: 'delete',
      path: '/organization/{organization-id}/branding/localizations/{organizationalBrandingLocalization-id}/squareLogoDark',
      paramDefs: {
        header: ['If-Match'],
        path: ['organization-id', 'organizationalBrandingLocalization-id'],
      },
      params,
    };
  },
};
