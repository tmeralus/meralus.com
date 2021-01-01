import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Tedley Meralus
      </p>
      <h2>Linux Engineer and Software Developer</h2>
      <p>
        Work and Contact information can be found on{' '}
        <a href="https://linkedin.com/in/tmeralus">
          Linkedin
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button href="https://twitter.com/techgameteddy" target="_blank">
          Twitter
          <TwitterOutlined />
        </Button>
        <Button
          href="https://github.com/tmeralus"
          target="_blank"
        >
          Github
          <GithubOutlined />
        </Button>
        <Button type="primary">
          <Link to="https://blog.meralus.com">Read Blog</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
