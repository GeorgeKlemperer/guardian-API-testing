const form = document.querySelector("form");
const content = document.querySelector(".content");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const articleFilter = formData.get("section");
  const articleFilterURLAppendage = articleFilter ? `&order-by=relevance&section=${articleFilter}` : "";
  const specificDate = formData.get("date");

  const fetchArticlesByDateAndSection = async (date, section) => {
    const apiKey = 'bb4717f4-9ef8-4141-a00c-6cf38e5d80e4';
    const url = `https://content.guardianapis.com/search?from-date=${specificDate}&to-date=${specificDate}&api-key=${apiKey}${articleFilterURLAppendage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const headline = data.response.results[0].webTitle;
      const headlineUrl = data.response.results[0].webUrl; // New line: Get the URL of the headline story
      content.innerHTML = `<h1><a href="${headlineUrl}" target="_blank">${headline}</a></h1>`; // Modified line: Attach the URL to the generated headline as a hyperlink

      console.log(data);

      // Process the fetched data here
    } catch (error) {
      console.log('Error:', error);
    }
  };

  fetchArticlesByDateAndSection(specificDate, articleFilter);
});