import { apiService, PostModel } from "../ApiService/ApiService";
import { setContent, setLoading, setTitle } from "../hooks";

export function PostsLenta() {
    setTitle("Записи");
    setLoading(true);
    
    const postHTML = (post: PostModel) => `
        <div class="card">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
        </div>
    `

    const renderPosts = (posts: PostModel[]) => {
        const galleryHTML = posts.reduce(
            (acc, cur) => acc + postHTML(cur), "");
        setContent(galleryHTML);
    }

    const init = async () => {
        try {
            const { data } = await apiService.getPosts();
            renderPosts(data.slice(0, 100));
        } catch{
            setContent("Ошибка на сервере...");
        } finally{
            setLoading(false);
        }       
    }

    init();
}