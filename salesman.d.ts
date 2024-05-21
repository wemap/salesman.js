// Type definitions for salesman.js 2.0
// Project: https://github.com/lovasoa/salesman.js
// Definitions by: Josh Peaker <https://github.com/JPeaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Solves the following problem:
 *  Given a list of points and the distances between each pair of points,
 *  what is the shortest possible route that visits each point exactly
 *  once and returns to the origin point?
 *
 * @param points The points that the path will have to visit.
 * @param [temp_coeff=0.999] changes the convergence speed of the algorithm: the closer to 1, the slower the algorithm and the better the solutions.
 * @param [callback=] An optional callback to be called after each iteration.
 * @param [distance=euclidean] An optional argument to specify how distances are calculated. The function takes two Point objects as arguments and returns a number for distance. Defaults to simple Euclidean distance calculation.
 * @param [keep_end=false] An optional argument to specify if the last point is fixed. If false then the minimum circuit is calculated, if true the minimum path from first to last node is calculated.
 *
 * @returns An array of indexes in the original array. Indicates in which order the different points are visited.
 *
 * @example
 * var points = [
 *       new salesman.Point(2,3)
 *       //other points
 *     ];
 * var solution = salesman.solve(points);
 * var ordered_points = solution.map(i => points[i]);
 * // ordered_points now contains the points, in the order they ought to be visited.
 */
export function solve(points: Point[], temp_coeff?: number, callback?: (order: number[]) => void, distance?: (p: Point, q: Point) => number, keep_end?: boolean): number[];

export class Point {
    /**
     * Represents a point in two dimensions.
     * @param x abscissa
     * @param y ordinate
     */
    constructor(x: number, y: number);
    x: number;
    y: number;
}
