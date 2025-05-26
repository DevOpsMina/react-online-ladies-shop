# CI/CD Pipeline with React App using GitHub Actions with S3 and CloudFront.

# 🛍️ React Online Ladies Shop

A modern React + Vite application deployed to AWS S3 and CloudFront using GitHub Actions.

## 🚀 Setup

```bash
# Clone & install
git clone https://github.com/<your-username>/react-online-ladies-shop.git
cd react-online-ladies-shop
npm install

# Run locally
npm run dev

# Build for production
npm run build



🛠️ Deployment (CI/CD)
Automatic deployment is set up via GitHub Actions on push to the sandeep branch.

Ensure the following secrets are configured in your GitHub repository:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_REGION

AWS_S3_BUCKET

Output from npm run build (in dist/) is deployed to your S3 bucket, and CloudFront cache is invalidated.
