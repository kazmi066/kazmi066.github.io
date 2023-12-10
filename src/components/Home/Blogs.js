import React from 'react'
// import Title from '../../Elements/Title'

const blogs = [
  { "id": 1, "title": "Implementing auth flow in React-native with Zustand", "url": "https://kazmi066.hashnode.dev/implementing-auth-flow-in-react-native-with-zustand" },
  { "id": 8, "title": "A Clear Understanding of the <h1> Element: Perspectives from SEO and Developers", "url": "https://kazmi066.hashnode.dev/a-clear-understanding-of-the-h1-element-perspectives-from-seo-and-developers" },
  { "id": 2, "title": "Protecting Your JavaScript Code: The Principle of Least Exposure", "url": "https://dev.to/kazmi066/protecting-your-javascript-code-the-principle-of-least-exposure-44c2" },
  { "id": 3, "title": "Choosing the Right CSS Naming Convention for Your Project", "url": "https://dev.to/kazmi066/choosing-the-right-css-naming-convention-for-your-project-3kj6" },
  { "id": 4, "title": "Creating Dynamic form in React", "url": "https://dev.to/kazmi066/creating-dynamic-form-in-react-1n6g" },
  { "id": 5, "title": "Converting JSX to downloadable pdf in react", "url": "https://dev.to/kazmi066/converting-jsx-to-downloadable-pdf-in-react-20bh" },
  { "id": 6, "title": "Create and publish your own npm package with example", "url": "https://dev.to/kazmi066/create-and-publish-your-own-npm-package-with-good-example-104m" },
  { "id": 7, "title": "Starting with react-bootstrap", "url": "https://dev.to/kazmi066/starting-with-react-bootstrap-492d" },
];

export const Blogs = () => {
  return (
    <section className="mt-12">
      <p className="pt-8 text-light">
        I enjoy sharing bits of knowledge with the community. Each day, I
        strive to learn something new and distill that knowledge into
        simple words for everyone to understand.
      </p>
      <div className="sm:columns-2 columns-auto gap-4 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-4 bg-[#1c1919] transition rounded-md border-[0.1px] border-[#565656] hover:border-[#777777]">
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-normal inline-block p-4">
              {blog.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
