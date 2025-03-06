/**
 * specify the Fluid service to use for the
 * current Live Share session.
 */
export type FluidTenant = {
  /**
   * The Fluid Tenant ID Live Share should use.
   */
  tenantId: string;

  /**
   * The Fluid service endpoint Live Share should use.
   */
  serviceEndpoint: string;
};
