'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './AboutSkills.css'

function AboutSkills() {
  return (
    <section className='Skills'>
      <div className="SkillsContainer">
        <motion.div initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut'}} viewport={{ once: true, amount: 0.2 }} className="skillsHeading">
          <h2>Skills Arsanel</h2>
          <p>A comprehensive toolkit for building modern, scalable applications</p>
        </motion.div>
        <motion.div initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut'}} viewport={{ once: true, amount: 0.2 }} className="SkillsBox">
          <div className="SkillsSet">
            <h3>Programming Languages </h3>
            <div className="SkillsRow">
              <div className="skill">
                <div className="skillImage">
                  <img src="./js.png" alt="Js" />
                </div>
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./typescript.png" alt="typescript" />
                </div>
                <p>TypeScript</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./java.png" alt="java" />
                </div>
                <p>Java</p>
              </div>
            </div>
          </div>
          <div className="SkillsSet">
            <h3>Libraries & Frameworks</h3>
            <div className="SkillsRow">
              <div className="skill">
                <div className="skillImage">
                  <img src="./React.png" alt="react" />
                </div>
                <p>React</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Next.png" alt="next" />
                </div>
                <p>Next</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Express.png" alt="java" />
                </div>
                <p>Express.js</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Tailwind.png" alt="java" />
                </div>
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="SkillsSet">
            <h3>Tools & Technologies</h3>
            <div className="SkillsRow">
              <div className="skill">
                <div className="skillImage">
                  <img src="./PostgresSQL.png" alt="PostgresSQL" />
                </div>
                <p>PostgresSQL</p>
              </div>
              <div className="skill Mongo">
                <div className="skillImage">
                  <img src="./MongoDB.png" alt="MongoDB" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <div className="skillImage Fire">
                  <img src="./Firebase.png" alt="Firebase" />
                </div>
                <p>Firebase</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Supabase.svg" alt="java" />
                </div>
                <p>Supabase</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Strapi.svg" alt="Strapi" />
                </div>
                <p>Strapi</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./GitHub.png" alt="GitHub" />
                </div>
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="SkillsSet">
            <h3>Design</h3>
            <div className="SkillsRow">
              <div className="skill">
                <div className="skillImage">
                  <img src="./illustrator.png" alt="illustrator" />
                </div>
                <p>Illustrator</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./photoshop.png" alt="photoshop" />
                </div>
                <p>Photoshop</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Figma.png" alt="Figma" />
                </div>
                <p>Figma</p>
              </div>
              <div className="skill">
                <div className="skillImage">
                  <img src="./Spline.png" alt="Spline" />
                </div>
                <p>Spline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSkills
