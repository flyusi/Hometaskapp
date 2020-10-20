import { apiService, PhotoModel } from "../ApiService/ApiService";
import { setContent, setLoading, setTitle } from "../hooks";

export function GalleryLenta() {
    setTitle("Фото");
    setLoading(true);
    
    const photoHTML = (photo: PhotoModel) => `
    <div class="col-sm-4">
        <div class="card">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <a href="${photo.url}" class="btn btn-light">Посмотреть</a>
            </div>
        </div>
    </div>
    `
    // instead of for-cycle we use reduce function
    const renderPhotos = (photos: PhotoModel[]) => {
        const galleryHTML = `<div class="row">` + 
        photos.reduce((acc, cur) => acc + photoHTML(cur), "") +
        `</div>`;
        setContent(galleryHTML);
    }

    // async function makes execute code in right consequence,
    // first we wait response from some service, (due to "await")
    // then only we execute further code in this function
    const init = async () => {
        try {
            // if it was fetch, not axios, we would need to get json from here
            // const response = await apiService.getPhotos();
            // const photos = await response.json();
            const { data } = await apiService.getPhotos();
            renderPhotos(data.slice(0, 100));
        } catch{
            setContent("Ошибка на сервере...");
        } finally{
            setLoading(false);
        }       
    }

    init();
    
    // here's how promises work, we use then-catch-finally
    // apiService.getPhotos()
    //     .then((response) =>{
    //         console.log(response);
    //         const { data } = response;
    //         // not to show all photos, we take 100 ones
    //         renderPhotos(data.slice(0, 100));
    //     })
    //     .catch ((error) =>{
    //         console.log(error.response.status);
    //         setContent("ошибка на сервере...");
    //     })
    //     .finally(() =>{
    //         setLoading(false);
    //     })
}
