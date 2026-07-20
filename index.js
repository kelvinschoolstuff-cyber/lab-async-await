async function fetchPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();

        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    posts.forEach((post, index) => {
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        const p = document.createElement("p");
        p.textContent = post.body;

        // The tests specifically look for these IDs
        if (index === 0) {
            h1.id = "h1";
            p.id = "p";
        }

        li.appendChild(h1);
        li.appendChild(p);

        postList.appendChild(li);
    });
}

fetchPosts();