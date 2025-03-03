import { LegalAgeGroupClassification } from './legal-age-group-classification';

/**
 * Eligibility Information for the app user.
 */
export interface AppEligibilityInfo {
  /**
   * Describes the user’s age group, which can have implications on which product they are able to use.
   */
  ageGroup: LegalAgeGroupClassification | null;

  /**
   * Describes the user’s chat experience based on their eligible licenses & their tenant’s eligible licenses.
   * A user will be in at most one cohort.
   */
  cohort: 'bcais' | 'bcwaf' | 'bcwbf' | null;

  /**
   * Feature Sets
   * If this property is undefined, it indicates that the host is an older version that doesn't support this property.
   */
  featureSet?: FeatureSet;

  /**
   * Indicates that the user is eligible for Microsoft Entra ID Authenticated Copilot experience.
   */
  isCopilotEligible: boolean;

  /**
   * Implementation may change to be based on tenant-home region rather than IP.
   */
  isCopilotEnabledRegion: boolean;

  /**
   * Indicates if the tenant admin has opted the user out of Copilot.
   */
  isOptedOutByAdmin: boolean;
}

/**
 * Represents the feature set available to the user.
 */
export interface FeatureSet {
  /**
   * Server Feature set
   */
  serverFeatures: ReadonlyArray<string>;
  /**
   * UX Feature set
   */
  uxFeatures: ReadonlyArray<string>;
}
