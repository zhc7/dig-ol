export default interface IRoomOptions {

  /**
   * Defines whether the room can be joined without being invited.
   *
   * **Feature currently unavailable.**
   */
  // public: boolean

  /**
   * Defines the password of the room.
   */
  password: string | null,

  /**
   * Defines the maximum number of players allowed.
   *
   * Must be >= 2 and <= 8.
   */
  maxPlayers: number,

  /**
   * Use AIs to fill the empty positions.
   *
   * **Feature currently unavailable.**
   */
  // fillAIs: boolean

  /**
   * ID of the action set to use.
   */
  actionSet: string,

  /**
   * Defines how many resources each player has in the beginning.
   */
  startupResources: { [resourceName: string]: number },

  /**
   * Defines the disabled actions.
   */
  disabledActions: string[]
}
