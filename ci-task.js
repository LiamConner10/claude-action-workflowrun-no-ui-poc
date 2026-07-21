const { createHash } = require("node:crypto");

const deploymentCanary = process.env.DEPLOYMENT_CANARY || "";

console.log("ATTACKER_CONTROLLED_BASE_CODE_EXECUTED=true");
console.log(`BASE_DEPLOYMENT_SECRET_PRESENT=${deploymentCanary.length > 0}`);
console.log(
  `BASE_DEPLOYMENT_SECRET_SHA256=${
    deploymentCanary
      ? createHash("sha256").update(deploymentCanary).digest("hex")
      : "ABSENT"
  }`,
);
