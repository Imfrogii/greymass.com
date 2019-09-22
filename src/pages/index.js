import React, { Component } from 'react';

import Layout from '../components/layout';
import HomeHeader from '../components/home/header';
import HomeProjects from '../components/home/projects';
import HomeAbout from '../components/home/about';
import FeaturedBlogPosts from '../components/shared/featuredBlogPosts';
import HomeNewsletter from '../components/home/newsletter';

class Index extends Component {
  render() {
    return (
      <Layout>
        { () => (
          <div>
            <HomeHeader />
            <HomeProjects />
            <HomeAbout />
            <FeaturedBlogPosts
              hasPrimaryPost
              link="home:blog_posts_link"
              title="home:blog_posts_title"
            />
            <HomeNewsletter />
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;
