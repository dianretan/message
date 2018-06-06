import {
    postTodoItemURL,
    updateTodoItemURL,
    deleteTodoItemURL,
    getTodoItemsURL,
    finishTodoItemURL
} from './URLConfig';

class TodoManager {

    async postTodo(title,content){
        try {
            const todo = {
                access_token:localStorage.access_token,
                title,
                content
            }

            const res = await fetch(postTodoItemURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(todo)
            });

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async updateTodo(id,title,content){
        try {
            const todo = {
                access_token:localStorage.access_token,
                id,
                title,
                content
            }

            const res = await fetch(updateTodoItemURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(todo)
            });

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async deleteTodo(id){
        try {
            const todo = {
                access_token:localStorage.access_token,
                id,
            }

            const res = await fetch(deleteTodoItemURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(todo)
            });

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async finishTodo(id){
        try {
            const todo = {
                access_token:localStorage.access_token,
                id,
            }

            const res = await fetch(finishTodoItemURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(todo)
            });

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }

    async getTodos(){
        try {
            const todo = {
                access_token:localStorage.access_token,
            }

            const res = await fetch(getTodoItemsURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(todo)
            });

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
}

export default new TodoManager();