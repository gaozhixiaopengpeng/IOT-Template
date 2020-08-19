import { createStore } from "redux";
import reducers from "./reducers";
// import { language } from "./actionCreators";
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(reducers, composeWithDevTools());
// let subscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(language({ language: "enUS" }));
// subscribe();

export default store;
