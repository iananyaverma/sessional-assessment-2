const postContainer=document.getElementById("blogsContainer");
let blogs=[];
let start=0,
    end=9;

function createBlogCard(title,content){
    const ele=`<div class=card m-3 style="width:18rem">
    <img src="https://miro.medium.com/max/1838/1*jfdwtvU6V6g99q3G7gq7dQ.png"
    class="card-img-top"
    alt="..."
    />
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p card="card-text">
        <${content}
        </p>
    </div>
    </div>
    `;
    return ele;
}
function fetchBlogs(){
    const xhr=new XMLHttpRequest();
    const api=`https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4 && xhr.status==200){
            const res=JSON.parse(xhr.responseText);
            blogs=res;

            console.log(blogs);

            blogsContainer.innerHTML=null;
            for(let i=0;i<9;i++){
                blogsContainer.innerHTML+=
                createBlogCard(
                    blogs[i].title,
                    blogs[i].body
                );
            }
        }
    };
    xhr.open("GET",api);
    xhr.send();
}
fetchBlogs();