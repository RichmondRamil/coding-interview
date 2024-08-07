Jonathan Moralde - Solution

Usually in my projects, I decouple the frontend and the backend which means that I perform the api calls in the frontend to the backend API endpoint. So, when I tackled problem 2, I was a bit confused on how to achieve an API call.

I wasn't able to make 'request' work so I resorted to using axios which I was more familiar with using. However, I was again faced with an error and was not able to fetch the data and make problem 2 work within the time period.

After the interview, I looked up for examples of an axios api call with express in google until I stumble upon this https://stackoverflow.com/questions/72060067/apikey-and-axios
Turns out, I forgot to add the header config and the API key.
