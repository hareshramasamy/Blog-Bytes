// Blog class consists of id, title, content, author, creationDate, and image path and forms the template for the instances of all blog objects
class Blog {
    #id
    #title
    #content
    #author
    #creationDate
    #imagePath
    constructor(id, title, content, author, creationDate, imagePath){
        this.#id = id;
        this.#title = title;
        this.#content = content;
        this.#author = author;
        this.#creationDate = creationDate;
        this.#imagePath = imagePath;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get content() {
        return this.#content;
    }

    get author() {
        return this.#author;
    }

    get creationDate() {
        return this.#creationDate;
    }

    get imagePath() {
        return this.#imagePath;
    }
}

// creating an empty list of blogs to add existing and newly created/updated blogs
let blogs = []

const addBlog = (blog, parent) => {

    // Dynamically adding the html tags for displaying the blogs in the webpage.
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    const title = document.createElement("h1");
    const content = document.createElement("p");
    const titleContent = document.createElement("div");
    const titleContentWrapper = document.createElement("div");
    titleContentWrapper.classList.add("title-content-wrapper");
    titleContent.classList.add("title-content");
    const authorAndDate = document.createElement("div");
    authorAndDate.classList.add("author-and-date");
    const author = document.createElement("div");
    author.classList.add("author");
    const creationDate = document.createElement("div");
    creationDate.classList.add("date");
    const dateAndEditWrapper = document.createElement("div");
    dateAndEditWrapper.classList.add("date-and-edit");
    const editIcon = document.createElement("img");
    const image = document.createElement("img");
    const editIconDiv = document.createElement("div");
    editIconDiv.classList.add("edit-icon");
    image.classList.add("user")
    const imageDiv = document.createElement("div");

    editIconDiv.appendChild(editIcon);

    dateAndEditWrapper.appendChild(editIconDiv);
    dateAndEditWrapper.appendChild(creationDate);

    titleContent.appendChild(title);
    titleContent.appendChild(content);

    titleContentWrapper.appendChild(titleContent);

    imageDiv.appendChild(image);

    authorAndDate.appendChild(author);
    authorAndDate.appendChild(dateAndEditWrapper);

    contentDiv.appendChild(authorAndDate);  
    contentDiv.appendChild(titleContentWrapper);

    contentWrapper.appendChild(imageDiv);
    contentWrapper.appendChild(contentDiv);

    contentWrapper.id = blog.id;

    parent.appendChild(contentWrapper);

    editIcon.src = "images/edit-icon.png";
    image.src = blog.imagePath;
    title.textContent = blog.title;
    content.textContent = blog.content;
    author.textContent = blog.author;
    creationDate.textContent = blog.creationDate;

    // event listener for edit button for each blog which calls updateBlog() callback function with the blog id as the parameter once the edit icon is clicked.
    editIconDiv.addEventListener('click', () => updateBlog(blog.id));

    // event listener for making the blog content expand on clicking the content container.
    titleContent.addEventListener('click', () => {
        titleContent.classList.toggle('expanded');
      });
}

const container = document.getElementById('container');

// fetching the blogs from the blogs.json that contains some existing blogs by using XMLHttpRequest, 
// Creation of blog obj for each of the blogs in the json, and calling the addBlog for displaying
const fetchBlogs = () => {
    const blogsURI = '/data/blogs.json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', blogsURI);
    xhr.addEventListener('load', function () {
        if(this.status === 200) {
            const responseText = this.responseText;
            const blogsList = JSON.parse(responseText);
            blogs = blogs.concat(blogsList);
            blogs.forEach((item) => {
                const blog = new Blog(item.id, item.title, item.content, item.author, item.creationDate, item.imagePath);
                addBlog(blog, container);
            }); 
        }
        const x = this;
    });
    xhr.send();
}

//Calling the fetchBlogs function
fetchBlogs();

const creataBlog = document.getElementById("create-blog");

//event listener for opening a new card for creation of a new blog 
creataBlog.addEventListener('click', () => {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const author = document.getElementById("author");

    const createForm = document.getElementById("new-blog-form");
    const updateForm = document.getElementById('update-blog-form');
    createForm.classList.toggle('disabled-form');
    updateForm.classList.add('disabled-form');
    title.value = "";
    content.value = "";
    author.value = "";
});

const submitBlog = document.getElementById("submit-blog");

//event listener with a callback function upon entering the details of a new blog and click of the create blog post button.
submitBlog.addEventListener('click', (evt) => {
    evt.preventDefault();
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const title = document.querySelector("#title");
    const content = document.querySelector("#content");
    const author = document.querySelector("#author");
    const time = new Date().toLocaleString("en-US");
    const imagePath = "images/User.png";
    const blog = new Blog(id, title.value, content.value, author.value, time, imagePath);
    blogs.push(blog);
    addBlog(blog, document.getElementById('container'));
    const createForm = document.getElementById('new-blog-form');
    alert("Created Blog Successfully!");
    createForm.classList.toggle('disabled-form');
});

// Definition of the callback function updateBlog called when edit blog icon is clicked
function updateBlog(id) {
    const currentBlog = blogs.find(blog => blog.id == id);
    const updateForm = document.getElementById("update-blog-form");
    const createForm = document.getElementById("new-blog-form");

    if(currentBlog) {
        document.getElementById("update-id").value = currentBlog.id;
        document.getElementById("update-title").value = currentBlog.title;
        document.getElementById('update-author').value = currentBlog.author;
        document.getElementById('update-content').value = currentBlog.content;
    }
    updateForm.classList.toggle('disabled-form');
    createForm.classList.add('disabled-form');
}

const submitUpdatedBlog = document.getElementById("submit-updated-blog");

//event listener with a callback function upon updating the details of an existing blog and click of the update blog post button.
//update is allowed only for the content and the author fields as the title field is made readonly.
submitUpdatedBlog.addEventListener('click', (evt) => {
    evt.preventDefault();
    const updateForm = document.getElementById("update-blog-form");

    const id = document.querySelector(`#update-id`);
    const updateContent = document.querySelector(`#update-content`);
    const updateAuthor = document.querySelector(`#update-author`);

    const contentWrapper = document.getElementById(id.value);

    const currentContent = contentWrapper.querySelector("p");
    const currentAuthor = contentWrapper.querySelector(".author");

    currentContent.textContent = updateContent.value;
    currentAuthor.textContent = updateAuthor.value;

    alert("Updated Blog Successfully!");

    updateForm.classList.toggle('disabled-form');
});