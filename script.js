// Elements
const gifContainer = document.getElementById('gif-container');
const imageContainer = document.getElementById('image-container');
const eventImage = document.getElementById('event-image');

// Map of specific dates to images (use YYYY-MM-DD format)
const eventImages = {
  '2025-04-07': 'Day 1.jpg', // Monday, April 7, 2025
  '2025-04-08': 'day 2.jpg', // Tuesday, April 8, 2025
  '2025-04-09': 'day 3.jpg', // Wednesday, April 9, 2025
  '2025-04-10': 'day 4.jpg', // Thursday, April 10, 2025
  '2025-04-11': 'day 5.jpg'  // Friday, April 11, 2025
};

// Default images
const defaultBeforeEvent = 'Comming soon message.jpg'; // Before the event starts
const defaultAfterEvent = 'Thank you for joining us.jpg'; // After the event ends

// Show GIF instantly
window.onload = () => {
  gifContainer.classList.add('show');

  // **Change this part to manually set a test date**

  * const currentDate = new Date('2025-04-22'); // Change this line for different dates
  showEventImage(currentDate); */

  // Comment out the fetch call if you're using the manual date above
/*  
  // Fetch South Africa time from WorldTimeAPI
  fetch('http://worldtimeapi.org/api/timezone/Africa/Johannesburg')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch time');
      return response.json();
    })
    .then(data => {
      const currentDate = new Date(data.datetime);
      showEventImage(currentDate);
    })
    .catch(() => {
      // Silent fallback to local time if API fails
      const localDate = new Date();
      showEventImage(localDate);
    });
};

// Function to show the event image based on today's date
function showEventImage(date) {
  // Format date to YYYY-MM-DD
  const formattedDate = date.toISOString().split('T')[0];

  // Event start and end dates
  const eventStartDate = '2025-04-07';
  const eventEndDate = '2025-04-11';

  // Pick the image
  let selectedImage;
  if (formattedDate < eventStartDate) {
    // Before the event starts
    selectedImage = defaultBeforeEvent;
  } else if (formattedDate > eventEndDate) {
    // After the event ends
    selectedImage = defaultAfterEvent;
  } else {
    // During the event
    selectedImage = eventImages[formattedDate] || defaultBeforeEvent;
  }

  // Show the event image after 3 seconds
  setTimeout(() => {
    eventImage.src = selectedImage;

    // Hide GIF and show event image
    gifContainer.style.opacity = '0';
    gifContainer.style.visibility = 'hidden';
    imageContainer.style.opacity = '1';
    imageContainer.style.visibility = 'visible';
  }, 3000); // 3000ms = 3 seconds
}
