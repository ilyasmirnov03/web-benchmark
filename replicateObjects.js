/**
 * Replicate objects with specified length
 * @returns List of replicated randomized objects
 */
export function replicate(length) {
  const blueprint = {
    isVisible: true,
    name: 'test',
    number: 1,
  };

  const replicatedData = [];
  for (let i = 0; i < length; i++) {
    const blueprintCopy = { ...blueprint };
    blueprintCopy.isVisible = Math.random() >= 0.5;
    blueprintCopy.number = Math.floor(Math.random() * 5);
    blueprintCopy.name = blueprint.name.slice(0, Math.round(Math.random() * blueprint.name.length));
    replicatedData.push(blueprintCopy);
  }

  return replicatedData;
}
