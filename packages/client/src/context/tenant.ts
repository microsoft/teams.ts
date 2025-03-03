/**
 * Represents Tenant information.
 */
export interface TenantContext {
  /**
   * The Microsoft Entra tenant ID of the current user.
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a optimization hint as to who the user is and never as proof of identity.
   * Specifically, this value should never be used to determine if a user is authorized to access
   * a resource; access tokens should be used for that.
   * See {@link authentication.getAuthToken} and {@link authentication.authenticate} for more information on access tokens.
   */
  id: string;

  /**
   * The type of license for the current user's tenant. Possible values are enterprise, free, edu, and unknown.
   */
  teamsSku?: string;
}
