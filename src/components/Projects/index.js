import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to desktop apps. From software to hardware-based. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Web Projects</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Web Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'desktop app' ?
            <ToggleButton active value="desktop app" onClick={() => setToggle('desktop app')}>Desktop App Projects</ToggleButton>
            :
            <ToggleButton value="desktop app" onClick={() => setToggle('desktop app')}>Desktop App Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'iot project' ?
            <ToggleButton active value="iot project" onClick={() => setToggle('iot project')}>IoT Projects</ToggleButton>
            :
            <ToggleButton value="iot project" onClick={() => setToggle('iot project')}>IoT Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning Projects</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning Projects</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects;