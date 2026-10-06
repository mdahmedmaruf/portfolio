import portrait3 from '../assets/portrait-3.jpg'
import { projects } from '../data'

export default function ProjectCard({
    project,
}: {
    project: (typeof projects)[number]
}) {
    return (
        <article className={`project-card project-${project.variant}`}>
            <div className='project-meta'>
                <span>{project.number}</span>
                <span>{project.type}</span>
            </div>
            <div className='project-visual'>
                {project.variant === 'code' && (
                    <div
                        className='code-window'
                        aria-label='FastAPI code sample'
                    >
                        <div className='code-bar'>
                            <i />
                            <i />
                            <i />
                            <span>main.py</span>
                        </div>
                        <code>
                            <b>@app.get</b>(&quot;/ideas/{'{id}'}&quot;)
                            <br />
                            <em>async def</em> build_something_great():
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return {'{ '}
                            <strong>&quot;status&quot;</strong>:
                            &quot;ready&quot; {'}'}
                        </code>
                        <small>200&nbsp;&nbsp; Response in 42ms</small>
                    </div>
                )}
                {project.variant === 'metric' && (
                    <div className='metric-display'>
                        <strong>72</strong>
                        <span>
                            problems
                            <br />
                            solved
                        </span>
                    </div>
                )}
                {project.variant === 'image' && (
                    <img src={portrait3} alt='Ahmed working at his desk' />
                )}
            </div>
            <div className='project-copy'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tag-row'>
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}
