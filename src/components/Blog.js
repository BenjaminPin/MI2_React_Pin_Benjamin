import { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Blog() {
    const [article, setArticle] = useState({});

    let articles = [];
    axios.get(
        `http://localhost:3003/articles`
    ).then((response) => {
        setArticle(response.data);
    });
    for (let i = 0; i < article.length; i++) {
    articles.push({
            id: article[i].id,
            author: article[i].author,
            content: article[i].content,
            date: article[i].date
    });

}

    return (
        <div>
            <div className="formContainer">
                <form className="formBlog">
                    <h1>Blog</h1>
                    <input type="text" name="nom" placeholder="Nom"/>
                    <textarea name="message" cols="40" rows="5" placeholder="Message" maxLength={140}></textarea>
                    <div className="inputContainer">
                        <input type="submit" value="Envoyer le formulaire"/>
                    </div>
                </form>
            </div>
            
            <div className="articles">

                {articles.map((article) => (
                    <div className="cardArticle">
                        <div className="cardArticleHeader">
                            <h1>{article.author}</h1>
                            <div className="iconsContainer">
                                <FontAwesomeIcon icon={faEdit} />
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>

                        <p className="contentArticle">{article.content}</p>
                        <p className="contentArticle"><i>Posté le {transformDate(article.date)}</i></p>
                    </div>
                ))}
                </div>
        </div>
    );
}

function transformDate(date) {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let dateFormated = day + "/" + month + "/" + year;
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let seconde = newDate.getSeconds();
    let timeFormated = hour + ":" + minute + ":" + seconde;
    return dateFormated + " à " + timeFormated;
}