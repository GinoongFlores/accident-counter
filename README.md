# A Simple Counter

<<<<<<< HEAD
A silly little application for Steve's Redux Toolkit Course.
=======
This is an example application from Steve's React and TypeScript course.

### Explanation in Layman's Terms

1. **`useReducer` Hook**:

   - Think of `useReducer` as a more powerful way to manage state in your component, especially when the state logic is complex or involves multiple actions.
   - It is similar to `useState`, but instead of just giving you a state variable and a function to update it, `useReducer` gives you a state object and a function to dispatch actions.

2. **State Object**:

   - The state object here is `{ count, draftCount }`.
   - `count` and `draftCount` are two pieces of state that we are managing together.
   - `count` represents the current count value.
   - `draftCount` represents a temporary count value that can be updated through user input.

3. **Reducer Function**:

   - The `reducer` function is like a set of instructions that tells React how to update the state based on different actions.
   - When you dispatch an action, the `reducer` function looks at the action type and decides how to update the state.

4. **Initial State**:

   - `initialState` is the starting point for our state. It defines the initial values for `count` and `draftCount`.
   - In this case, `initialState` is `{ count: 0, draftCount: 0 }`.

5. **Dispatch Function**:

   - `dispatch` is a function that you use to send actions to the `reducer`.
   - When you call `dispatch` with an action, the `reducer` function runs and updates the state based on the action type.

### Putting It All Together

- **Initialization**:

  - When the component first renders, `useReducer` initializes the state with `initialState`.
  - The state object `{ count, draftCount }` is set to `{ count: 0, draftCount: 0 }`.

- **Using the State**:

  - You can use `count` and `draftCount` in your component to display values or perform calculations.

- **Updating the State**:

  - To update the state, you call `dispatch` with an action.
  - For example, `dispatch({ type: 'increment' })` will tell the `reducer` to increase the `count` by 1.
>>>>>>> workshop-set-state-solution
