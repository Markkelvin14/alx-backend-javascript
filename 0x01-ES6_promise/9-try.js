export default function guardrail(mathFunction) {
  const queue = [];
  let mathFuncs;

  try {
    mathFuncs = mathFunction();
  } catch (error) {
    mathFuncs = error.toString();
  }
  queue.push(mathFuncs);
  queue.push('Guardrail was processed');
  return queue;
}
