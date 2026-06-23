import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPhp,
  SiJquery,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiWordpress,
  SiFigma,
} from 'react-icons/si'
import SectionHeading from './SectionHeading'

const skills = [
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'PHP', Icon: SiPhp },
  { name: 'jQuery', Icon: SiJquery },
  { name: 'REST / JWT', Icon: SiJsonwebtokens },
  { name: 'Git', Icon: SiGit },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'WordPress', Icon: SiWordpress },
  { name: 'Figma', Icon: SiFigma },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line/60">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Stack" title="Skills & tools" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(({ name, Icon }) => (
            <li
              key={name}
              className="group flex items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3 transition-colors hover:border-accent/50"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-fg"
                aria-hidden="true"
              />
              <span className="text-sm text-fg">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
