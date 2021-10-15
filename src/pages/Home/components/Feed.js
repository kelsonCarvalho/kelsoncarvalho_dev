import React from "react";
import { makeStyles } from "@material-ui/styles";
import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) =>({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Kelson Carvalho',
            username: 'kelsoncarvalho',
            avatar: 'images/avatars/avatar_1.jpg',
        },
        title: "Criando um App do zero ultilizando React.js",
        date: "April 7, 2020",
        description: "Fala pessaol! Qual o framework favorito de voces?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "images/posts/post1.png",
    },
    {
        id: 2,
        author: {
            id: 2,
            name: 'Kelson Carvalho',
            username: 'kelsoncarvalho',
            avatar: '/images/avatars/avatar_1.jpg',
        },
        title: "Comparativo entre React.js e Vue.js - Perfirmace",
        date: "April 7, 2020",
        description: "Quero criar um bootcamp gratuito para passar um pouco da minha experiencia para voces quem topa",
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "images/posts/post2.png",
    },
    {
        id: 3,
        author: {
            id: 3,
            name: 'Kelson Carvalho',
            username: 'kelsoncarvalho',
            avatar: '/images/avatars/avatar_1.jpg',
        },
        title: "Comparativo entre React.js e Vue.js - Perfirmace",
        date: "April 7, 2020",
        description: "Quero criar um bootcamp gratuito para passar um pouco da minha experiencia para voces quem topa",
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "images/posts/post2.png",
    },
];

function Feed() {
    const Classes = useStyles();
    return (
        <div className={Classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Feed;