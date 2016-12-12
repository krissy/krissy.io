import React from 'react'

export default class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <h1>krissy.io</h1>
        <h5>Watch This Space</h5>

        <p>I'm a software engineer, usually hovering around Ruby and the other backend kids during my <a href="http://deliveroo.co.uk" target="_blank">day job</a>.</p>

        <p>This is where I plan to tinker with <em>All The Shiny Frontend Things</em>.</p>

        <p>Why? I'm rusty. It took me hours to render some styled text on a white page. Which is what happens when you endeavour to use modern web toolage, which is basically like embracing the open source community while simultaneously yelling at it from your couch.</p>

        <p>The point is to get comfortable with, demystify and explore the following and more:</p>

        <ul>
          <li>ES6</li>
          <li>Universal apps</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>CSS Pre/post-processors</li>
          <li>React</li>
          <li>Redux</li>
          <li>Making it all Hot Load (because RSI)</li>
          <li>The Web Since I Last Hung Out With it Properly (TL;DR It's changed)</li>
        </ul>

        <p>I may run away back to the stable, sane arms of my backend land. Or maybe I'll love this world again and start wearing tees with JS puns on them to display my newfound love. Let's see.</p>

        <p><strong>My other spaces:</strong> <a href="https://twitter.com/krissygoround">Twitter</a>, <a href="https://medium.com/@krissygoround">Medium</a>, <a href="https://www.womenhackfornonprofits.com">Women Hack for Non-Profits</a> &amp; <a href="https://empowerhack.com">EmpowerHack</a>.
        </p>
      </div>
    )
  }
}
