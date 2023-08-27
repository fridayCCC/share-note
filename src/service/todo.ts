import { TodoItem } from "@/types/data";
import { BehaviorSubject, Observable } from "rxjs";

class TodoServiceController {
  nextId = 3;
  TodoInitData: TodoItem[] = [
    {
      id: 1,
      content: "Learn RX",
      isDone: false,
    },
    {
      id: 2,
      content: "Learn Design",
      isDone: true,
    },
  ];
  private _data$: BehaviorSubject<TodoItem[]> = new BehaviorSubject<TodoItem[]>(
    this.TodoInitData
  );

  readonly todoData$: Observable<TodoItem[]> = this._data$.asObservable();

  addTodo(content: string): void {
    this.TodoInitData = this.TodoInitData.concat({
      content,
      id: this.nextId,
      isDone: false,
    });
    this._data$.next(this.TodoInitData);
    this.nextId++;
  }

  deleteTodo(id: number): void {
    this.TodoInitData = this.TodoInitData.filter((v) => v.id !== id);
    this._data$.next(this.TodoInitData);
  }

  toggleIsDone(id: number, checked: boolean): void {
    this.TodoInitData = this.TodoInitData.map((v) => ({
      ...v,
      isDone: v.id === id ? checked : v.isDone,
    }));
    this._data$.next(this.TodoInitData);
  }

  dispose(): void {
    this._data$.complete();
  }
}

export const TodoService = new TodoServiceController();
