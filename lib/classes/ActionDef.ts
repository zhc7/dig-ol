/**
 * Cost tuple definition.
 *
 * The string is the name of the resource.
 */
export type Cost = [string, number]

/**
 * Action set definition, it defines the resources' name and actions in the game.
 * Players may be able to submit custom action sets in the future.
 *
 * For example, see the `base` action set. It's the original 'Dig!' rules.
 */
export interface IActionSet {
  /**
   * Unique identifier.
   */
  id: string,

  /**
   * Display name.
   */
  name: string,

  description?: string,

  author?: string,

  version?: string,

  actions: IAction[],

  /**
   * An special action to automatically execute when player is dead.
   * If the execution is successful, the player will respawn.
   */
  respawn: IAction | null,

  /**
   * Names of all the resources available.
   *
   * For resources, names are identifiers.
   * So please make sure all the names are unique.
   */
  resources: string[]
}

export interface IAction {
  /**
   * Name of the action.
   *
   * For actions, names are identifiers.
   * So please make sure all the names are unique.
   */
  name: string,

  /**
   * Type of the action.
   *
   * `res`: To add or subtract resources.
   *
   * `atk`: To attack the *target* (See explainations below).
   *
   * `def`: To defend an attack.
   */
  type: 'res' | 'atk' | 'def',

  /**
   * Costs of the action.
   *
   * Use negative numbers to represent adding resources.
   *
   * If an array is provided, the first item affects the player himself,
   * the rest affects the *target* (See explainations below) selected.
   */
  cost?: Cost | Cost[],

  /**
   * Defines which actions can this action defend.
   *
   * Leave this to `null` if nothing can be defended with this action.
   */
  defends?: string[],

  /**
   * Defines the target(s) of this action.
   *
   * `self`: Only affects the player himself.
   *
   * `select-enemy`: Allow the player to select an anemy as a target.
   *
   * `select-all`: Allow the player to select any player (including himself) as a target.
   *
   * `all-enemy`: Affects all enemies.
   *
   * `all`: Affects all players (including himself).
   */
  target: 'self' | 'select-enemy' | 'select-all' | 'all-enemy' | 'all'
}

/**
 * Action result definition.
 *
 * The server should return this to every player when a round is over.
 */
export interface IActionResult {
  /**
   * Defines whether the game has ended or not.
   */
  gameEnd: boolean,

  /**
   * Defines whether the current player is the winner.
   */
  isWinner: boolean,

  /**
   * Defines whether the current player is dead.
   */
  isDead: boolean,

  /**
   * Defines how many resources does the current player have.
   */
  resources: { [resourceName: string]: number },

  /**
   * Defines the available actions for the current player in the next round.
   */
  availableActions: string[]
}
