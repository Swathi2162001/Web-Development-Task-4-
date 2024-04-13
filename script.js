// Simulating search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const movieTitles = document.querySelectorAll('.movie h3');
    const seriesTitles = document.querySelectorAll('.series h3');
  
    movieTitles.forEach(function(title) {
      const movieTitle = title.innerText.toLowerCase();
      if (movieTitle.includes(searchTerm)) {
        title.closest('.movie').style.display = 'block';
      } else {
        title.closest('.movie').style.display = 'none';
      }
    });
  
    seriesTitles.forEach(function(title) {
      const seriesTitle = title.innerText.toLowerCase();
      if (seriesTitle.includes(searchTerm)) {
        title.closest('.series').style.display = 'block';
      } else {
        title.closest('.series').style.display = 'none';
      }
    });
  });