export const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();

    if (response.ok) return data;
    throw data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const data = await response.json();

    if (response.ok) return data;
    throw data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await fetch("http://worldtimeapi.org/api/timezone", {
      method: "GET",
    });
    const data = await response.json();

    if (response.ok) return data;
    throw data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCountryTime = async (country: string) => {
  try {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${country}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    if (response.ok) return data;
    throw data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
