import React, { FC } from "react";
import { Blog } from "../../src/layout/header/header-parts/menus";
import { Tags } from "../svg/tags";

type BlogItemProps = {
  blog: Blog;
};

export const BlogItem: FC<BlogItemProps> = ({ blog }): JSX.Element => {
  const { id, image, title, date, tags } = blog;

  return (
    <div className="blog-item">
      <header className="blog-item__header">
        <a className="blog-item__link" href="/">
          <img
            className="blog-item__image"
            src={image}
            alt=""
            width="700"
            height="390"
            loading="lazy"
          />
        </a>
        <div className="blog__item-date">{date}</div>
      </header>
      <div className="blog-item__body">
        <div className="blog-item-tags">
          <span>
            <Tags />
            {tags.map((tag, idx) => (
              <a key={idx} href="/">
                {tag}
                {idx < tags.length - 1 && ","}
              </a>
            ))}
          </span>
        </div>
        <h2 className="blog-item__title h4">{blog.title}</h2>
      </div>
    </div>
  );
};
