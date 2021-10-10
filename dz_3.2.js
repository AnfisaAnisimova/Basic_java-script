'use strict';

/* 2. Выведите в консоль значения, указанные рядом с комментариями: */

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число 
            }
        },
        {
            userId: 5, //вывести это число 
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст 
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Вариант для тренировки использования циклов :)) 

for (let property in post) {
    if (property == "author") {
        console.log(post[property]);
    } else if (property == "comments") {
        for (let i = 0; i <= post[property].length - 1; i++) {
            if (i == 0) {
                for (let j in post[property][i]) {
                    if (j == "rating") {
                        for (let k in post[property][i][j]) {
                            if (k == "dislikes") {
                                console.log(post[property][i][j][k]);
                            }
                        }
                    }
                }
            } else if (i == 1) {
                for (let m in post[property][i]) {
                    if (m == "userId" || m == "text") {
                        console.log(post[property][i][m]);
                    }
                }
            }
        }
    }
}