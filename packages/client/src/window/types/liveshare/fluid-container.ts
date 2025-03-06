import { ContainerState } from './container-state';

/**
 * This response specifies the container mapping information for the current Live Share session.
 */
export type FluidContainer = {
  /**
   * State of the containerId mapping.
   */
  containerState: ContainerState;

  /**
   * ID of the container to join for the meeting. Undefined if the container hasn't been
   * created yet.
   */
  containerId: string | undefined;

  /**
   * If true, the local client should create the container and then save the created containers
   * ID to the mapping service.
   */
  shouldCreate: boolean;

  /**
   * If `containerId` is undefined and `shouldCreate` is false, the container isn't ready
   * but another client is creating it.
   */
  retryAfter: number;
};
