/* Example A — simple sync try/catch */
function parseJson(s: string) {
  try {
    return JSON.parse(s);
  } catch (err: unknown) {
    // narrow before using
    if (typeof err === "string") {
      console.error("String thrown:", err);
    } else if (err instanceof Error) {
      console.error("Parse failed:", err.message);
    } else {
      console.error("Unknown parse error:", err);
    }
    return null;
  }
}
console.log(parseJson("afsar"));

/* Example B — async/await + try/catch */
async function loadUser(userId: string) {
  try {
    const res = await fetch(`/api/users/${userId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err: unknown) {
    // handle or rethrow with context
    if (err instanceof Error) {
      throw new Error(`Failed to load user ${userId}: ${err.message}`, {
        cause: err,
      });
    }
    throw err;
  }
}

/* Example C — try/catch/finally & rethrow */
// function doWork() {
//   try {
//     // code that might throw
//   } catch (err: unknown) {
//     // cleanup, logging, metrics
//     console.error(
//       "Work error:",
//       isErrorWithMessage(err) ? err.message : String(err)
//     );
//     throw err; // rethrow if caller should handle it
//   } finally {
//     // always run (release resources)
//     cleanupResources();
//   }
// }

/* Example D — Promise chain .catch() (alternative) */
// fetch("/api")
//   .then(r => r.json())
//   .catch((err: unknown) => {
//     console.error("Fetch failed:", err);
//   });
