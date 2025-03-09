import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I am Lakshminarayanan</h1>
            <p className={styles.description}>MERN stack developer skilled in frontend technologies like HTML, CSS, JavaScript, and React.js, followed by backend expertise in Node.js, Express.js, and MongoDB to build scalable web applications.</p>
            <a href='mailto:badhrinarayanan1605@gmail.com' className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='HeroImage' className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero