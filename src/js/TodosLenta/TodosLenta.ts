import { setContent, setLoading, setTitle } from "../hooks";
import { apiService, TodoModel } from "../ApiService/ApiService";

export function TodosLenta () {
    setTitle("Задачи");
    setLoading(true);

    const todoHTML = (todo: TodoModel) => `
    <div>
        ${todo.title}
    </div>
    `

    const renderTodos = (todos: TodoModel[]) => {
        const todoListHTML = todos.reduce(
            (acc, cur) => 
            acc + todoHTML(cur), "");
        setContent(todoListHTML);
    }

    const init = async () => {
        try {
            const { data } = await apiService.getTodos();
            renderTodos(data.slice(0, 100));
        } catch{
            setContent("Ошибка на сервере...");
        } finally{
            setLoading(false);
        }       
    }

    init();
}
