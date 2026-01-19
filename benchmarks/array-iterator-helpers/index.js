import { replicate } from "../../replicateObjects.js";
import { runBenchmark } from "../../runBenchmark.js";

const hundred = replicate(100);
const tenThousand = replicate(10000);
const million = replicate(1000000);

const classicTransform = runBenchmark('transform data without iterators', () => {
  million
    .filter(i => i.isVisible)
    .map(i => i.name)
    .slice(0, 10)
});

const iteratorTransform = runBenchmark('transform data using iterators', () => {
  million
    .values()
    .filter(i => i.isVisible)
    .map(i => i.name)
    .take(10)
    .toArray()
});

console.log(classicTransform.duration, iteratorTransform.duration);
