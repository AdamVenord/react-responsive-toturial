import React from "react"

const Content = ({ styles }) => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "well yeah"
  };

  const post = Array(20).fill(dummyPost);

  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20
  };
}