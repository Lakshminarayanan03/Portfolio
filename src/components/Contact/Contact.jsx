import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                <a href="mailto:badhrinarayanan1605@gmail.com">badhrinarayanan1605@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/lakshminarayanan03/">linkedin.com/in/lakshminarayanan03/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                <a href="https://github.com/Lakshminarayanan03">github.com/Lakshminarayanan03</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact