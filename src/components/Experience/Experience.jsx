import React from 'react'
import skills from "../../data/skills.json"
import history from '../../data/history.json'
import {getImageUrl} from '../../utils'
import styles from './Experience.module.css'

const Experience = () => {
    console.log("Skills Data:", skills);
  return (
    <section id ="experience" className={styles.container}>
          <div className={styles.header}>
                <h2 className={styles.title}>Skills</h2>
                <h2 className={styles.title2}>Experiences</h2>
            </div>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id) => {
                        return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                        );
                    })
                }
            </div>
           <h2 className={styles.title3}>Experiences</h2>
            <ul className={styles.history}>
           
                {
                    history.map((historyItem,id) =>{
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(historyItem.imageSrc)} />
                                <div className={styles.historyItemdetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience,id) =>{
                                        return (
                                            <li key={id}>{experience}</li>
                                        )
                                    })}</ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    </section>
  )
}

export default Experience