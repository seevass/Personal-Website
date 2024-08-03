import React from 'react';
import './ProjectList.css';
import { Stack, Text, NavLink } from '@mantine/core';

type ProjectListTuple = [href: string, label: string];

interface ProjectListProps {
    title: string | undefined;
    links: ProjectListTuple[];
}

const ProjectList: React.FC<ProjectListProps> = ({ title, links }) => {
    return (
        <div>
            <Text>{title}</Text>
            <Stack>
                {links.map(([href, label]) => (
                    <NavLink className='projectLink' href={href} label={label} />
                ))}
            </Stack>
        </div>
    );
};

export default ProjectList;