import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou o Guilherme Miserski</Name>
        <Function>FullStack Developer</Function>
        <Intro>Estou cursando Análise e desenvolvimento de sistemas,
           já tenho conhecimento em algumas linguagens e frameworks como JS, HTML, CSS e ReactJS.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="assets/avatar.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}