import generator from 'generate-maze';

/**
 * This class is not meant to completely hide its internal data (this.maze),
 * but provides some convenient methods for working with it.
 */
export default class MazeData {
  static randomUpTo(i) {
    return Math.floor(Math.random() * i);
  }

  constructor() {
    this.maze = generator(20, 20);
    this.myLoc = { x: MazeData.randomUpTo(5), y: MazeData.randomUpTo(20) };
  }
}
