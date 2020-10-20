import "bootstrap/scss/bootstrap.scss";
import "../style/style.scss"

// yarn add @types/bootstrap
import {} from "bootstrap";

import { setContent, setTitle } from "./hooks";
import { GalleryLenta } from "./GalleryLenta";
import { PostsLenta } from "./PostsLenta";
import { TodosLenta } from "./TodosLenta";

function init() {

    window.addEventListener("popstate", (event: any) =>{
        const { hash } = event.target.location;

        switch(hash) {
            case "#gallery":
                GalleryLenta();
                break;

            case "#posts":
                PostsLenta();
                break;

            case "#todos":
                TodosLenta();
                break;

            default:
                setTitle("404 :(");
                setContent("");
                break;
        }
    })
}

init();
