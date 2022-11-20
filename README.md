# NextJs Practice 1 Plan - My Blog

## **Overview**

**Below is detailed estimated plan for NextJS practice 1**

**Build my blog post page**

## **Requirements**

- **User can view post list.**
- **User can see post detail page**
- **User can search for posts**
- **User can filter posts by categories**

## **Target**

- **Apply core knowledges of NextJS (latest version):**
  - **Pre-rendering Strategies: SSG, ISR**
  - **next/image, next/link, next/router, @next/font…**
- **Get familiar with the concept of CMS.**
- **Apply features of nextjs: Api Routing.**
- **Unit Testing**
- **Storybook**

## **Tech Stacks**

- **React ES6**
- **TypeScript**
- **HTML5 / CSS3**
- **Material UI**
- **[Vercel](https://vercel.com/)**
- **[Contentful](https://www.contentful.com/)**
- **Developer tools:**
  - **pnpm**
  - **Eslint**
  - **Prettier**
  - **Husky**
  - **lint staged**
- **Storybook**
- **Jest**
- **react-testing-library (coverage >= 80%)**

## Developer

- **Thuan Dang**

## \***\*Suggestion Design\*\***

[BEAUTYONCODE](https://beautyoncode.com/)

## **Estimation Document**

[**Estimate Document Practice 1**](https://www.notion.so/Estimate-Document-Practice-1-1b9d684148fe4f67950dab23517db62b)

## **Component Document**

[Component **my blog post page**](https://www.notion.so/Component-my-blog-post-page-9ef3e8397a4e4b47af2d03a672ad3c5b)

## **Prerequisites**

- node: v16.14.0
- pnpm: 7.14.0

## **How to install and run app**

| Command                                                     | Action                                             |
| :---------------------------------------------------------- | :------------------------------------------------- |
| `git@gitlab.asoft-python.com:thuan.dang/react-training.git` | Clone project from gitlab                          |
| `git checkout feature/practice-one`                         | Switch to branch feature/practice-one              |
| `cd react-training/my-blog`                                 | Move to `my-blog` folder                           |
| `pnpm install`                                              | Installs dependencies                              |
| `pnpm dev`                                                  | Run dev production at `http://localhost:3000`      |
| `pnpm build`                                                | Run build for production before start production   |
| `pnpm start`                                                | Run start on production at `http://localhost:3000` |
| `pnpm storybook`                                            | Start storybook dev at `http://localhost:6006/`    |
| `pnpm build-storybook`                                      | build storybook                                    |
| `pnpm lint`                                                 | run lint-staged check code before commit           |
| `pnpm prepare`                                              | Install folder .husky                              |
| `pnpm test`                                                 | Testing application                                |
| `pnpm test:coverage`                                        | Testing application and get coverage               |
