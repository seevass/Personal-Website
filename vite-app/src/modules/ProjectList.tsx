import React from 'react';
import './ProjectList.css';
import { Text, NavLink } from '@mantine/core';
import { getRandomHoverColorNoYellow } from '../helpers/colorUtils';

type ProjectListTuple = [href: string, label: string];

interface ProjectListProps {
    title: string | undefined;
    links: ProjectListTuple[];
}

const ProjectList: React.FC<ProjectListProps> = ({ title, links }) => {
    return (
        <div>
            <Text className='projectLinkTitle'>{title}</Text>
            {links.map(([href, label]) => (
                <NavLink
                    className='projectLink'
                    style={{ color: getRandomHoverColorNoYellow() }}
                    href={href}
                    label={label}
                />
            ))}
        </div>
    );
};

export default ProjectList;
