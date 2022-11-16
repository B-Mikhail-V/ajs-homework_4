/* eslint default-case: ["error", { "commentPattern": "^skip\\sdefault" }] */
export default function status1(params) {
  let healthStatus = '';
  switch (true) {
    case (params.health > 50):
      healthStatus = 'healthy';
      break;
    case (params.health >= 15):
      healthStatus = 'wounded';
      break;
    case (params.health < 15):
      healthStatus = 'critical';
      break;

      // skip default case
  }
  return healthStatus;
}
