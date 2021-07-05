import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreator";

// UI components should subscribe to the store so they get notified when the store changes
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
