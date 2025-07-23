
---

# 🎬 Axios OMDb Movie Fetch

This is a simple React + Vite project built to learn how to fetch external API data using **Axios**. It uses the [OMDb API](https://www.omdbapi.com/) to search for movies and display them in a responsive card layout.

## 🔗 Live Demo

👉 [View Live App](https://papapureza999.github.io/Axios-OMDb-Movie-Fetch/)

## 🚀 Features

- Fetches movie data using Axios
- Displays movie posters and IMDb links
- Responsive card-based UI
- Clean code structure using components, services, and hooks
- Error handling with `try/catch`

## 🛠 Tech Stack

- React + Vite
- Axios
- CSS
- OMDb API

## 📦 How to Run Locally

1. **Clone the Repository**
```

git clone [https://github.com/PapaPureza999/Axios-OMDb-Movie-Fetch.git](https://github.com/PapaPureza999/Axios-OMDb-Movie-Fetch.git)
cd Axios-OMDb-Movie-Fetch

```

2. **Install Dependencies**
```

npm install

```

3. **Start Development Server**
```

npm run dev

````

Then visit: `http://localhost:5173`

## 🚀 How to Deploy to GitHub Pages

1. Add this to `vite.config.js`:

```js
export default defineConfig({
  base: '/Axios-OMDb-Movie-Fetch/',
  plugins: [react()],
});
````

2. Add these scripts to `package.json`:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy:

   ```
   npm run deploy
   ```

## 🙋‍♂️ Author

**Pranjal Karn**
GitHub: [PapaPureza999](https://github.com/PapaPureza999)
LinkedIn: [Pranjal](https://www.linkedin.com/in/pranjal-b67246207/)

## 📝 License

This project is open-source and free to use for educational purposes.


