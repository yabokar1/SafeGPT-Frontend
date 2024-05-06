

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

#### Alternatively, if you want to run the app using Docker containers:
Ensure Docker is installed on your system. You can check by running `docker -v` and it should return something like:
```
Docker version 20.10.17, build 100c701
```

####      Run the following command to build the Docker container
```
docker build -t safegpt-frontend .  
```

####      Run the following command to run the Docker container
```
docker run -p 3000:3000 safegpt-frontend
```



#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
