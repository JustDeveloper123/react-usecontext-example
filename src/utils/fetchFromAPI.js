const fetchFromAPI = async url => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error. Code: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchFromAPI;
