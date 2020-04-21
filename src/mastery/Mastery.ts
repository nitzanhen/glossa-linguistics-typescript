/**
 * The Mastery class is a simple integer count to keep track of the "mastery" of a certain parameter
 * (definitions, inflections, words, etc., anything Masterable). It contains a simple non-negative score count,
 * as well as a non-negative maxScore against which this score is compared.
 *
 * @see Masterable.
 * @since 3/3/20
 */

class Mastery {
  private _score: number;

  /**
   * Score property. Cannot be larger than the maxScore property.
   */
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    if (value > this.maxScore) {
      throw new RangeError(
        `Attempted to set invalid value ${value} to mastery with max score ${this.maxScore}; Score cannot be greater than the max score.`
      );
    } else if (value < 0) {
      throw new RangeError(
        `Attempted to set invalid value ${value} to mastery; Score cannot be less than 0.`
      );
    } else {
      this._score = value;
    }
  }

  /**
   * Max score property. Cannot be negative.
   */
  public maxScore: number;

  public constructor(score: number = 0, maxScore: number) {
    if (score < 0)
      throw new RangeError('score cannot be negative. Received: ' + score);
    if (score > maxScore)
      throw new RangeError(
        `Score cannot be greater than maxScore. Received ${score} for score and ${maxScore} for maxScore.`
      );

    this._score = score;

    if (maxScore < 0)
      throw new RangeError(
        'maxScore cannot be negative. Received: ' + maxScore
      );

    this.maxScore = maxScore;
  }

  /**
   * Increases the score property by an amount.
   * Could technically be used to decrease it (by passing a negative number); however this is
   * discouraged. If you know you want to decrease the score, use unstep().
   *
   * @param delta the amount to increase by. Defaults to 1.
   */
  public step(delta: number = 1) {
    this.score += delta;
  }

  /**
   * Decreases the score property by an amount; analogous to step().
   * Could technically be used to increase it (by passing a positive number); however this is discouraged.
   * If you know you want to increase the score, use step().
   *
   * @param delta the amount to decrease by. Default to 1
   */
  public unstep(delta: number = 1) {
    this.score -= delta;
  }

  /**
   * For JSON.Stringify purposes.
   */
  public toJSON() {
    return {
      _score: this.score,
      maxScore: this.maxScore,
    };
  }
}

export default Mastery;
