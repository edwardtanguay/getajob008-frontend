import { useContext } from 'react';
import { AppContext } from '../appContext';
import { IJob, ISkill } from '../interfaces';

interface IProps {
	job: IJob;
}

export const JobDisplay = ({ job }: IProps) => {
	const { handleDeleteJob, handleEditJob } = useContext(AppContext);

	return (
		<div className="job" key={job.id}>
			<div className="title">
				<a href={job.url} target="_blank">
					{job.title}
				</a>
			</div>
			<div className="company">{job.company}</div>
			<div className="todo">NEXT TASK: {job.todo}</div>
			<div className="description">{job.description}</div>
			<div className="skills">
				{job.skills.map((skill: ISkill, i: number) => {
					return (
						<div key={i}>
							{skill.name ? (
								<div className="skill found">
									<div className="name">
										<a href={skill.url} target="_blank">
											{skill.name}
										</a>{' '}
										- {skill.description}
									</div>
								</div>
							) : (
								<div className="skill missing">
									<div className="name">
										<a
											href={`https://www.google.com/search?q=${skill.idCode}+web+development`}
											target="_blank"
										>
											{skill.idCode}
										</a>{' '}
										- ADD TO BACKEND:
										\src\data\skillInfos.json
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className="managePanel">
				<button className="edit"onClick={() => handleEditJob(job)}>Edit</button>
				<button className="delete" onClick={() => handleDeleteJob(job)}>Delete</button>
			</div>
		</div>
	);
};
