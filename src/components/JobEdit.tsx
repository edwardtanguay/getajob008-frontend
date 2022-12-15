import { IJob } from '../interfaces';

interface IProps {
	job: IJob;
}

export const JobEdit = ({job}:IProps) => {
	return <div>editing job "{job.title}"</div>;
};
