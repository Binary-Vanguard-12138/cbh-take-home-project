# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
### Original logic

The original logic of this function is like as follows.

It checks the *partitionKey* field in the *event* parameter.
If the *partitionKey* is not found, we set the *candidate* with the hash value of stringified value of *event*.
If *candidate* is not set in this place, we set the candidate to JSON stringified value.
At last it compares the length of the candidate with 256 and generate hash if it is longer than 256.

### Why is my version more readable.
We use optional chaining (?.) and ?? operators to simplify the code and avoid null/undefined checks.

We remove the intermediate variable candidate and instead assign its value directly in each condition where it's set.

We move the default value for candidate (TRIVIAL_PARTITION_KEY) to the end of the function using a default value for the return statement. This makes the code more readable and avoids unnecessary if/else statements.

Overall, these changes make the code more concise, easier to read, and easier to reason about.