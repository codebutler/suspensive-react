import axios from 'axios'

const delay = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

export type Post = { id: number; title: string; body: string; userId: number }
export type Album = { id: number; title: string; userId: number }
export type Todo = { id: number; title: string; completed: boolean; userId: number }

export const posts = {
  getMany: async () => {
    await delay(Math.random() * 2000)
    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then(({ data }) => data)
  },
  getOneBy: async ({ id }: { id: Post['id'] }) => {
    await delay(Math.random() * 3000)
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).then(({ data }) => data)
  },
}

export const albums = {
  getManyBy: async ({ userId }: { userId: number }) => {
    await delay(Math.random() * 3000)
    return axios
      .get<Album[]>(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(({ data }) => data.splice(0, 2))
  },
}

export const todos = {
  getManyBy: async ({ userId }: { userId: number }) => {
    await delay(Math.random() * 3000)
    return axios
      .get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(({ data }) => data.splice(0, 2))
  },
}