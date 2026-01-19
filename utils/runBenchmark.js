/**
 * Run and time function
 * @returns Elapsed time in ms.
 */
export function runBenchmark(name, callback) {
  const start = performance.now();
  callback();
  const measure = performance.measure(name, {
    start,
    end: performance.now(),
  })
  return measure
}
