import { useContext } from 'react';
import { AppContext } from '../appContext';
import { JobDisplay } from '../components/JobDisplay';
import { IJob, ISkill } from '../interfaces';

export const PageJobs = () => {
	const { jobs, handleDeleteJob } = useContext(AppContext);

	return (
		<div className="page pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job: IJob) => {
					return (
						<JobDisplay job={job} />
					);
				})}
			</div>
		</div>
	);
};
