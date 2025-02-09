import React from "react";
// import Title from '../../Elements/Title'
import { blogs } from "../../data/blogs";

export const Blogs = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-light">I try to write here and there a little bit.</p>
      <div className="sm:columns-2 columns-auto gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-4 bg-[#1c1919] transition rounded-md border-[0.1px] border-[#565656] hover:border-[#777777]"
          >
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-normal inline-block p-4"
            >
              {blog.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
