import React from 'react'
import { getImageUrl} from '../../utils'
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id ="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src= {getImageUrl('about/aboutImage.jpg')} alt='about-Image' className={styles.aboutImg}></img>
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt="cursorIcon"/>
                <div className={styles.aboutItemText}>
                    <h3>Who I Am</h3>
                    <p>Passionate MERN stack developer focused on building dynamic, user-friendly web applications. Always eager to learn and explore new technologies.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl('about/serverIcon.png')} alt="cursorIcon"/>
                <div className={styles.aboutItemText}>
                    <h3>What I Do</h3>
                    <p>Design and develop full-stack web applications with a strong focus on performance and usability. Ensure seamless integration between frontend and backend for a smooth user experience.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt="cursorIcon"/>
                <div className={styles.aboutItemText}>
                    <h3>My Mission</h3>
                    <p>Dedicated to developing efficient, high-performance applications that enhance user experience. Commited to solve real-world problems through clean and innovative code.</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About