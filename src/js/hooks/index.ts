import { elements } from "../constants";

export const setLoading = (isLoading: boolean) => {
    elements.loadingElement.style.display = isLoading ? "flex" : "none";
}

export const setTitle = (title: string) => {
    elements.titleElement.innerText = title;
}

export const setContent = (content: string) => {
    elements.contentElement.innerHTML = content;
}
