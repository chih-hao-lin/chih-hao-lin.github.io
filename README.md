# research-website-template

This is a React + Next.js template meant for research websites. See a [demo of the template here](https://tovacinni.github.io/research-website-template/). My own [personal website](https://tovacinni.github.io) is also built with the same template.

In practice it could probably be used by anyone.

It is meant to be customizeable, all through modifying the `src/data` - which have arrays of objects that are used to generate the website.

For example, `src/data/publication.ts` contains an array like:

```typescript
export const publicationData: Publication[] = [
  {
    year: "2023",
    conference: "International Conference on Machine Learning (ICML)",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
```

To update your website, you can simply add objects to the array.

The schemas are defined in the same files, and many fields are optional for flexibility:

```typescript
export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}
```

Any field with a `?` at the end is optional. Filling them in will create the UI components corresponding to them automatically.

You can also change the order of the sections in `src/data/section-order.ts`, and if you want full customization you can just edit the React components in `src/components`.

This project was birthed from annoyance over HTML + CSS templates- such as the very popular [Jon Barron template](https://github.com/jonbarron/website). The Jon Barron template is amazing because it is simple & complete which is why it's so popular- but over time, maintenance becomes difficult from the amount of duplicate code it creates (the Jon Barron index is now over 4000 lines of code). This is meant to be a much more minimal (to maintain) alternative (and was a good way to spend a few hours to build over holiday weekend).

## Prerequisites

First, install Node.js and npm through the [Node.js official website](https://nodejs.org/).

Verify installation by running:

```bash
node --version
npm --version
```

## Installation

1. Fork the repository

2. Clone the repository

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

3. Install dependencies

   Inside the repository, run:

   ```bash
   npm install
   ```

## Running the Application

1. To start the development server, run (in the repository directory):

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying onto GitHub Pages

### Prerequisites

1. Ensure your repository is named `[your-github-username].github.io` (e.g., `chih-hao-lin.github.io`)
2. Make sure you have pushed all your code to the `main` branch

### Setup Steps

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - Save the settings

2. **Push the workflow file:**
   - The GitHub Actions workflow file (`.github/workflows/deploy.yml`) is already included in this repository
   - If you haven't committed it yet, commit and push it:
     ```bash
     git add .github/workflows/deploy.yml
     git commit -m "Add GitHub Pages deployment workflow"
     git push origin main
     ```

3. **Monitor the deployment:**
   - Go to the `Actions` tab in your GitHub repository
   - You should see a workflow run called "Deploy to GitHub Pages"
   - Wait for it to complete (usually takes 2-3 minutes)
   - Once it's successful, your site will be live!

4. **Access your site:**
   - Your site will be available at `https://[your-github-username].github.io/`
   - For example: `https://chih-hao-lin.github.io/`

### Automatic Deployment

After the initial setup, every time you push changes to the `main` branch, GitHub Actions will automatically:
- Build your Next.js application
- Deploy it to GitHub Pages
- Your site will update within a few minutes

### Troubleshooting

- If the deployment fails, check the `Actions` tab for error messages
- Make sure `next.config.ts` has `output: "export"` configured (already done)
- Ensure all dependencies are properly installed and the build completes locally with `npm run build`

## Deploying to your own domain

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

1. Create a [Vercel account](https://vercel.com/signup) if you haven't already
2. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
3. Import your repository on Vercel
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

## Contributing

Feel free to drop a pull request whenever!
