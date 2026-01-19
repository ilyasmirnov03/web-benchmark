import { replicate } from "../../utils/replicateObjects.js";
import { runBenchmark } from "../../utils/runBenchmark.js";

const tenThousand = replicate(10000);
const million = replicate(1000000);

const classicTenThousandTransform = runBenchmark('transform data without iterators', () => {
  tenThousand
    .filter(i => i.isVisible)
    .map(i => i.name)
    .slice(0, 10)
});
const classicMillionTransform = runBenchmark('transform data without iterators', () => {
  million
    .filter(i => i.isVisible)
    .map(i => i.name)
    .slice(0, 10)
});

const iteratorTenThousandTransform = runBenchmark('transform data using iterators', () => {
  tenThousand
    .values()
    .filter(i => i.isVisible)
    .map(i => i.name)
    .take(10)
    .toArray()
});
const iteratorMillionTransform = runBenchmark('transform data using iterators', () => {
  million
    .values()
    .filter(i => i.isVisible)
    .map(i => i.name)
    .take(10)
    .toArray()
});

const results = {
  classic: [classicTenThousandTransform.duration, classicMillionTransform.duration],
  iterator: [iteratorTenThousandTransform.duration, iteratorMillionTransform.duration],
}

console.log(results);
