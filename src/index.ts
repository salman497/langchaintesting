import { run } from "./few_shot";

console.log("----------------Executing------------------");
run().catch(error => {
    console.error("Error running the async function:", error);
  });