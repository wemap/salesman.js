<a name="module_salesman"></a>

## salesman
**See**: [demo](https://lovasoa.github.io/salesman.js/)  
**Author**: Ophir LOJKINE
**Author**: Wemap (thibaud@getwemap.com) - some modifications

salesman npm module

Good heuristic for the traveling salesman problem using simulated annealing.  

- [salesman](#salesman)
  - [salesman~Point](#salesmanpoint)
    - [new Point(x, y)](#new-pointx-y)
  - [salesman~solve(points, \[temp\_coeff\], \[callback\], \[callback\]) ⇒ Array.\<number\>](#salesmansolvepoints-temp_coeff-callback-callback--arraynumber)

<a name="module_salesman..Point"></a>

### salesman~Point
**Kind**: inner class of [<code>salesman</code>](#module_salesman)  
<a name="new_module_salesman..Point_new"></a>

#### new Point(x, y)
Represents a point in two dimensions. Used as the input for `solve`.


| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| x     | <code>number</code> | abscissa    |
| y     | <code>number</code> | ordinate    |

<a name="module_salesman..solve"></a>

### salesman~solve(points, [temp_coeff], [callback], [callback]) ⇒ <code>Array.&lt;number&gt;</code>
Solves the following problem:
 Given a list of points and the distances between each pair of points,
 what is the shortest possible route that visits each point exactly
 once and returns to the origin point?

**Kind**: inner method of [<code>salesman</code>](#module_salesman)  
**Returns**: <code>Array.&lt;number&gt;</code> - An array of indexes in the original array. Indicates in which order the different points are visited.  

| Param        | Type                             | Default                | Description                                                                                                                                                                                           |
| ------------ | -------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points       | <code>Array.&lt;Point&gt;</code> |                        | The points that the path will have to visit.                                                                                                                                                          |
| [temp_coeff] | <code>number</code>              | <code>0.999</code>     | changes the convergence speed of the algorithm. Smaller values (0.9) work faster but give poorer solutions, whereas values closer to 1 (0.99999) work slower, but give better solutions.              |
| [callback]   | <code>function</code>            |                        | An optional callback to be called after each iteration.                                                                                                                                               |
| [callback]   | <code>function</code>            | <code>euclidean</code> | An optional argument to specify how distances are calculated. The function takes two Point objects as arguments and returns a number for distance. Defaults to simple Euclidean distance calculation. |

**Example**  
```js
var points = [
      new salesman.Point(2,3)
      //other points
    ];
var solution = salesman.solve(points);
var ordered_points = solution.map(i => points[i]);
// ordered_points now contains the points, in the order they ought to be visited.
```
