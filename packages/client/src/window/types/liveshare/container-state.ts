/**
 * State of the current Live Share session's Fluid container.
 * This is used internally by the `LiveShareClient` when joining a Live Share session.
 */
export type ContainerState = 'Added' | 'AlreadyExists' | 'Conflict' | 'NotFound';

/**
 * State of the current Live Share session's Fluid container.
 * This is used internally by the `LiveShareClient` when joining a Live Share session.
 */
export enum ContainerStates {
  /**
   * The call to `LiveShareHost.setContainerId()` successfully created the container mapping
   * for the current Live Share session.
   */
  added = 'Added',

  /**
   * A container mapping for the current Live Share session already exists.
   * This indicates to Live Share that a new container does not need be created.
   */
  alreadyExists = 'AlreadyExists',

  /**
   * The call to `LiveShareHost.setContainerId()` failed to create the container mapping.
   * This happens when another client has already set the container ID for the session.
   */
  conflict = 'Conflict',

  /**
   * A container mapping for the current Live Share session does not yet exist.
   * This indicates to Live Share that a new container should be created.
   */
  notFound = 'NotFound',
}
