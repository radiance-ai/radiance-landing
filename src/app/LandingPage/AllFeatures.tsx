import { T } from '@/src/components/ui/Typography';
import TaskIcon from 'lucide-react/dist/esm/icons/file';
import TeamIcon from 'lucide-react/dist/esm/icons/users';
import ProjectIcon from 'lucide-react/dist/esm/icons/layers';
import ResourceIcon from 'lucide-react/dist/esm/icons/book';
import RiskIcon from 'lucide-react/dist/esm/icons/traffic-cone';

const features = [
    {
        name: 'Text to Image Generation',
        description:
            'Generate product images from text descriptions using advanced AI models.',
        icon: <TaskIcon className="group-hover:-8" />,
    },
    {
        name: 'Style Transfer in Images',
        description: 'Apply artistic styles to images using our AI-powered style transfer model.',

        icon: <TeamIcon className="group-hover:-8" />,
    },
    {
        name: 'Virtual Try-On Model (Marquee)',
        description: 'Try on clothes virtually and visualize how they fit on various human models.',
        icon: <ProjectIcon className="group-hover:-8" />,
    },
    {
        name: 'Material Suggestions',
        description:
            'Get suggestions for cloth materials based on AI analysis and user preferences.',
        icon: <ResourceIcon className="group-hover:-8" />,
    },
    {
        name: 'Fitting Recommendations',
        description:
            'Receive recommendations on fitting based on the selected cloth material and style.',
        icon: <RiskIcon className="group-hover:-8" />,
    },
];
const AllFeatures = () => {
    return (
        <section>
            <div className="py-8 px-4 mx-auto md:container sm:pb-24 md:px-6 lg:px-6">
                <div className="mb-8 lg:mb-16 max-w-3xl mx-auto  w-full">
                    <div className=" flex items-center justify-start md:justify-center w-full">
                        <div className="mb-4 border border-gray-300 bg-muted dark:bg-slate-800 dark:border-gray-700 rounded-lg shadow-sm px-2 py-[2px]">
                            <T.Small className="text-gray-600 dark:text-slate-400">
                                Features
                            </T.Small>
                        </div>
                    </div>
                    <h2 className="mb-5 text-4xl leading-[44px] md:text-center  font-semibold text-gray-900 dark:text-white">
                        Workflows
                    </h2>
                    <p className="text-gray-500 sm:text-xl sm:leading-[30px] md:text-center dark:text-slate-400">
                        What are the diffrent types of images that can be generated using our diffrent products.
                    </p>
                </div>
                <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {features.map((feature) => {
                        return (
                            <div key={feature.name} className="group">
                                <div className="flex items-center justify-center border border-gray-300 dark:border-slate-700 bg-muted group-hover:bg-gray-50 group-hover:shadow-xl dark:bg-slate-800 group-hover:dark:bg-gray-700 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900">
                                    {feature.icon}
                                </div>
                                <T.H3 className="mb-2 mt-5 tracking-normal text-xl leading-[30px] font-bold dark:text-slate-50">
                                    {feature.name}
                                </T.H3>
                                <T.P className="font-normal text-gray-600 dark:text-slate-400">
                                    {feature.description}
                                </T.P>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllFeatures;
