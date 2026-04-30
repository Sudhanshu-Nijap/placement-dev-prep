// GET method
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const options = {
    method: "GET"
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("GET failed");

    const data = await res.json();
    console.log("GET:", data);

  } catch (err) {
    console.log(err.message);
  }
}

fetchData();

// POST method
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Hello",
      body: "New Post",
      userId: 1
    })
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("POST failed");

    const data = await res.json();
    console.log("POST:", data);

  } catch (err) {
    console.log(err.message);
  }
}

fetchData();

// PUT method
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
      userId: 1
    })
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("PUT failed");

    const data = await res.json();
    console.log("PUT:", data);

  } catch (err) {
    console.log(err.message);
  }
}

fetchData();

// PATCH method
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Only Title Updated"
    })
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("PATCH failed");

    const data = await res.json();
    console.log("PATCH:", data);

  } catch (err) {
    console.log(err.message);
  }
}

fetchData();

// DELETE method
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const options = {
    method: "DELETE"
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("DELETE failed");

    console.log("DELETE STATUS:", res.status);

  } catch (err) {
    console.log(err.message);
  }
}

fetchData();