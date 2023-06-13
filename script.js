// Find a way of adding a catch that tells you to pick another date or section if no article.

const form = document.querySelector("form");
const content = document.querySelector(".content");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const articleFilter = formData.get("section");
    const specificDate = formData.get("date");

const fetchArticlesByDateAndSection = async (date, section) => {
    const apiKey = 'bb4717f4-9ef8-4141-a00c-6cf38e5d80e4';
    const url = `https://content.guardianapis.com/search?from-date=${specificDate}&to-date=${specificDate}&api-key=${apiKey}&order-by=relevance&section=${articleFilter}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const headline = data.response.results[0].webTitle
      content.innerHTML = `<h1>${headline}<h1>`;

      console.log(data);
    
      // Process the fetched data here
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  // Specify the date and section you want to fetch articles for

  
  fetchArticlesByDateAndSection(specificDate, articleFilter);
  
  });