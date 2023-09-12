import * as dotenv from 'dotenv';
dotenv.config();
import { run } from "./examples/few_shot";
// import { run } from "./examples/custom_llm_agent_chat";


console.log("----------------Executing------------------");
run().catch(error => {
    console.error("Error running the async function:", error);
  });