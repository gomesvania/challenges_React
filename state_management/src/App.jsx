import CounterRedux from "./components/CounterRedux.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import store from "./store";
import { Provider } from "react-redux";

import postsStore from "./context/posts/store.js";
import PostList from "./components/PostList.jsx";
import MyForm from "./components/Form.jsx";

const App = () => {
  return (
    <div>
      <h1>Counter Redux</h1>
      <Provider store={store}>
        <CounterRedux />
      </Provider>

      <h1>Task Context API</h1>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>

      <h1>Paginação com Redux</h1>
      <Provider store={postsStore}>
        <PostList />
      </Provider>

      <h1>Formulário Final com React</h1>
      <MyForm />
    </div>
  );
};

export default App;
