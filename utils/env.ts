enum ENVS {Node, Browser};
let ENV: ENVS | undefined;

if (typeof process === 'object') {
  ENV = ENVS.Node;
} else if (window) {
  ENV = ENVS.Browser;
}

if (ENV === undefined) {
  throw new Error("Unknown environment.");
}

export default ENV;
export {ENVS};