/**
 * A object that defines all possible layouts.
 * The key is the number of players,
 * the value is the layout to take.
 */
export interface ILayoutAll { readonly [playerCount: number]: ILayout }

/**
 * Layout definition.
 */
export interface ILayout {
  /**
   * The length of this array should be the
   * maximum number of players minus one.
   */
  players: ILayoutPlayer[],
}

export interface ILayoutPlayer {
  /**
   * CSS styles to apply to the player's `anchor` element.
   * Should be used to define layout position.
   */
  styles: object,

  /**
   * Controls which direction to display the player's info.
   */
  infoDirection: 'up' | 'down' | 'left' | 'right'
}
