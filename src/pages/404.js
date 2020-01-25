import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../css/404.module.css"
import { Link } from "gatsby"

const Error = () => {
  useEffect(() => {
    let container = document.getElementById("404container")
    window.onmousemove = function(e) {
      let x = -e.clientX / 5,
        y = -e.clientY / 5
      container.style.backgroundPositionX = x + "px," + (15 + x) + "px"
      container.style.backgroundPositionY = y + "px," + (15 + y) + "px"
    }
  })

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <div id="404container" className={styles.container}>
        <div className={styles.content}>
          <h1>404</h1>
          <h4>This is Error page</h4>
          <p>Please come to the main entrance :D</p>
          <Link to="/" className={styles.link}>
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default Error
